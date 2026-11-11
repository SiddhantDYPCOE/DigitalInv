
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import invitationData from "../config/invitationData";
import "./Hashtag.css";

const Hashtag = () => {
  const [copied, setCopied] = useState(false);
  const hashtag = invitationData.hashtag || "#ForeverTogether";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hashtag);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (error) {
      console.error("Unable to copy hashtag:", error);
    }
  };

  return (
    <section className="hashtag-section" id="hashtag">
      <motion.div
        className="hashtag-content"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="hashtag-heading">Our Hashtag</h2>

        <motion.button
          type="button"
          className={`hashtag-pill ${copied ? "hashtag-copied" : ""}`}
          onClick={handleCopy}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>{hashtag}</span>
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </motion.button>

        <p className="hashtag-hint" aria-live="polite">
          {copied
            ? "Copied to clipboard! ✨"
            : "Tap to copy & use it in all your posts!"}
        </p>
      </motion.div>
    </section>
  );
};

export default Hashtag;
