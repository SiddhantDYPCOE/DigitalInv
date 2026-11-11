
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OpeningScreen = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);

    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.main
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#251b19] px-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1 }}
        >
          {/* Background decoration */}
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

          {/* Invitation card */}
          <motion.div
            className="relative z-10 flex min-h-[560px] w-full max-w-md flex-col items-center justify-between border border-[#d9bd91]/60 bg-[#f4ead9] px-7 py-12 text-center shadow-2xl sm:px-12"
            initial={{ y: 60, opacity: 0, rotate: -2 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Inner border */}
            <div className="pointer-events-none absolute inset-3 border border-[#a17b5b]/40" />

            {/* Decorative top */}
            <motion.div
              className="text-4xl text-[#9b7055]"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ❧
            </motion.div>

            <div className="relative">
              <p className="font-serif text-xs uppercase tracking-[0.45em] text-[#92735d]">
                Together with their families
              </p>

              <p className="mt-9 font-serif text-lg italic text-[#8b6650]">
                Request the pleasure of your presence
              </p>

              <h1 className="mt-8 font-serif text-5xl leading-tight text-[#54392f]">
                Bride
              </h1>

              <p className="my-4 font-serif text-3xl italic text-[#ad815c]">
                &
              </p>

              <h1 className="font-serif text-5xl leading-tight text-[#54392f]">
                Groom
              </h1>

              <div className="mx-auto mt-9 h-px w-20 bg-[#b18b69]" />

              <p className="mt-5 font-serif text-sm tracking-[0.3em] text-[#92735d]">
                WEDDING INVITATION
              </p>
            </div>

            {/* Open button */}
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 border border-[#987253] bg-[#76513f] px-9 py-3 font-serif text-sm tracking-[0.2em] text-[#fff7eb] transition-colors hover:bg-[#54392f]"
            >
              OPEN INVITATION
            </motion.button>

            <p className="font-serif text-xs italic tracking-wider text-[#a17b5b]">
              A beautiful beginning awaits
            </p>
          </motion.div>
        </motion.main>
      ) : null}
    </AnimatePresence>
  );
};

export default OpeningScreen;
