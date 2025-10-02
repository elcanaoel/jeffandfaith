import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CountdownTimer.scss';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const weddingDate = new Date('2025-12-19T14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsWeddingDay(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  if (isWeddingDay) {
    return (
      <section className="countdown-timer wedding-day">
        <div className="container">
          <motion.div
            className="wedding-day-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="wedding-day-title">🎉 It's Our Wedding Day! 🎉</h2>
            <p className="wedding-day-text">Thank you for being part of our special day!</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="countdown-timer">
      <div className="countdown-timer__background">
        <div className="countdown-timer__overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="countdown-timer__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="countdown-timer__title" variants={itemVariants}>
            Counting Down to Our Special Day
          </motion.h2>
          
          <motion.div className="countdown-timer__grid" variants={itemVariants}>
            <motion.div 
              className="countdown-timer__item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="countdown-timer__number">{timeLeft.days}</div>
              <div className="countdown-timer__label">Days</div>
            </motion.div>
            
            <motion.div 
              className="countdown-timer__item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="countdown-timer__number">{timeLeft.hours}</div>
              <div className="countdown-timer__label">Hours</div>
            </motion.div>
            
            <motion.div 
              className="countdown-timer__item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="countdown-timer__number">{timeLeft.minutes}</div>
              <div className="countdown-timer__label">Minutes</div>
            </motion.div>
            
            <motion.div 
              className="countdown-timer__item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="countdown-timer__number">{timeLeft.seconds}</div>
              <div className="countdown-timer__label">Seconds</div>
            </motion.div>
          </motion.div>
          
          <motion.p className="countdown-timer__subtitle" variants={itemVariants}>
            Until Jeff & Faith say "I Do" 💍
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
