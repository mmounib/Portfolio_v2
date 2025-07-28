import Link from "next/link";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaUpwork } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-6 flex flex-col gap-8 max-sm:mb-3">
      <section className="bg-primary/60 rounded-2xl py-20 max-sm:py-14 flex flex-col gap-6 items-center">
        <div className="bg-secondary text-black text-xs font-medium rounded-full py-3 px-5 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
          </span>
          Available for freelance work
        </div>
        <h2 className="text-4xl max-sm:text-3xl font-bold text-center">
          Let&apos;s build something amazing together
        </h2>
        <div className="mt-10 max-sm:mt-6 flex gap-6 text-lg font-semibold max-sm:flex-col max-sm:w-[80%] max-sm:mx-auto max-sm:text-center">
          <Link
            href={"https://www.linkedin.com/in/mouadmounib"}
            target="_blank"
            className="bg-white hover:bg-muted rounded-full py-2 px-10 text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href={"https://www.upwork.com/freelancers/~01882ef75fd23742cf"}
            target="_blank"
            className="bg-white hover:bg-muted rounded-full py-2 px-10 text-primary"
          >
            Upwork
          </Link>
        </div>
        <p></p>
      </section>
      <section className="flex justify-between items-center w-full">
        <p className="text-sm">© 2025 Mouad Mounib.</p>
        <div className="flex gap-6 uppercase text-muted/60 text-xl">
          <Link
            href={"https://www.linkedin.com/in/mouadmounib"}
            target="_blank"
            className="hover:text-muted"
          >
            <FiLinkedin size={20} />
          </Link>
          <Link
            href={"https://github.com/mmounib"}
            target="_blank"
            className="hover:text-muted"
          >
            <FiGithub size={20} />
          </Link>
          <Link href={""} className="hover:text-muted">
            <FiMail size={20} />
          </Link>
          <Link
            href={"https://www.upwork.com/freelancers/~01882ef75fd23742cf"}
            target="_blank"
            className="hover:text-muted"
          >
            <FaUpwork size={25} />
          </Link>
        </div>
      </section>
    </footer>
  );
}
