"use client";

import {
    CircleDot,
    GraduationCap,
    // HandHeart,
    MapPin,
    Download,
    Code,
    Briefcase,
    Heart,
} from "lucide-react";
import React from "react";
import ShowcaseCard3 from "@/components/ShowcaseCard3";
import ShowcaseCard4 from "@/components/ShowcaseCard4";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";

const page = () => {
    const aboutItems = [
        {
            icon: <GraduationCap size={20} className="text-neutral-300" />,
            title: "Education",
            description:
                "Currently a pre-final year student pursuing BTech in Computer Science & Engineering. Passionate about coding and building innovative projects.",
        },
        {
            icon: <Code size={20} className="text-neutral-300" />,
            title: "Technical Skills",
            description:
                "MERN Stack, Next.js, TypeScript, PostgreSQL, MongoDB, Git, DevOps, and modern web technologies.",
        },
        {
            icon: <Heart size={20} className="text-neutral-300" />,
            title: "Interests",
            description:
                "Exploring cutting-edge technologies, Web3 development, DevOps practices, and Generative AI applications.",
        },
        {
            icon: <Briefcase size={20} className="text-neutral-300" />,
            title: "Experience",
            description:
                "Full Stack Developer with expertise in backend development, API design, database architecture, and system integration.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-24">
            {/* Background Pattern */}
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] absolute inset-0 w-full h-full opacity-30"
                )}
            />

            {/* Header Section */}
            <div className="text-center mb-12 relative z-10">
                <div className="flex justify-center gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 text-sm">
                        <MapPin size={14} className="text-neutral-400" />
                        <span className="text-neutral-300">Based in India</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-full border border-neutral-800 text-sm">
                        <CircleDot size={14} className="text-green-400" />
                        <span className="text-neutral-300">Open to Work</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-neutral-200 mb-6">
                    About Me
                </h1>

                <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                    I&apos;m Piyush, a Software Engineer and Full Stack Developer
                    specializing in backend development. With a strong
                    foundation in building robust, scalable applications, I
                    excel at designing APIs, architecting databases, and
                    integrating complex systems. My expertise spans the entire
                    development lifecycle, with a focus on crafting reliable
                    backend solutions that power seamless user experiences.
                </p>

                <Link
                    href="https://drive.google.com/file/d/1G0kZXezV_wIaB9QIZpYHd8301lArlc0O/view?usp=sharing"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-6 py-3 rounded-lg transition-all duration-300 border border-neutral-700 hover:border-neutral-600"
                >
                    <Download size={16} />
                    Download Resume
                </Link>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-6 w-full mb-12 relative z-10">
                {aboutItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-neutral-800 rounded-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-200">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Skills & Tools Section */}
            <div className="w-full space-y-6 relative z-10">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-neutral-200 mb-2">
                        Skills & Tools
                    </h2>
                    <p className="text-neutral-400">
                        Technologies and tools I work with daily
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ShowcaseCard3 />
                    <ShowcaseCard4 />
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 relative z-10">
                <p className="text-neutral-500 text-sm">
                    Always excited to collaborate on interesting projects and
                    explore new technologies.
                </p>
            </div>
        </div>
    );
};

export default page;
