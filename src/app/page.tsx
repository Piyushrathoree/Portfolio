import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { DeferredCopyEmail } from "@/components/deferred-copy-email";
import DeferredHomeBelowFold from "@/components/deferred-home-below-fold";
import { Download, MapPin } from "lucide-react";

export const dynamic = "force-static";

export default function Home() {
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

            <div className="max-w-4xl mx-auto px-4 py-24 relative">
                <div className="flex flex-col gap-8 w-full">
                    <div className="text-center mb-12">
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
                                skipInitialAnimation
                            />
                        </div>

                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
                            I&apos;m a developer who enjoys building web applications and
                            exploring new technologies. I spend most of my time crafting
                            digital experiences that make a difference.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-lg border border-neutral-800">
                                <MapPin size={16} className="text-neutral-400" />
                                <span className="text-neutral-300 text-sm">India</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="bg-neutral-800  hover:bg-neutral-900 border border-neutral-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                                <Link href="/about">About Me</Link>
                            </Button>
                            <Button className="bg-neutral-800 hover:bg-neutral-900 text-neutral-200 border border-neutral-700 px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                                <Download size={16} className="mr-2" />
                                <Link
                                    href="https://drive.google.com/file/d/1HbPyx_dw6osV4-jZA0Xfm1Xkyu_4eq63/view?usp=sharing"
                                    target="_blank"
                                >
                                    Resume
                                </Link>
                            </Button>
                            <DeferredCopyEmail />
                        </div>
                    </div>

                    <DeferredHomeBelowFold />
                </div>
            </div>
        </div>
    );
}
