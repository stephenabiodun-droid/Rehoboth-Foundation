import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { cn } from "@/lib/utils";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  role: "user" | "model";
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hi! I'm the RHOHF Assistant. How can I help you learn more about our mission or programs today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }, { role: "model", text: "" }]);
    setIsLoading(true);

    try {
      const systemInstruction = `You are a helpful, courteous assistant for RHOHF, a global non-profit organization.
Mission: Empower vulnerable communities globally via sustainable development.
Focus Areas: Health & Wellness (medical care, clean water), Youth Education (scholarships, vocational training), Women's Empowerment (micro-loans, leadership).
Stats: 150k+ lives impacted, 42 projects completed, 12 partner NGOs, $2.4M donations managed.
Keep answers concise (1-2 short paragraphs max), professional, and encouraging. Focus ONLY on answering questions related to the NGO. Guide users to the 'Donate' or 'Get Involved' pages if they express interest in supporting. Do not use Markdown formatting in your response.`;

      // Build context string safely to avoid strict role-alternation formatting errors
      const chatHistory = messages.slice(1).map(m => `${m.role === 'user' ? 'Visitor' : 'Assistant'}: ${m.text}`).join('\n\n');
      const prompt = chatHistory 
        ? `Previous conversation:\n${chatHistory}\n\nVisitor: ${userMsg}\n\nAssistant:` 
        : `Visitor: ${userMsg}\n\nAssistant:`;

      const response = await ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          systemInstruction,
        }
      });

      let fullText = "";
      for await (const chunk of response) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages((prev) => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].text = fullText;
            return newMsgs;
          });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1].text = "I'm sorry, I'm having trouble connecting right now. Please try again later.";
        return newMsgs;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 bg-green hover:bg-green-hover text-white rounded-full flex items-center justify-center shadow-lg transition-transform z-50 hover:-translate-y-1",
          isOpen ? "scale-0" : "scale-100"
        )}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      <div
        className={cn(
          "fixed bottom-6 right-6 w-[350px] sm:w-[400px] bg-white border border-slate-200 rounded-lg shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
        style={{ height: '500px', maxHeight: 'calc(100vh - 40px)' }}
      >
        {/* Header */}
        <div className="bg-navy text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 rounded flex items-center justify-center">
              <span className="font-bold text-green text-[14px]">R</span>
            </div>
            <div>
              <h3 className="font-bold text-[14px] leading-snug">RHOHF Assistant</h3>
              <p className="text-[11px] text-slate-300">We respond instantly</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-neutral">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={cn(
                "max-w-[85%] rounded p-3.5 text-[13px] leading-[1.6]",
                msg.role === "user" 
                  ? "bg-navy text-white self-end rounded-br-none" 
                  : "bg-white border border-slate-200 text-navy self-start rounded-bl-none shadow-sm"
              )}
            >
              {msg.text || (msg.role === "model" && isLoading && idx === messages.length - 1 ? (
                <div className="flex items-center gap-1.5 min-h-[20px] px-2">
                  <span className="w-1.5 h-1.5 bg-green rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-green rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-green rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              ) : null)}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <form 
          onSubmit={handleSend}
          className="p-4 bg-white border-t border-slate-200 shrink-0"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our mission or programs..."
              className="w-full pl-4 pr-12 py-3 rounded border border-slate-200 focus:border-green focus:ring-1 focus:ring-green outline-none text-[13px] bg-neutral disabled:opacity-50 transition-all text-navy placeholder:text-slate-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-navy hover:text-green disabled:opacity-30 transition-colors"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin text-green" /> : <Send size={16} />}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
