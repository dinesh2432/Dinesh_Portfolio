import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Certificates({ isDark }) {
  const { certificates } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!certificates || certificates.length === 0) return null;

  const displayedItems = showAll ? certificates : certificates.slice(0, 9);

  return (
    <SectionWrapper id="certificates" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Certificates
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {displayedItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 9) * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -5, scale: 1.02 }}
              id={`certificate-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className={`group relative rounded-2xl border flex flex-col cursor-default overflow-hidden transition-all duration-300 ${
                isDark ? 'bg-dark-surface border-dark-border' : 'bg-white border-light-border'
              }`}
            >
              {/* Decorative glow */}
              <div
                className="absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-2xl pointer-events-none z-10"
                style={{ background: item.color }}
              />

              {/* Certificate Image */}
              <div className={`w-full h-52 overflow-hidden relative border-b flex items-center justify-center p-3 transition-colors ${isDark ? 'bg-[#0f0f13]' : 'bg-gray-50'}`} style={{ borderColor: isDark ? '#1e1e2e' : '#e5e3df' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                <div>
                  <h3 className="font-display font-bold text-xl leading-tight mb-3" style={{ color: isDark ? '#fff' : '#000' }}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                    {item.description}
                  </p>

                  <p className="text-sm font-semibold mb-1" style={{ color: item.color || '#7c6aff' }}>
                    Issued by: {item.issuer}
                  </p>
                  {item.date && (
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Date: {item.date}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                  <div className="flex items-center gap-1.5">
                    <Award size={14} className={isDark ? 'text-dark-muted' : 'text-light-muted'} />
                    <span className={`text-xs font-medium ${isDark ? 'text-dark-muted' : 'text-light-muted'}`}>
                      Certified
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedImage(item.image)}
                    className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors shadow-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {certificates.length > 9 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-xl border border-accent text-accent font-medium text-sm transition-all hover:bg-accent/10"
            >
              {showAll ? 'Show Less' : 'See all certificates'}
            </button>
          </div>
        )}
      </div>

      {/* Image Modal for Full View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/60 rounded-full backdrop-blur-xl transition-all"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Full Certificate"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
