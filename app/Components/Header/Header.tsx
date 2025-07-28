"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([line1Ref.current, line2Ref.current], { scaleX: 0, transformOrigin: "left center" });
      gsap.set(text1Ref.current, { y: 100 });
      gsap.set(text2Ref.current, { y: -100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to([line1Ref.current, line2Ref.current], {
        scaleX: 1,
        duration: 1.6,
        ease: "power2.out",
        stagger: 0.8
      })
      .to([text1Ref.current, text2Ref.current], {
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.9
      }, "-=0.8");

    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="mt-14 flex flex-col w-full h-full gap-16 max-sm:gap-10">
      <div className="flex justify-end items-center max-sm overflow-hidden">
        <span ref={line1Ref} className="flex-[0.2] bg-secondary/50 h-[1px] max-sm:flex-[0.4]"></span>
        <h3 ref={text1Ref} className="text-2xl text-muted/50 ml-4 max-sm:text-xl">I am Mouad</h3>
      </div>
      <h1 className="max-w-4xl leading-16 max-sm:leading-10 max-sm:max-w-full">
        Aspiring{" "}
        <b className="font-extrabold text-secondary">Full Stack Engineer</b> who
        loves to solve complex problems and create elegant solutions through
        code
      </h1>
      <div className="flex justify-end items-center max-sm:flex-col overflow-hidden">
        <span ref={line2Ref} className="flex-1 bg-secondary/30 h-[1px]"></span>
        <h3 ref={text2Ref} className="text-lg max-w-lg text-muted/50 ml-4">
          I love building products that work well and feel right, from smooth
          frontends and great UI/UX designs.
        </h3>
      </div>
      <div className="flex justify-between items-center w-full max-sm:flex-col max-sm:gap-7">
        <div className="flex gap-6 max-sm:gap-4 uppercase text-muted/60 text-xl">
          <Link
            href={"https://www.upwork.com/freelancers/~01882ef75fd23742cf"}
            target="_blank"
            className="hover:text-muted"
          >
            Upwork
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mouadmounib"}
            target="_blank"
            className="hover:text-muted"
          >
            Linkedin
          </Link>
          <Link
            href={"https://github.com/mmounib"}
            target="_blank"
            className="hover:text-muted"
          >
            Github
          </Link>
          <Link href={""} target="_blank" className="hover:text-muted">
            Email
          </Link>
        </div>
        <Link
          href="/Mouad_Mounib.pdf"
          target="_blank"
          className="text-black font-medium rounded-full py-3 px-6 bg-secondary hover:bg-secondary/80 text-xl max-sm:w-full max-sm:text-center"
        >
          Download CV
        </Link>
      </div>
    </header>
  );
}
