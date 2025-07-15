import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col w-full h-full gap-16">
      <div className="flex justify-end items-center">
        <span className="flex-[0.2] bg-secondary/50 h-[1px]"></span>
        <h3 className="text-2xl text-muted/50 ml-4">I am Mouad</h3>
      </div>
      <h1 className="max-w-4xl leading-16">
        Aspiring{" "}
        <b className="font-extrabold text-secondary">Full Stack Engineer</b> who
        loves to solve complex problems and create elegant solutions through
        code
      </h1>
      <div className="flex justify-end items-center">
        <span className="flex-1 bg-secondary/30 h-[1px]"></span>
        <h3 className="text-lg max-w-lg text-muted/50 ml-4">
          I love building products that work well and feel right, from smooth
          frontends and great UI/UX designs.
        </h3>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6 uppercase text-muted/60 text-xl">
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
          className="text-black font-medium rounded-full py-3 px-6 bg-secondary hover:bg-secondary/80 text-xl "
        >
          Download CV
        </Link>
      </div>
    </header>
  );
}
