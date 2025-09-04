import SkillsCard from "@/components/SkillsCard";
import Image from "next/image";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Frontend = [
    {
        icon: (
            <Image
                src="/Icons/nextjs.svg"
                alt="Next.js"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Next.js",
        description: "React Framework for production grade web applications",
        tags: ["React", "App Router", "V15", "SSR"],
    },
    {
        icon: (
            <Image
                src="/Icons/react.svg"
                alt="React"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "React",
        description: "Frontend Library for Javascript",
        tags: ["React Router", "React Hooks", "Redux", "Zustand"],
    },
    {
        icon: (
            <Image
                src="/Icons/tailwind.svg"
                alt="Tailwind CSS"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
        tags: ["Responsive Design", "Utility-first", "Styling"],
    },
    {
        icon: (
            <Image
                src="/Icons/ts.svg"
                alt="Typescript"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "TypeScript",
        description:
            "Strongly Typed programming language built on top of Javascript",
        tags: ["Javascript", "Language", "Type Safety"],
    },
    {
        icon: (
            <Image
                src="/Icons/shadcn.svg"
                alt="Shadcn/ui"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "UI Libraries",
        description: "UI Libraries for styling and components",
        tags: ["Shadcn/ui", "Aceternity UI", "Magic UI"],
    },
];

const Backend = [
  {
    icon: (
      <Image
        src="/Icons/node.svg"
        alt="Node.js"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "Node.js",
    description: "Javascript runtime built on Chrome's V8 engine",
    tags: ["Javascript", "Chrome's V8 engine"],
  },
  {
    icon: (
      <Image
        src="/Icons/express.svg"
        alt="Express.js"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "Express.js",
    description: "Web application framework for Node.js",
    tags: ["http servers", "Node.js"],
  },
  {
    icon: (
      <Image
        src="/Icons/mongo.svg"
        alt="MongoDB"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "MongoDB",
    description: "NoSQL/Non-Relational Database",
    tags: ["NoSQL", "MongoDB Atlas"],
  },
  {
    icon: (
      <Image
        src="/Icons/postgres.svg"
        alt="PostgreSQL"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "PostgreSQL",
    description: "Relational Database",
    tags: ["Relational", "Neon"],
  },
  {
    icon: (
      <Image
        src="/Icons/prisma.svg"
        alt="Prisma"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "Prisma",
    description: "ORM and PostgreSQL",
    tags: ["ORM", "PostgreSQL"],
  },
  {
    icon: (
      <Image
        src="/Icons/socket.svg"
        alt="Socket.io"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "Socket.io",
    description: "Real-time communication technologies",
    tags: ["WebSockets", "WebRTC"],
  },
  {
    icon: (
      <Image
        src="/Icons/FastAPI.svg"
        alt="FastAPI"
        width={35}
        height={35}
        className="rounded-xl"
        loading="lazy"
      />
    ),
    title: "FastAPI",
    description: "Fast and high-performance web framework for building APIs with Python",
    tags: ["Python", "API", "Routing"],
  },
];

const Tools = [
    {
        icon: (
            <Image
                src="/Icons/cursor.webp"
                alt="Cursor"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Cursor",
        description: "AI-powered code editor built on top of VSCode",
        tags: ["AI", "Code Editor", "VSCode"],
    },
    {
        icon: (
            <Image
                src="/Icons/postman.svg"
                alt="Postman"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Postman",
        description: "API development and testing tool",
        tags: ["API", "Testing"],
    },
    {
        icon: (
            <Image
                src="/Icons/git.svg"
                alt="Git"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Git",
        description: "Version Control System",
        tags: ["Version Control", "Git"],
    },
    {
        icon: (
            <Image
                src="/Icons/github.svg"
                alt="Github"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Github",
        description: "User Interface for version control system",
        tags: ["Version Control", "Git"],
    },
    {
        icon: (
            <Image
                src="/Icons/vercel.svg"
                alt="v0.dev"
                width={30}
                height={30}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "v0.dev",
        description: "AI-powered UI generation tool",
        tags: ["AI", "UI Generation"],
    },
];

const Devops = [
    {
        icon: (
            <Image
                src="/Icons/docker.svg"
                alt="Docker"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Docker",
        description: "Containerization tool",
        tags: ["Containerization", "Docker"],
    },
    {
        icon: (
            <Image
                src="/Icons/vercel.svg"
                alt="Vercel"
                width={40}
                height={40}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Vercel",
        description:
            "Serverless platform for static sites and serverless functions",
        tags: ["Serverless", "Deployment"],
    },
];

const ProgrammingLanguages = [
    {
        icon: (
            <Image
                src="/Icons/js.svg"
                alt="Javascript"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Javascript",
        description: "Programming language for the web",
        tags: ["Javascript", "Language"],
    },
    {
        icon: (
            <Image
                src="/Icons/ts.svg"
                alt="Typescript"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Typescript",
        description: "Programming language for the web",
        tags: ["Typescript", "Language"],
    },
    {
        icon: (
            <Image
                src="/Icons/python.svg"
                alt="Python"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "Python",
        description: "Programming language for the web",
        tags: ["Python", "Language"],
    },
    {
        icon: (
            <Image
                src="/Icons/cpp.svg"
                alt="C++"
                width={35}
                height={35}
                className="rounded-xl"
                loading="lazy"
            />
        ),
        title: "C++",
        description: "Low level programming language",
        tags: ["C++", "Language"],
    },
];

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-[#141414] relative">
            <GridPattern
                width={32}
                height={32}
                x={-1}
                y={-1}
                strokeDasharray="4 2"
                className="absolute inset-0 h-full w-full stroke-neutral-800/30 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
            />

            <div className="max-w-4xl mx-auto px-4 py-24 relative">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Technical Expertise
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-100 mb-6">
                        Skills & Technologies
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        Building modern applications with cutting-edge
                        technologies and proven methodologies.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    <div className="text-center p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                            5+
                        </div>
                        <div className="text-sm text-neutral-400">
                            Frontend Tech
                        </div>
                    </div>
                    <div className="text-center p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                            6+
                        </div>
                        <div className="text-sm text-neutral-400">
                            Backend Tech
                        </div>
                    </div>
                    <div className="text-center p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                            5+
                        </div>
                        <div className="text-sm text-neutral-400">
                            Dev Tools
                        </div>
                    </div>
                    <div className="text-center p-6 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
                        <div className="text-3xl font-bold text-orange-400 mb-2">
                            4+
                        </div>
                        <div className="text-sm text-neutral-400">
                            Languages
                        </div>
                    </div>
                </div>

                {/* Skills Sections with Creative Layout */}
                <div className="space-y-16">
                    {/* Frontend Technologies */}
                    <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-100">
                                    Frontend Technologies
                                </h2>
                                <p className="text-neutral-400">
                                    Creating beautiful user interfaces
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Frontend.map((skill) => (
                                <SkillsCard
                                    key={skill.title}
                                    {...skill}
                                    tags={skill.tags}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-100">
                                    Backend Technologies
                                </h2>
                                <p className="text-neutral-400">
                                    Building robust server-side solutions
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Backend.map((skill) => (
                                <SkillsCard
                                    key={skill.title}
                                    {...skill}
                                    tags={skill.tags}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Two Column Layout for Smaller Categories */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Development Tools */}
                        <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl">🛠️</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-100">
                                        Development Tools
                                    </h2>
                                    <p className="text-sm text-neutral-400">
                                        Essential development utilities
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {Tools.map((skill) => (
                                    <SkillsCard
                                        key={skill.title}
                                        {...skill}
                                        tags={skill.tags}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Programming Languages */}
                        <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl">💻</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-neutral-100">
                                        Programming Languages
                                    </h2>
                                    <p className="text-sm text-neutral-400">
                                        Core programming expertise
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {ProgrammingLanguages.map((skill) => (
                                    <SkillsCard
                                        key={skill.title}
                                        {...skill}
                                        tags={skill.tags}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DevOps - Full Width */}
                    <div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-100">
                                    DevOps & Deployment
                                </h2>
                                <p className="text-neutral-400">
                                    Streamlined deployment and operations
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Devops.map((skill) => (
                                <SkillsCard
                                    key={skill.title}
                                    {...skill}
                                    tags={skill.tags}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-br from-neutral-600/10 to-neutral-900/10  rounded-3xl p-12 border border-neutral-800">
                        <h3 className="text-3xl font-bold text-neutral-100 mb-4">
                            Ready to Build Something Amazing?
                        </h3>
                        <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Let&apos;s combine these technologies to create
                            innovative solutions that make a real impact.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-neutral-800 hover:bg-neutral-900 text-neutral-200 border border-neutral-700 rounded-xl font-semibold transition-all duration-300 hover:scale-103 "
                            >
                                Start a Project
                            </a>
                            <a
                                href="/projects"
                                className="px-8 py-4 bg-neutral-800 hover:bg-neutral-900 text-neutral-200 border border-neutral-700 rounded-xl font-semibold transition-all duration-300 hover:scale-103 "
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
