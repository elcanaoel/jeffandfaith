import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './GuestBook.scss';

interface GuestMessage {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const GuestBook: React.FC = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      message: "Congratulations to the beautiful couple! Wishing you a lifetime of love and happiness. Can't wait to celebrate with you! 💕",
      timestamp: new Date('2024-12-01')
    },
    {
      id: 2,
      name: "Michael Brown",
      message: "Jeff and Faith, you two are perfect for each other! So excited to witness your special day. Here's to forever! 🥂",
      timestamp: new Date('2024-12-02')
    },
    {
      id: 3,
      name: "Emily Davis",
      message: "What a beautiful love story! I've watched you both grow together and I couldn't be happier. Congratulations! ❤️",
      timestamp: new Date('2024-12-03')
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newMessage: GuestMessage = {
        id: messages.length + 1,
        name: formData.name.trim(),
        message: formData.message.trim(),
        timestamp: new Date()
      };

      setMessages(prev => [newMessage, ...prev]);
      setFormData({ name: '', message: '' });
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="guest-book">
      <div className="container">
        <motion.div
          className="guest-book__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="guest-book__header" variants={itemVariants}>
            <h2 className="guest-book__title">Guest Book</h2>
            <p className="guest-book__subtitle">
              Leave us a message and share in our joy! Your words mean the world to us.
            </p>
          </motion.div>

          <div className="guest-book__main">
            <motion.div className="guest-book__form-section" variants={itemVariants}>
              <form className="guest-book__form" onSubmit={handleSubmit}>
                <div className="guest-book__form-group">
                  <label htmlFor="guestName" className="guest-book__label">Your Name</label>
                  <input
                    type="text"
                    id="guestName"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="guest-book__input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="guest-book__form-group">
                  <label htmlFor="guestMessage" className="guest-book__label">Your Message</label>
                  <textarea
                    id="guestMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="guest-book__textarea"
                    rows={4}
                    placeholder="Share your wishes, memories, or advice for the happy couple..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="guest-book__submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="guest-book__spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="guest-book__submit-icon">✉️</span>
                      Sign Guest Book
                    </>
                  )}
                </motion.button>
              </form>

              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    className="guest-book__success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="guest-book__success-icon">🎉</span>
                    Thank you for signing our guest book!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="guest-book__messages" variants={itemVariants}>
              <h3 className="guest-book__messages-title">Messages from Our Loved Ones</h3>
              <div className="guest-book__messages-list">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className="guest-book__message"
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      layout
                    >
                      <div className="guest-book__message-header">
                        <h4 className="guest-book__message-name">{message.name}</h4>
                        <span className="guest-book__message-date">
                          {message.timestamp.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="guest-book__message-text">{message.message}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestBook;
