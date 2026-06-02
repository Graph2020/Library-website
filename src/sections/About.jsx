import { IoCheckmarkSharp } from "react-icons/io5";
import ImageAnimation from "../animation/ImageAnimation";
import LinesAnimation from "../animation/LinesAnimation";
import TitleAnimation from "../animation/TitleAnimation";
function About() {
  return (
    <section className="page-container center-elements overflow-hidden">
      <div className="center-elements flex h-full w-full scale-105 flex-col gap-5 md:flex-row md:gap-10">
        <div className="flex w-full max-w-lg flex-col items-start gap-6 md:order-1">
          <TitleAnimation typeOfSplit="lines" scrollEnabled>
            <h1 className="title-text tracking-tighter md:text-center">
              Read together grow together
            </h1>
          </TitleAnimation>

          {new Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-5 sm:text-lg">
              <span className="center-elements size-6 shrink-0 rounded-sm border border-black">
                <IoCheckmarkSharp />
              </span>
              <LinesAnimation scrollEnabled>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, optio!
                </p>
              </LinesAnimation>
            </div>
          ))}
        </div>
        <div className="w-full max-w-lg">
          <ImageAnimation scrollEnabled>
            <img className="rounded-lg" src="/some-dude.png" alt="dude reads" />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
}

export default About;
