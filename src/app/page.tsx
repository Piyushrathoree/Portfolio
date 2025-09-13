"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/CopyMail";
import ShowcaseCard2 from "@/components/showcaseCard2";
import ShowcaseCard3 from "@/components/ShowcaseCard3";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion, easeOut } from "motion/react";
import CardDemo from "@/components/cards-demo-3";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Download, MapPin } from "lucide-react";
// import { Meteors } from "@/components/magicui/meteors";

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

export default function Home() {
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

    return (
      <div className="min-h-screenrelative">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className="absolute inset-0 h-full w-full stroke-neutral-800/30 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        />
        {/* <Meteors  className=""/> */}

        <div className="max-w-4xl mx-auto px-4 py-24 relative">
          <motion.div
            className="flex flex-col gap-8 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-neutral-100 mb-4">
                Hey, I&apos;m Piyush
              </h1>

              <div className="text-3xl md:text-3xl font-semibold text-neutral-300 mb-6 flex items-center justify-center gap-2 flex-wrap">
                A{"  "}
                <ContainerTextFlip
                  words={[
                    "Full Stack Developer",
                    "Software Engineer",
                    "Full Stack Developer",
                    "Software Engineer",
                  ]}
                  className="text-3xl md:text-4xl font-semibold shadow-none"
                />
              </div>

              <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
                I&apos;m a developer who enjoys building web applications and
                exploring new technologies. I spend most of my time crafting
                digital experiences that make a difference.
              </p>

              {/* Status Cards */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-lg border border-neutral-800">
                  <MapPin size={16} className="text-neutral-400" />
                  <span className="text-neutral-300 text-sm">India</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-neutral-800  hover:bg-neutral-900 border border-neutral-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                  <Link href="/about">About Me</Link>
                </Button>
                <Button className="bg-neutral-800 hover:bg-neutral-900 text-neutral-200 border border-neutral-700 px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                  <Download size={16} className="mr-2" />
                  <Link
                    href="https://drive.google.com/file/d/1drEBKXJ4wzrRw7JWC3HqrDcrvvi9Jbow/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </Link>
                </Button>
                <CopyEmail />
              </div>
            </motion.div>

            {/* Recent Work Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
                  Recent Work
                </h2>
                <p className="text-neutral-400 max-w-xl mx-auto">
                  Here are some of my latest projects that showcase my skills
                  and passion for development.
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

            {/* Quick Links Section */}
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
        </div>
      </div>
    );
}
