"use client";

import {motion} from "motion/react";
import type {ReactNode} from "react";

/* ── Solid dark CTA button ── */
export function SolidButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{scale: 1.03, y: -2}}
      whileTap={{scale: 0.98}}
      className={`site-btn site-btn--solid btn-glow inline-flex items-center gap-3 ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* ── Outline CTA button ── */
export function OutlineButton({href, children, className = ""}: {href: string; children: ReactNode; className?: string}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{scale: 1.03, y: -2}}
      whileTap={{scale: 0.98}}
      className={`site-btn site-btn--outline btn-glow inline-flex items-center gap-3 ${className}`}
    >
      {children}
    </motion.a>
  );
}

/* ── Pill outline button (used in Navbar) ── */
export function PillButton({
  href,
  children,
  fullWidth,
}: {
  href: string;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#e8e8e8] px-8 py-2 text-base font-medium text-[#1a1a1a] hover:bg-[#f7f7f7] transition-colors duration-200 outfit-font ${fullWidth ? "w-full text-sm px-4" : ""}`}
    >
      {children}
    </a>
  );
}
