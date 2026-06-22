import { useRef, MouseEvent, useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles, Star, Zap, Rocket, Crown, Shield, ArrowRight, HelpCircle } from "lucide-react";
import { PricingPlan, AddOn } from "../types";

interface PricingPlansProps {
  onPlanSelect: (planName: string) => void;
}

export default function PricingPlans({ onPlanSelect }: PricingPlansProps) {
  const plans: PricingPlan[] = [
    {
      id: "spark",
      name: "Spark",
      price: "₹4,999",
      period: "one-time",
      popular: false,
      badge: "STARTUP BOOST",
      perfectFor: "Personal brands, quick portfolios, and MVP launches.",
      features: [
        "1 Immersive Landing Page",
        "Responsive Mobile Architecture",
        "Interactive Secure Contact Form",
        "WhatsApp Direct Integration",
        "Modern Apple-inspired Styling",
        "Free Deployment on Vercel/Netlify",
        "Free App subdomain",
      ],
      techStack: ["React 19", "Tailwind CSS"],
    },
    {
      id: "growth",
      name: "Growth",
      price: "₹7,999",
      period: "one-time",
      popular: false,
      badge: "BUSINESS ACCELERATOR",
      perfectFor: "Growing local companies needing structured pages.",
      features: [
        "3 to 5 Custom Pages (Home, About, Services, etc.)",
        "Comprehensive Contact Forms",
        "Google Maps Platform Pin",
        "Tailored Feature Sections Accordions",
        "High Performance Lighthouse Audits",
        "Free App subdomain",
        "Custom DNS Domain Setup Helper",
      ],
      techStack: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹14,999",
      period: "one-time",
      popular: false,
      badge: "ELITE PRESTIGE",
      perfectFor: "Creators and companies requiring dynamic components.",
      features: [
        "5 to 10 Tailored Complex Pages",
        "Premium Bespoke UI/UX System",
        "Advanced Verification Forms",
        "Integrated CMS Blog Module",
        "Comprehensive Portfolio Showcase Grid",
        "Advanced Core Web Vitals Optimization",
        "Priority Email & Slack Support",
        "Smooth page animations & transitions",
      ],
      techStack: ["React", "Custom CMS", "Animations"],
    },
    {
      id: "elite",
      name: "Elite",
      price: "₹24,999",
      period: "one-time",
      popular: true,
      badge: "PREMIUM ULTIMATE",
      perfectFor: "Disruptive brands looking for futuristic showcase.",
      features: [
        "Fully Bespoke Infinite Website",
        "Breathtaking Spatial Layouts",
        "Magnetic Buttons & Cursor Deflection",
        "Immersive Lenis Smooth Scroll",
        "Interactive 3D Particles Canvas",
        "Interactive AI Chatbot Integration",
        "Custom Dark Cyber Bento Layouts",
        "Highest Speed Metrics & Dedicated Audits",
        "1-on-1 Direct Support Line with Manan",
      ],
      bonus: "Free Custom Domain Name Registration for 1 Year Included.",
      techStack: ["Three.js", "Gemini Node", "Framer", "GSAP"],
    },
  ];

  const addOns: AddOn[] = [
    { id: "ai", name: "AI Chatbot Integration", price: "₹2,499", description: "Train an interactive LLM assistant connected to your API to answer buyer questions automatically." },
    { id: "three", name: "3D Custom Canvas Background", price: "₹3,999", description: "Immerse clients with real-time WebGL particle shaders, rotating octahedron grids, or mouse interactive orbital nodes." },
    { id: "dash", name: "Custom Admin Dashboard", price: "₹5,999", description: "Secure, credential-walled dashboard with charts, data filters, database tables and telemetry stats." },
    { id: "ecommerce", name: "E-Commerce Integration", price: "₹4,999", description: "Bespoke storefront setup with cart indicators, stripe processing gates, checkout prompts and listings dashboards." },
    { id: "cms", name: "SEO Blog Setup", price: "₹1,999", description: "Highly structured markdown-based blogging compiler to boost Google rankings automatically." },
    { id: "maintenance", name: "Active VIP Maintenance", price: "₹999/mo", description: "Regular DNS configurations checks, monthly backups, framework security patches, and minor text/asset tweaks." },
  ];

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
    <div className="flex flex-col gap-16 w-full" id="pricing-plans-root">
      
      {/* Dynamic Grid Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan) => {
          const isElite = plan.id === "elite";
          return (
            <div
              key={plan.id}
              ref={(el) => {
                cardRefs.current[plan.id] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, plan.id)}
              className={`spotlight-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 relative ${
                isElite
                  ? "bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border-cyber-purple shadow-[0_15px_40px_rgba(124,58,237,0.15)] ring-1 ring-cyber-purple/30 text-white"
                  : "glass-panel border-white/5 hover:border-white/10"
              }`}
              id={`pricing-card-${plan.id}`}
            >
              {/* Highlight Neon Flare for Elite */}
              {isElite && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-violet to-transparent animate-pulse" />
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-[8px] tracking-widest px-2.5 py-1 rounded-sm ${
                    isElite ? "bg-cyber-purple/20 text-cyber-violet border border-cyber-purple/20" : "bg-zinc-950/80 text-zinc-500 border border-white/5"
                  }`}>
                    {plan.badge}
                  </span>
                  {isElite && (
                    <span className="flex items-center gap-1 font-heading text-[9px] font-extrabold text-cyber-violet tracking-widest animate-pulse">
                      <Star className="w-3 h-3 fill-cyber-violet" /> POPULAR
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-black text-xl text-white mb-1 tracking-tight flex items-center gap-2">
                  {plan.id === "spark" && <Zap className="w-4 h-4 text-amber-500" />}
                  {plan.id === "growth" && <Rocket className="w-4 h-4 text-cyber-blue" />}
                  {plan.id === "pro" && <Shield className="w-4 h-4 text-pink-500" />}
                  {plan.id === "elite" && <Crown className="w-4 h-4 text-cyber-violet" />}
                  {plan.name}
                </h3>
                <p className="font-sans text-[11px] text-zinc-500 tracking-wide mb-6 leading-relaxed font-light">
                  {plan.perfectFor}
                </p>

                {/* Pricing amount */}
                <div className="flex items-baseline gap-1 md:gap-2 mb-6 pb-6 border-b border-white/5">
                  <span className="font-heading font-extrabold text-3xl md:text-4xl text-white text-glow">
                    {plan.price}
                  </span>
                  <span className="font-sans text-[10px] text-zinc-500 tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Tech Stack List Indicator */}
                <div className="flex gap-1.5 mb-6 flex-wrap">
                  {plan.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-[8px] text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-white/5 uppercase">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List Checklist */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isElite ? "text-cyber-violet text-glow" : "text-cyber-blue"}`} />
                      <span className="font-sans text-xs text-zinc-300 leading-normal font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Specific unique bonus banner inside pricing layout */}
                {plan.bonus && (
                  <div className="mb-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/10 font-sans text-[11px] text-purple-200">
                    <span className="font-bold uppercase text-[9px] tracking-widest text-cyber-violet flex items-center gap-1 mb-1">
                      <Sparkles className="w-3.5 h-3.5" /> Elite Benefit
                    </span>
                    {plan.bonus}
                  </div>
                )}

                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-heading text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isElite
                      ? "bg-white text-black hover:bg-zinc-200 shadow-[0_0_15px_rgba(124,58,237,0.35)]"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 border border-white/5 hover:border-white/10"
                  }`}
                >
                  SELECT {plan.name.toUpperCase()}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Add-ons Bento Catalog Section */}
      <div className="flex flex-col gap-6" id="add-ons-custom-catalog">
        <div className="flex flex-col gap-1 border-b border-white/5 pb-4">
          <h3 className="font-heading font-black text-lg text-white tracking-tight">
            Dynamic System Add-ons
          </h3>
          <p className="font-sans text-xs text-zinc-500 leading-normal font-light">
            Need micro modules, persistent integrations, or CMS widgets? Bolt them onto any core plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {addOns.map((add) => (
            <div
              key={add.id}
              className="p-5 rounded-2xl glass-panel border border-white/5 relative overflow-hidden group hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h4 className="font-heading font-semibold text-sm text-zinc-200 leading-tight">
                    {add.name}
                  </h4>
                  <span className="font-mono text-xs text-cyber-violet font-semibold text-glow">
                    {add.price}
                  </span>
                </div>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed font-light mb-4">
                  {add.description}
                </p>
              </div>

              <button 
                onClick={() => onPlanSelect(`Add-on: ${add.name}`)}
                className="self-start text-[10px] font-heading font-extrabold tracking-widest text-zinc-400 group-hover:text-cyber-blue transition-colors flex items-center gap-1.5"
              >
                REQUEST ADD-ON <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
