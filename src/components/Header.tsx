import { motion } from "motion/react";
import { Terminal, Shield, Zap, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState("");
  const [imgErr, setImgErr] = useState(false);

  useEffect(() => {
    // Current UTC status updater for high-end professional precision
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toISOString().substring(11, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "home", label: "HOME", icon: Zap },
    { id: "plans", label: "PRICING", icon: Shield },
    { id: "contact", label: "TALK", icon: Mail },
  ];

  return (
    <header id="manancodes-glass-header" className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl glass-panel border border-white/5 relative overflow-hidden backdrop-blur-md">
        
        {/* Decorative Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-cyber-blue/5 pointer-events-none" />

        {/* Logo Mark */}
        <div 
          onClick={() => { setActivePage("home"); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group relative z-10"
        >
          <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center relative overflow-hidden ring-1 ring-white/10 group-hover:ring-cyber-violet/30 transition-all duration-300">
            {!imgErr ? (
              <img 
                src="https://lh3.googleusercontent.com/d/15W4slRw4LSwz7p3RPaJqrUjqmFyXYw50" 
                referrerPolicy="no-referrer"
                onError={() => setImgErr(true)}
                className="w-full h-full object-contain p-0.5" 
                alt="MananCodes logo emblem"
              />
            ) : (
              <Terminal className="w-5 h-5 text-cyber-violet" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyber-violet/35 group-hover:h-full group-hover:bg-white/5 transition-all duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg tracking-tight text-white group-hover:text-cyber-violet transition-colors duration-200">
              MANAN<span className="text-cyber-blue">CODES</span>
            </span>
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
              Web Architect Node
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 relative z-10">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative px-4 py-2 rounded-lg font-heading text-xs tracking-widest font-medium transition-all duration-300 flex items-center gap-2 hover:text-white ${
                  isActive ? "text-white bg-white/5" : "text-zinc-400"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-glow"
                    className="absolute inset-0 rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyber-violet animate-pulse" : "text-zinc-500"}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right Live Indicators */}
        <div className="hidden md:flex items-center gap-4 relative z-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/5 font-mono text-[10px] tracking-wider text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
            <span>{liveTime}</span>
          </div>
          <button
            onClick={() => setActivePage("contact")}
            className="px-4 py-2 font-heading bg-white text-black hover:bg-zinc-200 font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer shadow-[0_4px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95"
          >
            START PROJECT
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2 relative z-10">
          <div className="px-2.5 py-1.5 rounded-full bg-zinc-950 border border-white/5 font-mono text-[9px] text-zinc-400">
            {liveTime.substring(0, 5)}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Glass Drawer Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-x-4 top-[84px] p-6 rounded-2xl glass-panel border border-white/10 z-40 flex flex-col gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase border-b border-white/5 pb-2">
            SYSTEM INDEX
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl font-heading text-left text-xs tracking-widest font-semibold flex items-center gap-3 transition-all ${
                    isActive ? "bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/10 border border-white/10 text-white" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyber-violet text-glow" : "text-zinc-500"}`} />
                  {item.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setActivePage("contact");
              setMobileMenuOpen(false);
            }}
            className="w-full py-3.5 bg-gradient-to-tr from-cyber-purple to-cyber-blue text-white font-heading font-bold text-xs tracking-wider rounded-xl shadow-lg transition-all"
          >
            START PROJECT
          </button>
        </motion.div>
      )}
    </header>
  );
}
