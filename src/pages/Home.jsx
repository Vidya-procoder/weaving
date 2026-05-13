import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Award } from 'lucide-react';
import './Home.css';
import redImg from '../assets/red.png';
import pavuImg from '../assets/pavu-white.png';
import noolImg from '../assets/nool.png';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          <motion.div style={{ y }} className="hero-bg">
            <div className="hero-overlay"></div>
          </motion.div>
        </div>

        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            30+ Years of Trusted <br />
            <span className="text-gold">Weaving Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            Weaving Tradition into Modern Innovation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-buttons"
          >
            <Link to="/services" className="btn btn-primary interactive">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-outline interactive hero-btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* Stats / Legacy Counter */}
      <section className="stats-section section-padding">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="stats-grid"
          >
            <motion.div variants={itemVariant} className="stat-card interactive">
              <Award className="stat-icon text-gold" size={40} />
              <h2 className="stat-number">30+</h2>
              <p className="stat-label">Years Experience</p>
            </motion.div>

            <motion.div variants={itemVariant} className="stat-card interactive">
              <Shield className="stat-icon text-gold" size={40} />
              <h2 className="stat-number">20+</h2>
              <p className="stat-label">Trusted Workers</p>
            </motion.div>

            <motion.div variants={itemVariant} className="stat-card interactive">
              <Star className="stat-icon text-gold" size={40} />
              <h2 className="stat-number">100%</h2>
              <p className="stat-label">Export Quality</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Evolution */}
      <section className="timeline-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2 className="section-title">Our Evolution</h2>
            <div className="divider mx-auto"></div>
            <p className="section-subtitle">From traditional roots to modern production</p>
          </motion.div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-items">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content interactive">
                  <h3>Handloom Era</h3>
                  <p>Our roots began with traditional handloom weaving, crafting textiles with manual precision and heritage.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="timeline-item right"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content interactive">
                  <h3>Powerloom Expansion</h3>
                  <p>Scaled production and embraced mechanization to meet growing demands without sacrificing quality.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content interactive">
                  <h3>Modern Autoloom</h3>
                  <p>Today, we leverage advanced autoloom technology for high-speed, flawless export-quality manufacturing.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Cards */}
      <section className="showcase-section section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2 className="section-title">Premium Services</h2>
            <div className="divider mx-auto"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="showcase-grid"
          >
            {[
              {
                title: "Yarn Reeling",
                img: noolImg,
                desc: "Precision yarn reeling for optimal thread strength."
              },
              {
                title: "Warping Process",
                img: pavuImg,
                desc: "Advanced warping to prepare flawless beams."
              },
              {
                title: "Autoloom Weaving",
                img: redImg,
                desc: "High-speed autoloom weaving for export quality."
              }
            ].map((service, index) => (
              <motion.div key={index} variants={itemVariant} className="showcase-card group interactive">
                <div className="card-img-wrapper">
                  <div className="card-overlay"></div>
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link to="/services" className="card-link">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="animated-border-glow"></div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-4" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline interactive">View All Services</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
