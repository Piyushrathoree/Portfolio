"use client";
import { Meteors } from "@/components/magicui/meteors";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/CopyMail";
import ShowcaseCard1 from "@/components/showcaseCard1";
import ShowcaseCard2 from "@/components/showcaseCard2";
import ShowcaseCard3 from "@/components/ShowcaseCard3";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import CardDemo from "@/components/cards-demo-3";
// import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
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
    }]
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <Meteors number={40} className="absolute inset-0 " />

      <motion.div
        className="flex mt-24 md:mt-32 flex-col gap-4 w-full items-start  justify-center px-5 "
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-neutral-200"
        >
          Hey, I&apos;m Piyush,
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-neutral-200 flex items-center gap-2"
        >
          A{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContainerTextFlip
              words={[
                "Full Stack Developer",
                "Software Engineer",
                "Full Stack Developer",
                "Software Engineer",
                "Full Stack Developer",
                "Software Engineer",
                "Full Stack Developer",
                "Software Engineer",
              ]}
              className="text-3xl md:text-4xl font-bold shadow-none py-[2px] rounded-md"
            />
            {}
          </motion.span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-md text-neutral-400 w-full md:w-[69.6%]"
        >
          I&apos;m a developer who enjoys building web applications and
          exploring new technologies — basically, I spend most of my time in
          front of a screen.
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-4">
          <Button className="bg-neutral-800 text-neutral-200 border hover:scale-110 duration-300 border-neutral-700 rounded-sm hover:bg-neutral-900">
            <Link href="/about">About</Link>
          </Button>
          <CopyEmail />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-2xl text-neutral-200 font-bold mt-14 "
        >
          Recent Work
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="justify-between w-full gap-10 flex flex-col md:flex-row "
        >
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
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full h-[1px] bg-neutral-800 mt-14"
        />
        <motion.div variants={itemVariants} className="w-full">
          <ShowcaseCard1 />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-full h-[1px] bg-neutral-800 "
        />
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col md:flex-row gap-7 ml-[14px] mt-10"
        >
          <ShowcaseCard3 />
          <ShowcaseCard2 />
        </motion.div>
        <div className="mt-10" />
      </motion.div>
    </div>
  );
}
