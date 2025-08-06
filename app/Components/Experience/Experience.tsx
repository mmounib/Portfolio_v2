export default function Experience() {
  const experiences = [
    {
      period: "Sep 2024 - Present",
      location: "Remote - Freelance",
      position: "Full Stack Developer",
      company: "Upwork",
      description:
      "- Delivering high-quality projects using React.js, Next.js, React Native and TailwindCSS",
    },
    {
      period: "May 2025 - August 2025",
      location: "Casablanca, Morocco - Full Time",
      position: "Full Stack Engineer",
      company: "Cora Tech",
      description:
        "- Providing API documentation and UI solutions using no-code / low-code features on Bitrix24 Platform.\n- Integrating backend solutions using Express.js and REST APIs.",
    },
    {
      period: "Feb 2025 - May 2025",
      location: "Remote - Freelance",
      position: "Front End Developer",
      company: "Samurai Saga",
      description:
        "- Developed and optimized interactive components using React.js, React Native, Next.js and TailwindCSS.\n- Styling and developing mobile interface of chargeFun using React Native and Expo ensuring code maintainability.\n- Provided design suggestions in terms of UI/UX Principles.\n- Ensured code maintainability & performance.",
    },
    {
      period: "Dec 2023 - June 2024",
      location: "Casablanca, Morocco - Internship",
      position: "Front End Developer",
      company: "MLnetworks",
      description:
        "- Designed and developed product dashboards using Next.js, TailwindCSS and hubspot CRM.\n- Worked and managed external API's from backend endpoints.\n- Debugging/Reviewing code for optimal development.",
    },
  ];

  return (
    <section className="flex flex-col gap-10" id="about">
      <div className="flex items-center justify-center gap-3 max-sm:gap-0">
        <span className="w-[100px] bg-primary h-[1px]"></span>
        <h3 className="text-accent text-center text-xl max-sm:text-lg font-bold">
          My Career Journey
        </h3>
        <span className="w-[100px] bg-primary h-[1px]"></span>
      </div>
      <div className="max-w-6xl mx-auto max-sm:max-w-full">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex gap-14 w-full py-6 max-sm:gap-9 max-sm:py-2 max-md:flex-col">
              <div className="flex flex-col gap-1 w-80 flex-shrink-0 max-sm:text-center">
                <span className="font-semibold text-xl max-sm:text-lg">{exp.period}</span>
                <span className="text-muted text-sm">{exp.location}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-2xl max-sm:text-xl">{exp.position}</h4>
                <h4 className="text-muted/60 font-semibold text-xl max-sm:text-lg">
                  {exp.company}
                </h4>
                <p className="mt-3 font-medium text-muted text-lg max-sm:text-base whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-muted/20 my-6"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
