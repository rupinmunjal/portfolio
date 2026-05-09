"use client";

import {motion} from "motion/react";
import {
  Blocks,
  Braces,
  Code2,
  Container,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Orbit,
  Server,
  ServerCog,
  Wind,
} from "lucide-react";
import {portfolioData} from "@/data/portfolio";
import {EASE} from "@/data/constants";
const categories = [...new Set(portfolioData.skills.map((skill) => skill.category))];

const categoryIcons: Record<string, React.ElementType> = {
  Programming: Braces,
  "Web Development": Globe,
  "Cloud & DevOps": ServerCog,
  "AI/ML": Blocks,
  Databases: Database,
  "Tools & APIs": Layers3,
};

const skillIcons: Record<string, React.ElementType> = {
  C: Code2,
  "C#": Code2,
  Java: Server,
  JavaScript: Braces,
  Kotlin: Code2,
  PHP: Code2,
  Python: Braces,
  Swift: Code2,
  TypeScript: Braces,
  React: Orbit,
  "Next.js": Globe,
  "Vue.js": Globe,
  "Tailwind": Wind,
  "Tailwind CSS": Wind,
  Motion: Blocks,
  "Node.js": Server,
  "Express.js": ServerCog,
  "Spring Boot": ServerCog,
  Laravel: ServerCog,
  AEM: Globe,
  AWS: ServerCog,
  Azure: ServerCog,
  GCP: ServerCog,
  Terraform: Code2,
  Docker: Container,
  Kubernetes: Container,
  Flask: Server,
  Git: GitBranch,
  TensorFlow: Blocks,
  PyTorch: Blocks,
  "Hugging Face": Blocks,
  Llama: Blocks,
  Deepgram: Blocks,
  Pandas: Database,
  NumPy: Database,
  MySQL: Database,
  MongoDB: Database,
  Firebase: Database,
  "REST APIs": Code2,
  Selenium: Code2,
  "Beautiful Soup": Code2,
  Agile: Code2,
  "CI/CD": Code2,
};

function SkillChip({name}: {name: string}) {
  const Icon = skillIcons[name] ?? Code2;

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.92, y: 8}}
      whileInView={{opacity: 1, scale: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.35, ease: EASE}}
      className="skill-badge inline-flex items-center gap-2 rounded-full border border-[#e8e8e8] bg-[#f7f7f7] px-4 py-2 text-sm font-medium text-[#1a1a1a] outfit-font shadow-[0_8px_20px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_6px_14px_rgba(0,0,0,0.05)]">
        <Icon className="h-3.5 w-3.5 text-[#1a1a1a]" />
      </span>
      <span>{name}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, ease: EASE}}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-lg sm:text-xl text-[#777777] mb-2 tracking-wide outfit-font">what I use</p>
          <h2 className="font-ovo text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
            Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-[#777777] outfit-font">
            A quick overview of the languages, frameworks, cloud platforms, and tools I work with.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category] ?? Layers3;
            const categorySkills = portfolioData.skills.filter((skill) => skill.category === category);

            return (
              <motion.div
                key={category}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.45, ease: EASE}}
                className="glass-card group relative overflow-hidden rounded-[2rem] border border-[#e8e8e8] bg-white p-7 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.05)]"
              >
                {/* Subtle top accent gradient bar */}
                <div className="absolute left-4 right-4 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#d0d0d0] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#e8e8e8] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="pointer-events-none absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-[#eeeeee] blur-xl opacity-40" />

                {/* Icon + title — inline horizontal */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{scale: 1.06, borderColor: "#c0c0c0"}}
                    transition={{type: "spring", stiffness: 300, damping: 15}}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d5d5d5] bg-[#fafafa] text-[#777777] shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
                  >
                    <CategoryIcon className="h-4 w-4" />
                  </motion.div>
                  <h3 className="outfit-font text-base sm:text-lg font-medium text-[#1a1a1a] leading-tight">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}