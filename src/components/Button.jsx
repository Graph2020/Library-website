import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Button = ({
  text,
  bgColor = "",
  borderColor = "",
  arrow = "",
  scrollEnable = false,
}) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power3.in",
      clearProps: "transform",
      onComplete: () => {
        if (buttonRef.current) {
          buttonRef.current.classList.add(
            "transition-transform",
            "duration-500",
            "hover:translate-y-2",
          );
        }
      },
      scrollTrigger: !scrollEnable ? undefined : {},
    });
  }, []);
  return (
    <button
      ref={buttonRef}
      className={`center-elements w-fit cursor-pointer rounded-md bg-amber-50 px-4 py-3 uppercase sm:px-6 sm:py-4 sm:font-medium ${bgColor} ${borderColor} border`}
    >
      {text}
      {arrow && <span className="ml-2">{arrow}</span>}
    </button>
  );
};

export default Button;
