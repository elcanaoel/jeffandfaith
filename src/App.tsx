import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import OurStory from './components/OurStory/OurStory';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import EventDetails from './components/EventDetails/EventDetails';
import GiftRegistry from './components/GiftRegistry/GiftRegistry';
import GuestBook from './components/GuestBook/GuestBook';
import RSVP from './components/RSVP/RSVP';
import SocialShare from './components/SocialShare/SocialShare';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './styles/global.scss';
import './App.scss';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add a subtle loading animation
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <CountdownTimer />
        <OurStory />
        <PhotoGallery />
        <EventDetails />
        <GiftRegistry />
        <GuestBook />
        <RSVP />
        <SocialShare />
        <Footer />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
