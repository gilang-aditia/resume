"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, RefreshCw, Bot, User, CornerDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_SUGGESTIONS = [
  { label: "Siapa Gilang?", text: "Siapa Gilang Aditia dan apa keahlian utamanya?" },
  { label: "Proyek Terbaik", text: "Apa saja proyek terbaik yang pernah Gilang kembangkan?" },
  { label: "Pengalaman Kerja", text: "Bisa ceritakan tentang pengalaman kerja Gilang saat ini?" },
  { label: "Hubungi Gilang", text: "Bagaimana cara menghubungi Gilang untuk kolaborasi?" }
];

const SLASH_COMMANDS = [
  { cmd: "/siapa", label: "Siapa Gilang Aditia?", text: "Siapa Gilang Aditia dan apa keahlian utamanya?" },
  { cmd: "/proyek", label: "Apa saja proyek terbaik Gilang?", text: "Apa saja proyek terbaik yang pernah Gilang kembangkan?" },
  { cmd: "/pengalaman", label: "Bagaimana pengalaman kerja Gilang?", text: "Bisa ceritakan tentang pengalaman kerja Gilang saat ini?" },
  { cmd: "/kontak", label: "Bagaimana cara menghubungi Gilang?", text: "Bagaimana cara menghubungi Gilang untuk kolaborasi?" },
  { cmd: "/bantuan", label: "Tampilkan bantuan perintah", text: "Tolong tampilkan daftar semua perintah slash yang tersedia." }
];

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya adalah AI Agent portofolio Gilang. Saya dapat membantu Anda mengetahui lebih banyak tentang keahlian, pengalaman kerja, proyek, atau cara menghubungi Gilang. Ada yang ingin Anda tanyakan? (Ketik '/' untuk melihat pintasan perintah!)"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter commands based on input
  const showSlashMenu = input.startsWith("/");
  const filteredCommands = SLASH_COMMANDS.filter((command) =>
    command.cmd.toLowerCase().startsWith(input.toLowerCase())
  );

  // Auto-scroll to the bottom of the message container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, isLoading]);

  // Keep active index in bounds when filtered commands list size changes
  useEffect(() => {
    setActiveCommandIndex(0);
  }, [input]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Map frontend messages structure to what the API endpoint expects
      const apiMessages = updatedMessages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: apiMessages })
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan respon dari AI.");
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { role: "assistant", content: data.text }]);
    } catch (error: any) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, sepertinya terjadi kendala koneksi dengan AI. Silakan coba lagi beberapa saat lagi."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    if (window.confirm("Apakah Anda ingin menghapus riwayat obrolan?")) {
      setMessages([
        {
          role: "assistant",
          content: "Halo! Riwayat obrolan telah dihapus. Ada lagi yang ingin Anda tanyakan seputar portofolio Gilang?"
        }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (showSlashMenu && filteredCommands.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveCommandIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveCommandIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selectedCmd = filteredCommands[activeCommandIndex];
        if (selectedCmd) {
          handleSend(selectedCmd.text);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white",
            isOpen
              ? "bg-emerald-500 dark:bg-white text-white dark:text-black border border-emerald-500/20 dark:border-white/20"
              : "bg-white/90 dark:bg-emerald-500/90 text-black dark:text-white border border-black/10 dark:border-white/10 backdrop-blur-md"
          )}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Tanya AI Agent"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                className="relative flex items-center justify-center"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageSquare className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={cn(
              "fixed bottom-24 right-6 z-50 flex flex-col w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[75vh]",
              "bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden font-mono"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-inner">
                  <Sparkles className="w-4 h-4 animate-pulse text-yellow-300 dark:text-amber-500" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    AI U E O (AI nya orang ganteng)
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </span>
                  <span className="text-[10px] text-foreground/60 leading-none">Online & Ready</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-foreground/70 hover:text-black dark:hover:text-white transition-colors"
                  title="Hapus riwayat obrolan"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-foreground/70 hover:text-black dark:hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar relative">
              {messages.map((msg, index) => {
                const isAssistant = msg.role === "assistant";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "flex items-start gap-2.5 max-w-[85%]",
                      isAssistant ? "mr-auto text-left" : "ml-auto flex-row-reverse text-right"
                    )}
                  >
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center shrink-0 border",
                        isAssistant
                          ? "bg-black/5 dark:bg-white/5 border-black/15 dark:border-white/15 text-black dark:text-white"
                          : "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
                      )}
                    >
                      {isAssistant ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>
                    <div
                      className={cn(
                        "p-3 rounded-2xl text-xs leading-relaxed wrap-break-words border",
                        isAssistant
                          ? "bg-white/50 dark:bg-black/50 border-black/5 dark:border-white/5 text-black/80 dark:text-white/80 rounded-tl-sm"
                          : "bg-black/90 dark:bg-white/90 border-black dark:border-white text-white dark:text-black rounded-tr-sm shadow-md"
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                );
              })}

              {/* Suggestions Panel (Rendered only on initial or clear state) */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <p className="text-[10px] text-left text-foreground/50 uppercase tracking-widest mb-2 px-1">
                    Coba Tanyakan:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {QUICK_SUGGESTIONS.map((sug, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(sug.text)}
                        className={cn(
                          "p-2 text-[10px] font-semibold text-left rounded-xl transition-all duration-200 border",
                          "bg-white/40 dark:bg-black/40 hover:bg-black/5 dark:hover:bg-white/5",
                          "border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 text-black/75 dark:text-white/75"
                        )}
                      >
                        {sug.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2.5 mr-auto text-left max-w-[85%]"
                >
                  <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 border border-black/15 dark:border-white/15 flex items-center justify-center shrink-0 text-black dark:text-white">
                    <Bot className="w-3.5 h-3.5 animate-bounce" />
                  </div>
                  <div className="p-3 bg-white/50 dark:bg-black/50 border border-black/5 dark:border-white/5 rounded-2xl rounded-tl-sm text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-black/40 dark:bg-white/40 rounded-full animate-bounce"></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Slash Menu Popup Overlay */}
            <AnimatePresence>
              {showSlashMenu && filteredCommands.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-16 left-3 right-3 bg-white/95 dark:bg-black/95 border border-black/10 dark:border-white/10 rounded-xl shadow-2xl p-1.5 z-50 backdrop-blur-md max-h-[190px] overflow-y-auto custom-scrollbar flex flex-col gap-0.5"
                >
                  <div className="text-[10px] text-left text-foreground/40 font-semibold px-2.5 py-1.5 uppercase tracking-widest border-b border-black/5 dark:border-white/5 mb-1 flex items-center justify-between">
                    <span>Pintasan Perintah</span>
                    <span className="flex items-center gap-1 normal-case text-[9px] opacity-75">
                      Gunakan <span className="px-1 bg-black/5 dark:bg-white/10 rounded">↑↓</span> dan <kbd className="px-1 bg-black/5 dark:bg-white/10 rounded font-sans">Enter</kbd>
                    </span>
                  </div>
                  {filteredCommands.map((command, idx) => {
                    const isActive = idx === activeCommandIndex;
                    return (
                      <button
                        key={command.cmd}
                        type="button"
                        onClick={() => handleSend(command.text)}
                        onMouseEnter={() => setActiveCommandIndex(idx)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-xs transition-colors flex items-center justify-between font-mono focus:outline-none",
                          isActive
                            ? "bg-emerald-500 text-white"
                            : "text-foreground/80 hover:bg-black/5 dark:hover:bg-white/5"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className={cn("font-bold", isActive ? "text-white" : "text-emerald-500 dark:text-emerald-400")}>
                            {command.cmd}
                          </span>
                          <span className="opacity-80">— {command.label}</span>
                        </div>
                        {isActive && <CornerDownLeft className="w-3 h-3 text-white animate-pulse" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // If slash menu is showing, let keydown handle it, otherwise send normally
                if (showSlashMenu && filteredCommands.length > 0) {
                  const selectedCmd = filteredCommands[activeCommandIndex];
                  if (selectedCmd) handleSend(selectedCmd.text);
                } else {
                  handleSend(input);
                }
              }}
              className="p-3 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex gap-2 items-center relative"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tanya tentang Gilang (ketik '/' untuk shortcut)..."
                disabled={isLoading}
                className={cn(
                  "flex-1 bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-3 py-2 text-xs",
                  "text-black dark:text-white placeholder-foreground/40 focus:outline-none focus:border-black dark:focus:border-white",
                  "transition-colors"
                )}
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isLoading}
                className={cn(
                  "p-2 rounded-xl flex items-center justify-center shrink-0 border transition-all",
                  input.trim() && !isLoading
                    ? "bg-emerald-500 border-emerald-500 text-white hover:opacity-90"
                    : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-foreground/30 cursor-not-allowed"
                )}
                whileHover={input.trim() && !isLoading ? { scale: 1.05 } : {}}
                whileTap={input.trim() && !isLoading ? { scale: 0.95 } : {}}
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
