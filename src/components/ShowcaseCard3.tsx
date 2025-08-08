"use client";
import { Pen, ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const ShowcaseCard3 = () => {
    return (
        <div className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors duration-300">
                    <Pen size={20} className="text-neutral-300" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-200">
                    Projects
                </h3>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Explore my diverse projects in web development, full-stack
                applications, and innovative solutions.
            </p>

            {/* Action */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-neutral-100 font-medium transition-colors duration-300 group-hover:gap-3"
            >
                View Projects
                <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>

            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 to-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>
    );
};

export default ShowcaseCard3;
