"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

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

        // Only observe videos for lazy loading, images load immediately
        if (isVideo && videoRef.current) {
            observer.observe(videoRef.current);
        } else if (!isVideo) {
            // For images, set isInView to true immediately
            setIsInView(true);
        }

        return () => {
            if (isVideo && videoRef.current) {
                observer.unobserve(videoRef.current);
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
            <div className="bg-neutral-900 rounded-3xl p-6 shadow-xl border border-neutral-800 h-full flex flex-col">
                {/* Media Section with Padding */}
                <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] mb-6 rounded-lg overflow-hidden bg-neutral-800">
                    {/* Loading Animation */}
                    {!isMediaLoaded && (
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-2 border-neutral-600 border-t-neutral-400"></div>
                        </div>
                    )}

                    {/* Media Content */}
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={isInView ? video : undefined}
                            loop
                            autoPlay={isInView}
                            muted
                            poster={video}
                            playsInline
                            className={cn(
                                "w-full h-full object-cover rounded-lg transition-opacity duration-300",
                                isMediaLoaded ? "opacity-100" : "opacity-0"
                            )}
                            preload="none"
                            onLoadedData={handleMediaLoad}
                            onCanPlay={handleMediaLoad}
                        />
                    ) : (
                        <Image
                            ref={imageRef}
                            src={video}
                            alt={title}
                            width={400}
                            height={300}
                            className={cn(
                                "w-full h-full object-cover rounded-lg transition-opacity duration-300",
                                isMediaLoaded ? "opacity-100" : "opacity-0"
                            )}
                            onLoad={handleMediaLoad}
                            onError={handleMediaLoad}
                        />
                    )}
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col">
                    {/* Title and Links */}
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-neutral-200 leading-tight">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 ml-4">
                            {link && (
                                <Link
                                    href={link}
                                    target="_blank"
                                    className="p-2 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg transition-all duration-200"
                                    title="Live Demo"
                                >
                                    <ExternalLink size={16} />
                                </Link>
                            )}
                            {github && (
                                <Link
                                    href={github}
                                    target="_blank"
                                    className="p-2 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg transition-all duration-200"
                                    title="View Code"
                                >
                                    <Github size={16} />
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
                        {description}
                    </p>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, tagIndex) => (
                                <motion.span
                                    key={tag}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: index * 0.05 + tagIndex * 0.1,
                                        duration: 0.3,
                                    }}
                                    className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-md border border-neutral-700 hover:border-neutral-600 transition-colors duration-200"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
