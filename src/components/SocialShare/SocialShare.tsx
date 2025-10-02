import React from 'react';
import { motion } from 'framer-motion';
import './SocialShare.scss';

const SocialShare: React.FC = () => {
  const shareUrl = window.location.href;
  const shareTitle = "Jeff & Faith's Wedding Invitation";
  const shareText = "Join us for our wedding celebration! Traditional Wedding: Dec 19, 2025 | White Wedding: Dec 20, 2025";

  const shareLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: '#1DA1F2'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: '#25D366'
    },
    {
      name: 'Email',
      icon: '📧',
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      color: '#EA4335'
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // Show success message (you could add a toast notification here)
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="social-share">
      <div className="container">
        <motion.div
          className="social-share__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h3 className="social-share__title" variants={itemVariants}>
            Share Our Joy
          </motion.h3>
          <motion.p className="social-share__subtitle" variants={itemVariants}>
            Help us spread the love by sharing our wedding invitation
          </motion.p>
          
          <motion.div className="social-share__buttons" variants={containerVariants}>
            {shareLinks.map((link) => (
              <motion.button
                key={link.name}
                className="social-share__button"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleShare(link.url)}
                style={{ '--button-color': link.color } as React.CSSProperties}
              >
                <span className="social-share__icon">{link.icon}</span>
                <span className="social-share__name">{link.name}</span>
              </motion.button>
            ))}
            
            <motion.button
              className="social-share__button copy-link"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyLink}
            >
              <span className="social-share__icon">🔗</span>
              <span className="social-share__name">Copy Link</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialShare;
