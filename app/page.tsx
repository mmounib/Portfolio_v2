"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="max-w-[75%] mx-auto pt-14 pb-4 max-sm:max-w-[95%]">
        <main className="space-y-16">
          <Header />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
