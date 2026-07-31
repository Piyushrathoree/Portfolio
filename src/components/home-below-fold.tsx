"use client";

import dynamic from "next/dynamic";
import { motion, easeOut } from "motion/react";

const CardDemo = dynamic(() => import("@/components/cards-demo-3"), {
  ssr: false,
});
const ShowcaseCard2 = dynamic(() => import("@/components/showcaseCard2"), {
  ssr: false,
});
const ShowcaseCard3 = dynamic(() => import("@/components/ShowcaseCard3"), {
  ssr: false,
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      ease: easeOut,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Projects = [
  {
    title: "Welth",
    description: "An AI - powered finance management platform",
    video: "/welth.mp4",
    link: "https://welth-ai-finance-app-liard.vercel.app/",
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
];

export default function HomeBelowFold() {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
            Recent Work
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Here are some of my latest projects that showcase my skills and
            passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Projects.map((project, index) => (
            <CardDemo
              key={project.title}
              title={project.title}
              description={project.description}
              video={project.video}
              link={project.link}
              github={project.github}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-4">
            Explore More
          </h2>
          <p className="text-neutral-400">
            Discover my work, skills, and connect with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ShowcaseCard3 />
          <ShowcaseCard2 />
        </div>
      </motion.div>
    </motion.div>
  );
}
