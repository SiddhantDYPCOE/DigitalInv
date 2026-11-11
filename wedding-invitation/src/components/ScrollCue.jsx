
import { useEffect, useState } from "react";
import "./ScrollCue.css";

const ScrollCue = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // The first section after the Hero is the invitation details.
    const nextSection = document.querySelector("main > :nth-child(2)");

    nextSection?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <button
      type="button"
      className={`scroll-cue ${isVisible ? "scroll-cue--visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to Continue"
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        className="scroll-cue__arrow"
        viewBox="0 0 24 30"
        width="22"
        height="27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path className="scroll-cue__arrow-first" d="M5 4l7 7 7-7" />
        <path className="scroll-cue__arrow-second" d="M5 15l7 7 7-7" />
      </svg>

      <span className="scroll-cue__text">
        Scroll to Continue
      </span>
    </button>
  );
};

export default ScrollCue;
