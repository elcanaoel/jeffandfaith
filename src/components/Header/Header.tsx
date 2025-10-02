import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="header__background">
        <div className="header__overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="header__content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="header__families"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="header__family-text">The family of</p>
            
            <div className="header__family-names">
              <div className="header__family-group">
                <h3 className="header__family-name">Late Mr FRIDAY EJIGA</h3>
                <p className="header__family-location">Of Okikili Dekina, Dekina LGA Kogi state</p>
              </div>
              
              <div className="header__ampersand">&</div>
              
              <div className="header__family-group">
                <h3 className="header__family-name">Late Mr and Mrs HUSSAINI ISAH EDIGBO</h3>
                <p className="header__family-location">Of Ojofu Anyigba Dekina LGA Kogi state</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="header__invitation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p className="header__invitation-text">Cordially invites the presence of</p>
            <div className="header__guest-line">_______________________________</div>
            <p className="header__invitation-to">to the</p>
          </motion.div>
          
          <motion.div 
            className="header__ceremony"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h1 className="header__ceremony-title">Solemnization</h1>
            <h2 className="header__ceremony-subtitle">OF HOLY MATRIMONY</h2>
            <p className="header__ceremony-text">OF THEIR BELOVED CHILDREN</p>
          </motion.div>
          
          <motion.div 
            className="header__couple"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h2 className="header__groom-name">JEFF OJONUGWA FRIDAY</h2>
            <div className="header__couple-ampersand">&</div>
            <h2 className="header__bride-name">FAITH UGBEDE ISAH</h2>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
