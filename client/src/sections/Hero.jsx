import { motion } from 'framer-motion';
import { Mail, ArrowDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

const codeSnippet = `// System initialized.
const developer = {
  name: "Dinesh K",
  designation: "Full Stack Developer",
  stack: ["React", "Node.js", "MongoDB"],
  philosophy: "Building robust, scalable interfaces",
  status: "available for work"
};`;

const charVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.3, ease: 'easeOut' },
  }),
};

function AnimatedName({ name }) {
  return (
    <span className="inline-block">
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero({ isDark }) {
  const { name, title, email, linkedin, github, about } = portfolioData;

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-none mb-4 tracking-tight">
              <AnimatedName name={name} />
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={isDark ? "text-white" : "text-black"}
              >
                {title}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className={`text-base md:text-lg leading-relaxed max-w-xl mt-6 mb-8 font-medium ${
                isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'
              }`}
            >
              {about.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={scrollToProjects}
                id="hero-view-projects"
                className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-7 py-3 rounded-md font-semibold text-sm transition-colors duration-200"
              >
                View Projects <ArrowDown size={14} />
              </button>
              <a
                href={`mailto:${email}`}
                id="hero-contact-link"
                className={`flex items-center gap-2 border px-6 py-3 rounded-md font-semibold text-sm transition-colors duration-200 ${
                  isDark
                    ? 'border-[#27272A] text-white hover:border-[#2563EB] hover:bg-[#2563EB]/5'
                    : 'border-[#E4E4E7] text-black hover:border-[#2563EB] hover:bg-[#2563EB]/5'
                }`}
              >
                <Mail size={14} /> Get in touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4"
            >
              {[
                { Icon: GithubIcon, href: github, label: 'GitHub' },
                { Icon: LinkedinIcon, href: linkedin, label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  id={`hero-${label.toLowerCase()}-link`}
                  className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB] ${
                    isDark ? 'border-[#27272A] text-[#A1A1AA]' : 'border-[#E4E4E7] text-[#71717A]'
                  }`}
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                id="hero-email-icon-link"
                className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB] ${
                    isDark ? 'border-[#27272A] text-[#A1A1AA]' : 'border-[#E4E4E7] text-[#71717A]'
                }`}
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right: Flat Terminal Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className={`rounded-md overflow-hidden border ${
              isDark ? 'border-[#27272A] bg-[#18181B]' : 'border-[#E4E4E7] bg-white'
            }`}>
              {/* Terminal Header */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                isDark ? 'border-[#27272A] bg-[#09090B]' : 'border-[#E4E4E7] bg-[#FAFAFA]'
              }`}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-1.5 ml-2 absolute left-1/2 -translate-x-1/2">
                  <Terminal size={12} className={isDark ? "text-[#A1A1AA]" : "text-[#71717A]"} />
                  <span className={`text-[11px] font-mono font-medium ${isDark ? "text-[#A1A1AA]" : "text-[#71717A]"}`}>index.js</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                  {codeSnippet.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                      className="flex"
                    >
                      <span className="select-none w-6 mr-4 text-right text-xs leading-6 opacity-40">{i + 1}</span>
                      <span className={`${
                        line.includes('//') ? 'text-[#10B981]' /* emerald for comments */ :
                        line.includes('const') || line.includes('export') ? 'text-[#2563EB]' /* blue for keywords */ :
                        line.includes('"') || line.includes("'") ? 'text-[#F59E0B]' /* amber for strings */ :
                        line.includes(':') ? (isDark ? 'text-white' : 'text-black') :
                        isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'
                      }`}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
