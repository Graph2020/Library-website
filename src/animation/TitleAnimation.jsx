import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

function TitleAnimation({
  typeOfSplit = "words",
  children,
  scrollEnabled = false,
}) {
  const titleRef = useRef(null);

  useGSAP(() => {
    const splittedTitle = new SplitText(titleRef.current, {
      type: typeOfSplit,
    });

    gsap.from(splittedTitle[typeOfSplit], {
      y: -10,
      filter: "blur(10px)",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: !scrollEnabled
        ? null
        : {
            trigger: titleRef.current,
            start: "top 80%",
          },
    });

    return () => {
      splittedTitle.revert();
    };
  }, []);

  return <div ref={titleRef}>{children}</div>;
}

export default TitleAnimation;
