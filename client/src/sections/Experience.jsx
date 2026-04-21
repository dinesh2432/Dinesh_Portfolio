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
          <div className={`absolute left-5 top-0 bottom-0 w-px ${isDark ? 'bg-[#27272A]' : 'bg-[#E4E4E7]'}`} />

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
                  className={`absolute left-0 top-6 w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 ${
                    i === 0 
                      ? 'border-[#2563EB] bg-[#2563EB] text-white' 
                      : isDark ? 'border-[#27272A] bg-[#18181B] text-[#A1A1AA]' : 'border-[#E4E4E7] bg-white text-[#71717A]'
                  }`}
                >
                  <Briefcase size={14} />
                </div>

                {/* Item wrapper */}
                <div
                  className={`rounded-md p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    isDark
                      ? 'bg-[#18181B] border-[#27272A] hover:border-[#2563EB]'
                      : 'bg-white border-[#E4E4E7] hover:border-[#2563EB]'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-display text-xl font-bold tracking-tight">{exp.role}</h3>
                          <p
                            className="font-semibold text-sm mt-1 text-[#2563EB]"
                          >
                            @ {exp.company}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-mono px-3 py-1 rounded border font-medium ${
                            isDark ? 'border-[#27272A] text-[#A1A1AA] bg-[#09090B]' : 'border-[#E4E4E7] text-[#71717A] bg-[#FAFAFA]'
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
