import { motion } from "framer-motion";
import invitationData from "../config/invitationData";
import WeddingDate from "./WeddingDate";
import "./CoupleSection.css";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

export default function CoupleSection() {
  const { bride, groom, introduction } = invitationData.couple;

  return (
    <section className="couple-section" id="couple">
      <div className="couple-section__background" aria-hidden="true" />

      <motion.img
        className="couple-section__mandala couple-section__mandala--left"
        src={`${ASSET_BASE}/decorations/mandala.webp`}
        alt=""
        draggable="false"
        initial={{ opacity: 0, rotate: -55, scale: 0.8 }}
        whileInView={{ opacity: 0.72, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease: "easeOut" }}
      />

      <motion.img
        className="couple-section__mandala couple-section__mandala--right"
        src={`${ASSET_BASE}/decorations/mandala.webp`}
        alt=""
        draggable="false"
        initial={{ opacity: 0, rotate: 55, scale: 0.8 }}
        whileInView={{ opacity: 0.72, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease: "easeOut" }}
      />

      <div className="couple-section__content">
        <WeddingDate />

        <motion.div
          className="couple-section__heading"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
        >
          <span>Meet the</span>
          <h2>Bride &amp; Groom</h2>
        </motion.div>

        <motion.div
          className="couple-section__card"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, delay: 0.12 }}
        >
          <div className="couple-section__card-ornament" aria-hidden="true">✦</div>

          <p className="couple-section__names">
            {bride}
            <span>&amp;</span>
            {groom}
          </p>

          <div className="couple-section__divider" aria-hidden="true">
            <span />
            ✧
            <span />
          </div>

          <p className="couple-section__message">{introduction}</p>

          <div className="couple-section__card-ornament" aria-hidden="true">✦</div>
        </motion.div>
      </div>
    </section>
  );
}
