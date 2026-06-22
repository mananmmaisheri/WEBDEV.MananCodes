import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Laptop, Smartphone, Monitor, ChevronRight, ChevronLeft, ShieldCheck, Cpu, Heart, Rocket } from "lucide-react";
import { Project } from "../types";

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "doctor",
      title: "DocPrescribe HUB",
      category: "Doctor & Clinic Website",
      description: "A super-sleek patient hub and automated appointment booking engine. Completely HIPAA compliant, with an active calendar, rich dashboard and responsive patient charts.",
      image: "linear-gradient(135deg, #10B981, #059669)",
      tags: ["React 19", "Tailwind v4", "Lucide", "Framer Motion"],
      features: ["Live Appointment Booking", "Patient Portal Portal", "Interactive Calendar Alerts", "Fluid Custom Dashboard"],
      link: "#",
    },
    {
      id: "startup",
      title: "Velocity SaaS",
      category: "Startup Platform",
      description: "A conversion-driven SaaS homepage built with high-fidelity, Apple-inspired dark mode cards, magnetic interactive landing points, and multi-tier subscription toggles.",
      image: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
      tags: ["React", "TypeScript", "GSAP Scroll", "Lenis Scroll"],
      features: ["Spotlight Card Layouts", "Bento Pricing Calculator", "Sleek Custom Graphs", "Nested Slide Reveal"],
      link: "#",
    },
    {
      id: "aisaas",
      title: "Synthetix AI",
      category: "AI SaaS Application",
      description: "An AI analytical dashboard with floating generative outputs, real-time node processing charts, custom canvas loaders and persistent analytics grids.",
      image: "linear-gradient(135deg, #7C3AED, #9333EA)",
      tags: ["React 19", "Gemini Node API", "D3.js Charts", "WebSockets"],
      features: ["Interactive Model Selectors", "Active Generation Feed", "Vector Token Visualizer", "Serverless Streaming Setup"],
      link: "#",
    },
    {
      id: "portfolio",
      title: "Elysian Studio",
      category: "Creative Portfolio",
      description: "An immersive developer & photographer portfolio featuring mouse-deflection horizontal scrolling, WebGL interactive wave nodes, and custom liquid blur transitions.",
      image: "linear-gradient(135deg, #ED64A6, #D53F8C)",
      tags: ["Three.js Canvas", "Framer Motion", "GSAP", "Tailwind v4"],
      features: ["Full WebGL Particle Backgrounds", "Infinite Scroll Carousel", "Magnetic Hover Controls", "Liquid Page Transitions"],
      link: "#",
    },
  ];

  const handleNext = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="flex flex-col gap-8 w-full" id="featured-work-section-root">
      
      {/* Selector Navigation Controls */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex gap-2">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(idx)}
              className={`font-mono text-[10px] tracking-widest px-3 py-1.5 rounded-md border transition-all duration-300 ${
                activeProject === idx
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-zinc-950/80 text-zinc-500 border-white/5 hover:border-white/10 hover:text-zinc-300"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all hover:scale-105"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-400 hover:text-white transition-all hover:scale-105"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Feature Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/40 p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden backdrop-blur-md">
        
        {/* Background glow node matching active project theme */}
        <div 
          className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 -z-10 opacity-30"
          style={{
            background: activeProject === 0 ? "rgba(16,185,129,0.4)" : activeProject === 1 ? "rgba(59,130,246,0.4)" : activeProject === 2 ? "rgba(124,58,237,0.4)" : "rgba(237,100,166,0.4)"
          }}
        />

        {/* Info Column (Left) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center gap-5 min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                  {projects[activeProject].category}
                </span>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
                  {projects[activeProject].title}
                </h3>
              </div>

              <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] text-zinc-400 bg-zinc-900/85 px-2.5 py-1 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2 border-t border-b border-white/5 py-4">
                {projects[activeProject].features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                    <span className="font-sans text-[11px] text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>

              <a
                href={projects[activeProject].link}
                className="self-start inline-flex items-center gap-2 text-xs font-heading tracking-widest font-bold text-white group"
              >
                EXPLORE LIVE PREVIEW
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyber-violet group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Digital Mockup Column (Right) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              whileHover={{ scale: 1.01, rotate: 0.5 }}
              className="w-full max-w-[500px]"
            >
              <div className="w-full aspect-[16/10] bg-zinc-950 p-1 md:p-2 rounded-2xl border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                
                {/* Laptop Header Bar */}
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 bg-zinc-900/60 rounded-t-xl">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-855" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-855" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-855" />
                  </div>
                  <div className="font-mono text-[9px] text-zinc-500 bg-zinc-950 px-4 py-0.5 rounded-md max-w-[200px] truncate text-center">
                    {projects[activeProject].id}.manancodes.dev
                  </div>
                  <ActivityIcon categoryId={projects[activeProject].id} />
                </div>

                {/* Laptop Mock Screen Content Display */}
                <div 
                  className="w-full h-[calc(100%-35px)] rounded-b-xl flex flex-col relative overflow-hidden p-6 text-zinc-300"
                  style={{ background: projects[activeProject].image }}
                >
                  {/* Mesh background effect inside mockup website */}
                  <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-[2px] z-0" />
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20" />

                  {/* Mock Page Contents */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                      <span className="font-heading font-extrabold text-[10px] tracking-widest text-white">
                        {projects[activeProject].title.toUpperCase()}
                      </span>
                      <div className="flex gap-2">
                        <span className="w-3.5 h-[1.5px] bg-white/40" />
                        <span className="w-6 h-[1.5px] bg-cyber-violet" />
                        <span className="w-3.5 h-[1.5px] bg-white/40" />
                      </div>
                    </div>

                    <div className="my-auto flex flex-col gap-2">
                      <span className="font-mono text-[8px] text-cyber-violet uppercase tracking-widest">
                        SYSTEM LIVE COMPILING
                      </span>
                      <h4 className="font-heading font-bold text-lg text-white tracking-tight leading-tight">
                        Future-proof web builds that convert.
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-16 bg-white/10 rounded-md border border-white/10 flex items-center justify-center text-[7px] font-mono tracking-widest">
                          ACTIVE
                        </div>
                        <div className="h-1.5 w-16 bg-zinc-900 rounded-full overflow-hidden">
                          <div className="h-full bg-cyber-blue animate-pulse w-3/4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center font-mono text-[7px] text-zinc-500 border-t border-white/5 pt-4">
                      <span>© {new Date().getFullYear()} CORE BUILD</span>
                      <span>PREMIUM FREELANCE SERVICE</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function ActivityIcon({ categoryId }: { categoryId: string }) {
  if (categoryId === "doctor") {
    return <Heart className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />;
  }
  if (categoryId === "startup") {
    return <Rocket className="w-3.5 h-3.5 text-blue-500" />;
  }
  if (categoryId === "aisaas") {
    return <Cpu className="w-3.5 h-3.5 text-purple-500 animate-spin" style={{ animationDuration: "10s" }} />;
  }
  return <Laptop className="w-3.5 h-3.5 text-pink-500" />;
}
