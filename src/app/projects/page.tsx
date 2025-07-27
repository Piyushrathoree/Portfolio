import CardDemo from "@/components/cards-demo-3";

import React from "react";

const page = () => {
    const Projects = [
        {
            title: "Welth",
            description: "An AI - powered finance management platform",
            video: "/welth.mp4",
            link: "https://welth-ai-finance-app-eight.vercel.app/",
            github: "https://github.com/Piyushrathoree/Welth-ai-finance-app",
            tags: [
                "React",
                "Typescript",
                "Tailwind",
                "Next.js",
                "Clerk",
                "Inngest",
                "arcjet",
            ],
        },

        {
            title: "MeetUP",
            description: "A video conferencing application",
            video: "/meetup.mp4",
            link: "https://meet-up-three-pi.vercel.app/",
            github: "https://github.com/Piyushrathoree/MeetUP",
            tags: [
                "React",
                "Typescript",
                "Tailwind",
                "Clerk",
                "getStream.io",
                "Next.js",
            ],
        },
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
            title: "Sofia",
            description: "An AI-powered Chat Application ",
            video: "/sofia.mp4",
            // link: "https://github.com/PiyushRathoree/",
            github: "https://github.com/Piyushrathoree/Sofia-AI",
            tags: [
                "React",
                "Tailwind",
                "Node",
                "Express",
                "MongoDB",
                "v0",
                "Gemini",
            ],
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
            github: "https://github.com/PiyushRathoree/Yt-Backend-With-Scalable-Architecture",
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
            description:
                "A microservices based subscription management system .",
            video: "/microservice.png",
            github: "https://github.com/Piyushrathoree/microservices-subscription-system",
            tags: ["Microservices", "Express", "MongoDB", "Rabbit MQ", "Node"],
        },
    ];

    return (
        <div className="flex flex-col justify-between relative mb-10 h-[180vh]">
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
        </div>
    );
};

export default page;
