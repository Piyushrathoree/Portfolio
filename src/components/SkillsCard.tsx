import React from "react";
import { cn } from "@/lib/utils";
interface SkillsCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    tags: string[];
}
const SkillsCard = ({
    icon,
    title,
    description,
    className,
    tags,
}: SkillsCardProps) => {
    return (
        <div
            className={cn(
                "flex gap-3 sm:gap-5 p-3 sm:p-4 rounded-lg bg-transparent border border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-800 duration-300 hover:scale-102 max-md:border-neutral-800 w-full min-w-0",
                className
            )}
        >
            <div className="flex items-start justify-center h-fit mt-2 bg-neutral-800/50 p-1 rounded-lg flex-shrink-0">
                {icon}
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="text-base sm:text-lg font-bold text-neutral-200 break-words">
                    {title}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 break-words leading-relaxed">
                    {description}
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                    {tags.map((tag) => (
                        <div
                            key={tag}
                            className="text-xs text-neutral-300 bg-neutral-800/50 px-2 py-1 rounded-full whitespace-nowrap"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
