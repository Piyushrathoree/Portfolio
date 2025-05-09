import SkillsCard from "@/components/SkillsCard";
import Image from "next/image";

const Frontend = [
  {
    icon: <Image src="/icons/nextjs.svg" alt="Next.js" width={35} height={35} className="rounded-xl" />,
    title: "Next.js",
    description: "React Framework for production grade web applications",
    tags: ["React", "App Router", "V15", "SSR"],
  },
  {
    icon: <Image src="/icons/react.svg" alt="React" width={35} height={35} className="rounded-xl" />,
    title: "React",
    description: "Frontend Library for Javascript",
    tags: ["React Router", "React Hooks", "Redux", "Zustand"],
  },
  {
    icon: <Image src="/icons/tailwind.svg" alt="Tailwind CSS" width={35} height={35} className="rounded-xl" />,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    tags: ["Responsive Design", "Utility-first", "Styling"],
  },
  {
    icon: <Image src="/icons/ts.svg" alt="Typescript" width={35} height={35} className="rounded-xl" />,
    title: "TypeScript",
    description:
      "Strongly Typed programming language built on top of Javascript",
    tags: ["Javascript", "Language", "Type Safety"],
  },
  {
    icon:<Image src="/icons/shadcn.svg" alt="Shadcn/ui" width={35} height={35} className="rounded-xl" />,
    title: "UI Libraries",
    description: "UI Libraries for styling and components",
    tags: ["Shadcn/ui", "Aceternity UI", "Magic UI"],
  },
];

const Backend = [
  {
    icon: <Image src="/icons/node.svg" alt="Node.js" width={35} height={35} className="rounded-xl" />,
    title: "Node.js",
    description: "Javascript runtime built on Chrome's V8 engine",
    tags: ["Javascript", "Runtime", "Chrome's V8 engine"],
  },
  {
    icon: <Image src="/icons/express.svg" alt="Express.js" width={35} height={35} className="rounded-xl" />,
    title: "Express.js",
    description: "Web application framework for Node.js",
    tags: ["Web Application", "Framework", "Node.js"],
  },
  {
    icon: <Image src="/icons/mongo.svg" alt="MongoDB" width={35} height={35} className="rounded-xl" />,
    title: "MongoDB",
    description: "NoSQL/Non-Relational Database",
    tags: ["NoSQL", "MongoDB Atlas"],
  },
  {
    icon: <Image src="/icons/postgres.svg" alt="PostgreSQL" width={35} height={35} className="rounded-xl" />,
    title: "PostgreSQL",
    description: "Relational Database",
    tags: ["Relational", "Neon"],
  },
  {
    icon: <Image src="/icons/prisma.svg" alt="Prisma" width={35} height={35} className="rounded-xl" />,
    title: "Prisma",
    description: "ORM  and PostgreSQL",
    tags: ["ORM", "PostgreSQL"],
  },
  {
    icon: <Image src="/icons/socket.svg" alt="Socket.io" width={35} height={35} className="rounded-xl" />,
    title: "Socket.io",
    description: "Real-time communication technologies",
    tags: ["WebSockets", "WebRTC"],
  },
];
const Tools = [
  {
    icon: <Image src="/icons/cursor.webp" alt="Cursor" width={35} height={35} className="rounded-xl" />,
    title: "Cursor",
    description: "AI-powered code editor built on top of VSCode",
    tags: ["AI", "Code Editor", "VSCode"],
  },
  {
    icon: <Image src="/icons/postman.svg" alt="Postman" width={35} height={35} className="rounded-xl" />,
    title: "Postman",
    description: "API development and testing tool",
    tags: ["API", "Testing"],
  },
  {
    icon: <Image src="/icons/git.svg" alt="Git" width={35} height={35} className="rounded-xl" />,
    title: "Git",
    description: "Version Control System",
    tags: ["Version Control", "Git"],
  },
  {
    icon: <Image src="/icons/github.svg" alt="Github" width={35} height={35} className="rounded-xl" />,
    title: "Github",
    description: "User Interface for version control system",
    tags: ["Version Control", "Git"],
  },
  {
    icon: <Image src="/icons/vercel.svg" alt="v0.dev" width={30} height={30} className="rounded-xl" />,
    title: "v0.dev",
    description: "AI-powered UI generation tool",
    tags: ["AI", "UI Generation"],
  },
];
const Devops = [
  {
    icon: <Image src="/icons/docker.svg" alt="Docker" width={35} height={35} className="rounded-xl" />,
    title: "Docker",
    description: "Containerization tool",
    tags: ["Containerization", "Docker"],
  },
  {
    icon: <Image src="/icons/vercel.svg" alt="Vercel" width={4} height={40} className="rounded-xl" />,
    title: "Vercel",
    description:
      "Serverless platform for static sites and0serverless functions",
    tags: ["Serverless", "Deployment"],
  },
];
const ProgrammingLanguages = [
  {
    icon: <Image src="/icons/js.svg" alt="Javascript" width={35} height={35} className="rounded-xl" />,
    title: "Javascript",
    description: "Programming language for the web",
    tags: ["Javascript", "Language"],
  },
  {
    icon: <Image src="/icons/ts.svg" alt="Typescript" width={35 } height={35} className="rounded-xl" />,
    title: "Typescript",
    description: "Programming language for the web",
    tags: ["Typescript", "Language"],
  },
  {
    icon: <Image src="/icons/python.svg" alt="Python" width={35} height={35} className="rounded-xl" />,
    title: "Python",
    description: "Programming language for the web",
    tags: ["Python", "Language"],
  },
  {
    icon: <Image src="/icons/cpp.svg" alt="C++" width={35} height={35} className="rounded-xl" />,
    title: "C++",
    description: "low level programming language",
    tags: ["C++", "Language"],
  },
];
export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start pt-24 px-4">
      <h1 className="text-4xl font-bold text-neutral-200 mb-4 mt-5">
        Skills & Tools
      </h1>
      <p className="text-neutral-400 mb-8  max-w-xl">
        A curated list of my favorite technologies and tools I use to build
        modern web applications.
      </p>

      <div className="text-2xl font-bold text-neutral-200 mb-4 mt-5">
        <div className="border border-neutral-800 p-4 rounded-tr-lg rounded-tl-lg bg-[#1b1b1b]">
          {" "}
          Frontend Technologies
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border border-neutral-800 px-10 pt-4 pb-5 rounded-br-lg rounded-bl-lg">
          {Frontend.map((skill) => (
            <SkillsCard key={skill.title} {...skill} tags={skill.tags} />
          ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-neutral-200 mb-4 mt-5">
        <div className="border border-neutral-800 p-4 rounded-tr-lg rounded-tl-lg bg-[#1b1b1b]">
          {" "}
          Backend Technologies
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border border-neutral-800 px-10 pt-4 pb-5 rounded-br-lg rounded-bl-lg">
          {Backend.map((skill) => (
            <SkillsCard key={skill.title} {...skill} tags={skill.tags} />
          ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-neutral-200 mb-4 mt-5">
        <div className="border border-neutral-800 p-4 rounded-tr-lg rounded-tl-lg bg-[#1b1b1b]">
          {" "}
          Development Tools
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border border-neutral-800 px-10 pt-4 pb-5 rounded-br-lg rounded-bl-lg">
          {Tools.map((skill) => (
            <SkillsCard key={skill.title} {...skill} tags={skill.tags} />
          ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-neutral-200 mb-4 mt-5">
        <div className="border border-neutral-800 p-4 rounded-tr-lg rounded-tl-lg bg-[#1b1b1b]">
          {" "}
          DevOps
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border border-neutral-800 px-10 pt-4 pb-5 rounded-br-lg rounded-bl-lg">
          {Devops.map((skill) => (
            <SkillsCard key={skill.title} {...skill} tags={skill.tags} />
          ))}
        </div>
      </div>

      <div className="text-2xl font-bold text-neutral-200 mb-4 mt-5 w-full">
        <div className="border border-neutral-800 p-4 rounded-tr-lg rounded-tl-lg bg-[#1b1b1b]">
          {" "}
          Programming Languages
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border border-neutral-800 px-10 pt-4 pb-5 rounded-br-lg rounded-bl-lg">
          {ProgrammingLanguages.map((skill) => (
            <SkillsCard key={skill.title} {...skill} tags={skill.tags} />
          ))}
        </div>
      </div>
    </div>
  );
}
