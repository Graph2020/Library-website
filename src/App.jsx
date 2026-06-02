import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import About from "./sections/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <NavBar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
