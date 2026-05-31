import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";

const App = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <NavBar />
      <Hero />
    </main>
  );
};

export default App;
