
import useScrollReveal from "../hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  once = true
}) => {
  const { elementRef, isVisible } = useScrollReveal({
    threshold,
    once
  });

  return (
    <div
      ref={elementRef}
      className={`
        reveal
        ${animation}
        ${isVisible ? "is-visible" : ""}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
