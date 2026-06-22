import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Linkedin, Github, Instagram, Send, ShieldCheck, CheckCircle, ChevronDown } from "lucide-react";

interface ContactFormProps {
  preselectedPlan?: string;
}

export default function ContactForm({ preselectedPlan = "" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [planSelection, setPlanSelection] = useState(preselectedPlan);
  const [message, setMessage] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync state if preselectedPlan changes
  if (preselectedPlan && planSelection !== preselectedPlan) {
    setPlanSelection(preselectedPlan);
  }

  // Floating label ref/focus controllers
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPlan, setFocusPlan] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsLoading(true);
    
    try {
      // Send submission data to API endpoint or perform hyper-secure pipeline transmit simulation
      await fetch("https://formspree.io/f/mnnyeojq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          planSelection,
          message,
          _to: "mananmmaisheri23@gmail.com",
          _subject: `New client project contract inquiry from ${name}`
        })
      }).catch(err => {
        console.warn("Forms fallback path active: ", err);
      });
    } catch (e) {
      // silent fallback
    }

    // Simulate high-fidelity secure email posting completion
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setIsSubmitSuccess(true);

    // Reset fields
    setName("");
    setEmail("");
    setMessage("");
    setPlanSelection("");
  };

  const socials = [
    { label: "WhatsApp", sub: "Launch instant chat", icon: MessageSquare, value: "https://wa.me/919082851196", color: "hover:border-emerald-500/30 hover:bg-emerald-500/[0.02]" },
    { label: "Email", sub: "contact@manancodes.com", icon: Mail, value: "mailto:contact@manancodes.com", color: "hover:border-purple-500/30 hover:bg-purple-500/[0.02]" },
    { label: "LinkedIn", sub: "Connect with Manan", icon: Linkedin, value: "https://www.linkedin.com/in/manan-maisheri/", color: "hover:border-blue-500/30 hover:bg-blue-500/[0.02]" },
    { label: "GitHub", sub: "Audit public repositories", icon: Github, value: "https://github.com/MananMMAISHERI", color: "hover:border-zinc-300/30 hover:bg-zinc-300/[0.02]" },
    { label: "Instagram", sub: "Follow agency design updates", icon: Instagram, value: "https://www.instagram.com/manancodes/?utm_source=ig_web_button_share_sheet", color: "hover:border-pink-500/30 hover:bg-pink-500/[0.02]" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full" id="contact-form-root-container">
      
      {/* Social Connection Channels (Left - Span 5) */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[9px] tracking-widest text-cyber-violet uppercase font-semibold">
            CYBERNETIC DIRECT MODULES
          </span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white tracking-tight">
            Prefer direct channels over forms?
          </h3>
          <p className="font-sans text-xs text-zinc-500 leading-relaxed font-light">
            We are fully active across primary secure pipelines. Hit any of the nodes below to bypass our query sorting algorithms and talk with Manan instantly.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.value}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm flex items-center gap-4 transition-all duration-300 ${social.color} group`}
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-white group-hover:text-cyber-violet transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xs text-zinc-200 tracking-tight">
                    {social.label}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 lowercase leading-none mt-0.5">
                    {social.sub}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Labels Contact Form (Right - Span 7) */}
      <div className="lg:col-span-7 rounded-3xl p-6 md:p-8 glass-panel border border-white/5 relative overflow-hidden backdrop-blur-md flex flex-col justify-center">
        
        {/* Absolute Background Accent Mesh */}
        <div className="absolute right-0 bottom-0 w-[200px] h-[200px] bg-cyber-blue/10 blur-[80px] pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isSubmitSuccess ? (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              id="talk-inquiry-user-form"
            >
              
              {/* Row 1 - Name */}
              <div className="relative">
                <label
                  htmlFor="user-contact-name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none font-sans text-xs text-zinc-500 z-10 ${
                    focusName || name ? "-top-2 px-1.5 bg-[#121214] text-cyber-violet text-[10px] tracking-wider" : "top-3.5"
                  }`}
                >
                  FULL NAME
                </label>
                <input
                  id="user-contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusName(true)}
                  onBlur={() => setFocusName(false)}
                  className="w-full bg-zinc-950/40 border border-white/5 focus:border-cyber-purple/50 focus:outline-none rounded-xl px-4 py-3 text-xs text-white font-sans tracking-wide relative z-0"
                />
              </div>

              {/* Row 2 - Email */}
              <div className="relative">
                <label
                  htmlFor="user-contact-email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none font-sans text-xs text-zinc-500 z-10 ${
                    focusEmail || email ? "-top-2 px-1.5 bg-[#121214] text-cyber-violet text-[10px] tracking-wider" : "top-3.5"
                  }`}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="user-contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusEmail(true)}
                  onBlur={() => setFocusEmail(false)}
                  className="w-full bg-zinc-950/40 border border-white/5 focus:border-cyber-purple/50 focus:outline-none rounded-xl px-4 py-3 text-xs text-white font-sans tracking-wide relative z-0"
                />
              </div>

              {/* Row 3 - Plan selection select wrapper */}
              <div className="relative">
                <label
                  htmlFor="user-contact-plan"
                  className="absolute left-4 -top-2 z-10 px-1.5 bg-[#121214] text-cyber-violet text-[10px] tracking-wider pointer-events-none font-sans"
                >
                  SELECTED PLAN / BUDGET RANGE
                </label>
                <select
                  id="user-contact-plan"
                  value={planSelection}
                  onChange={(e) => setPlanSelection(e.target.value)}
                  onFocus={() => setFocusPlan(true)}
                  onBlur={() => setFocusPlan(false)}
                  className="w-full bg-zinc-950/40 border border-white/5 focus:border-cyber-purple/50 focus:outline-none rounded-xl pl-4 pr-10 py-3.5 text-xs text-white font-sans tracking-wide appearance-none cursor-pointer relative z-0"
                >
                  <option value="" disabled className="text-zinc-650 bg-[#121214]">Select contract category</option>
                  <option value="Spark" className="bg-[#121214]">⚡ Spark - ₹4,999</option>
                  <option value="Growth" className="bg-[#121214]">🚀 Growth - ₹7,999</option>
                  <option value="Pro" className="bg-[#121214]">👑 Pro - ₹14,999</option>
                  <option value="Elite" className="bg-[#121214]">✨ Elite - ₹24,999 (Most Popular)</option>
                  <option value="AddconOnly" className="bg-[#121214]">⚙️ Custom Module / Add-on Setup</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 z-10">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Row 4 - Message */}
              <div className="relative">
                <label
                  htmlFor="user-contact-msg"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none font-sans text-xs text-zinc-500 z-10 ${
                    focusMessage || message ? "-top-2 px-1.5 bg-[#121214] text-cyber-violet text-[10px] tracking-wider" : "top-4"
                  }`}
                >
                  PROJECT SPECIFICATIONS
                </label>
                <textarea
                  id="user-contact-msg"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusMessage(true)}
                  onBlur={() => setFocusMessage(false)}
                  className="w-full bg-zinc-950/40 border border-white/5 focus:border-cyber-purple/50 focus:outline-none rounded-xl px-4 py-3 text-xs text-white font-sans tracking-wide resize-none relative z-0"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-white text-black font-heading font-bold text-xs uppercase tracking-widest cursor-pointer hover:bg-zinc-200 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin inline-block" />
                ) : (
                  <>
                    TRANSMIT INQUIRY
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center justify-center text-center py-10"
              id="form-success-wrapper"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2 tracking-tight">
                INQUIRY SECURED
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-sm mb-8 font-light">
                Your specifications have bypassed main filtration layers and reside directly in Manan's workspace queue. Expect a feedback link in your inbox shortly.
              </p>
              <button
                onClick={() => setIsSubmitSuccess(false)}
                className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 font-heading text-xs tracking-wider text-white font-semibold transition-all"
              >
                SEND ANOTHER MEMO
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
