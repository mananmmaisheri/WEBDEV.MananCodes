import { useRef, MouseEvent } from "react";
import { motion } from "motion/react";
import { Zap, Smartphone, Palette, Flame, Code, Cpu, ShieldCheck, Crown } from "lucide-react";
import { BentoItem } from "../types";

export default function BentoGrid() {
  const gridItems: BentoItem[] = [
    {
      id: "fast",
      title: "Fast Delivery",
      description: "Optimized pipelines that turn wireframes into live, premium websites in record time without cutting corners.",
      badge: "3-7 Days Delivery",
      iconName: "Zap",
      glowColor: "rgba(124, 58, 237, 0.15)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "mobile",
      title: "Mobile Responsive",
      description: "Pixels fluidly adapt from high-end ultra-wide monitors down to standard iPhones and foldable devices beautifully.",
      badge: "Seamless Layouts",
      iconName: "Smartphone",
      glowColor: "rgba(59, 130, 246, 0.15)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "modern",
      title: "Modern Design",
      description: "Deep, dark spatial aesthetics, high-quality typography pairings, and micro-interactions that make your brand stand out.",
      badge: "Awwwards Standard",
      iconName: "Palette",
      glowColor: "rgba(168, 85, 247, 0.15)",
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      id: "performance",
      title: "Performance Optimized",
      description: "Near-perfect 100/100 Lighthouse speed audits. Tiny bundle sizes, instant asset paints, and buttery operations.",
      badge: "Lighthouse 100/100",
      iconName: "Flame",
      glowColor: "rgba(59, 130, 246, 0.15)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "code",
      title: "Clean Code",
      description: "Structured, component-driven TypeScript using strict React 19 standards. Ready for modular scaling.",
      badge: "Type-safe Scaling",
      iconName: "Code",
      glowColor: "rgba(124, 58, 237, 0.15)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "ai",
      title: "AI Integration",
      description: "Connect your workspace with advanced large language models, dynamic chat pipelines, or server-side workflows.",
      badge: "Gemini API Power",
      iconName: "Cpu",
      glowColor: "rgba(168, 85, 247, 0.18)",
      gridClass: "md:col-span-2 md:row-span-1",
    },
    {
      id: "support",
      title: "Priority Support",
      description: "Direct communications with Manan. No middle agents, no translation delays - pure technical support and agility.",
      badge: "Direct Line Support",
      iconName: "ShieldCheck",
      glowColor: "rgba(59, 130, 246, 0.15)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      id: "premium",
      title: "Premium Experience",
      description: "Lenis smooth-scrolling setups, parallax particle vectors, and Custom magnetic physics animations built on-demand.",
      badge: "Stripe & Linear Quality",
      iconName: "Crown",
      glowColor: "rgba(124, 58, 237, 0.18)",
      gridClass: "md:col-span-1 md:row-span-1",
    },
  ];

  const iconMap: Record<string, any> = {
    Zap,
    Smartphone,
    Palette,
    Flame,
    Code,
    Cpu,
    ShieldCheck,
    Crown,
  };

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: string) => {
    const card = cardRefs.current[id];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
    >
      {gridItems.map((item) => {
        const Icon = iconMap[item.iconName] || Code;
        return (
          <motion.div
            key={item.id}
            ref={(el) => {
              cardRefs.current[item.id] = el;
            }}
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              show: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15 
                } 
              }
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
            className={`spotlight-card rounded-2xl glass-panel p-6 border border-white/5 relative overflow-hidden group transition-all duration-300 hover:border-white/12 ${item.gridClass}`}
            id={`bento-card-${item.id}`}
          >
            {/* Custom glowing background on card level */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-40"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${item.glowColor}, transparent 65%)`,
              }}
            />

            {/* Glowing Accent Borders */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyber-violet/30 transition-all duration-300" />
            
            {/* Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px] gap-4">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-950/80 border border-white/5 flex items-center justify-center relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:border-white/10 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-cyber-violet transition-colors duration-300" />
                </div>
                <span className="font-mono text-[9px] tracking-wider text-zinc-500 bg-zinc-950/60 px-2.5 py-1 rounded-md border border-white/5">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-base text-white tracking-tight mb-1.5 group-hover:text-cyber-violet transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
