import ContactForm from "@/components/ContactForm";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import {
    GithubIcon,
    LinkedinIcon,
    Mail,
    MessageCircle,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
    const socials = [
        {
            name: "Twitter",
            icon: <TwitterIcon size={20} />,
            link: "https://x.com/__PiyushRathore",
        },
        {
            name: "LinkedIn",
            icon: <LinkedinIcon size={20} />,
            link: "https://linkedin.com/in/piyushrathore--",
        },
        {
            name: "GitHub",
            icon: <GithubIcon size={20} />,
            link: "https://github.com/Piyushrathoree",
        },
    ];

    return (
        <div className="contact-page-root min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-24">
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
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-200 mb-4">
                    Let&apos;s Connect
                </h1>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Have a project in mind or just want to chat? I&apos;d love
                    to hear from you. Send me a message and I&apos;ll get back
                    to you as soon as possible.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
                {/* Contact Form Section */}
                <div className="bg-neutral-900 rounded-xl p-6 md:p-8 shadow-xl border border-neutral-800 relative overflow-hidden">
                    <Particles
                        className="absolute inset-0 z-0"
                        quantity={30}
                        refresh
                    />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-neutral-800 rounded-lg">
                                <Mail size={20} className="text-neutral-300" />
                            </div>
                            <h2 className="text-xl font-semibold text-neutral-200">
                                Send Me A Message
                            </h2>
                        </div>
                        <ContactForm />
                    </div>
                </div>

                {/* Connect Section */}
                <div className="space-y-6">
                    {/* Social Links Card */}
                    <div className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800 relative overflow-hidden">
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
                                    <MessageCircle
                                        size={20}
                                        className="text-neutral-300"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-200">
                                    Connect With Me
                                </h3>
                            </div>

                            <p className="text-neutral-400 text-sm mb-6">
                                Follow me on social platforms to stay updated
                                with my latest projects and insights.
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

                    {/* Quick Info Card */}
                    <div className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-neutral-800 rounded-lg">
                                <Mail size={20} className="text-neutral-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-200">
                                Quick Contact
                            </h3>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-neutral-400">
                                    Response Time:
                                </span>
                                <span className="text-neutral-300">
                                    Within 24 hours
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-neutral-400">
                                    Location:
                                </span>
                                <span className="text-neutral-300">India</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-neutral-400">
                                    Availability:
                                </span>
                                <span className="text-green-400">
                                    Open to work
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 relative z-10">
                <p className="text-neutral-500 text-sm">
                    I&apos;m always excited to discuss new opportunities and
                    interesting projects.
                </p>
            </div>
        </div>
    );
};

export default page;
