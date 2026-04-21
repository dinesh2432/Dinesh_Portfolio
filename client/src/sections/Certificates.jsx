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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 9) * 0.1, duration: 0.4 }}
            id={`certificate-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={`group rounded-md border flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
              isDark ? 'bg-[#18181B] border-[#27272A] hover:border-[#2563EB]' : 'bg-white border-[#E4E4E7] hover:border-[#2563EB]'
            }`}
          >

            {/* Certificate Image */}
            <div className={`w-full h-52 overflow-hidden relative border-b flex items-center justify-center p-3 transition-colors ${isDark ? 'bg-[#09090B] border-[#27272A]' : 'bg-[#FAFAFA] border-[#E4E4E7]'}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className={`font-display font-bold text-lg leading-tight mb-3 tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
                  {item.description}
                </p>
                
                <p className="text-xs font-semibold mb-1 text-[#2563EB]">
                  Issued by: {item.issuer}
                </p>
                {item.date && (
                  <p className={`text-xs ${isDark ? 'text-[#71717A]' : 'text-[#A1A1AA]'}`}>
                    Date: {item.date}
                  </p>
                )}
              </div>
              
              <div className={`flex items-center justify-between mt-5 pt-4 border-t ${isDark ? 'border-[#27272A]' : 'border-[#E4E4E7]'}`}>
                <div className="flex items-center gap-1.5">
                  <Award size={14} className={isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'} />
                  <span className={`text-xs font-medium ${isDark ? 'text-[#A1A1AA]' : 'text-[#71717A]'}`}>
                    Certified
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedImage(item.image)}
                  className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${
                    isDark ? 'bg-[#09090B] text-[#FAFAFA] hover:bg-[#2563EB] hover:text-white' : 'bg-[#FAFAFA] text-[#09090B] hover:bg-[#2563EB] hover:text-white'
                  }`}
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
              className={`px-6 py-2.5 rounded border font-medium text-sm transition-colors ${
                isDark ? 'border-[#27272A] hover:border-[#2563EB] text-[#FAFAFA]' : 'border-[#E4E4E7] hover:border-[#2563EB] text-[#09090B]'
              }`}
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
