import { motion } from 'framer-motion';
import { Settings, Maximize, Activity } from 'lucide-react';
import './Services.css';
import noolImg from '../assets/nool.png';
import pavuImg from '../assets/pavu.png';
import redImg from '../assets/red.png';

const Services = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const services = [
    {
      id: 1,
      title: "Yarn Reeling Machine",
      desc: "Our advanced yarn reeling machines ensure consistent thread tension and strength, preparing the perfect foundation for high-quality weaving. We process various types of yarn with precision to meet export standards.",
      icon: <Activity size={32} />,
      img: noolImg
    },
    {
      id: 2,
      title: "Warping Machine",
      desc: "State-of-the-art warping technology allows us to create flawless beams. Our automated warping process minimizes defects and ensures uniformity across the entire fabric width, essential for premium textile production.",
      icon: <Maximize size={32} />,
      img: pavuImg
    },
    {
      id: 3,
      title: "Autoloom Weaving",
      desc: "Equipped with the latest autoloom technology, we offer high-speed, defect-free weaving. Capable of producing complex patterns and dense fabrics, our autolooms represent the pinnacle of modern textile manufacturing.",
      icon: <Settings size={32} />,
      img: redImg
    }
  ];

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
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Our <span className="text-gold">Services</span>
        </motion.h1>
        <div className="divider mx-auto"></div>
        <p className="section-subtitle">Comprehensive weaving solutions for premium export quality textiles.</p>
      </div>

      <div className="container">
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`service-card-large interactive ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="service-img-container">
                <div className="service-img-overlay"></div>
                <img src={service.img} alt={service.title} />
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h2>{service.title}</h2>
                <div className="small-divider"></div>
                <p>{service.desc}</p>
                <ul className="service-features">
                  <li>High precision and efficiency</li>
                  <li>Export-grade quality control</li>
                  <li>Modern machinery</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
