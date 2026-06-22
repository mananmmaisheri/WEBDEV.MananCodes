import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Terminal, Loader2, Sparkles, HelpCircle } from "lucide-react";
import { ChatMessage } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "model",
      content: "Welcome, developer. I am the **MananCodes Cybernetic Assistant**.\n\nAsk me anything about our plans, pricing, production speeds, or custom integration services. Let's construct your next digital masterpiece.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const listEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to message list bottom
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Map message lists for clean relative context
      const chatHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: chatHistory }),
      });

      if (!res.ok) {
        throw new Error("Chat service failed");
      }

      const data = await res.json();
      
      const botMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        content: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (e) {
      console.error(e);
      // Fallback message addition if offline or server route fails
      const botMsg: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        content: "I am experiencing high network load on my main nodes, but I am fully powered local. We specialize in building premium sites. Our packages are Spark (₹4,999), Growth (₹7,999), Pro (₹14,999) and Elite (₹24,999). What would you like to design?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (qText: string) => {
    handleSendMessage(qText);
  };

  const quickQuestions = [
    { label: "💰 View Plans", text: "What pricing plans do you offer?" },
    { label: "⚙️ Dev Stack", text: "What technology stack do you use?" },
    { label: "⚡ Speed", text: "How long is your website delivery timescale?" },
    { label: "👑 Elite package", text: "Tell me about the Elite 3D + AI package benefits." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="cybernetic-chatbot-panel">
      
      {/* Floating Toggle Button with Glowing Aura */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyber-purple to-cyber-blue flex items-center justify-center text-white cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-all duration-300 hover:scale-110 active:scale-90"
            aria-label="Open Chatbot AI Assistant"
          >
            <MessageSquare className="w-6 h-6 text-white" />
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-zinc-950 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Terminal Window Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 110, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-[90vw] sm:w-[380px] h-[550px] rounded-2xl glass-panel border border-white/10 flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
          >
            {/* Window Top title */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-white/5 relative">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-cyber-purple/20 border border-cyber-purple/30 flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-cyber-violet" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-[11px] tracking-wide text-white flex items-center gap-1 leading-none">
                    MANANCODES_AI <Sparkles className="w-2.5 h-2.5 text-cyber-violet animate-pulse" />
                  </span>
                  <span className="font-mono text-[8px] text-emerald-500 tracking-wider">
                    ● CORE_ONLINE_NODE_3.5
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-zinc-90 w-6 h-6 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Messages Section */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-zinc-950/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] ${
                    msg.role === "user" ? "self-end items-end" : "self-start items-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-zinc-900 border border-white/10 text-white rounded-tr-none"
                        : "bg-zinc-900/40 border border-cyber-purple/10 text-zinc-300 rounded-tl-none relative before:absolute before:inset-0 before:bg-cyber-purple/[0.02] before:rounded-xl"
                    }`}
                  >
                    {/* Simplified render markdown-like structures manually for precision */}
                    <p className="whitespace-pre-wrap font-sans font-light">
                      {msg.content}
                    </p>
                  </div>
                  <span className="font-mono text-[8px] text-zinc-600 mt-1 uppercase tracking-wider pl-1 pr-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="self-start flex items-center gap-2 max-w-[85%]">
                  <div className="p-3 rounded-xl bg-zinc-900/40 border border-cyber-purple/10 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 text-cyber-violet animate-spin" />
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest leading-none">
                      AI thinking
                    </span>
                  </div>
                </div>
              )}

              <div ref={listEndRef} />
            </div>

            {/* Quick Helper Chip selections */}
            <div className="p-3 border-t border-white/5 flex flex-col gap-2 bg-zinc-950/40">
              <span className="font-mono text-[8px] text-zinc-600 uppercase tracking-widest pl-1 flex items-center gap-1 select-none">
                <HelpCircle className="w-2.5 h-2.5" /> Prompt Index Chips
              </span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
                {quickQuestions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleQuickQuestion(q.text)}
                    className="shrink-0 bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/10 text-zinc-300 rounded-lg px-2.5 py-1 font-sans text-[10px] tracking-wide transition-all cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-zinc-950 border-t border-white/5 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Submit inquiry here..."
                className="flex-1 bg-zinc-900 border border-white/5 focus:border-cyber-purple/50 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 font-sans tracking-wide"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="w-9 h-9 shrink-0 rounded-xl bg-cyber-purple hover:bg-cyber-purple/90 disabled:bg-zinc-800 disabled:opacity-50 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
