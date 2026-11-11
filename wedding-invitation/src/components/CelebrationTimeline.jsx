import { motion } from "framer-motion";
import invitationData from "../config/invitationData";
import "./CelebrationTimeline.css";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const CelebrationTimeline = () => {
  const events = invitationData.events || [];

  return (
    <section className="celebration-section" id="celebrations">
      <picture className="celebration-paper" aria-hidden="true">
        <source
          media="(min-width: 1024px)"
          srcSet={`${ASSET_BASE}/backgrounds/timeline-paper-mobile.webp`}
        />
        <img
          src={`${ASSET_BASE}/backgrounds/timeline-paper-mobile.webp`}
          alt=""
          draggable="false"
        />
      </picture>

      <div className="celebration-content">
        <motion.div
          className="celebration-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="celebration-eyebrow">THE WEDDING FESTIVITIES</span>
          <h2>Our Celebrations</h2>
          <p>Save these dates, we would love to celebrate with you</p>
        </motion.div>

        <div className="celebration-events">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                className={`celebration-event ${isLeft ? "event-left" : "event-right"}`}
                key={event.id || index}
                initial={{ opacity: 0, x: isLeft ? -45 : 45, y: 18 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              >
                <div className="event-card">
                  <img
                    className="event-card-frame"
                    src={`${ASSET_BASE}/events/event-card-frame.webp`}
                    alt=""
                    draggable="false"
                  />
                  <div className="event-card-content">
                    <span className="event-date">{event.date}</span>
                    <h3>{event.name}</h3>
                    <span className="event-time">{event.time}</span>
                  </div>
                </div>

                <div className="event-information">
                  {event.description && <p className="event-description">{event.description}</p>}
                  {event.location && <span className="event-place">{event.location}</span>}
                  {event.address && <span className="event-address">{event.address}</span>}
                  {event.directionsUrl && (
                    <a className="event-directions" href={event.directionsUrl} target="_blank" rel="noreferrer">
                      <span>⌖</span> Get Directions
                    </a>
                  )}
                </div>

                <img
                  className={`event-pillar ${isLeft ? "pillar-left" : "pillar-right"}`}
                  src={`${ASSET_BASE}/decorations/pillar-ornament-${isLeft ? "left" : "right"}.webp`}
                  alt=""
                  draggable="false"
                />
                <img
                  className="event-lotus"
                  src={`${ASSET_BASE}/events/timeline-lotus-motif.webp`}
                  alt=""
                  draggable="false"
                />
              </motion.article>
            );
          })}
        </div>

        <motion.picture
          className="celebration-bottom-lotus"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <source
            media="(min-width: 1024px)"
            srcSet={`${ASSET_BASE}/decorations/lotus-ornament-desktop.webp`}
          />
          <img src={`${ASSET_BASE}/decorations/lotus-ornament-mobile.webp`} alt="" draggable="false" />
        </motion.picture>
      </div>
    </section>
  );
};

export default CelebrationTimeline;
