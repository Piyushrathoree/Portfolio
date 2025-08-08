"use client";

import React from "react";
import { Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const ShowcaseCard4 = () => {
    return (
        <div className="bg-neutral-900 rounded-xl p-6 shadow-xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-neutral-700 transition-colors duration-300">
                    <Settings size={20} className="text-neutral-300" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-200">
                    Skills & Tools
                </h3>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Discover the technologies, tools, and frameworks I use to build
                modern applications and solutions.
            </p>

            {/* Action */}
            <Link
                href="/skills"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-neutral-100 font-medium transition-colors duration-300 group-hover:gap-3"
            >
                Explore Skills
                <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>

            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 to-neutral-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>
    );
};

export default ShowcaseCard4;
