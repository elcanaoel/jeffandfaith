import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PhotoGallery.scss';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Sample photos - in a real app, these would come from props or an API
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
      alt: 'Jeff and Faith engagement photo',
      caption: 'Our engagement day - where it all began! 💍'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop',
      alt: 'Couple walking together',
      caption: 'Walking into our future together 👫'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=600&fit=crop',
      alt: 'Romantic sunset photo',
      caption: 'Sunset moments that take our breath away 🌅'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop',
      alt: 'Couple laughing together',
      caption: 'Laughter is the best part of our love story 😄'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop',
      alt: 'Dancing together',
      caption: 'Dancing through life, one step at a time 💃🕺'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=600&fit=crop',
      alt: 'Holding hands',
      caption: 'Hand in hand, heart to heart ❤️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="photo-gallery">
      <div className="container">
        <motion.div
          className="photo-gallery__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="photo-gallery__header" variants={itemVariants}>
            <h2 className="photo-gallery__title">Our Love Story in Pictures</h2>
            <p className="photo-gallery__subtitle">
              Capturing the beautiful moments of our journey together
            </p>
          </motion.div>

          <motion.div className="photo-gallery__grid" variants={containerVariants}>
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className="photo-gallery__item"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="photo-gallery__image-wrapper">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="photo-gallery__image"
                    loading="lazy"
                  />
                  <div className="photo-gallery__overlay">
                    <span className="photo-gallery__view-text">View Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for enlarged photo */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-gallery__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="photo-gallery__modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="photo-gallery__close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo"
              >
                ✕
              </button>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="photo-gallery__modal-image"
              />
              <p className="photo-gallery__modal-caption">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
