import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';
import redImg from '../assets/red.png';
import whiteImg from '../assets/white.png';
import pavuWhiteImg from '../assets/pavu-white.png';
import pavuImg from '../assets/pavu.png';
import noolImg from '../assets/nool.png';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { id: 1, category: 'loom', src: redImg, alt: 'Autoloom Machine' },
    { id: 2, category: 'yarn', src: pavuWhiteImg, alt: 'Warping Machine' },
    { id: 3, category: 'warping', src: noolImg, alt: 'Yarn Process' },
    { id: 5, category: 'loom', src: whiteImg, alt: 'Weaving Details' },
    { id: 6, category: 'yarn', src: pavuImg, alt: 'Warping Machine' },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Loom Machines', value: 'loom' },
    { name: 'Warping Machine', value: 'yarn' },
    { name: 'Yarn Process', value: 'warping' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page-container padding-top-nav"
    >
      <div className="page-header text-center section-padding">
        <h1 className="section-title">Our <span className="text-gold">Gallery</span></h1>
        <div className="divider mx-auto"></div>
        <p className="section-subtitle">A visual journey through our weaving excellence.</p>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="filter-container">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn interactive ${filter === f.value ? 'active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.name}
            </button>
          ))}
        </div>

        <motion.div layout className="masonry-grid">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className="gallery-item interactive group"
                onClick={() => setSelectedImg(img.src)}
              >
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay">
                  <ZoomIn size={40} className="zoom-icon" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setSelectedImg(null)}
          >
            <button className="lightbox-close interactive" onClick={() => setSelectedImg(null)}>
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg} 
              alt="Enlarged" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
