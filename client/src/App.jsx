import { Toaster } from 'react-hot-toast';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { GithubIcon } from './components/SocialIcons';

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className={`relative min-h-screen noise-bg ${isDark ? '' : 'light'}`}>
      <ScrollProgress />
      <Navbar isDark={isDark} onToggleTheme={toggle} />

      <main>
        <Hero isDark={isDark} />

        <div className="section-divider" />
        <Skills isDark={isDark} />

        <div className="section-divider" />
        <Experience isDark={isDark} />

        <div className="section-divider" />
        <Projects isDark={isDark} />

        <div className="section-divider" />
        <Achievements isDark={isDark} />

        <div className="section-divider" />
        <Certificates isDark={isDark} />

        <div className="section-divider" />
        <Education isDark={isDark} />

        <div className="section-divider" />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center border-t ${isDark ? 'border-dark-border' : 'border-light-border'}`}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <span className={isDark ? 'text-dark-muted' : 'text-light-muted'}>
            Built by{' '}
            <span className="text-accent font-semibold">Dinesh K</span>
          </span>
          <a
            href="https://github.com/dinesh2432"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github"
            className={`flex items-center gap-1 hover:text-accent transition-colors ${
              isDark ? 'text-dark-muted' : 'text-light-muted'
            }`}
          >
            <GithubIcon size={13} />
            <span>github.com/dinesh2432</span>
          </a>
        </div>
      </footer>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDark ? '#111118' : '#fff',
            color: isDark ? '#e2e0f0' : '#1a1a2e',
            border: '1px solid #7c6aff30',
            borderRadius: '12px',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}
