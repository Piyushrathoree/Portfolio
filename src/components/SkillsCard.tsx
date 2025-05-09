import React from 'react'
import { cn } from '@/lib/utils'
interface SkillsCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    tags: string[];
}
const SkillsCard = ({ icon, title, description, className, tags }: SkillsCardProps) => {
  return (
    <div className={cn("flex  gap-5 p-4 rounded-lg bg-transparent border border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-800 duration-300 hover:scale-102 max-md:border-neutral-800 ", className)}>
        <div className="flex items-start justify-center h-fit mt-2 bg-neutral-800/50 p-1 rounded-lg">
            {icon}
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='text-lg font-bold text-neutral-200'>{title}</div>
            <div className='text-sm text-neutral-400'>{description}</div>
            <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <div key={tag} className='text-xs text-neutral-300 bg-neutral-800/50 px-2 py-1 rounded-full'>{tag}</div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default SkillsCard