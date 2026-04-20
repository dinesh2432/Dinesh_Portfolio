import { motion } from 'framer-motion';
import { Mail, ArrowDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { portfolioData } from '../data/portfolioData';

const codeSnippet = `// Dinesh's approach to building
const developer = {
  name: "Dinesh K",
  stack: ["React", "Node", "MongoDB"],
  motto: "working code > perfect code",
  status: () => "currently building...",
};

export default developer;`;

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease: 'easeOut' },
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
    <section id="about" className="min-h-screen flex items-center pt-20 px-6">
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
                transition={{ delay: 0.6 }}
                className="text-gradient"
              >
                {title}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className={`text-base md:text-lg leading-relaxed max-w-xl mt-6 mb-8 ${
                isDark ? 'text-dark-muted' : 'text-light-muted'
              }`}
            >
              {about.bio}
            </motion.p>



            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={scrollToProjects}
                id="hero-view-projects"
                className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                View Projects <ArrowDown size={14} />
              </button>
              <a
                href={`mailto:${email}`}
                id="hero-contact-link"
                className={`flex items-center gap-2 border px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-dark-border text-dark-text hover:border-accent/50'
                    : 'border-light-border text-light-text hover:border-accent/50'
                }`}
              >
                <Mail size={14} /> Get in touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
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
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-1 ${
                    isDark ? 'border-dark-border text-dark-muted' : 'border-light-border text-light-muted'
                  }`}
                >
                  <Icon size={15} />
                </a>
              ))}
              <span className={`text-xs ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                {email}
              </span>
            </motion.div>
          </div>

          {/* Right: Floating Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 1.5 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className={`rounded-2xl overflow-hidden border shadow-2xl ${
                isDark ? 'border-dark-border shadow-accent/5' : 'border-light-border shadow-accent/10'
              }`}
            >
              {/* Code window chrome */}
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${
                isDark ? 'bg-dark-surface border-dark-border' : 'bg-gray-50 border-light-border'
              }`}>
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex items-center gap-1.5 ml-2">
                  <Terminal size={11} className="text-dark-muted" />
                  <span className="text-xs text-dark-muted font-mono">developer.js</span>
                </div>
              </div>
              <div className={`p-5 font-mono text-sm leading-relaxed ${
                isDark ? 'bg-dark-surface' : 'bg-gray-50'
              }`}>
                <pre className="whitespace-pre-wrap">
                  {codeSnippet.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.07 }}
                      className="flex"
                    >
                      <span className="select-none w-5 mr-4 text-right text-dark-muted/40 text-xs leading-6">{i + 1}</span>
                      <span className={`${
                        line.includes('//') ? 'text-green-400' :
                        line.includes('const') || line.includes('export') ? 'text-accent-light' :
                        line.includes('"') || line.includes("'") ? 'text-coral' :
                        line.includes(':') ? (isDark ? 'text-dark-text' : 'text-light-text') :
                        isDark ? 'text-dark-muted' : 'text-light-muted'
                      }`}>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </pre>
              </div>
            </motion.div>

            {/* Decorative floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              className="glass rounded-xl px-4 py-3 mt-4 ml-8 flex items-center gap-3 w-fit"
            >
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-xs font-semibold text-accent">3 Projects Shipped</p>
                <p className={`text-xs ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>2 internships completed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
