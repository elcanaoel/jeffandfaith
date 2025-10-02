import React from 'react';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer__background">
        <div className="footer__overlay"></div>
      </div>
      
      <div className="container">
        <div className="footer__content">
          <motion.div 
            className="footer__couple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="footer__icon">💍</span>
            <h3 className="footer__names">Jeff & Faith</h3>
            <p className="footer__date">December 19-20, 2025</p>
          </motion.div>
          
          <motion.div 
            className="footer__message"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="footer__text">
              "Two souls with but a single thought, two hearts that beat as one."
            </p>
            <div className="footer__hearts">
              <span className="heart heart-1">💕</span>
              <span className="heart heart-2">💕</span>
              <span className="heart heart-3">💕</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer__bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="footer__copyright">
              Made with <span className="footer__heart">💕</span> for Jeff & Faith's Wedding
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
