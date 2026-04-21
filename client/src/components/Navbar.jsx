import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      
      // Update active section based on scroll position
      let currentSectionId = '';
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - 200) {
            currentSectionId = link.href;
          }
        }
      });
      
      if (currentSectionId && currentSectionId !== active) {
        setActive(currentSectionId);
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on load to set initial state
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? isDark ? 'bg-zinc-950/80 border-white/10 py-3 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-white/80 border-zinc-200 py-3 backdrop-blur-xl shadow-sm'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNav('#about'); }}
            className={`font-display font-bold text-xl tracking-tight transition-colors ${
              isDark ? 'text-white hover:text-accent-light' : 'text-black hover:text-accent'
            }`}
            id="nav-logo"
          >
            DINESH K
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  id={`nav-${link.label.toLowerCase()}`}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active === link.href
                      ? 'text-accent'
                      : isDark
                      ? 'text-dark-muted hover:text-dark-text'
                      : 'text-light-muted hover:text-light-text'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#2563EB] rounded-t-md"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Theme + Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-16 left-4 right-4 z-40 rounded-xl border p-4 md:hidden shadow-lg ${
              isDark ? 'bg-[#18181B] border-[#27272A]' : 'bg-[#FFFFFF] border-[#E4E4E7]'
            }`}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isDark ? 'hover:bg-accent/10 text-dark-text' : 'hover:bg-accent/10 text-light-text'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
