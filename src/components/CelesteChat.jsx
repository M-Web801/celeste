
import { useState, useRef, useEffect } from "react";

const SUGGESTED_PROMPTS = [
  "What's perfect for a gala?",
  "Show me your bestsellers",
  "I need a gift under N100k",
  "What bags are ready to ship?",
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#8C5230]"
          style={{ animation: "celeste-bounce 1.2s ease-in-out infinite", animationDelay: (i * 0.2) + "s" }}
        />
      ))}
    </div>
  );
}

const CelesteChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour. I'm Céleste, your personal style guide. How may I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (messagesEndRef.current) messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 300);
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const sendMessage = async (textArg) => {
    const userText = (textArg !== undefined ? textArg : input).trim();
    if (!userText || isTyping) return;
    setInput("");

    const updatedMessages = [...messages, { role: "user", content: userText }];
    setMessages(updatedMessages);
    setIsTyping(true);

    // Remove the first assistant greeting before sending — Gemini needs to start with user
    const apiMessages = updatedMessages
      .filter((m, i) => !(i === 0 && m.role === "assistant"))
      .map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      const reply = data.content?.[0]?.text
        || data.error
        || "I could not get a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      if (!isOpen) setHasUnread(true);

    } catch (err) {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Could not reach proxy. Make sure Terminal 1 shows: Celeste proxy running on http://localhost:3001",
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes celeste-bounce { 0%,80%,100%{transform:translateY(0);opacity:0.4} 40%{transform:translateY(-5px);opacity:1} }
        @keyframes celeste-slide-up { from{opacity:0;transform:translateY(20px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes celeste-pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.55);opacity:0} }
        .celeste-chat-window { animation: celeste-slide-up 0.35s cubic-bezier(0.22,1,0.36,1) forwards; }
        .celeste-msg-in { animation: celeste-slide-up 0.3s cubic-bezier(0.22,1,0.36,1) forwards; }
        .celeste-scrollbar::-webkit-scrollbar { width: 4px; }
        .celeste-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .celeste-scrollbar::-webkit-scrollbar-thumb { background: #C9B89A; border-radius: 2px; }
      `}</style>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        {hasUnread && !isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-[#B8963E]"
            style={{ animation: "celeste-pulse-ring 1.4s ease-out infinite" }} />
        )}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #3E1F0D, #6B3E26)" }}
          aria-label="Open Céleste chat"
        >
          {isOpen ? (
            <span className="text-[#F5EFE6] text-xl leading-none">×</span>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5EFE6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          )}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#B8963E] rounded-full border-2 border-white" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="celeste-chat-window fixed bottom-24 right-6 z-[9998] flex flex-col overflow-hidden"
          style={{
            width: "min(380px, calc(100vw - 2rem))",
            height: "min(560px, calc(100dvh - 8rem))",
            background: "#FAF7F3",
            boxShadow: "0 20px 60px rgba(62,31,13,0.22), 0 4px 16px rgba(62,31,13,0.1)",
            border: "1px solid rgba(184,150,62,0.2)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #3E1F0D 0%, #6B3E26 100%)" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(184,150,62,0.3)", border: "1px solid rgba(184,150,62,0.5)" }}
            >
              <span className="text-[#EDE0CC] text-sm" style={{ fontFamily: "Cormorant Garamond, serif" }}>C</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#F5EFE6] text-base font-light leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Céleste
              </p>
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#C9B89A]">Style Assistant · Online</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#B8963E] flex-shrink-0" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto celeste-scrollbar px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={"celeste-msg-in flex " + (msg.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className="max-w-[82%] px-4 py-3"
                  style={msg.role === "user"
                    ? { background: "linear-gradient(135deg, #3E1F0D, #6B3E26)", color: "#F5EFE6" }
                    : { background: "#FFF", color: "#3E1F0D", border: "1px solid rgba(184,150,62,0.15)", boxShadow: "0 2px 8px rgba(62,31,13,0.06)" }
                  }
                >
                  <p className="leading-relaxed" style={{
                    fontFamily: msg.role === "assistant" ? "Cormorant Garamond, serif" : "inherit",
                    fontSize: msg.role === "assistant" ? "0.92rem" : "0.8rem",
                  }}>
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[rgba(184,150,62,0.15)] shadow-sm">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested prompts */}
          {messages.length === 1 && !isTyping && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 flex-shrink-0">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="px-3 py-1.5 text-[0.58rem] tracking-[0.12em] uppercase border border-[#B8963E]/40 text-[#6B3E26] hover:bg-[#3E1F0D] hover:text-[#F5EFE6] hover:border-[#3E1F0D] transition-all duration-200"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-4 pb-4 pt-2 flex-shrink-0 border-t border-[#E8DDD3]">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                id="celeste-input"
                name="celeste-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder="Ask Céleste anything…"
                rows={1}
                className="flex-1 resize-none bg-white border border-[#E8DDD3] focus:border-[#B8963E] outline-none px-3 py-2.5 text-[0.8rem] text-[#3E1F0D] placeholder-[#C9B89A] transition-colors duration-200"
                style={{ maxHeight: "80px", fontFamily: "inherit", lineHeight: "1.5" }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-30"
                style={{ background: input.trim() && !isTyping ? "linear-gradient(135deg, #3E1F0D, #6B3E26)" : "#E8DDD3" }}
                aria-label="Send message"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke={input.trim() && !isTyping ? "#F5EFE6" : "#8A6A55"}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
            <p className="text-center text-[0.5rem] tracking-[0.15em] uppercase text-[#C9B89A] mt-2">
              Powered by Céleste AI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CelesteChat;
