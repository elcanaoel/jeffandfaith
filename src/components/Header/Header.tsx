import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';

const Header: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="header__background">
        <div className="header__overlay"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="header__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="header__families"
            variants={textRevealVariants}
          >
            <motion.p 
              className="header__family-text"
              variants={textRevealVariants}
            >
              The family of
            </motion.p>
            
            <motion.div 
              className="header__family-names"
              variants={containerVariants}
            >
              <motion.div 
                className="header__family-group"
                variants={textRevealVariants}
              >
                <motion.h3 
                  className="header__family-name"
                  variants={textRevealVariants}
                >
                  Late Mr FRIDAY EJIGA
                </motion.h3>
                <motion.p 
                  className="header__family-location"
                  variants={textRevealVariants}
                >
                  Of Okikili Dekina, Dekina LGA Kogi state
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="header__ampersand"
                variants={nameVariants}
              >
                &
              </motion.div>
              
              <motion.div 
                className="header__family-group"
                variants={textRevealVariants}
              >
                <motion.h3 
                  className="header__family-name"
                  variants={textRevealVariants}
                >
                  Late Mr and Mrs HUSSAINI ISAH EDIGBO
                </motion.h3>
                <motion.p 
                  className="header__family-location"
                  variants={textRevealVariants}
                >
                  Of Ojofu Anyigba Dekina LGA Kogi state
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="header__invitation"
            variants={textRevealVariants}
          >
            <motion.p 
              className="header__invitation-text"
              variants={textRevealVariants}
            >
              Cordially invites the presence of
            </motion.p>
            <motion.div 
              className="header__guest-line"
              variants={lineVariants}
            >
              _______________________________
            </motion.div>
            <motion.p 
              className="header__invitation-to"
              variants={textRevealVariants}
            >
              to the
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="header__ceremony"
            variants={nameVariants}
          >
            <motion.h1 
              className="header__ceremony-title"
              variants={nameVariants}
            >
              Solemnization
            </motion.h1>
            <motion.h2 
              className="header__ceremony-subtitle"
              variants={textRevealVariants}
            >
              OF HOLY MATRIMONY
            </motion.h2>
            <motion.p 
              className="header__ceremony-text"
              variants={textRevealVariants}
            >
              OF THEIR BELOVED CHILDREN
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="header__couple"
            variants={nameVariants}
          >
            <motion.h2 
              className="header__groom-name"
              variants={nameVariants}
              whileHover={{ scale: 1.05 }}
            >
              JEFF OJONUGWA FRIDAY
            </motion.h2>
            <motion.div 
              className="header__couple-ampersand"
              variants={nameVariants}
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              &
            </motion.div>
            <motion.h2 
              className="header__bride-name"
              variants={nameVariants}
              whileHover={{ scale: 1.05 }}
            >
              FAITH UGBEDE ISAH
            </motion.h2>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
