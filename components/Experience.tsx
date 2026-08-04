"use client";

import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { EASE } from "@/data/constants";

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl text-[#777777] mb-2 tracking-wide outfit-font">
            career path
          </p>
          <h2 className="font-ovo text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-[#777777] outfit-font">
            A snapshot of my work, responsibilities, and the experience I’ve
            built so far.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div
            className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5
            bg-gradient-to-b from-[#1a1a1a] via-[#888888] to-[#e8e8e8]"
          />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.15, ease: EASE }}
              className="relative mb-10 pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-x-16 sm:items-start"
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-[21px] sm:left-1/2 sm:-translate-x-1/2 top-1
                w-4 h-4 rounded-full bg-[#1a1a1a] sm:top-6"
              />

              <div
                className={`card-elevated group relative overflow-hidden rounded-[2rem] p-7 sm:p-8 max-w-lg w-full flex flex-col sm:max-w-none ${index % 2 === 0 ? "sm:col-start-1 sm:justify-self-end" : "sm:col-start-2 sm:justify-self-start"}`}
              >
                <h3 className="outfit-font text-lg sm:text-xl font-medium text-[#1a1a1a] mb-0.5">
                  {exp.role}
                </h3>
                <p className="outfit-font text-[#888888] font-semibold text-sm mb-2">
                  {exp.company}
                </p>
                <p className="text-[#aaaaaa] text-xs mb-4 font-mono">
                  {exp.startDate} — {exp.endDate}
                </p>
                <ul className="space-y-1.5 w-full">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-[#555555] leading-relaxed flex gap-2 outfit-font"
                    >
                      <span className="text-[#1a1a1a] flex-shrink-0 mt-1">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
