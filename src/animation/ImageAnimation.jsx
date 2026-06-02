import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
function ImageAnimation({ children, scrollEnabled = false }) {
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: !scrollEnabled
        ? null
        : {
            trigger: imageRef.current,
            start: "top 80%",
          },
    });
  }, []);
  return <div ref={imageRef}>{children}</div>;
}

export default ImageAnimation;
