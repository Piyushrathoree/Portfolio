import React from "react";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import Link from "next/link";
import { Meteors } from "./magicui/meteors";

const ShowcaseCard2 = () => {
    const socials = [
        {
            name: "Twitter",
            icon: <Twitter size={20} />,
            link: "https://x.com/__PiyushRathore",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin size={20} />,
            link: "https://linkedin.com/in/piyushrathore--",
        },
        {
            name: "GitHub",
            icon: <Github size={20} />,
            link: "https://github.com/Piyushrathoree",
        },
    ];

    return (
        <div className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800 relative overflow-hidden hover:border-neutral-700 duration-400">
            <div className="hidden md:block">
                <Meteors
                    className="absolute inset-0 z-0"
                    number={20}
                    angle={65}
                />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-neutral-800 rounded-lg">
                        <MessageCircle size={20} className="text-neutral-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-200">
                        Connect With Me
                    </h3>
                </div>

                <p className="text-neutral-400 text-sm mb-6">
                    Follow me on social platforms to stay updated with my latest
                    projects and insights.
                </p>

                <div className="flex items-center gap-4">
                    {socials.map((social) => (
                        <Link
                            href={social.link}
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-800 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700 transition-all duration-300 hover:scale-105"
                            title={social.name}
                        >
                            {social.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShowcaseCard2;
