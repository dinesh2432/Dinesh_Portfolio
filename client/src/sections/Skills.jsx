import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

const categoryColors = {
  Frontend: { bg: 'rgba(124,106,255,0.12)', border: 'rgba(124,106,255,0.3)', text: '#a096ff' },
  Backend: { bg: 'rgba(78,205,196,0.12)', border: 'rgba(78,205,196,0.3)', text: '#4ecdc4' },
  Database: { bg: 'rgba(255,107,107,0.12)', border: 'rgba(255,107,107,0.3)', text: '#ff6b6b' },
  'Tools & DevOps': { bg: 'rgba(247,223,30,0.1)', border: 'rgba(247,223,30,0.25)', text: '#f7df1e' },
  'AI & APIs': { bg: 'rgba(160,150,255,0.12)', border: 'rgba(160,150,255,0.3)', text: '#c4b8ff' },
  Languages: { bg: 'rgba(55,118,171,0.15)', border: 'rgba(55,118,171,0.35)', text: '#67aee5' },
};

const tagSizes = [
  'text-xs px-3 py-1',
  'text-sm px-4 py-1.5',
];

const skillIcons = {
  'HTML5': 'html5/html5-original.svg',
  'CSS3': 'css3/css3-original.svg',
  'JavaScript': 'javascript/javascript-original.svg',
  'React.js': 'react/react-original.svg',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
  'Bootstrap': 'bootstrap/bootstrap-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg',
  'Express.js': 'express/express-original.svg',
  'MongoDB': 'mongodb/mongodb-original.svg',
  'SQL': 'sqldeveloper/sqldeveloper-original.svg',
  'PostgreSQL': 'postgresql/postgresql-original.svg',
  'Firebase': 'firebase/firebase-original.svg',
  'Git': 'git/git-original.svg',
  'GitHub': 'github/github-original.svg',
  'Vercel': 'vercel/vercel-original.svg',
  'Postman': 'postman/postman-original.svg',
  'Vite': 'vitejs/vitejs-original.svg',
  'Python': 'python/python-original.svg',
  'Socket.io': 'socketio/socketio-original.svg',
};

export default function Skills({ isDark }) {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills &{' '}
            <span className={isDark ? 'text-dark-muted' : 'text-light-muted'}>Tools</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const c = categoryColors[category] || categoryColors.Frontend;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-5 border transition-all duration-300 hover:shadow-xl ${
                  isDark ? 'bg-dark-surface border-dark-border' : 'bg-white border-light-border'
                }`}
                style={{ '--cat-color': c.text }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: c.text }}
                  />
                  <h3
                    className="font-display text-sm font-semibold uppercase tracking-wider"
                    style={{ color: c.text }}
                  >
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -3, scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="tag-pill font-semibold flex items-center gap-2.5"
                      style={{
                        background: isDark ? c.bg : '#ffffff',
                        border: `1px solid ${c.border}`,
                        color: isDark ? c.text : '#334155',
                        fontSize: '0.95rem',
                        padding: '0.6rem 1.1rem',
                        boxShadow: isDark ? 'none' : '0 1px 2px rgba(0,0,0,0.05)'
                      }}
                    >
                      {skillIcons[skill] && (
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skillIcons[skill]}`} 
                          alt={skill} 
                          className={`w-5 h-5 object-contain ${isDark && (skill === 'GitHub' || skill === 'Express.js' || skill === 'Socket.io') ? 'invert contrast-125' : ''}`}
                        />
                      )}
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-14 border-l-4 border-accent pl-6 italic text-base max-w-2xl ${
            isDark ? 'text-dark-muted' : 'text-light-muted'
          }`}
        >
          "{portfolioData.about.philosophy}"
        </motion.blockquote>
      </div>
    </SectionWrapper>
  );
}
