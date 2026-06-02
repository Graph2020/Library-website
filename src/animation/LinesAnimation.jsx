import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

function LinesAnimation({ children, scrollEnabled = false }) {
  const linesRef = useRef(null);

  useGSAP(() => {
    const splitLine = new SplitText(linesRef.current, { type: "lines" });

    gsap.from(splitLine.lines, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: !scrollEnabled
        ? null
        : {
            trigger: linesRef.current,
            start: "top 80%",
          },
    });
    return () => {
      splitLine.revert();
    };
  }, []);
  return <div ref={linesRef}>{children}</div>;
}

export default LinesAnimation;
