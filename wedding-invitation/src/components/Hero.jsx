import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import invitationData from "../config/invitationData";
import "./Hero.css";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const ParallaxLayer = ({
  scrollYProgress,
  desktop,
  mobile,
  speed = 0.2,
  className = "",
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -220 * speed]);

  return (
    <motion.picture
      style={{ y }}
      className={`hero__layer ${className}`}
      aria-hidden="true"
    >
      <source
        media="(min-width: 1024px)"
        srcSet={`${ASSET_BASE}/${desktop}`}
      />
      <img
        src={`${ASSET_BASE}/${mobile || desktop}`}
        alt=""
        draggable="false"
      />
    </motion.picture>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -125]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="wedding-hero"
      aria-label="Wedding invitation"
    >
      <div className="wedding-hero__fallback" aria-hidden="true" />

      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-sky-desktop.webp"
        mobile="backgrounds/hero-sky-mobile.webp"
        speed={0.7}
        className="wedding-hero__sky"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-sun-desktop.webp"
        mobile="backgrounds/hero-sun-mobile.webp"
        speed={0.55}
        className="wedding-hero__sun"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-mountain-desktop.webp"
        mobile="backgrounds/hero-mountain-mobile.webp"
        speed={0.42}
        className="wedding-hero__mountain"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-cloud-desktop.webp"
        mobile="backgrounds/hero-cloud-mobile.webp"
        speed={0.9}
        className="wedding-hero__cloud"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-temple-desktop.webp"
        mobile="backgrounds/hero-temple-mobile.webp"
        speed={0.18}
        className="wedding-hero__temple"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="decorations/temple-flagpole-desktop.webp"
        mobile="decorations/temple-flagpole-mobile.webp"
        speed={0.18}
        className="wedding-hero__flagpole"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="decorations/bells-frame-desktop.webp"
        mobile="decorations/bells-frame-mobile.webp"
        speed={0.08}
        className="wedding-hero__bells-frame"
      />

      <motion.img
        src={`${ASSET_BASE}/decorations/hanging-bell-a.webp`}
        alt=""
        draggable="false"
        className="wedding-hero__bell wedding-hero__bell--left"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={`${ASSET_BASE}/decorations/hanging-bell-b.webp`}
        alt=""
        draggable="false"
        className="wedding-hero__bell wedding-hero__bell--right"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="wedding-hero__title"
      >
        <p className="wedding-hero__eyebrow">Together Forever</p>
        <h1>{invitationData.couple.bride}</h1>
        <span className="wedding-hero__ampersand">&amp;</span>
        <h1>{invitationData.couple.groom}</h1>
        <p className="wedding-hero__date">
          {invitationData.wedding.displayDate}
        </p>
      </motion.div>

      <motion.div
        className="wedding-hero__scroll"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <i />
      </motion.div>
    </section>
  );
};

export default Hero;
