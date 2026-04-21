import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ isDark }) {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b ${isDark ? 'from-transparent via-zinc-700 to-transparent' : 'from-transparent via-zinc-200 to-transparent'}`} />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center border-[3px] shadow-lg z-10 transition-transform hover:scale-110 ${
                    i === 0 
                      ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-blue-500/20' 
                      : isDark ? 'border-zinc-800 bg-zinc-950 text-zinc-400 shadow-black/50' : 'border-zinc-200 bg-white text-zinc-500'
                  }`}
                >
                  <Briefcase size={14} />
                </div>

                {/* Item wrapper */}
                <div
                  className={`group relative rounded-xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
                    isDark
                      ? 'bg-zinc-900/40 backdrop-blur-xl border-white/10 hover:border-zinc-500 hover:bg-zinc-900/60'
                      : 'bg-white border-[#E4E4E7] hover:border-zinc-400'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-5">
                        <div>
                          <h3 className="font-display text-2xl font-bold tracking-tight">{exp.role}</h3>
                          <p
                            className="font-semibold text-sm mt-1.5 text-[#2563EB]"
                          >
                            @ {exp.company}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono px-3 py-1 rounded-full border font-medium uppercase tracking-widest ${
                            isDark ? 'border-white/5 text-zinc-400 bg-black/50 shadow-inner' : 'border-[#E4E4E7] text-[#71717A] bg-[#FAFAFA]'
                          }`}
                        >
                          {exp.duration}
                        </span>
                      </div>

                      {exp.description && (
                        <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
                          {exp.description}
                        </p>
                      )}

                      <ul className="space-y-3">
                        {exp.highlights.map((point, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm">
                            <span className="text-[#2563EB] mt-0.5">•</span>
                            <span className={`leading-relaxed ${isDark ? 'text-[#FAFAFA]' : 'text-[#09090B]'}`}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.image && (
                      <div className={`w-full lg:w-48 lg:h-32 shrink-0 rounded-md overflow-hidden border relative ${isDark ? 'border-[#27272A]' : 'border-[#E4E4E7]'}`}>
                        <img src={exp.image} alt={`${exp.company} credential`} className="w-full h-full object-cover object-top" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
