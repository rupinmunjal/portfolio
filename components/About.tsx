"use client";

import {motion} from "motion/react";
import Image from "next/image";
import {Code, Award, Heart} from "lucide-react";
import {portfolioData} from "@/data/portfolio";
import {EASE} from "@/data/constants";

function InfoCard({icon: Icon, title, subtitle, delay}: {icon: React.ElementType; title: string; subtitle: string; delay: number}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.45, ease: EASE, delay}}
      className="glass-card group relative overflow-hidden rounded-[2rem] border border-[#e8e8e8] bg-white p-7 sm:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.05)]"
    >
      {/* Subtle top accent gradient bar */}
      <div className="absolute left-4 right-4 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#d0d0d0] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#e8e8e8] blur-2xl opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="pointer-events-none absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-[#eeeeee] blur-xl opacity-40" />

      {/* Icon — outlined circle, lighter treatment */}
      <motion.div
        whileHover={{scale: 1.06, borderColor: "#c0c0c0"}}
        transition={{type: "spring", stiffness: 300, damping: 15}}
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d5d5d5] bg-[#fafafa] text-[#777777] shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
      >
        <Icon className="h-4 w-4" />
      </motion.div>

      <h3 className="outfit-font text-base sm:text-lg font-medium text-[#1a1a1a] leading-tight mb-2">{title}</h3>

      <p className="text-sm sm:text-base text-[#777777] outfit-font leading-relaxed">{subtitle}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-24 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, ease: EASE}}
          className="text-center mb-14"
        >
          <p className="text-lg sm:text-xl text-[#777777] mb-2 tracking-wide outfit-font">introduction</p>
          <h2 className="font-ovo text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-12">
          {/* Profile Image */}
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1, ease: EASE}}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden
              border-2 border-[#e8e8e8] shadow-[0_0_40px_rgba(0,0,0,0.06)]">
              <Image
                src="/assets/images/user-image.jpeg"
                alt={`${portfolioData.name} profile`}
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1">
            <motion.p
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.55, delay: 0.2, ease: EASE}}
              className="text-[#555555] text-base sm:text-lg leading-relaxed mb-12"
            >
              {portfolioData.about}
            </motion.p>

              {/* Education, Projects, and Volunteering - placed under the bio text */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard
                  icon={Award}
                  title="Education"
                  subtitle={`${portfolioData.education.program} at ${portfolioData.education.school}`}
                  delay={0.2}
                />
                <InfoCard
                  icon={Code}
                  title="Projects"
                  subtitle={"Built 5+ projects"}
                  delay={0.3}
                />
                <InfoCard
                  icon={Heart}
                  title="Volunteering"
                  subtitle={`${portfolioData.volunteering.role} at ${portfolioData.volunteering.organization}`}
                  delay={0.4}
                />
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}
