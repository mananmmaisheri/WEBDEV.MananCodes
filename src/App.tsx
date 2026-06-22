import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import {
  ShieldCheck,
  Zap,
  Star,
  Users,
  Grid,
  Code2,
  Terminal,
  Activity,
  ArrowRight,
  Flame,
  MousePointerClick,
  Monitor,
  Globe,
  ExternalLink,
} from "lucide-react";

// Components Imports
import CyberCanvas from "./components/CyberCanvas";
import Header from "./components/Header";
import BentoGrid from "./components/BentoGrid";
import FeaturedWork from "./components/FeaturedWork";
import ProcessTimeline from "./components/ProcessTimeline";
import PricingPlans from "./components/PricingPlans";
import Chatbot from "./components/Chatbot";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Metadata list for testimonials
import { Testimonial } from "./types";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync scroll progress meter
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((window.scrollY / scrollHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // When changing Page / Active Tab, Scroll to Top instantly
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Dr. Aarav Mehta",
      role: "Medical Director",
      company: "DocPrescribe Hub",
      rating: 5,
      avatar: "AM",
      content: "Manan built our medical portal in just 5 days. Patients find the online booking extremely intuitive. Our booking rate spiked by 40% immediately!",
    },
    {
      id: "t2",
      name: "Sophia Davis",
      role: "Founder & CEO",
      company: "Velocity SaaS",
      content: "An absolute frontend wizard. Our new SaaS landing page scored a perfect 100 on Google Lighthouse audits. Speed is unmatched.",
      rating: 5,
      avatar: "SD",
    },
    {
      id: "t3",
      name: "Vikram Malhotra",
      role: "CTO",
      company: "Synthetix AI",
      content: "Outstanding implementation of local Gemini chatbot AI pipeline. Elite animations, modular code, and direct line response. Simply phenomenal.",
      rating: 5,
      avatar: "VM",
    },
    {
      id: "t4",
      name: "Isabella Lopez",
      role: "Creative Director",
      company: "Elysian Studio",
      content: "Stunning 3D particle shaders and custom mouse magnetic vectors. Fully type-safe scaling setup. Exceeded all our benchmarks.",
      rating: 5,
      avatar: "IL",
    },
  ];

  const techStack = [
    { name: "React 19", category: "Core" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Style" },
    { name: "Next.js", category: "Fullstack" },
    { name: "Python", category: "SaaS Dev" },
    { name: "FastAPI", category: "API" },
    { name: "Firebase", category: "Auth/Store" },
    { name: "MongoDB", category: "NoSQL Database" },
    { name: "Three.js", category: "WebGL 3D" },
    { name: "GSAP", category: "GSAP Scroll" },
    { name: "Framer Motion", category: "Animations" },
  ];

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
    setActivePage("contact");
  };

  return (
    <div className="relative min-h-screen bg-cyber-bg text-zinc-100 overflow-hidden font-sans select-none pb-12">
      
      {/* Scroll Progress Glow Tape (Apple / Linear style) */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-violet z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Futuristic Grid Canvas Mesh overlayed by ambient spatial glows */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-30 z-0" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] glow-overlay-violet pointer-events-none z-0" />
      <div className="fixed bottom-[-25%] right-[-10%] w-[65%] h-[65%] glow-overlay-blue pointer-events-none z-0" />
      
      {/* Header bar */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Pages Container */}
      <main className="relative z-10 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-28"
            >
              
              {/* HERO SECTION */}
              <section id="hero" className="min-h-[calc(100vh-200px)] py-12 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center relative">
                
                {/* Left Typography Info Column (6 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-zinc-500 uppercase">
                      Bespoke Agency Node — High Performance Coding
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 md:gap-3">
                    <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight leading-[0.9] text-white">
                      I BUILD WEBSITES.
                    </h1>
                    <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight leading-[0.9] bg-gradient-to-r from-cyber-purple via-cyber-violet to-cyber-blue bg-clip-text text-transparent text-glow">
                      YOU GROW ONLINE.
                    </h1>
                  </div>

                  <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl font-light">
                    Modern, fast and premium websites designed to help businesses establish trust and grow online. Engineered on-demand with reactive codebases, beautiful interactive 3D WebGL modules, and high Lighthouse speed profiles.
                  </p>

                  <div className="flex flex-wrap gap-4 items-center mt-2">
                    <button
                      onClick={() => setActivePage("contact")}
                      className="px-6 py-3.5 bg-gradient-to-tr from-cyber-purple to-cyber-blue text-white font-heading font-bold text-xs tracking-wider rounded-xl cursor-pointer shadow-[0_4px_25px_rgba(124,58,237,0.35)] hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 group"
                    >
                      START A PROJECT
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => setActivePage("plans")}
                      className="px-6 py-3.5 bg-zinc-900/60 border border-white/5 hover:border-white/10 rounded-xl cursor-pointer font-heading font-bold text-xs tracking-wider text-white hover:bg-zinc-800/80 transition-all hover:scale-105 active:scale-95"
                    >
                      EXPLORE PLANS
                    </button>
                  </div>
                </div>

                {/* Right Interactive WebGL Particle System (5 cols, Offset 1) */}
                <div className="lg:col-span-5 h-[350px] md:h-[450px] lg:h-[500px] w-full flex items-center justify-center relative">
                  
                  {/* Subtle vector glowing background behind three canvas */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/10 to-cyber-blue/5 blur-[50px] rounded-full pointer-events-none" />

                  {/* Wireframe Floating Mesh Layer */}
                  <CyberCanvas />

                  {/* Small Micro-Interaction Indicator Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/5 flex items-center gap-2 font-mono text-[9px] text-zinc-400">
                    <MousePointerClick className="w-3.5 h-3.5 text-cyber-violet animate-bounce" />
                    <span>HOVER & DRAG ORBIT</span>
                  </div>
                </div>

              </section>

              {/* INFINITE MARQUEE STRIP */}
              <section id="marquee" className="relative w-screen left-[calc(-50vw+50%)] bg-zinc-950/80 border-t border-b border-white/5 py-5 overflow-hidden backdrop-blur-sm shadow-md">
                <div className="flex relative w-full overflow-hidden select-none pause-on-hover">
                  <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
                    {Array(4).fill([
                      "Landing Pages", "Business Websites", "Premium Websites", "3D Websites",
                      "AI Chatbots", "UI/UX Design", "Website Redesign", "Fast Delivery", "Modern Design"
                    ]).flat().map((word, idx) => (
                      <span key={idx} className="font-heading font-extrabold text-xs tracking-widest text-zinc-500 hover:text-white transition-colors duration-200 flex items-center gap-3">
                        {word.toUpperCase()} <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple text-glow" />
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* WHY CHOOSE US (BENTO GRID) */}
              <section id="why-choose-us" className="flex flex-col gap-12 py-8">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    BENCHMARK EXCELLENCE
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    WHY OUTSTANDING SYSTEM LAYOUTS CHOOSE MANANCODES.
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    We treat digital architecture as high artistry. We bypass generic cookie-cutter grids to construct highly-tailored, responsive environments.
                  </p>
                </motion.div>

                <BentoGrid />
              </section>

              {/* FEATURED WORK */}
              <section id="featured-work" className="flex flex-col gap-12 py-8">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    DISRUPTIVE DIGITAL CASES
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    CRAFTED SHORELINES & HUB PORTS.
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Review premium mockup frames compiled for high scaling doctors, startup nodes, AI SaaS operators, and immersive audio portfolios.
                  </p>
                </motion.div>

                <FeaturedWork />
              </section>

              {/* TIMELINE PROCESS */}
              <section id="timeline-process" className="flex flex-col gap-12 py-8">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl md:mx-auto md:text-center text-left"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    DETERMINISTIC BLUEPRINT
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    THE CYBERNETIC CODES PIPELINE
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    01 Discover &rarr; 02 Plan &rarr; 03 Build &rarr; 04 Launch &rarr; 05 Grow. Our modular steps isolate deliverable specifications to ship perfectly calibrated codes fast.
                  </p>
                </motion.div>

                <ProcessTimeline />
              </section>

              {/* STATS TRUST PANEL */}
              <motion.section 
                id="trust-metrics" 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="py-12 bg-zinc-950/80 rounded-3xl border border-white/5 relative overflow-hidden backdrop-blur-md"
              >
                
                {/* Visual grid accent */}
                <div className="absolute inset-0 bg-radial from-cyber-purple/5 to-transparent pointer-events-none" />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center relative z-10 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                  
                  {/* Metric 1 */}
                  <div className="flex flex-col items-center text-center p-4">
                    <span className="font-heading font-extrabold text-4xl md:text-5xl text-glow bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                      20+
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                      Projects Shipped
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col items-center text-center p-4 pt-8 lg:pt-4">
                    <span className="font-heading font-extrabold text-4xl md:text-5xl text-glow bg-gradient-to-r from-cyber-violet to-cyber-blue bg-clip-text text-transparent">
                      100%
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                      Mobile Responsive
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-col items-center text-center p-4 pt-8 lg:pt-4">
                    <span className="font-heading font-extrabold text-4xl md:text-5xl text-glow bg-gradient-to-r from-zinc-200 to-cyber-blue bg-clip-text text-transparent">
                      FAST
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                      Secure Delivery
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="flex flex-col items-center text-center p-4 pt-8 lg:pt-4">
                    <span className="font-heading font-extrabold text-4xl md:text-5xl text-glow bg-gradient-to-r from-cyber-purple to-white bg-clip-text text-transparent">
                      ACTIVE
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-2">
                      Premium Support
                    </span>
                  </div>

                </div>
              </motion.section>

              {/* TESTIMONIAL MARQUEE */}
              <section id="testimonials" className="flex flex-col gap-12 py-8 overflow-hidden w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    CLIENT TELEMETRY REPORTS
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    APPROVED TELEPORT LOGS
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Check honest review transcripts recorded directly from DocPrescribe hub, Velocity startup nodes, and Synthetix AI analytic leaders.
                  </p>
                </motion.div>

                {/* Double Marquee scrolling horizontally: left and right */}
                <div className="flex flex-col gap-4 relative select-none">
                  <div className="flex relative w-full overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex gap-4 py-2">
                      {testimonials.concat(testimonials).map((test, index) => (
                        <motion.div
                          key={`test-left-${test.id}-${index}`}
                          whileHover={{ y: -8, scale: 1.025, borderColor: "rgba(124, 58, 237, 0.25)" }}
                          transition={{ type: "spring", stiffness: 150, damping: 15 }}
                          className="shrink-0 w-[300px] sm:w-[350px] p-5 rounded-2xl glass-panel border border-white/5 relative overflow-hidden flex flex-col justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-1 text-cyber-violet mb-3">
                            {Array(test.rating).fill(null).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-cyber-violet" />
                            ))}
                          </div>
                          <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-4 whitespace-normal">
                            "{test.content}"
                          </p>
                          <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono text-xs text-white">
                              {test.avatar}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-heading font-semibold text-xs text-zinc-200">
                                {test.name}
                              </span>
                              <span className="font-mono text-[8px] text-zinc-500 tracking-wider">
                                {test.role} / {test.company}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* TECH STACK SECTION */}
              <section id="tech-stack" className="flex flex-col gap-12 py-8">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl md:mx-auto md:text-center text-left"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    SYSTEM RUNTIMES
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    ENGINEERED COMPILER STACK
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    We harness world-standard frameworks and animations engines to cook lightning fast, highly interactive codes.
                  </p>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.04,
                      }
                    }
                  }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto w-full"
                >
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={{
                        hidden: { opacity: 0, y: 15 },
                        show: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.05, y: -4, borderColor: "rgba(59, 130, 246, 0.3)" }}
                      className="p-4 rounded-xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm flex flex-col justify-between min-h-[90px] group hover:border-white/10 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="font-mono text-[8px] text-cyber-blue font-semibold uppercase tracking-widest">
                        {tech.category}
                      </span>
                      <span className="font-heading font-semibold text-sm text-white tracking-wide group-hover:text-cyber-violet transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </section>

              {/* ABOUT THE CREATOR (MANAN) */}
              <section id="about-me" className="flex flex-col gap-12 py-8 mt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 max-w-2xl md:mx-auto md:text-center text-left"
                >
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                    THE ARCHITECT LOGS
                  </span>
                  <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    MEET THE CREATOR
                  </h2>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Behind every modular blueprint and high-performance pipeline is a relentless pursuit of design excellence.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 85, damping: 14 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto w-full p-6 md:p-8 rounded-3xl bg-zinc-950/40 border border-white/5 relative overflow-hidden backdrop-blur-md"
                >
                  {/* Glowing background highlights */}
                  <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyber-purple/10 blur-[60px] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-cyber-blue/10 blur-[60px] pointer-events-none" />

                  {/* Left avatar representation (Span 4) */}
                  <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4 relative z-10">
                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center p-1.5 relative group overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/20 to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src="https://lh3.googleusercontent.com/d/15W4slRw4LSwz7p3RPaJqrUjqmFyXYw50" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-105" 
                        alt="Manan Codes profile avatar"
                      />
                    </div>
                    
                    {/* Status badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 font-mono text-[9px] tracking-wider text-green-400 font-semibold uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
                      <span>Online for Contracts</span>
                    </div>
                  </div>

                  {/* Right description details (Span 8) */}
                  <div className="lg:col-span-8 flex flex-col justify-center gap-6 relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading font-black text-xl md:text-2xl text-white tracking-tight">
                          MANAN MAISHERI
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-md bg-cyber-violet/10 border border-cyber-violet/20 font-mono text-[8px] text-cyber-violet uppercase font-extrabold">
                          Lead Architect
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                        I am a professional digital developer & visual designer focused on constructing top-tier interactive environments. I treat the web as a canvas for interactive art, bypassing legacy templates in favor of bespoke, highly-calibrated React modules that captivate prospects and accelerate business nodes.
                      </p>
                      <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                        I am the creator and lead engineer behind <a href="https://manancodes.com" target="_blank" rel="noreferrer" className="text-cyber-blue hover:underline">manancodes.com</a>, where I craft digital experiences modeled after premium industry standards. Every system I deploy targets near-perfect performance audits, responsive parity, and customized micro-interactions.
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-b border-white/5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded bg-cyber-violet animate-pulse" />
                        <span className="font-mono text-[10px] text-zinc-300">Bespoke Clean Code</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded bg-cyber-blue animate-pulse" />
                        <span className="font-mono text-[10px] text-zinc-300">Fluid Responsive Layouts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded bg-purple-400 animate-pulse" />
                        <span className="font-mono text-[10px] text-zinc-300">Conversion copywriting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded bg-blue-400 animate-pulse" />
                        <span className="font-mono text-[10px] text-zinc-300">Lenis Smoothscroll / Motion</span>
                      </div>
                    </div>

                    {/* Button trigger connecting to manancodes.com */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a 
                        href="https://manancodes.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-white text-black font-heading font-medium text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 group"
                      >
                        <span>VISIT MANANCODES.COM</span>
                        <Globe className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform text-black" />
                      </a>
                      
                      <button 
                        onClick={() => setActivePage("contact")}
                        className="px-5 py-2.5 border border-white/5 bg-zinc-900 hover:bg-zinc-850 hover:border-white/10 text-white font-heading font-medium text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <span>Direct Connection</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-white" />
                      </button>
                    </div>

                  </div>
                </motion.div>
              </section>

              {/* LARGE CTA SECTION */}
              <motion.section 
                id="giant-cta" 
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="py-16 md:py-20 rounded-3xl bg-slate-950/20 border border-white/5 relative overflow-hidden backdrop-blur-md text-center flex flex-col items-center justify-center px-4"
              >
                
                {/* Glow node */}
                <div className="absolute inset-0 bg-radial from-cyber-purple/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
                  <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-extrabold">
                    INITIATE CODE CONTRACT
                  </span>
                  <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none text-glow uppercase">
                    LET'S BUILD SOMETHING EXTRAORDINARY.
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
                    Ready to trade legacy slower blocks for premium Apple-tier performance setups? Transmit your blueprints onto our direct line queue today.
                  </p>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="mt-2 px-8 py-4 bg-white text-black hover:bg-zinc-200 font-heading font-bold text-xs tracking-wider rounded-xl cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-transform"
                  >
                    START PROJECT NOW
                  </button>
                </div>
              </motion.section>

            </motion.div>
          )}

          {activePage === "plans" && (
            <motion.div
              key="plans-page"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 py-8"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                  PREMIUM SPECIFICATIONS FEES
                </span>
                <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
                  Transparent Setup Prices.
                </h1>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  No surprise bills. Fully defined contracts with modular integrations to accommodate quick brands up to fully custom premium 3D and AI systems.
                </p>
              </div>

              <PricingPlans onPlanSelect={handlePlanSelection} />
            </motion.div>
          )}

          {activePage === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 py-8"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
                  SECURE CHANNELS ESTABLISHED
                </span>
                <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight uppercase text-glow">
                  LET'S TALK.
                </h1>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  Have an idea? Let's compile and turn it into full digital reality. Fill out our parameters selector, or ping on active socials.
                </p>
              </div>

              <ContactForm preselectedPlan={selectedPlan} />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Cybernetic Footer with legal nodes */}
      <Footer activePage={activePage} setActivePage={setActivePage} />

      {/* Cybernetic floating terminal AI Chatbot assistant */}
      <Chatbot />

    </div>
  );
}
