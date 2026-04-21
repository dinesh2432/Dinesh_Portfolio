import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

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
  'REST API': 'https://cdn.simpleicons.org/openapi/85EA2D',
  'Render': 'https://cdn.simpleicons.org/render/46E3B7',
  'Gemini API': 'https://cdn.simpleicons.org/googlegemini/8E75B2',
  'JWT': 'https://cdn.simpleicons.org/jsonwebtokens/000000',
  'Cloudinary': 'https://cdn.simpleicons.org/cloudinary/3448C5',
  '3rd Party APIs': 'https://cdn.simpleicons.org/postman/FF6C37'
};

export default function Skills({ isDark }) {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`relative group rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                isDark ? 'bg-zinc-900/40 backdrop-blur-xl border-white/10 hover:border-zinc-500 hover:bg-zinc-900/60' : 'bg-white border-[#E4E4E7] hover:border-zinc-400'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              <div className="flex items-center gap-3 mb-6 border-b pb-4 border-zinc-800/50">
                <h3
                  className={`font-display text-base font-bold uppercase tracking-wider ${isDark ? 'text-zinc-300' : 'text-[#09090B]'}`}
                >
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className={`tag-pill flex items-center gap-2 group/skill transition-all duration-300 cursor-default ${
                      isDark ? 'bg-black/50 border-white/5 hover:border-zinc-400 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]' : ''
                    }`}
                  >
                    {skillIcons[skill] && (
                      <img 
                        src={skillIcons[skill].startsWith('http') ? skillIcons[skill] : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skillIcons[skill]}`} 
                        alt={skill} 
                        className={`w-4 h-4 object-contain opacity-70 group-hover/skill:opacity-100 transition-opacity duration-300 ${isDark && (skill === 'GitHub' || skill === 'Express.js' || skill === 'Socket.io' || skill === 'JWT') ? 'invert contrast-125 opacity-90' : ''}`}
                      />
                    )}
                    <span className="text-zinc-400 group-hover/skill:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
