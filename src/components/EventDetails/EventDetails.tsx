import React from 'react';
import { motion } from 'framer-motion';
import './EventDetails.scss';

const EventDetails: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="event-details">
      <div className="container">
        <motion.div
          className="event-details__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Traditional Wedding */}
          <motion.div className="event-card traditional" variants={itemVariants}>
            <div className="event-card__header">
              <span className="event-card__icon">💕</span>
              <h2 className="event-card__title">TRADITIONAL WEDDING</h2>
            </div>
            
            <div className="event-card__content">
              <div className="event-card__detail">
                <span className="detail__icon">📅</span>
                <div className="detail__content">
                  <h3 className="detail__label">Date</h3>
                  <p className="detail__value">
                    <span className="day-name">FRIDAY</span>
                    <span className="day-number">19TH</span>
                    <span className="month-year">DECEMBER, 2025</span>
                  </p>
                </div>
              </div>
              
              <div className="event-card__detail">
                <span className="detail__icon">🕐</span>
                <div className="detail__content">
                  <h3 className="detail__label">Time</h3>
                  <p className="detail__value">2:00pm</p>
                </div>
              </div>
              
              <div className="event-card__detail">
                <span className="detail__icon">📍</span>
                <div className="detail__content">
                  <h3 className="detail__label">Venue</h3>
                  <p className="detail__value">
                    Late Inspector Isah Hussaini Edigbo compound's, 
                    Ojofu Anyigba
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* White Wedding */}
          <motion.div className="event-card white-wedding" variants={itemVariants}>
            <div className="event-card__header">
              <span className="event-card__icon">💕</span>
              <h2 className="event-card__title">WHITE WEDDING</h2>
            </div>
            
            <div className="event-card__content">
              <div className="event-card__detail">
                <span className="detail__icon">📅</span>
                <div className="detail__content">
                  <h3 className="detail__label">Date</h3>
                  <p className="detail__value">
                    <span className="day-name">SATURDAY</span>
                    <span className="day-number">20TH</span>
                    <span className="month-year">DECEMBER, 2025</span>
                  </p>
                </div>
              </div>
              
              <div className="event-card__detail">
                <span className="detail__icon">📍</span>
                <div className="detail__content">
                  <h3 className="detail__label">Venue</h3>
                  <p className="detail__value">
                    St Joseph Catholic church Anyigba, 
                    Dekina local Government. Kogi state
                  </p>
                </div>
              </div>
              
              <div className="event-card__detail reception">
                <div className="detail__content">
                  <h3 className="detail__label">Reception</h3>
                  <p className="detail__value">
                    Reception follows immediately after service at the same premises
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Color Theme */}
          <motion.div className="color-theme" variants={itemVariants}>
            <h2 className="color-theme__title">Color of the Day</h2>
            <div className="color-theme__colors">
              <div className="color-swatch emerald">
                <div className="color-swatch__color"></div>
                <span className="color-swatch__name">Emerald Green</span>
              </div>
              <div className="color-swatch white">
                <div className="color-swatch__color"></div>
                <span className="color-swatch__name">White</span>
              </div>
              <div className="color-swatch gold">
                <div className="color-swatch__color"></div>
                <span className="color-swatch__name">Gold</span>
              </div>
              <div className="color-swatch black">
                <div className="color-swatch__color"></div>
                <span className="color-swatch__name">Black</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
