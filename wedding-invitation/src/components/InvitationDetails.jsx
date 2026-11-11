import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import invitationData from "../config/invitationData";
import "./InvitationDetails.css";

const InvitationDetails = () => {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="invitation-details" id="invitation">
      <motion.div
        initial={{ opacity: 0, y: 70, scale: 0.97 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="invitation-details__panel"
      >
        <div className="invitation-details__inner-border" aria-hidden="true" />

        <motion.picture
          className="invitation-details__ganpati"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <source
            media="(min-width: 1024px)"
            srcSet="https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images/decorations/ganpati-icon-desktop.webp"
          />
          <img
            src="https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images/decorations/ganpati-icon-mobile.webp"
            alt="Ganpati"
            draggable="false"
          />
        </motion.picture>

        <p className="invitation-details__prayer">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>

        <div className="invitation-details__divider" aria-hidden="true" />
        <p className="invitation-details__family">
          {invitationData.family.brideFamily}
        </p>
        <p className="invitation-details__intro">
          With joy and the blessings of our elders, we invite you to celebrate
          the wedding of
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="invitation-details__name"
        >
          {invitationData.couple.bride}
        </motion.h2>

        <p className="invitation-details__ampersand">&amp;</p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.58, duration: 0.8 }}
          className="invitation-details__name"
        >
          {invitationData.couple.groom}
        </motion.h2>

        <p className="invitation-details__family-label">Beloved son of</p>
        <p className="invitation-details__family">
          {invitationData.family.groomFamily}
        </p>
        <div className="invitation-details__divider invitation-details__divider--bottom" />
        <p className="invitation-details__closing">
          Together with our families, we welcome you
        </p>
      </motion.div>

      <div className="invitation-details__flourish" aria-hidden="true">❧</div>
    </section>
  );
};

export default InvitationDetails;
