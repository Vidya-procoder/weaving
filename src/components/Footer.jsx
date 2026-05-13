import { Link } from 'react-router-dom';
import { Share2, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="brand">
            <span className="brand-t">T.</span>
            <span className="brand-name">Dhanasekaran</span>
            <span className="brand-tex">Tex</span>
          </Link>
          <p className="footer-desc">
            Weaving Tradition into Modern Innovation. Over 30+ years of trusted weaving excellence delivering export quality production.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon interactive"><Share2 size={20} /></a>
            <a href="#" className="social-icon interactive"><Globe size={20} /></a>
            <a href="#" className="social-icon interactive"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>4/370 Malani Jedarplayam,<br />Periyamalani Post,<br />Namakkal District – 637410</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+91 9043137508</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>vidyasridhanasekaran@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} T. Dhanasekaran Tex. All rights reserved. </p>
          <p>Developed & Designed By D.K VIDYASRI (B.Tech IT),6374836727</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
