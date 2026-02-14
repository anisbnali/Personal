
import React from 'react';
import { RESUME_DATA } from './constants';
import Terminal from './components/Terminal';
import AIChat from './components/AIChat';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-[#c9d1d9] selection:bg-[#00ff41]/30">
      {/* HUD Header */}
      <header className="fixed top-0 w-full z-40 bg-[#0b0e14]/90 backdrop-blur-md border-b border-[#00ff41]/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-lg border border-[#00ff41]/30 bg-[#161b22] flex items-center justify-center font-mono font-bold text-[#00ff41] text-xl relative overflow-hidden group-hover:border-[#00ff41] transition-all">
            <div className="absolute inset-0 bg-[#00ff41]/5 animate-pulse"></div>
            A
          </div>
          <div>
            <h1 className="font-mono font-bold text-lg leading-tight text-white tracking-widest">{RESUME_DATA.name}</h1>
            <p className="text-[10px] text-[#00ff41] mono uppercase tracking-tighter animate-pulse">Engineer::Observability::OpenSource</p>
          </div>
        </div>
        <nav className="hidden lg:flex gap-8 text-[11px] font-mono tracking-widest text-[#8b949e]">
          <a href="#mission" className="hover:text-[#00ff41] transition-colors">[ MISSION ]</a>
          <a href="#stack" className="hover:text-[#00ff41] transition-colors">[ STACK ]</a>
          <a href="#timeline" className="hover:text-[#00ff41] transition-colors">[ TIMELINE ]</a>
          <a href="#training" className="hover:text-[#00ff41] transition-colors">[ TRAINING ]</a>
        </nav>
        <div className="hidden sm:flex items-center gap-6">
           <div className="flex flex-col items-end">
              <span className="text-[10px] text-[#484f58] mono uppercase">Uptime</span>
              <span className="text-xs text-[#00ff41] mono">99.999%</span>
           </div>
           <button className="bg-[#00ff41]/10 border border-[#00ff41]/40 hover:bg-[#00ff41]/20 px-4 py-2 rounded text-[11px] font-mono text-[#00ff41] transition-all">
             DEPLOY_REACH
           </button>
        </div>
      </header>

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COMMAND CENTER (Left) */}
        <section id="mission" className="lg:col-span-7 space-y-10">
          <div className="relative p-8 bg-[#161b22]/50 border border-[#30363d] rounded-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
               <div className="text-[10px] text-[#00ff41]/40 mono">SECURE_NODE_01</div>
            </div>
            <h2 className="text-4xl font-mono font-black text-white mb-6 leading-tight">
              Monitoring the <span className="text-[#00ff41] underline decoration-[#00ff41]/20">invisible</span>, securing the <span className="text-[#00ff41] italic">future</span>.
            </h2>
            <p className="text-lg text-[#8b949e] leading-relaxed font-light italic">
              "{RESUME_DATA.bio}"
            </p>
          </div>

          <div className="h-[480px]">
            <Terminal />
          </div>

          {/* Core Training (Formation) */}
          <section id="training" className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-mono font-bold text-[#00ff41] uppercase tracking-[0.3em]">Core::Protocols (Formation)</h3>
              <div className="flex-1 h-[1px] bg-[#00ff41]/20"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.id} className="bg-[#161b22] border border-[#30363d] p-5 rounded-xl hover:border-[#00ff41]/40 transition-all group">
                  <div className="text-[#00ff41] mb-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-mono font-bold text-sm mb-1 group-hover:text-[#00ff41] transition-colors">{edu.degree}</h4>
                  <div className="text-[10px] text-blue-400 mono mb-3">{edu.institution}</div>
                  <div className="text-[11px] text-[#8b949e] leading-relaxed">
                    Module specialized in <span className="text-white font-medium">{edu.specialization}</span>. 
                    Initialization complete.
                  </div>
                  <div className="mt-4 w-full bg-[#0d1117] h-1 rounded-full overflow-hidden">
                    <div className="bg-[#00ff41] h-full w-full opacity-50"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* TELEMETRY FEED (Right) */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Skill Telemetry */}
          <section id="stack" className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-mono font-bold text-[#00ff41] uppercase tracking-[0.3em]">Telemetry::Skills</h3>
              <div className="flex-1 h-[1px] bg-[#00ff41]/20"></div>
            </div>
            <div className="h-[320px] bg-[#0d1117] border border-[#30363d] rounded-xl p-4 relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RESUME_DATA.skills} layout="vertical" margin={{ left: -20, right: 20 }}>
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#8b949e', fontSize: 10, fontFamily: 'monospace' }} 
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(0, 255, 65, 0.05)'}}
                    contentStyle={{ backgroundColor: '#0d1117', border: '1px solid #00ff41', borderRadius: '4px', fontSize: '10px', fontFamily: 'monospace' }}
                  />
                  <Bar dataKey="level" radius={[0, 2, 2, 0]} barSize={12}>
                    {RESUME_DATA.skills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.category === 'Observability' ? '#00ff41' : '#58a6ff'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="absolute bottom-2 right-4 text-[9px] text-[#484f58] mono">DATA_SOURCE: LOCAL_DB_v2</div>
            </div>
          </section>

          {/* Mission Log (Experience) */}
          <section id="timeline" className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-mono font-bold text-[#00ff41] uppercase tracking-[0.3em]">Mission::Log</h3>
              <div className="flex-1 h-[1px] bg-[#00ff41]/20"></div>
            </div>
            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l border-[#30363d] hover:border-[#00ff41] transition-colors group">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#30363d] group-hover:bg-[#00ff41] transition-all"></div>
                  <div className="mb-1 flex justify-between items-start">
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">{exp.role}</h4>
                    <span className="text-[10px] text-[#00ff41] mono">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-blue-400 mono mb-3">{exp.company} // {exp.location}</div>
                  <ul className="space-y-2 mb-4">
                    {exp.contributions.slice(0, 2).map((c, i) => (
                      <li key={i} className="text-[11px] text-[#8b949e] flex gap-2">
                        <span className="text-[#00ff41]">{'>'}</span> {c}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {exp.techStack.map(tech => (
                      <span key={tech} className="px-1.5 py-0.5 bg-[#161b22] border border-[#30363d] rounded text-[9px] mono text-[#c9d1d9]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievement Unlocked (Certifications) */}
          <section id="awards" className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xs font-mono font-bold text-[#00ff41] uppercase tracking-[0.3em]">Achievements</h3>
              <div className="flex-1 h-[1px] bg-[#00ff41]/20"></div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {RESUME_DATA.certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-4 p-4 bg-[#161b22] border border-[#30363d] rounded-lg group hover:border-[#00ff41]/40 transition-all">
                  <div className="w-10 h-10 rounded-full border border-[#00ff41]/20 flex items-center justify-center text-[#00ff41] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-2.06 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 2.06 3.42 3.42 0 013.138 3.138 3.42 3.42 0 002.06 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-2.06 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 2.06 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-2.06 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-2.06-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 002.06-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">{cert.name}</div>
                    <div className="text-[10px] text-[#484f58] mono">{cert.issuer} // {cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <AIChat />

      <footer className="mt-20 border-t border-[#30363d] py-12 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3 mono text-[10px]">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-ping"></span>
            LIVE::MONITORING::TUNISIA::NODE
          </div>
          <div className="flex gap-8 text-[10px] mono">
            <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-[#00ff41]">EMAIL</a>
            <a href="#" className="hover:text-[#00ff41]">LINKEDIN</a>
            <a href="#" className="hover:text-[#00ff41]">GITHUB</a>
          </div>
          <p className="text-[10px] mono">
            &copy; {new Date().getFullYear()} Anis BEN ALI // SYSTEM_VERSION_2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
