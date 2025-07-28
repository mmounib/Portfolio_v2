import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiDotnet,
  SiExpress,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import Experience from "../Experience/Experience";

export default function About() {
  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: ".Net", icon: SiDotnet, color: "#512BD4" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  ];

  return (
    <section className="flex flex-col w-full h-full gap-16 max-sm:gap-12" id="about">
      <div className="flex items-center justify-center gap-3">
        <span className="w-[100px] bg-primary h-[1px]"></span>
        <h3 className="text-accent text-center  text-xl font-bold">
          About Me
        </h3>
        <span className="w-[100px] bg-primary h-[1px]"></span>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="max-w-5xl mx-auto text-center text-3xl font-medium max-sm:text-lg max-sm:max-w-full leading-12 max-sm:leading-9">
          Based in Casablanca, Morocco. I am A dedicated{" "}
          <span>Full Stack developer</span> with a passion for creating
          innovative solutions that can meet the needs of the clients and
          companies. With a strong foundation in both front-end and back-end
          development. I have developed solid skills to provide solutions to
          your digital needs.
        </h1>
        <div className="flex items-center justify-center gap-3">
          <span className="w-[100px] bg-primary h-[1px]"></span>
          <h3 className="text-accent text-center text-sm font-bold">
            Expert In
          </h3>
          <span className="w-[100px] bg-primary h-[1px]"></span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3 max-w-3xl max-sm:max-w-full">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <span
                key={index}
                className="border-muted/30 text-white border bg-muted/10 rounded-full py-3 px-6 font-light text-sm flex items-center gap-2"
              >
                <IconComponent
                  className="text-lg"
                  style={{ color: skill.color }}
                />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
      <Experience />
    </section>
  );
}
