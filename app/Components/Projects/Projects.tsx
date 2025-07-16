import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "ChargeFun",
    category: "Crypto",
    description: "Create and trade meme coins effortlessly",
    image: "/chargefun.png",
    techStack: ["Next.js", "TailwindCSS", "Shadcn", "Figma", "TypeScript"],
  },
  {
    id: 2,
    title: "MLnetworks",
    category: "Telecommunications",
    description:
      "Helping Telcos to design, operate and optimize their networks more intelligently through an end-to-end data platform",
    image: "/mlnetworks.png",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Shadcn",
      "Figma",
      "API Integration",
      "TypeScript",
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "Personal",
    description: "A website to showcase my work and skills",
    image: "/portfolio.png",
    techStack: ["NextJs", "TailwindCSS", "TypeScript", "Framer Motion", "GSAP", "Shadcn"],
  },
  {
    id: 4,
    title: "FocusFlow",
    category: "Productivity",
    description:
      "A Chrome extension that tracks your browsing behavior and identifies personal productivity patterns",
    image: "/",
    techStack: ["React", "Supabase", "Redux Toolkit", "Chrome API", "JavaScript"],
    underConstruction: true,
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col w-full h-full gap-16" id="projects">
      <div className="flex items-center justify-center gap-3">
        <span className="w-[100px] bg-primary h-[1px]"></span>
        <h3 className="text-accent text-center text-xl font-bold">
          Selected Projects
        </h3>
        <span className="w-[100px] bg-primary h-[1px]"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group/projects">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border ${
              project.underConstruction
                ? "border-yellow-500/20 bg-zinc-950/30 opacity-60"
                : "border-muted/10 bg-zinc-950"
            } rounded-lg overflow-hidden ${
              project.underConstruction
                ? "cursor-not-allowed"
                : "hover:border-primary/50 group-hover/projects:opacity-20 hover:!opacity-100 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-primary/20"
            } transition-all duration-500 group relative`}
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={900}
                className={`w-full h-[350px] object-cover transition-transform duration-300 ${
                  project.underConstruction
                    ? "grayscale blur-[2px] opacity-40"
                    : "group-hover:scale-105"
                }`}
              />
              {project.underConstruction && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center">
                  <div className="bg-black/90 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/40">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500/80 rounded-full animate-pulse"></div>
                      <span className="text-yellow-500/90 font-semibold text-sm">
                        Under Construction
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 flex items-end justify-between">
              <div className="flex-1">
                <div className="mb-4">
                  <h4
                    className={`text-2xl font-bold ${
                      project.underConstruction
                        ? "text-muted-foreground/70"
                        : ""
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold ${
                      project.underConstruction
                        ? "text-muted/40"
                        : "text-muted/60"
                    }`}
                  >
                    {project.category}
                  </p>
                </div>

                <p
                  className={`mb-6 leading-relaxed font-medium ${
                    project.underConstruction
                      ? "text-muted/50"
                      : "text-muted/80"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 font-medium text-xs rounded-full border ${
                        project.underConstruction
                          ? "bg-zinc-800/10 border-muted/5 text-muted/40"
                          : "bg-zinc-800/40 border-muted/20"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.underConstruction ? (
                <div className="font-semibold text-sm bg-yellow-500/10 text-yellow-500/70 border border-yellow-500/20 rounded-full py-2.5 px-4 cursor-not-allowed">
                  Coming Soon
                </div>
              ) : (
                <Link
                  href={"#"}
                  className="font-semibold text-sm bg-white hover:bg-white/90 text-black rounded-full py-2.5 px-4"
                >
                  Check it out
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
