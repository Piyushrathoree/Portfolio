import CardDemo from "@/components/cards-demo-3";
import React from "react";

const page = () => {
  const Projects = [
    {
      title: "Brainly -A Second Brain ",
      description: "where you can save your notes, ideas, and thoughts.",
      video: "/brainly.mp4",
      link: "https://app-brainly-peach.vercel.app/",
      github: "https://github.com/PiyushRathoree/Brainly-client",
      tags: [
        "React",
        "Typescript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "Aceternity",
        "Redux",
      ],
    },
    {
      title: "CrewCanvas",
      description: "A canvas for your team to collaborate on projects.",
      video: "/crewcanvas.mp4",
      // link: "https://crew-canvas-client.vercel.app/",
      github: "https://github.com/Piyushrathoree/CrewCanvas-client/",
      tags: [
        "React",
        "Typescript",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "Aceternity",
      ],
    },

    {
      title: "Sofia",
      description: "An AI-powered Chat Application ",
      video: "/sofia.mp4",
      // link: "https://github.com/PiyushRathoree/",
      github: "https://github.com/Piyushrathoree/Sofia-AI",
      tags: ["React", "Tailwind", "Node", "Express", "MongoDB", "v0", "Gemini"],
    },

    {
      title: "Portfolio website",
      description: "My own portfolio website",
      video: "/portfolio.mp4",
      link: "https://piyushrathore.vercel.app/",
      github: "https://github.com/PiyushRathoree/Portfolio",
      tags: [
        "NextJS",
        "React",
        "Typescript",
        "Tailwind",
        "Framer Motion",
        "Aceternity",
        "Magic UI",
      ],
    },
    {
      title: "VideoTube - Backend",
      description: "video sharing platform with scalable architecture.",
      video: "/videotube.jpg",
      // link: "https://github.com/PiyushRathoree/Yt-Backend-With-Scalable-Architecture",
      github:
        "https://github.com/PiyushRathoree/Yt-Backend-With-Scalable-Architecture",
      tags: [
        "Node",
        "Express",
        "MongoDB",
        "Javascript",
        "Aggregation",
        "Mongoose",
      ],
    },
    {
      title: "Subscription management system",
      description: "A microservices based subscription management system .",
      video: "/videotube.jpg",

      github:
        "https://github.com/Piyushrathoree/microservices-subscription-system",
      tags: [
        "Microservices",
        "Express",
        "MongoDB",
        "Rabbit MQ",
        "Node",
      ],
    },
  ];
  return (
    <div className="lg:h-[142vh] md:h-[160vh] h-[130rem] relative mb-10">
      <div className=" mt-24 ml-3">
        <div className="text-3xl md:text-4xl font-semibold top-24 text-neutral-300 max-md:ml-4  ">
          Projects
        </div>
        <div className="h-[85vh] pr-14  bg-transparent mt-10 ">
          <div className="grid md:grid-cols-2 w-full gap-10 items-start justify-center h-full mb-10 max-md:mx-7  ">
            {Projects.map((project) => (
              <CardDemo
                key={project.title}
                title={project.title}
                description={project.description}
                video={project.video}
                link={project.link}
                github={project.github}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-32  text-sm border border-neutral-800 px-4 rounded-md py-1 -right-107  text-neutral-400 hover:text-neutral-200 hover:-translate-y-2 duration-300 hidden md:block">Live links will be available soon !!</div>
    </div>
  );
};

export default page;
