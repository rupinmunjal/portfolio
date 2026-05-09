"use client";

import {motion} from "motion/react";
import {Mail} from "lucide-react";
import {GithubIcon, LinkedInIcon} from "@/components/ui/icons";
import {portfolioData} from "@/data/portfolio";
import {SolidButton} from "@/components/ui/buttons";
import {EASE} from "@/data/constants";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-80 -translate-y-1/2 bg-no-repeat bg-cover bg-center opacity-45 blur-2xl"
        style={{backgroundImage: "url('/assets/images/footer-bg-color.png')"}}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{opacity: 0, y: 18}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, ease: EASE}}
          className="mb-12"
        >
          <p className="text-lg sm:text-xl text-[#777777] mb-2 tracking-wide outfit-font">connect with me</p>
          <h2 className="font-ovo text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight">
            Get in touch
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-[#777777] outfit-font">
            I’d love to hear from you. Reach out through any of the links below and I’ll get back to you soon.
          </p>
        </motion.div>

        <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
          <SolidButton href={`mailto:${portfolioData.email}`} className="px-8 py-4 border border-gray-400 text-lg">
            <Mail className="h-5 w-5 shrink-0" />
            Email
          </SolidButton>
          <SolidButton href={portfolioData.socials.github} className="px-8 py-4 border border-gray-400 text-lg">
            <GithubIcon className="h-5 w-5 shrink-0" />
            GitHub
          </SolidButton>
          <SolidButton href={portfolioData.socials.linkedin} className="px-8 py-4 border border-gray-400 text-lg">
            <LinkedInIcon className="h-5 w-5 shrink-0" />
            LinkedIn
          </SolidButton>
        </div>

        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.5, duration: 0.5}}
          className="relative mt-14 text-center text-[#aaaaaa] text-xs tracking-wider"
        >
          © {new Date().getFullYear()} {portfolioData.name} {portfolioData.lastName}.
          Built with Next.js & Motion.
        </motion.p>
      </div>
    </section>
  );
}