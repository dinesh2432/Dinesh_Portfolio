import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Education({ isDark }) {
  const { education } = portfolioData;
  const edu = education[0];

  return (
    <SectionWrapper id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">

          <h2 className="font-display text-4xl md:text-5xl font-bold">Education</h2>
        </div>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`rounded-2xl border p-8 md:p-10 lg:flex gap-10 items-start transition-all duration-300 ${
            isDark
              ? 'bg-dark-surface border-dark-border hover:border-accent/30'
              : 'bg-white border-light-border hover:border-accent/30'
          }`}
        >
          {/* Icon */}
          <div className="lg:shrink-0 mb-6 lg:mb-0">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <GraduationCap size={28} className="text-accent" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-2">{edu.degree}</h3>
            <p className="font-semibold text-accent mb-4">{edu.institution}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className={isDark ? 'text-dark-muted' : 'text-light-muted'} />
                <span className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className={isDark ? 'text-dark-muted' : 'text-light-muted'} />
                <span className={`text-sm ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>{edu.duration}</span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg border" style={{ borderColor: isDark ? '#1e1e2e' : '#e5e3df', backgroundColor: isDark ? '#111118' : '#f9f9f9' }}>
                <BookOpen size={14} className="text-accent" />
                <span className={`text-sm font-semibold ${isDark ? 'text-dark-text' : 'text-light-text'}`}>
                  CGPA: <span className="text-accent">{edu.cgpa}</span>
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                {edu.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
