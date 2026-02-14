
import React, { useState } from 'react';
import { getAIResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: "I'm the OS-Engine Assistant. Ask me anything about Alex's open source journey!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-[#161b22] border border-[#30363d] rounded-xl shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-3 border-b border-[#30363d] flex justify-between items-center bg-[#0d1117] rounded-t-xl">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              OS-Engine Agent
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-[#8b949e] hover:text-white">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-[#21262d] text-[#c9d1d9]'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#21262d] p-3 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-[#8b949e] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#8b949e] rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-[#8b949e] rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 bg-[#0d1117] rounded-b-xl">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my Rust skills..."
                className="flex-1 bg-[#21262d] border-none rounded-lg px-3 py-2 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button 
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-colors"
              >
                ➔
              </button>
            </div>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </button>
    </div>
  );
};

export default AIChat;
