import Image from "next/image";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

export default function Home() {
  return (
    <main className="mt-14 space-y-16">
       <Header /> 
       <About />
    </main>
  );
}
