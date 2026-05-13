import { motion } from 'framer-motion';
import { Target, Users, Zap } from 'lucide-react';
import './About.css';
import fatherImg from '../assets/father.png';
import myPhotoImg from '../assets/my-photo.png';

const About = () => {
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
        <h1 className="section-title">About <span className="text-gold">Us</span></h1>
        <div className="divider mx-auto"></div>
        <p className="section-subtitle">Our journey, vision, and the people behind the excellence.</p>
      </div>

      {/* Story Section */}
      <section className="story-section section-padding">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-content"
            >
              <h2>The <span className="text-maroon">Legacy</span> of Weaving</h2>
              <p className="lead-text">
                T. Dhanasekaran Tex has over 30+ years of weaving experience and is a trusted weaving partner for export brands.
              </p>
              <p>
                The journey began with traditional handloom weaving, evolved into powerloom production, and today transformed into advanced autoloom technology. With 20+ skilled workers and modern weaving services, the company continues to deliver quality textile production with trust and innovation.
              </p>
              <h2>Owner's</h2>
              <h4>(1) Dhanasekaran Kamalaveni <span className="text-maroon"> ~Founder</span></h4>
              <h4>(2) Kamalaveni Dhanasekaran <span className="text-maroon"> ~Co - Founder</span></h4>
              <h4>(3) D.K Vidyasri (B.Tech IT) <span className="text-maroon"> ~Managing Director</span></h4>

              <div className="core-values">
                <div className="value-item interactive">
                  <Target className="value-icon" size={24} />
                  <span>Precision Quality</span>
                </div>
                <div className="value-item interactive">
                  <Users className="value-icon" size={24} />
                  <span>Skilled Artisanship</span>
                </div>
                <div className="value-item interactive">
                  <Zap className="value-icon" size={24} />
                  <span>Modern Innovation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-image-wrapper interactive"
            >
              <div className="story-image">
                <img src="https://images.unsplash.com/photo-1606478950587-c1a7003f56ce?w=800&q=80" alt="Weaving Factory" />
              </div>
              <div className="experience-badge">
                <span className="years">30+</span>
                <span className="text">Years<br />Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team / Leadership Section */}
      <section className="leadership-section section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Leadership</h2>
            <div className="divider mx-auto"></div>
          </div>

          <div className="leadership-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="leader-card interactive"
            >
              <div className="leader-img">
                <img src={fatherImg} alt="Dhanasekaran T" />
              </div>
              <div className="leader-info">
                <h3>Dhanasekaran T</h3>
                <p className="role text-gold">Founder & Director</p>
                <p className="bio">With three decades of expertise, leading the company from handloom roots to autoloom success.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="leader-card interactive"
            >
              <div className="leader-img">
                <img src={myPhotoImg} alt="Vidyasri Dhanasekaran" />
              </div>
              <div className="leader-info">
                <h3>D.K Vidyasri (B.Tech IT)</h3>
                <p className="role text-gold">Managing Director</p>
                <p className="bio">Spearheading modern operations, client relations, and quality assurance for export standards.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
