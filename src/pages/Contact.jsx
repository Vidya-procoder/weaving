import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
        <h1 className="section-title">Contact <span className="text-gold">Us</span></h1>
        <div className="divider mx-auto"></div>
        <p className="section-subtitle">Get in touch for export inquiries and weaving partnerships.</p>
      </div>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        <div className="contact-wrapper">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-info-panel"
          >
            <h2>Get In Touch</h2>
            <p>We are ready to weave your ideas into reality. Reach out to us today.</p>

            <div className="info-items">
              <div className="info-item interactive">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+91 9043137508</p>
                </div>
              </div>

              <div className="info-item interactive">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>vidyasridhanasekaran@gmail.com</p>
                </div>
              </div>

              <div className="info-item interactive">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>4/370 Malani Jedarplayam,<br />Periyamalani Post,<br />Namakkal District – 637410</p>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-overlay">
                <MapPin size={40} className="text-gold mb-2" />
                <span>Malani Jedarpalayam Namakkal (District) ~637410</span>
              </div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" alt="Map" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form-panel"
          >
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="interactive-input"
                />
                <label htmlFor="name">Your Name</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="interactive-input"
                />
                <label htmlFor="email">Email Address</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="interactive-input"
                />
                <label htmlFor="phone">Phone Number</label>
                <div className="input-line"></div>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="interactive-input"
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <div className="input-line"></div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn interactive">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
