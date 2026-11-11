
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import invitationData from "../config/invitationData";
import "./WeddingDate.css";

const HEART_CLIP =
  "polygon(50% 94%, 42% 88%, 30% 79%, 18% 67%, 8% 53%, 4% 39%, 5% 25%, 12% 12%, 24% 5%, 37% 7%, 50% 17%, 63% 7%, 76% 5%, 88% 12%, 95% 25%, 96% 39%, 92% 53%, 82% 67%, 70% 79%, 58% 88%)";

function ScratchHeart({ label, value, index }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Gold scratch coating
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f8df9b");
    gradient.addColorStop(0.45, "#d9ad5b");
    gradient.addColorStop(1, "#f4d58c");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative texture
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 1.8 + 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.fill();
    }

    ctx.fillStyle = "#704a24";
    ctx.textAlign = "center";
    ctx.font = "600 17px Georgia";
    ctx.fillText("SCRATCH", width / 2, height / 2 - 5);

    ctx.font = "12px Arial";
    ctx.fillText("TO REVEAL", width / 2, height / 2 + 17);
  }, []);

  const getPosition = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const scratch = (event) => {
    if (!isDrawing.current || revealed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getPosition(event);

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 23, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pixels = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    let transparent = 0;
    let total = 0;

    // Sample pixels to keep the check lightweight
    for (let i = 3; i < pixels.length; i += 4 * 12) {
      total++;
      if (pixels[i] < 50) transparent++;
    }

    if (transparent / total > 0.38) {
      setRevealed(true);
    }
  };

  const handlePointerDown = (event) => {
    if (revealed) return;

    isDrawing.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    scratch(event);
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
  };

  return (
    <motion.div
      className="scratch-heart"
      style={{ clipPath: HEART_CLIP }}
      initial={{ opacity: 0, y: 35, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div className="scratch-heart__revealed">
        <span className="scratch-heart__label">{label}</span>
        <strong>{value}</strong>
      </div>

      <canvas
        ref={canvasRef}
        width={320}
        height={280}
        className={`scratch-heart__canvas ${
          revealed ? "scratch-heart__canvas--removed" : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={scratch}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-label={`Scratch to reveal ${label}`}
      />
    </motion.div>
  );
}

export default function WeddingDate() {
  const [year, month, day] = invitationData.wedding.date
    .split("-")
    .map(Number);

  const monthName = new Date(year, month - 1, 1)
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  const dateParts = [
    { label: "Day", value: String(day).padStart(2, "0") },
    { label: "Month", value: monthName },
    { label: "Year", value: String(year) },
  ];

  return (
    <section className="wedding-date-section">
      <div className="wedding-date-section__ornament">✦</div>

      <motion.div
        className="wedding-date-section__content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="wedding-date-section__eyebrow">
          A Date To Remember
        </p>

        <h2 className="wedding-date-section__heading">
          Save The Date
        </h2>

        <div className="wedding-date-section__divider">
          <span />
          ✧
          <span />
        </div>

        <div className="wedding-date-section__hearts">
          {dateParts.map((part, index) => (
            <ScratchHeart
              key={part.label}
              label={part.label}
              value={part.value}
              index={index}
            />
          ))}
        </div>

        <p className="wedding-date-section__hint">
          Scratch each heart to reveal the date ❤️
        </p>

        <p className="wedding-date-section__message">
          Mark your calendars — our forever begins on this joyous day,
          and we would be honoured to have you by our side.
        </p>
      </motion.div>
    </section>
  );
}
