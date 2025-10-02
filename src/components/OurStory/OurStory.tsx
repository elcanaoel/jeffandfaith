import React from 'react';
import { motion } from 'framer-motion';
import './OurStory.scss';

interface StoryEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
}

const OurStory: React.FC = () => {
  const storyEvents: StoryEvent[] = [
    {
      id: 1,
      date: "2020",
      title: "First Meeting",
      description: "We met through mutual friends at a local gathering. It was love at first sight, though we were both too shy to admit it!",
      icon: "👫"
    },
    {
      id: 2,
      date: "2021",
      title: "First Date",
      description: "Our first official date was at a cozy restaurant. We talked for hours and knew we had found something special.",
      icon: "💕"
    },
    {
      id: 3,
      date: "2022",
      title: "Moving In Together",
      description: "We decided to take the next step and move in together. Building our home and life as a team brought us even closer.",
      icon: "🏠"
    },
    {
      id: 4,
      date: "2023",
      title: "Meeting the Families",
      description: "Introducing each other to our families was a beautiful experience. Everyone could see how perfect we are together.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      id: 5,
      date: "2024",
      title: "The Proposal",
      description: "Jeff proposed during a romantic sunset picnic. Faith said yes immediately, and we couldn't stop crying happy tears!",
      icon: "💍"
    },
    {
      id: 6,
      date: "2025",
      title: "Our Wedding Day",
      description: "Today we celebrate our love with all our family and friends. The beginning of our forever starts now!",
      icon: "💒"
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="our-story">
      <div className="our-story__background">
        <div className="our-story__overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="our-story__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="our-story__header" variants={itemVariants}>
            <h2 className="our-story__title">Our Love Story</h2>
            <p className="our-story__subtitle">
              The beautiful journey that brought us together
            </p>
          </motion.div>

          <div className="our-story__timeline">
            {storyEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className={`our-story__event ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                <div className="our-story__event-content">
                  <div className="our-story__event-icon">
                    <span className="our-story__icon">{event.icon}</span>
                  </div>
                  <div className="our-story__event-details">
                    <div className="our-story__event-date">{event.date}</div>
                    <h3 className="our-story__event-title">{event.title}</h3>
                    <p className="our-story__event-description">{event.description}</p>
                  </div>
                </div>
                <div className="our-story__timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
