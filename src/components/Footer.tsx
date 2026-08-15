import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Instagram, 
  Terminal, 
  ExternalLink, 
  ShieldCheck, 
  Scale, 
  FileText, 
  X, 
  Check 
} from "lucide-react";

interface FooterProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

interface LegalDoc {
  id: string;
  title: string;
  lastUpdated: string;
  icon: typeof FileText;
  sections: {
    heading: string;
    content: string;
    highlights?: string[];
  }[];
}

export default function Footer({ activePage, setActivePage }: FooterProps) {
  const [activeDoc, setActiveDoc] = useState<LegalDoc | null>(null);

  const socials = [
    { label: "WhatsApp", icon: MessageSquare, value: "https://wa.me/919082851196", hoverColor: "hover:text-emerald-400 hover:scale-110" },
    { label: "Email", icon: Mail, value: "mailto:contact@manancodes.com", hoverColor: "hover:text-purple-400 hover:scale-110" },
    { label: "LinkedIn", icon: Linkedin, value: "https://www.linkedin.com/in/manan-maisheri/", hoverColor: "hover:text-blue-400 hover:scale-110" },
    { label: "GitHub", icon: Github, value: "https://github.com/MananMMAISHERI", hoverColor: "hover:text-zinc-100 hover:scale-110" },
    { label: "Instagram", icon: Instagram, value: "https://www.instagram.com/manancodes/?utm_source=ig_web_button_share_sheet", hoverColor: "hover:text-pink-400 hover:scale-110" },
  ];

  const legalDocuments: LegalDoc[] = [
    {
      id: "privacy",
      title: "Privacy Statement",
      lastUpdated: "June 2026",
      icon: ShieldCheck,
      sections: [
        {
          heading: "Scope of Core Node Telemetry",
          content: "We construct and execute custom web systems modeled after peak privacy standards. Any data compiled during query submissions or telemetry forms is securely transmitted directly to verified endpoints and is never exposed to public registries.",
          highlights: ["No trace tracking", "Direct end-to-end transport encryption", "Bespoke database nodes isolation"]
        },
        {
          heading: "Voluntary Information Sharing",
          content: "We only record identifiers willingly provided during project brief compilation, specifically: your name, contact coordinates, selected plan specifications, and the project brief parameters. These data records are strictly used to schedule system architectural reviews."
        },
        {
          heading: "Third-Party Data Pipeline Security",
          content: "Active forms utilize secure Formspree pipelines encrypted with HTTPS protocols. There are zero analytical scripts monitoring your session files without explicitly granted cookie consents.",
          highlights: ["HTTPS transport enforced", "Zero-trust pipeline defaults"]
        }
      ]
    },
    {
      id: "terms",
      title: "Terms & Code Conditions",
      lastUpdated: "June 2026",
      icon: Scale,
      sections: [
        {
          heading: "Bespoke Structural Custom Agreements",
          content: "All source files, interactive assets, and compiled codebases are executed under pre-existing or customized single-sign-off project agreements. No development cycles are launched without a validated client contract.",
          highlights: ["Modular deliverables criteria", "Milestone validation checks"]
        },
        {
          heading: "System Output License Transfer",
          content: "Intellectual property ownership of web structures, creative graphics, and custom module layers are systematically transferred to the customer exclusively upon successful receipt of the final settlement node.",
          highlights: ["Post-payment license automatic release", "Exclusion of pre-built proprietary framework layers"]
        },
        {
          heading: "Hosting Parity & Performance Benchmarks",
          content: "Web assets are balanced and calibrated to register 90+ ratings on Google Lighthouse audits inside standard environments. We are not liable for subsequent client modifications that break optimization profiles."
        }
      ]
    },
    {
      id: "cookies",
      title: "Cookie Settings & Local Tokens",
      lastUpdated: "June 2026",
      icon: FileText,
      sections: [
        {
          heading: "Transient Memory Operations",
          content: "We use standard browser parameters such as local storage values solely to track dynamic structural states (e.g., active page selections or pre-defined interface layouts). These parameters do not gather behavioral trails.",
          highlights: ["Saves your UI parameters locally", "No cross-site marketing tags integrated"]
        },
        {
          heading: "Consent Configurations",
          content: "By continuing to interface with this portal node, you agree to the minimal execution variables required for transition effects, Lenis scrolling speeds, and WebGL system configurations."
        }
      ]
    }
  ];

  return (
    <footer className="w-full bg-zinc-950/20 border-t border-white/5 py-12 mt-20 relative z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left column - Branding */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <div 
            onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center p-0.5 relative overflow-hidden group-hover:border-cyber-violet/30 transition-all">
              <img 
                src="https://lh3.googleusercontent.com/d/15W4slRw4LSwz7p3RPaJqrUjqmFyXYw50" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain" 
                alt="MananCodes logo"
              />
            </div>
            <span className="font-heading font-black text-base text-zinc-100 group-hover:text-cyber-violet transition-colors">
              BUILD WITH <span className="text-cyber-blue">KM</span>
            </span>
          </div>

          <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
            Made for What&apos;s Next. Bespoke interactive systems constructed to modern standards with highly-optimized modules and fluid animations.
          </p>

          <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
            © 2026 BUILD WITH KM. MADE FOR WHAT&apos;S NEXT.
          </span>
        </div>

        {/* Middle column - System Map Navigation */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="font-heading font-bold text-xs text-zinc-300 tracking-wider uppercase">
            SYSTEM PARAMETERS
          </h4>
          <ul className="flex flex-col gap-2 font-mono text-[11px] text-zinc-400">
            <li>
              <button 
                onClick={() => setActivePage("home")}
                className={`hover:text-cyber-violet transition-colors text-left ${activePage === "home" ? "text-cyber-violet font-semibold" : ""}`}
              >
                // SYSTEM_HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage("plans")}
                className={`hover:text-cyber-violet transition-colors text-left ${activePage === "plans" ? "text-cyber-violet font-semibold" : ""}`}
              >
                // SPECIFICATION_PLANS
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActivePage("contact")}
                className={`hover:text-cyber-violet transition-colors text-left ${activePage === "contact" ? "text-cyber-violet font-semibold" : ""}`}
              >
                // TRANSMIT_CHANNEL
              </button>
            </li>
          </ul>
        </div>

        {/* Right column - Legal Node overlay access & Socials */}
        <div className="md:col-span-4 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 tracking-wider uppercase">
              LEGAL NODES
            </h4>
            <div className="flex flex-wrap gap-2">
              {legalDocuments.map((doc) => {
                const Icon = doc.icon;
                return (
                  <button
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-white/10 hover:bg-zinc-850 font-sans text-[10px] text-zinc-300 transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyber-violet" />
                    <span>{doc.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-xs text-zinc-300 tracking-wider uppercase">
              SECURE CHANNELS
            </h4>
            <div className="flex items-center gap-3">
              {socials.map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.value}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-zinc-500 transition-all ${soc.hoverColor}`}
                    title={soc.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* OVERLAY LEGAL VIEWPORT DIALOG PANEL */}
      <AnimatePresence>
        {activeDoc && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
            
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setActiveDoc(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="w-full max-w-2xl rounded-2xl bg-[#09090b] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col max-h-[85vh]"
            >
              
              {/* Radial gradient glow in dialog */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-cyber-purple/10 blur-[60px] pointer-events-none" />

              {/* Title Header strip */}
              <div className="p-5 border-b border-white/5 flex items-center justify-between relative z-10 bg-zinc-950/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-cyber-violet/10 border border-cyber-violet/20 flex items-center justify-center">
                    <activeDoc.icon className="w-4 h-4 text-cyber-violet" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-base text-white tracking-tight uppercase">
                      {activeDoc.title}
                    </h3>
                    <p className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
                      NODE REVISION_DATE: {activeDoc.lastUpdated}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDoc(null)}
                  className="p-1.5 rounded-lg border border-white/5 bg-zinc-900/50 hover:bg-zinc-800 hover:border-white/15 text-zinc-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Legal scrollable body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/5 relative z-10">
                {activeDoc.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    {/* Highlighted slim bold title statement */}
                    <h4 className="font-heading font-bold text-sm text-zinc-200 tracking-tight flex items-center gap-2 border-l-2 border-cyber-violet pl-2.5">
                      {section.heading}
                    </h4>

                    {/* Normal simple description body (simple white statement style layout) */}
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                      {section.content}
                    </p>

                    {/* Section features check list */}
                    {section.highlights && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 pl-2">
                        {section.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="font-sans text-[11px] text-zinc-300 leading-tight">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Close Button strip */}
              <div className="p-4 border-t border-white/5 bg-zinc-950/70 flex items-center justify-end gap-3 z-10">
                <button
                  onClick={() => setActiveDoc(null)}
                  className="px-5 py-2 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-heading font-bold text-[10px] uppercase tracking-wider rounded-lg shadow-md hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
                >
                  ACKNOWLEDGE SPECIFICATIONS
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
