import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <main className="mt-14 space-y-16">
      <Header />
      <About />
      <Projects />
    </main>
  );
}
