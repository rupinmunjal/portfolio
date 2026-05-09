"use client";

import {motion} from "motion/react";
import Image from "next/image";
import {portfolioData} from "@/data/portfolio";
import {ProjectLinkButtons} from "@/components/ui/project-buttons";
import {SolidButton} from "@/components/ui/buttons";
import {EASE} from "@/data/constants";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioData.projects)[0];
  index: number;
}) {
  const hasLinks = project.githubUrl || project.liveUrl;
  const imageSrc = `/assets/projects/project-${project.id}.png`;

  return (
    <motion.div
      initial={{opacity: 0, y: 28}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.6, delay: index * 0.1, ease: EASE}}
      className={`project-card group relative overflow-hidden rounded-[1.4rem] bg-white ${hasLinks ? "cursor-pointer card-hover" : ""}`}
    >
      {/* Project image */}
      <div className="relative h-[20rem] w-full overflow-hidden sm:h-[21rem] lg:h-[22rem]">
        <Image
          src={imageSrc}
          alt={project.title}
          width={1200}
          height={900}
          loading="eager"
          className={`h-full w-full object-cover transition-transform duration-500 ${hasLinks ? "group-hover:scale-105" : ""}`}
        />
      </div>

      {/* Bottom overlay */}
      <div className="absolute inset-x-4 bottom-4 rounded-[1.1rem] bg-white/80 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:inset-x-5 sm:bottom-5 sm:px-5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-[#222222] text-base sm:text-[1.05rem] outfit-font">{project.title}</h3>
            <p className="text-[#555555] text-xs sm:text-sm outfit-font">{project.description}</p>
          </div>

          {/* Link buttons */}
          <ProjectLinkButtons githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white pb-24">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, ease: EASE}}
          className="text-center mb-10 sm:mb-12"
        >
          <p className="text-lg sm:text-xl text-[#777777] mb-2 tracking-wide outfit-font">my portfolio</p>
          <h2 className="font-ovo text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
            My latest work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-[#777777] outfit-font">
            <span className="block">A curated collection of selected projects</span>
            <span className="block">and web applications.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 mx-auto w-full">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <SolidButton href={portfolioData.socials.github}>
            Show more
            <span aria-hidden>→</span>
          </SolidButton>
        </div>
      </div>
    </section>
  );
}