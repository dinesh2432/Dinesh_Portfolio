import { useState, useEffect } from 'react';
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

const ROLES = ["Full Stack Developer", "Programmer", "Web Developer"];

function TypewriterEffect({ words, isDark }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 180);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const currentWord = words[index].substring(0, subIndex);

  return (
    <span className="inline-flex items-center">
      <span className={isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-blue-400" : "text-[#2563EB]"}>
        {currentWord}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-[3px] h-[0.9em] ml-[2px] bg-[#2563EB] rounded-full translate-y-[2px]"
      />
    </span>
  );
}

export default function Hero({ isDark }) {
  const { name, title, email, linkedin, github, about } = portfolioData;

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4 tracking-tight">
              <AnimatedName name={name} />
              <br />
              <TypewriterEffect words={ROLES} isDark={isDark} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className={`text-base md:text-lg leading-relaxed max-w-lg mt-6 mb-8 font-medium ${
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
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={scrollToProjects}
                id="hero-view-projects"
                className="flex items-center gap-2 bg-white text-black hover:bg-zinc-200 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                View Projects <ArrowDown size={14} className="animate-bounce" />
              </button>
              <a
                href={`mailto:${email}`}
                id="hero-contact-link"
                className={`flex items-center gap-2 border px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  isDark
                    ? 'border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-800/50'
                    : 'border-zinc-300 text-black hover:border-zinc-400 hover:bg-zinc-100'
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
                  className={`w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-white ${
                    isDark ? 'border-zinc-800 text-zinc-400 bg-zinc-900/50 backdrop-blur-sm' : 'border-[#E4E4E7] text-[#71717A]'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                id="hero-email-icon-link"
                className={`w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black hover:border-white ${
                    isDark ? 'border-zinc-800 text-zinc-400 bg-zinc-900/50 backdrop-blur-sm' : 'border-[#E4E4E7] text-[#71717A]'
                }`}
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right: Premium Frosted Terminal Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
            className="hidden lg:block relative group"
          >
            {/* Subtle glow behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500/20 to-zinc-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className={`relative rounded-xl overflow-hidden border backdrop-blur-xl shadow-2xl ${
              isDark ? 'border-white/10 bg-zinc-950/60 shadow-black/50' : 'border-[#E4E4E7] bg-white/60 shadow-zinc-200/50'
            }`}>
              {/* Terminal Header */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                isDark ? 'border-white/10 bg-zinc-900/40' : 'border-[#E4E4E7] bg-[#FAFAFA]/40'
              }`}>
                <div className="flex gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DE9F34]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
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
