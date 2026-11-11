import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import invitationData from "../config/invitationData";

const ASSET_BASE =
  "https://inviteutsav.com/wp-content/themes/inviteutsav/assets/templates/siyaram-raghukul/images";

const ParallaxLayer = ({ scrollYProgress, desktop, mobile, speed = 0.2, className = "" }) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -180 * speed]);

  return (
    <motion.picture
      style={{ y }}
      className={`pointer-events-none absolute ${className}`}
    >
      <source
        media="(min-width: 1024px)"
        srcSet={`${ASSET_BASE}/${desktop}`}
      />
      <img
        src={`${ASSET_BASE}/${mobile || desktop}`}
        alt=""
        draggable="false"
        className="h-full w-full select-none object-fill"
      />
    </motion.picture>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#e9c69c]"
      aria-label="Wedding invitation"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#f3d5ad] via-[#e9c59b] to-[#b97855]" />

      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-sky-desktop.webp"
        mobile="backgrounds/hero-sky-mobile.webp"
        speed={0.02}
        className="inset-0 z-0"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-sun-desktop.webp"
        mobile="backgrounds/hero-sun-mobile.webp"
        speed={0.12}
        className="inset-0 z-10"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-mountain-desktop.webp"
        mobile="backgrounds/hero-mountain-mobile.webp"
        speed={0.42}
        className="inset-0 z-20"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-cloud-desktop.webp"
        mobile="backgrounds/hero-cloud-mobile.webp"
        speed={0.9}
        className="inset-0 z-30"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="backgrounds/hero-temple-desktop.webp"
        mobile="backgrounds/hero-temple-mobile.webp"
        speed={0.18}
        className="inset-0 z-40"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="decorations/temple-flagpole-desktop.webp"
        mobile="decorations/temple-flagpole-mobile.webp"
        speed={0.18}
        className="inset-0 z-50"
      />
      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        desktop="decorations/bells-frame-desktop.webp"
        mobile="decorations/bells-frame-mobile.webp"
        speed={0.08}
        className="inset-0 z-[60]"
      />

      <motion.img
        src={`${ASSET_BASE}/decorations/hanging-bell-a.webp`}
        alt=""
        draggable="false"
        className="pointer-events-none absolute left-[12%] top-0 z-[65] w-10 origin-top sm:left-[18%] sm:w-14"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={`${ASSET_BASE}/decorations/hanging-bell-b.webp`}
        alt=""
        draggable="false"
        className="pointer-events-none absolute right-[12%] top-0 z-[65] w-10 origin-top sm:right-[18%] sm:w-14"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute inset-x-0 top-[34%] z-[70] flex flex-col items-center px-5 text-center"
      >
        <p className="mb-5 font-serif text-xs uppercase tracking-[0.4em] text-[#633d2b] sm:text-sm">
          Together Forever
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight text-[#633d2b] sm:text-7xl md:text-8xl">
          {invitationData.couple.bride}
        </h1>
        <span className="my-2 font-serif text-4xl italic text-[#8c5037] sm:text-5xl">&amp;</span>
        <h1 className="font-serif text-5xl font-medium leading-tight text-[#633d2b] sm:text-7xl md:text-8xl">
          {invitationData.couple.groom}
        </h1>
        <p className="mt-8 font-serif text-sm tracking-[0.25em] text-[#633d2b] sm:text-base">
          {invitationData.wedding.displayDate}
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-[80] flex -translate-x-1/2 flex-col items-center gap-2 text-[#633d2b]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll to explore</span>
        <div className="h-10 w-px bg-[#633d2b]/70" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[75] h-24 bg-gradient-to-t from-[#eadcc4] to-transparent" />
    </section>
  );
};

export default Hero;
