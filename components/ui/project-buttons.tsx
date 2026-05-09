"use client";

import {motion} from "motion/react";
import {ExternalLink} from "lucide-react";
import {GithubIcon} from "@/components/ui/icons";

type ProjectLinkVariant = "github" | "live";

function ProjectLinkButton({href, variant}: {href: string; variant: ProjectLinkVariant}) {
  const isGithub = variant === "github";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9] transition-colors ${
        isGithub
          ? "bg-[#1a1a1a] text-white hover:bg-[#333333] shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
          : "bg-white text-[#555555] hover:bg-[#f5f5f5] hover:text-[#1a1a1a] shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
      }`}
    >
      {isGithub ? <GithubIcon className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
    </motion.a>
  );
}

export function ProjectLinkButtons({githubUrl, liveUrl}: {githubUrl: string | null; liveUrl: string | null}) {
  if (!githubUrl && !liveUrl) return null;

  return (
    <div className="flex flex-col items-center gap-1.5 shrink-0">
      {liveUrl && <ProjectLinkButton href={liveUrl} variant="live" />}
      {githubUrl && <ProjectLinkButton href={githubUrl} variant="github" />}
    </div>
  );
}
