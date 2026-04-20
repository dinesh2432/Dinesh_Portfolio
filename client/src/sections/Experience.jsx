import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ isDark }) {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-5 top-0 bottom-0 w-px ${isDark ? 'bg-dark-border' : 'bg-light-border'}`} />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: i === 0 ? '#7c6aff' : '#4ecdc4',
                    background: isDark ? '#111118' : '#fff',
                  }}
                >
                  <Briefcase size={14} style={{ color: i === 0 ? '#7c6aff' : '#4ecdc4' }} />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`rounded-2xl p-6 border transition-all duration-300 ${
                    isDark
                      ? 'bg-dark-surface border-dark-border hover:border-accent/40'
                      : 'bg-white border-light-border hover:border-accent/40'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                      <p
                        className="font-medium text-sm mt-0.5"
                        style={{ color: i === 0 ? '#7c6aff' : '#4ecdc4' }}
                      >
                        @ {exp.company}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${
                        isDark ? 'border-dark-border text-dark-muted' : 'border-light-border text-light-muted'
                      }`}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {exp.description && (
                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                      {exp.description}
                    </p>
                  )}

                  <ul className="space-y-2.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: i === 0 ? '#7c6aff' : '#4ecdc4' }}
                        />
                        <span className={`text-sm leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                      </ul>
                    </div>

                    {exp.image && (
                      <div className="w-full lg:w-48 lg:h-32 shrink-0 rounded-xl overflow-hidden border mt-4 lg:mt-0 relative group" style={{ borderColor: isDark ? '#1e1e2e' : '#e5e3df' }}>
                        <img src={exp.image} alt={`${exp.company} credential`} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
