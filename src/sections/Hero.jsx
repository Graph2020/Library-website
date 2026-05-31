import ImageAnimation from "../animation/ImageAnimation";
import LinesAnimation from "../animation/LinesAnimation";
import Button from "../components/Button";
import { spansImages } from "../consts/index";
import { FaArrowDown } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
  const heroTitleRef = useRef(null);
  const fiveStarsRef = useRef(null);
  useGSAP(() => {
    const splitTitle = new SplitText(heroTitleRef.current, {
      type: "words",
      wordsClass: "animate-gradient",
    });

    gsap.from(splitTitle.words, {
      y: -10,
      filter: "blur(10px)",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
    });

    gsap.from(".span-circle", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(fiveStarsRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
  });

  return (
    <section className="page-container flex items-center justify-center overflow-x-hidden bg-[url('/main-bg.png')] pt-48 md:pt-5">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row lg:gap-20">
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2">
          <h1 ref={heroTitleRef} className="title-text">
            Join the ultimate tech book club
          </h1>
          <LinesAnimation>
            <p className="text-base text-gray-600 sm:text-xl md:text-2xl">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
          </LinesAnimation>
          <Button text="Review membership options" arrow={<FaArrowDown />} />

          <div className="flex h-12 w-80 items-center gap-5">
            <div className="relative">
              {spansImages.map((image, i) => (
                <span
                  key={i}
                  className="span-circle bg-cover bg-center"
                  style={{
                    zIndex: i + 1,
                    backgroundImage: `url(${image.src})`,
                  }}
                />
              ))}
            </div>
            <div
              ref={fiveStarsRef}
              className="flex flex-col gap-1 text-sm font-medium"
            >
              <p>Imagine 5 stars here</p>
              <p className="text-gray-500">Some text here</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ImageAnimation>
            <img
              src="/hero-image.png"
              alt="Hero"
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
