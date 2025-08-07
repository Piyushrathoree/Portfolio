"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, Share } from "lucide-react";
import { motion } from "framer-motion";
interface CardProps {
    title: string;
    description: string;
    video: string;
    link?: string;
    github?: string;
    tags?: string[];
    index?: number;
}

export default function CardDemo({
    title,
    description,
    video,
    link,
    github,
    tags,
    index = 0,
}: CardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isMediaLoaded, setIsMediaLoaded] = useState(false);

    // Check if the media is a video or image
    const isVideo =
        video.includes(".mp4") ||
        video.includes(".webm") ||
        video.includes(".mov");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        );

        const mediaRef = isVideo ? videoRef.current : imageRef.current;
        if (mediaRef) {
            observer.observe(mediaRef);
        }

        return () => {
            if (mediaRef) {
                observer.unobserve(mediaRef);
            }
        };
    }, [isVideo]);

    const handleMediaLoad = () => {
        setIsMediaLoaded(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
            }}
        >
            <Card className="bg-neutral-900 border-none h-full">
                <div className="h-full w-full flex flex-col justify-start gap-3 relative">
                    <div className="relative h-[20vh] rounded-xl overflow-hidden mb-3">
                        {/* Loading Animation */}
                        {!isMediaLoaded && (
                            <div className="absolute inset-0 bg-neutral-800 rounded-xl flex items-center justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-2 border-neutral-600 border-t-neutral-400"></div>
                            </div>
                        )}

                        {/* Render Video or Image based on file type */}
                        {isVideo ? (
                            <video
                                ref={videoRef}
                                src={isInView ? video : undefined}
                                loop
                                autoPlay={isInView}
                                muted
                                poster={video}
                                className={cn(
                                    "h-[20vh] object-cover rounded-xl shadow-xl transition-opacity duration-300",
                                    isMediaLoaded ? "opacity-100" : "opacity-0"
                                )}
                                preload="none"
                                onLoadedData={handleMediaLoad}
                                onCanPlay={handleMediaLoad}
                            />
                        ) : (
                            <img
                                ref={imageRef}
                                src={isInView ? video : undefined}
                                alt={title}
                                className={cn(
                                    "h-[20vh] w-full object-cover rounded-xl shadow-xl transition-opacity duration-300",
                                    isMediaLoaded ? "opacity-100" : "opacity-0"
                                )}
                                onLoad={handleMediaLoad}
                                onError={handleMediaLoad}
                            />
                        )}
                    </div>

                    <div className="flex flex-col justify-between ml-1">
                        <div className="flex items-center justify-between -mt-5">
                            <CardTitle className="text-neutral-200">
                                {title}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                                {link && (
                                    <Link
                                        href={link}
                                        target="_blank"
                                        className="text-neutral-400 hover:text-neutral-200 transition-all duration-300 pr-4 pb-[2px]"
                                    >
                                        <Share size={16} />
                                    </Link>
                                )}
                                {github && (
                                    <Link
                                        href={github}
                                        target="_blank"
                                        className="text-neutral-400 hover:text-neutral-200 transition-all duration-300 pr-4 pb-[2px]"
                                    >
                                        <Github size={16} />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <CardDescription className="text-neutral-400 border-t border-neutral-800 pt-2">
                            {description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4 bottom-2">
                            {tags?.map((tag) => (
                                <div
                                    key={tag}
                                    className="bg-neutral-800 text-neutral-400 px-2 py-1 rounded text-xs font-medium hover:text-neutral-300 duration-300"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "max-w-sm w-full mx-auto p-4 rounded-xl shadow shadow-neutral-600 ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-lg font-semibold text-gray-800 dark:text-white py-2",
                className
            )}
        >
            {children}
        </h3>
    );
};

export const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[15rem] md:h-[20rem] rounded-xl ",
                className,
                showGradient &&
                    "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};
