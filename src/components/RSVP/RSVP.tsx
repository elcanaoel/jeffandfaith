import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './RSVP.scss';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service
    console.log('RSVP Data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guests: '1',
        message: ''
      });
    }, 3000);
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
      y: 0
    }
  };

  return (
    <section className="rsvp">
      <div className="container">
        <motion.div
          className="rsvp__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="rsvp__header" variants={itemVariants}>
            <span className="rsvp__icon">💕</span>
            <h2 className="rsvp__title">RSVP</h2>
            <p className="rsvp__subtitle">
              Please let us know if you'll be joining us for our special day
            </p>
          </motion.div>

          <div className="rsvp__main">
            <motion.div className="rsvp__form-section" variants={itemVariants}>
              {!isSubmitted ? (
                <form className="rsvp__form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="attendance" className="form-label">Will you attend? *</label>
                      <select
                        id="attendance"
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Please select</option>
                        <option value="both">Both Traditional & White Wedding</option>
                        <option value="traditional">Traditional Wedding Only</option>
                        <option value="white">White Wedding Only</option>
                        <option value="none">Unfortunately, I can't attend</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="guests" className="form-label">Number of Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="1">Just me</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5+">5+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Special Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={4}
                      placeholder="Share your wishes for the happy couple..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="form-submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="submit-icon">✈️</span>
                    Send RSVP
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="rsvp__success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="success-icon">💕</span>
                  <h3 className="success-title">Thank You!</h3>
                  <p className="success-message">
                    Your RSVP has been received. We can't wait to celebrate with you!
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div className="rsvp__contact" variants={itemVariants}>
              <h3 className="contact__title">Contact Us</h3>
              <p className="contact__subtitle">
                Have questions? Feel free to reach out to us directly
              </p>

              <div className="contact__methods">
                <a href="tel:09124766326" className="contact__method">
                  <span className="contact__icon">📞</span>
                  <div className="contact__info">
                    <span className="contact__label">Call or Text</span>
                    <span className="contact__value">09124766326</span>
                  </div>
                </a>

                <a href="tel:08100226008" className="contact__method">
                  <span className="contact__icon">📞</span>
                  <div className="contact__info">
                    <span className="contact__label">Call or Text</span>
                    <span className="contact__value">08100226008</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/2349124766326" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__method whatsapp"
                >
                  <span className="contact__icon">💬</span>
                  <div className="contact__info">
                    <span className="contact__label">WhatsApp</span>
                    <span className="contact__value">09124766326</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/2348100226008" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__method whatsapp"
                >
                  <span className="contact__icon">💬</span>
                  <div className="contact__info">
                    <span className="contact__label">WhatsApp</span>
                    <span className="contact__value">08100226008</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
