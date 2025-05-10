import CardDemo from '@/components/cards-demo-3';   
import React from 'react'

const page = () => {
  const Projects = [
    {
      title: "CrewCanvas",
      description: "A canvas for your team to collaborate on projects.",
      video: "/crewcanvas.mp4",
      link: "https://crew-canvas-client.vercel.app/",
      github: "https://github.com/Piyushrathoree/CrewCanvas-client/",
    },
    {
      title: "Brainly",
      description:
        "A Second Brain application where you can save your notes, ideas, and thoughts.",
      video: "/brainly.mp4",
      link: "https://appbrainly.vercel.app/",
      github: "https://github.com/PiyushRathoree/Brainly-client",
    },
    {
      title: "VideoTube - Backend",
      description:
        "A video sharing platform like youtube  with scalable architecture.",
      video: "/videotube.jpg",
      // link: "https://github.com/PiyushRathoree/Yt-Backend-With-Scalable-Architecture",
      github:
        "https://github.com/PiyushRathoree/Yt-Backend-With-Scalable-Architecture",
    },
    {
      title: "Sofia",
      description: "An AI-powered Chat Application ",
      video: "/sofia.mp4",
      // link: "https://github.com/PiyushRathoree/",
      github: "https://github.com/Piyushrathoree/Sofia-AI",
    },

    {
      title: "Portfolio website",
      description: "My own portfolio website",
      video: "/portfolio.png",
      link: "https://piyushrathore.vercel.app/",
      github: "https://github.com/PiyushRathoree/Portfolio",
    },
  ];
  return (
    <div className="md:h-[125vh] h-[210vh]">
      <div className=" mt-24">
        <div className="text-3xl md:text-4xl font-semibold top-24 text-neutral-300 max-md:ml-4 ">
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
              />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default page 