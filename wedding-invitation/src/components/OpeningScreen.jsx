import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import invitationData from "../config/invitationData";

const OpeningScreen = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { bride, groom } = invitationData.couple;

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, 1050);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.main
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#251b19] px-5 py-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035 }}
          transition={{ duration: 0.95 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#765044_0%,_#352421_55%,_#1b1514_100%)]" />

          <motion.div
            className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-[#d6b78b]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-[#d6b78b]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="relative z-10 flex min-h-[540px] w-full max-w-md flex-col items-center justify-between border border-[#d9bd91]/60 bg-[#f4ead9] px-7 py-11 text-center shadow-2xl sm:px-12"
            initial={{ y: 55, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.15, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-3 border border-[#a17b5b]/40" />

            <motion.div
              className="text-4xl text-[#9b7055]"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              aria-hidden="true"
            >
              ❧
            </motion.div>

            <div className="relative">
              <p className="font-serif text-xs uppercase tracking-[0.38em] text-[#92735d]">
                Together with their families
              </p>
              <p className="mt-8 font-serif text-base italic text-[#8b6650] sm:text-lg">
                Request the pleasure of your presence
              </p>
              <h1 className="mt-8 break-words font-serif text-5xl leading-tight text-[#54392f]">
                {bride}
              </h1>
              <p className="my-3 font-serif text-3xl italic text-[#ad815c]">&amp;</p>
              <h2 className="break-words font-serif text-5xl leading-tight text-[#54392f]">
                {groom}
              </h2>
              <div className="mx-auto mt-8 h-px w-20 bg-[#b18b69]" />
              <p className="mt-5 font-serif text-sm tracking-[0.28em] text-[#92735d]">
                WEDDING INVITATION
              </p>
            </div>

            <motion.button
              type="button"
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative z-10 border border-[#987253] bg-[#76513f] px-9 py-3 font-serif text-sm tracking-[0.2em] text-[#fff7eb] transition-colors hover:bg-[#54392f]"
            >
              OPEN INVITATION
            </motion.button>

            <p className="font-serif text-xs italic tracking-wider text-[#a17b5b]">
              A beautiful beginning awaits
            </p>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default OpeningScreen;
