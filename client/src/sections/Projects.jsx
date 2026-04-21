import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

function ProjectCard({ project, isDark, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`rounded-md border overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
        isDark ? 'bg-[#18181B] border-[#27272A] hover:border-[#2563EB]' : 'bg-white border-[#E4E4E7] hover:border-[#2563EB]'
      }`}
    >
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-300 opacity-0 hover:opacity-100" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top border-b"
          style={{ borderColor: isDark ? '#27272A' : '#E4E4E7' }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
              {project.date}
            </span>
            <h3 className="font-display text-xl font-bold mt-1 tracking-tight">{project.title}</h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            id={`project-link-${project.id}`}
            className={`w-9 h-9 flex items-center justify-center rounded border transition-colors duration-200 ${
              isDark ? 'border-[#27272A] hover:bg-[#2563EB] hover:border-[#2563EB] text-[#A1A1AA] hover:text-white' : 'border-[#E4E4E7] hover:bg-[#2563EB] hover:border-[#2563EB] text-[#71717A] hover:text-white'
            }`}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Problem block */}
        <div
          className={`text-sm px-4 py-3 mb-4 border-l-2 ${isDark ? 'bg-[#09090B] border-[#2563EB]' : 'bg-[#FAFAFA] border-[#2563EB]'}`}
        >
          <span className="text-[#2563EB] font-semibold text-xs uppercase tracking-wider mb-1 block">
            Objective / Problem
          </span>
          <span className={isDark ? 'text-[#FAFAFA]' : 'text-[#09090B]'}>{project.problem}</span>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 flex-grow ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded font-mono font-medium border ${
                isDark ? 'bg-[#09090B] border-[#27272A] text-[#A1A1AA]' : 'bg-[#FAFAFA] border-[#E4E4E7] text-[#71717A]'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((p) => !p)}
          id={`project-expand-${project.id}`}
          className={`flex items-center gap-1.5 text-xs font-semibold py-1.5 rounded transition-colors w-fit hover:text-[#2563EB] ${
            isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'
          }`}
        >
          {expanded ? 'Hide Details' : 'View Details'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <ul className={`mt-4 space-y-2 pt-4 border-t ${isDark ? 'border-[#27272A]' : 'border-[#E4E4E7]'}`}>
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="text-[#2563EB] mt-0.5">•</span>
                    <span className={isDark ? 'text-[#FAFAFA]' : 'text-[#09090B]'}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects({ isDark }) {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Selected Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
