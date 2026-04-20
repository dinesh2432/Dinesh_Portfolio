import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

function ProjectCard({ project, isDark, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isDark ? 'bg-dark-surface border-dark-border' : 'bg-white border-light-border'
      }`}
    >
      {/* Accent bar */}
      <div className="h-1" style={{ background: project.accent }} />

      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 border-b"
          style={{ borderColor: isDark ? '#1e1e2e' : '#e5e3df' }}
        />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className={`text-xs font-mono ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
              {project.date}
            </span>
            <h3 className="font-display text-xl font-bold mt-1">{project.title}</h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            id={`project-link-${project.id}`}
            className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all hover:scale-110 hover:border-accent"
            style={{ borderColor: `${project.accent}40` }}
          >
            <ExternalLink size={15} style={{ color: project.accent }} />
          </a>
        </div>

        {/* Problem */}
        <div
          className="text-sm rounded-xl px-4 py-3 mb-4 italic"
          style={{ background: `${project.accent}10`, borderLeft: `3px solid ${project.accent}` }}
        >
          <span style={{ color: project.accent }} className="font-semibold not-italic text-xs uppercase tracking-wide">
            Problem → {' '}
          </span>
          <span className={isDark ? 'text-dark-text' : 'text-light-text'}>{project.problem}</span>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md font-mono"
              style={{
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((p) => !p)}
          id={`project-expand-${project.id}`}
          className={`flex items-center gap-1 text-xs font-medium transition-colors hover:text-accent ${
            isDark ? 'text-dark-muted' : 'text-light-muted'
          }`}
        >
          {expanded ? 'Hide features' : 'Key features'}
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-3 space-y-1.5"
            >
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Zap size={12} style={{ color: project.accent }} />
                  <span className={isDark ? 'text-dark-text' : 'text-light-text'}>{f}</span>
                </li>
              ))}
            </motion.ul>
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
        <div className="mb-14">

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
