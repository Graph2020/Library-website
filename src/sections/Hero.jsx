import Button from "../components/Button";
import { spansImages } from "../consts/index";
const Hero = () => {
  return (
    <section className="page-container flex overflow-x-hidden bg-[url('/main-bg.png')]">
      <div className="flex h-full w-full flex-col items-start gap-5 md:flex-row md:items-center md:justify-center">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col gap-5">
            <h1 className="title-text mt-20 bg-linear-to-r from-[#b97d5d] via-[#4c4946] to-[#05242e] bg-clip-text text-transparent">
              Join the ultimate tech book club
            </h1>
            <p className="text-base text-gray-600 sm:text-xl md:w-lg md:text-2xl">
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <Button text="Review membership options" />

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
              <div className="flex flex-col gap-1">
                <p>Imagine 5 stars here</p>
                <p>Some text here</p>
              </div>
            </div>
          </div>
          <img
            src="/hero-image.png"
            alt="Hero"
            className="h-full w-full rounded-md object-cover md:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
