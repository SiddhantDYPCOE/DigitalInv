

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import invitationData from "../config/invitationData";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const InvitationDetails = () => {
  const sectionRef = useRef(null);

  const isVisible = useInView(sectionRef, {
    once: true,
    amount: 0.2
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[850px] items-center justify-center overflow-hidden bg-[#eee0c8] px-5 py-24"
    >
      {/* Garden background */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`${ASSET_BASE}/backgrounds/garden-bridge-desktop.webp`}
          />

          <img
            src={`${ASSET_BASE}/backgrounds/garden-bridge-mobile.webp`}
            alt=""
            className="h-full w-full object-cover"
            draggable="false"
          />
        </picture>

        <div className="absolute inset-0 bg-[#f5e9d7]/55" />
      </div>

      {/* Main invitation panel */}
      <motion.div
        initial={{ opacity: 0, y: 90, scale: 0.95 }}
        animate={
          isVisible
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 90, scale: 0.95 }
        }
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl border border-[#a9855d]/60 bg-[#f8eddb]/95 px-7 py-14 text-center shadow-[0_20px_70px_rgba(74,45,27,0.18)] sm:px-16 sm:py-16"
      >
        {/* Inner border */}
        <div className="pointer-events-none absolute inset-3 border border-[#b99a75]/50" />

        {/* Ganpati illustration */}
        <motion.img
          src={`${ASSET_BASE}/decorations/ganpati-icon-mobile.webp`}
          alt="Ganpati"
          className="relative mx-auto mb-7 h-20 w-20 object-contain sm:h-24 sm:w-24"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Sanskrit invocation */}
        <p className="relative font-serif text-base leading-8 text-[#825a3e] sm:text-lg">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[#b18b69]" />

        {/* Bride's family */}
        <p className="font-serif text-sm leading-7 text-[#795b46] sm:text-base">
          {invitationData.family.brideFamily}
        </p>

        <p className="mx-auto mt-5 max-w-lg font-serif text-base italic leading-8 text-[#8c6a50] sm:text-lg">
          With joy and the blessings of our elders, we invite you to celebrate
          the wedding of
        </p>

        {/* Couple names */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-serif text-5xl text-[#633d2b] sm:text-7xl"
        >
          {invitationData.couple.bride}
        </motion.h2>

        <p className="my-3 font-serif text-3xl italic text-[#ad815c]">
          &
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-serif text-5xl text-[#633d2b] sm:text-7xl"
        >
          {invitationData.couple.groom}
        </motion.h2>

        {/* Groom's family */}
        <p className="mt-8 font-serif text-xs uppercase tracking-[0.25em] text-[#9b795d]">
          Beloved son of
        </p>

        <p className="mt-3 font-serif text-sm leading-7 text-[#795b46] sm:text-base">
          {invitationData.family.groomFamily}
        </p>

        <div className="mx-auto mt-8 h-px w-20 bg-[#b18b69]" />

        <p className="mt-7 font-serif text-sm italic tracking-wider text-[#92735d]">
          Together with our families, we welcome you
        </p>
      </motion.div>

      {/* Decorative bottom flourish */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 font-serif text-5xl text-[#9b795d]/70">
        ❧
      </div>
    </section>
  );
};

export default InvitationDetails;
