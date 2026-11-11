
import { motion } from "framer-motion";
import invitationData from "../config/invitationData";
import "./CoupleSection.css";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

export default function CoupleSection() {
  const { bride, groom, introduction } = invitationData.couple;

  return (
    <section className="couple-section">
      {/* Background artwork */}
      <picture className="couple-section__background">
        <source
          media="(min-width: 1024px)"
          srcSet={`${ASSET_BASE}/backgrounds/couple-section-desktop.webp`}
        />
        <img
          src={`${ASSET_BASE}/backgrounds/couple-section-mobile.webp`}
          alt=""
        />
      </picture>

      {/* Left decorative mandala */}
      <motion.img
        className="couple-section__mandala couple-section__mandala--left"
        src={`${ASSET_BASE}/decorations/mandala.webp`}
        alt=""
        initial={{ opacity: 0, rotate: -70, scale: 0.7 }}
        whileInView={{ opacity: 0.75, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Right decorative mandala */}
      <motion.img
        className="couple-section__mandala couple-section__mandala--right"
        src={`${ASSET_BASE}/decorations/mandala.webp`}
        alt=""
        initial={{ opacity: 0, rotate: 70, scale: 0.7 }}
        whileInView={{ opacity: 0.75, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="couple-section__content">
        <motion.div
          className="couple-section__heading"
          initial={{ opacity: 0, y: 45, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <span>Meet the</span>
          <h2>Bride & Groom</h2>
        </motion.div>

        <motion.div
          className="couple-section__card"
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="couple-section__card-ornament">✦</div>

          <p className="couple-section__names">
            {bride}
            <span>&</span>
            {groom}
          </p>

          <div className="couple-section__divider">
            <span />
            ✧
            <span />
          </div>

          <p className="couple-section__message">
            {introduction}
          </p>

          <div className="couple-section__card-ornament">
            ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
