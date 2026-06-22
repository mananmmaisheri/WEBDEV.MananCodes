import { motion } from "motion/react";
import { Search, Eye, Code, Globe, LineChart } from "lucide-react";
import { ProcessStep } from "../types";

export default function ProcessTimeline() {
  const steps: ProcessStep[] = [
    {
      id: "discover",
      number: "01",
      title: "Discover",
      timeline: "Phase 1 - Kickoff",
      description: "We deep-dive into your requirements, audit competitors, establish the creative design vector, and clarify precise functional expectations.",
      details: ["Requirements gathering & analysis", "Structural architecture & research", "Technical specification sheets"],
    },
    {
      id: "plan",
      number: "02",
      title: "Plan",
      timeline: "Phase 2 - UI/UX Design",
      description: "Crafting wireframes and premium interactive style sheets in Figma. Deciding layout density, aesthetic colors, and spatial grid systems.",
      details: ["Wireframing & user journeys", "High-fidelity clickable previews", "Interaction planning & typography sheets"],
    },
    {
      id: "build",
      number: "03",
      title: "Build",
      timeline: "Phase 3 - Code Suite",
      description: "Writing strict, structured TypeScript wrappers, custom WebGL particles, and compiling server-side API links. Hand-crafted layouts for peer performance.",
      details: ["Strict React 19 / Vite wrappers", "Custom animations & Three.js canvas", "Clean, modular API integration"],
    },
    {
      id: "launch",
      number: "04",
      title: "Launch",
      timeline: "Phase 4 - Go-Live",
      description: "Rigorous performance inspections, DNS record configurations, responsive styling checks, and deploying the system securely onto CDN servers.",
      details: ["Lighthouse speed scoring checklists", "Responsive layout cross-checks", "DNS, certificate, & deployment setup"],
    },
    {
      id: "grow",
      number: "05",
      title: "Grow",
      timeline: "Phase 5 - Scaling",
      description: "Ongoing telemetry monitors, priority support response, search engine index scans, and continuous feature modules additions.",
      details: ["Performance analytics tracking", "Direct-line updates", "Incremental future SEO & schema setup"],
    },
  ];

  const iconMap: Record<string, any> = {
    "01": Search,
    "02": Eye,
    "03": Code,
    "04": Globe,
    "05": LineChart,
  };

  return (
    <div className="relative w-full" id="timeline-process-container">
      
      {/* Central Timeline Vertical Ribbon Line */}
      <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-cyber-purple via-cyber-blue to-zinc-800 z-0" />

      {/* Dynamic Steps Map */}
      <div className="flex flex-col gap-12 md:gap-16">
        {steps.map((step, idx) => {
          const Icon = iconMap[step.number];
          const isEven = idx % 2 === 0;

          return (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-stretch md:justify-items-stretch relative z-10 w-full ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              id={`timeline-step-${step.id}`}
            >
              {/* Left Column (Left Card or Spacing) */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex justify-end">
                {isEven ? (
                  <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.93, rotate: -1 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 14, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
                    className="w-full max-w-[480px] text-right"
                  >
                    <TimelineCard step={step} Icon={Icon} textAlignment="text-right" />
                  </motion.div>
                ) : (
                  <div className="hidden md:block w-full" />
                )}
              </div>

              {/* Central Indicator Node Ring */}
              <div className="absolute left-1 md:left-1/2 md:-ml-3.5 top-0 w-7 h-7 rounded-full bg-zinc-950 border border-cyber-purple ring-4 ring-cyber-purple/20 flex items-center justify-center z-20">
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
              </div>

              {/* Right Column (Right Card or Spacing) */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex justify-start">
                {!isEven ? (
                  <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.93, rotate: 1 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 14, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
                    className="w-full max-w-[480px] text-left"
                  >
                    <TimelineCard step={step} Icon={Icon} textAlignment="text-left" />
                  </motion.div>
                ) : (
                  <div className="hidden md:block w-full" />
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

interface TimelineCardProps {
  step: ProcessStep;
  Icon: any;
  textAlignment: string;
}

function TimelineCard({ step, Icon, textAlignment }: TimelineCardProps) {
  const isRight = textAlignment === "text-left";
  return (
    <div className={`p-6 rounded-2xl glass-panel border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-300 ${textAlignment}`}>
      
      {/* Subtle index number watermark */}
      <div className={`absolute select-none pointer-events-none -bottom-4 font-heading font-extrabold text-5xl md:text-7xl opacity-[0.03] text-white ${
        isRight ? "right-4" : "left-4"
      }`}>
        {step.number}
      </div>

      <div className={`flex items-center gap-3 mb-2 justify-start ${isRight ? "flex-row" : "flex-row-reverse"}`}>
        <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center">
          <Icon className="w-4 h-4 text-cyber-violet" />
        </div>
        <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase">
          {step.timeline}
        </span>
      </div>

      <h3 className="font-heading font-extrabold text-lg text-white tracking-tight mb-2">
        {step.number}. {step.title}
      </h3>

      <p className="font-sans text-xs text-zinc-400 mb-4 leading-relaxed font-light">
        {step.description}
      </p>

      {/* Deliverable Items Grid */}
      <div className={`flex flex-col gap-1.5 border-t border-white/5 pt-3 ${isRight ? "items-start" : "items-end"}`}>
        {step.details.map((detail) => (
          <div key={detail} className="flex items-center gap-2">
            <span className="font-sans text-[10px] text-zinc-300 font-medium">{detail}</span>
            <span className="w-1 h-1 rounded-full bg-cyber-blue" />
          </div>
        ))}
      </div>

    </div>
  );
}
