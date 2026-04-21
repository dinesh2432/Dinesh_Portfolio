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
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`group relative rounded-xl border p-8 md:p-10 lg:flex gap-10 items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
            isDark
              ? 'bg-zinc-900/40 backdrop-blur-xl border-white/10 hover:border-zinc-500 hover:bg-zinc-900/60'
              : 'bg-white border-[#E4E4E7] hover:border-zinc-400'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Icon */}
          <div className="lg:shrink-0 mb-6 lg:mb-0">
            <div className={`w-16 h-16 rounded-md border flex items-center justify-center ${isDark ? 'border-[#27272A] bg-[#09090B]' : 'border-[#E4E4E7] bg-[#FAFAFA]'}`}>
              <GraduationCap size={28} className="text-[#2563EB]" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">{edu.degree}</h3>
            <p className="font-semibold text-[#2563EB] mb-4">{edu.institution}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className={isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'} />
                <span className={`text-sm ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>{edu.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className={isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'} />
                <span className={`text-sm ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>{edu.duration}</span>
              </div>
            </div>

            <div>
              <div className={`inline-flex items-center gap-2 mb-4 px-4 py-2 rounded border ${isDark ? 'border-[#27272A] bg-[#09090B]' : 'border-[#E4E4E7] bg-[#FAFAFA]'}`}>
                <BookOpen size={14} className="text-[#2563EB]" />
                <span className={`text-sm font-semibold ${isDark ? 'text-[#FAFAFA]' : 'text-[#09090B]'}`}>
                  CGPA / Grade: <span className="text-[#2563EB] ml-1">{edu.cgpa}</span>
                </span>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
                {edu.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
