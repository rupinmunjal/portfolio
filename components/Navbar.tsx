"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "motion/react";
import {Menu, X, ArrowRight} from "lucide-react";
import {portfolioData} from "@/data/portfolio";
import {PillButton} from "@/components/ui/buttons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    {label: "About", id: "about"},
    {label: "Skills", id: "skills"},
    {label: "Projects", id: "projects"},
    {label: "Experience", id: "experience"},
    {label: "Contact", id: "contact"},
  ];

  return (
    <>
      <motion.nav
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{type: "spring", stiffness: 80, damping: 18, delay: 0.1}}
        className={`
          fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-500
          ${isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#e8e8e8] shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
            : "bg-white"
          }
        `}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[0] h-24 sm:h-28 bg-no-repeat bg-cover bg-center opacity-70"
          style={{backgroundImage: "url('/assets/images/header-bg-color.png')"}}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[0] h-24 sm:h-28 bg-gradient-to-t from-white/65 via-white/35 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
              className="text-xl font-bold font-ovo gradient-text cursor-pointer select-none pl-2"
              onClick={() => scrollToSection("hero")}
            >
              {portfolioData.name}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.35 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link-wrap font-ovo text-base font-medium text-[#555555] cursor-pointer
                    hover:text-[#1a1a1a] transition-colors duration-300 py-1"
                >
                  {link.label}
                  <span className="nav-link-underline" />
                </motion.button>
              ))}
            </div>

            {/* Connect button */}
            <div className="hidden md:flex items-center">
              <div className="ml-4">
                <PillButton href={portfolioData.socials.linkedin}>
                  Connect
                  <ArrowRight className="h-4 w-4" />
                </PillButton>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[#f7f7f7] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{rotate: 90, opacity: 0}}
                      animate={{rotate: 0, opacity: 1}}
                      exit={{rotate: -90, opacity: 0}}
                      transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
                    >
                      <X className="h-5 w-5 text-[#1a1a1a]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{rotate: -90, opacity: 0}}
                      animate={{rotate: 0, opacity: 1}}
                      exit={{rotate: 90, opacity: 0}}
                      transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
                    >
                      <Menu className="h-5 w-5 text-[#1a1a1a]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{opacity: 0, maxHeight: 0}}
              animate={{opacity: 1, maxHeight: 500}}
              exit={{opacity: 0, maxHeight: 0}}
              transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
              className="relative z-10 md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-[#e8e8e8]"
            >
              <div className="px-6 py-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{opacity: 0, x: -16}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
                    onClick={() => scrollToSection(link.id)}
                    className="outfit-font block w-full text-left py-2.5 px-3 rounded-lg cursor-pointer
                      text-[#555555] hover:text-[#1a1a1a] hover:bg-[#f7f7f7]
                      transition-all duration-300 active:bg-[#efefef]"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <PillButton href={portfolioData.socials.linkedin} fullWidth>
                    Connect
                    <ArrowRight className="h-4 w-4" />
                  </PillButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}