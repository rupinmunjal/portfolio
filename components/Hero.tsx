"use client";

import {motion} from "motion/react";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import {portfolioData} from "@/data/portfolio";
import {SolidButton, OutlineButton} from "@/components/ui/buttons";
import {EASE} from "@/data/constants";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 sm:h-28 scale-110 bg-no-repeat bg-cover bg-center opacity-55 blur-3xl"
        style={{backgroundImage: "url('/assets/images/header-bg-color.png')"}}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 sm:h-28 bg-gradient-to-b from-white/75 via-white/45 to-transparent" />

      {/* Subtle decorative gradient blobs */}
      <div aria-hidden="true" className="absolute inset-0 z-[0] overflow-hidden">
        <div
          className="animate-float"
          style={{
            position: "absolute",
            width: 480, height: 480,
            background: "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)",
            top: "-8%", right: "-10%",
            borderRadius: "50%",
          }}
        />
        <div
          className="animate-float-slow"
          style={{
            position: "absolute",
            width: 360, height: 360,
            background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
            bottom: "5%", left: "-6%",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, scale: 0.95, y: 6}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{delay: 0.05, duration: 0.5, ease: EASE}}
            className="mb-6 inline-flex items-center justify-center gap-3"
          >
            <p className="text-[#555555] text-xl sm:text-2xl font-normal mb-0">Hi! I&apos;m {portfolioData.name} {portfolioData.lastName}</p>
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 8, 0] }}
              transition={{delay: 0.6, duration: 0.8, repeat: Infinity, repeatDelay: 3}}
              className="text-3xl sm:text-4xl"
            >
              <Image src="/assets/images/👋🏻.png" alt="wave" width={44} height={44} loading="eager" className="object-contain" />
            </motion.div>
          </motion.div>

          {/* Large hero title split into two lines */}
          <motion.h1
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="font-ovo font-medium mb-6 leading-tight text-[#1a1a1a]"
            style={{fontSize: "clamp(2.8rem, 6.8vw, 5.5rem)"}}
          >
            {(() => {
              const parts = portfolioData.title.split(" ");
              const first = parts.slice(0, 2).join(" ");
              const last = parts.slice(2).join(" ");
              return (
                <>
                  <motion.span
                    initial={{opacity: 0, y: 22, filter: "blur(7px)"}}
                    animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                    transition={{delay: 0.4, duration: 0.7, ease: EASE}}
                    className="block"
                  >
                    {first}
                  </motion.span>
                  <motion.span
                    initial={{opacity: 0, y: 22, filter: "blur(7px)"}}
                    animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                    transition={{delay: 0.55, duration: 0.7, ease: EASE}}
                    className="block"
                  >
                    {last}
                  </motion.span>
                </>
              );
            })()}
          </motion.h1>

          <motion.div
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.85, duration: 0.6, ease: EASE}}
            className="mb-10 max-w-2xl mx-auto text-center"
          >
            <p className="text-[#6b6b6b] text-base sm:text-lg">
              {portfolioData.bio}
            </p>
          </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.1, duration: 0.6, ease: EASE}}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <SolidButton href={portfolioData.socials.linkedin}>
            connect with me
            <span aria-hidden>→</span>
          </SolidButton>

          <OutlineButton href="https://rupin-resume.tiiny.site">
            my resume
            <ExternalLink className="h-4 w-4" />
          </OutlineButton>
        </motion.div>

      </div>
    </section>
  );
}