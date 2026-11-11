
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Copy, Check, CalendarDays } from "lucide-react";
import invitationData from "../config/invitationData";
import "./Venue.css";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const getTimeLeft = (targetDate) => {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Venue = () => {
  const { venue, wedding, events } = invitationData;

  const targetDate = new Date(`${wedding.date}T00:00:00`);

  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(targetDate)
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [wedding.date]);

  const handleCopyAddress = async () => {
    if (!venue.address) return;

    try {
      await navigator.clipboard.writeText(venue.address);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy venue address:", error);
    }
  };

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const eventNames = events?.map((event) => event.name).join(" · ");

  return (
    <section className="venue-section" id="venue">
      {/* Background artwork */}
      <picture className="venue-backdrop">
        <source
          media="(min-width: 1024px)"
          srcSet={`${ASSET_BASE}/backgrounds/location-section-desktop.webp`}
        />
        <img
          src={`${ASSET_BASE}/backgrounds/location-section-mobile.webp`}
          alt=""
          draggable="false"
        />
      </picture>

      {/* Foreground countdown illustration */}
      <picture className="venue-scene">
        <source
          media="(min-width: 1024px)"
          srcSet={`${ASSET_BASE}/backgrounds/countdown-scene-desktop.webp`}
        />
        <img
          src={`${ASSET_BASE}/backgrounds/countdown-scene-mobile.webp`}
          alt=""
          draggable="false"
        />
      </picture>

      <div className="venue-content">
        <motion.div
          className="venue-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="venue-eyebrow">JOIN US IN CELEBRATION</span>
          <h2>We look forward to welcoming you</h2>
        </motion.div>

        <motion.div
          className="venue-card"
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="venue-card-decoration">✦</div>

          <span className="venue-card-label">THE CELEBRATION VENUE</span>

          <h3>{venue.name}</h3>

          {eventNames && (
            <p className="venue-event-names">{eventNames}</p>
          )}

          <div className="venue-divider">
            <span />
            <span>❖</span>
            <span />
          </div>

          <p className="venue-address">
            <MapPin size={17} />
            <span>{venue.address}</span>
          </p>

          <div className="venue-actions">
            {venue.mapUrl && (
              <a
                className="venue-directions"
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            )}

            {venue.address && (
              <button
                type="button"
                className="venue-copy"
                onClick={handleCopyAddress}
                aria-label="Copy venue address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy Address"}
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          className="countdown-wrapper"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="countdown-title">
            <CalendarDays size={19} />
            <span>COUNTING DOWN TO OUR BIG DAY</span>
          </div>

          <p className="countdown-date">{wedding.displayDate}</p>

          <div className="countdown-grid" aria-live="off">
            {countdownItems.map((item) => (
              <div className="countdown-item" key={item.label}>
                <span className="countdown-number">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="countdown-label">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="countdown-message">
            Every moment brings us closer to forever
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
