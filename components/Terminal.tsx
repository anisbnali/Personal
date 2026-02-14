
import React, { useState, useRef, useEffect } from 'react';
import { TerminalCommand } from '../types';
import { RESUME_DATA } from '../constants';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: `NODE: anis-ben-ali-obs-01 INITIALIZED` },
    { type: 'output', content: "Type 'help' for mission parameters." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().toLowerCase().split(' ');
    const command = args[0] as TerminalCommand;
    
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);

    switch (command) {
      case 'help':
        setHistory(prev => [...prev, { type: 'output', content: "Available: whoami, ls, cat <file>, systemctl status, observability, contact, clear" }]);
        break;
      case 'ls':
        setHistory(prev => [...prev, { type: 'output', content: "observability_stack.yaml  certifications.log  experience.json  education.md  contact.txt" }]);
        break;
      case 'whoami':
        setHistory(prev => [...prev, { type: 'output', content: `${RESUME_DATA.name} | ${RESUME_DATA.title}\nLocation: ${RESUME_DATA.location}` }]);
        break;
      case 'systemctl':
        if (args[1] === 'status') {
          setHistory(prev => [...prev, { type: 'success', content: "● anis-ben-ali.service - Professional Career Service\n   Loaded: loaded (/etc/systemd/system/anis.service)\n   Active: active (running) since 2018-01-01\n   Main PID: 777 (Observability)\n   Status: \"Monitoring and Securing Hybrid Environments\"" }]);
        } else {
          setHistory(prev => [...prev, { type: 'error', content: "Usage: systemctl status" }]);
        }
        break;
      case 'observability':
        setHistory(prev => [...prev, { type: 'success', content: "PROMETHEUS: RUNNING [v2.45]\nGRAFANA: RUNNING [v10.1]\nALERTMANAGER: ARMED\nSYSTEM STATUS: ALL SYSTEMS NOMINAL" }]);
        break;
      case 'cat':
        if (args[1] === 'contact.txt') {
          setHistory(prev => [...prev, { type: 'output', content: `Email: ${RESUME_DATA.email}\nLinkedIn: ${RESUME_DATA.linkedin}` }]);
        } else if (args[1] === 'education.md') {
          setHistory(prev => [...prev, { type: 'output', content: RESUME_DATA.education.map(e => `# ${e.degree}\n@ ${e.institution}\nSpec: ${e.specialization}\n`).join('\n') }]);
        } else if (args[1] === 'observability_stack.yaml') {
          setHistory(prev => [...prev, { type: 'output', content: "version: '3.8'\nservices:\n  prometheus:\n    image: prom/prometheus\n    ports:\n      - 9090:9090\n  grafana:\n    image: grafana/grafana\n    depends_on:\n      - prometheus" }]);
        } else {
          setHistory(prev => [...prev, { type: 'error', content: "File not found." }]);
        }
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        setHistory(prev => [...prev, { type: 'error', content: `Unknown signal: ${command}` }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="bg-[#0d1117] border border-[#00ff41]/30 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden flex flex-col h-full font-mono">
      <div className="bg-[#161b22] px-4 py-2 border-b border-[#00ff41]/20 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#00ff41]/50"></div>
        </div>
        <span className="text-[10px] text-[#00ff41]/60">ANIS@OBSERVABILITY-HQ: ~</span>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto text-xs leading-relaxed">
        {history.map((line, i) => (
          <div key={i} className={`mb-1 whitespace-pre-wrap ${
            line.type === 'input' ? 'text-white' : 
            line.type === 'error' ? 'text-red-400' : 
            line.type === 'success' ? 'text-[#00ff41]' : 'text-[#00ff41]/80'
          }`}>
            {line.type === 'input' && <span className="text-blue-400 mr-2">#</span>}
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex mt-2">
          <span className="text-blue-400 mr-2">#</span>
          <input
            autoFocus
            type="text"
            className="bg-transparent border-none outline-none flex-1 text-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
