import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../LazyImage/LazyImage';
import './GiftRegistry.scss';

interface GiftItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  purchased: boolean;
  category: string;
}

const GiftRegistry: React.FC = () => {
  const giftItems: GiftItem[] = [
    {
      id: 1,
      name: "Kitchen Stand Mixer",
      description: "Professional-grade stand mixer for all our baking adventures",
      price: "₦85,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      purchased: false,
      category: "Kitchen"
    },
    {
      id: 2,
      name: "Dinnerware Set",
      description: "Elegant 12-piece dinnerware set for hosting family and friends",
      price: "₦45,000",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
      purchased: true,
      category: "Dining"
    },
    {
      id: 3,
      name: "Bedding Set",
      description: "Luxury cotton bedding set for our master bedroom",
      price: "₦35,000",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop",
      purchased: false,
      category: "Bedroom"
    },
    {
      id: 4,
      name: "Coffee Machine",
      description: "Automatic espresso machine for our morning coffee ritual",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
      purchased: false,
      category: "Kitchen"
    },
    {
      id: 5,
      name: "Decorative Vases",
      description: "Set of 3 ceramic vases for our living room decor",
      price: "₦25,000",
      image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop",
      purchased: false,
      category: "Decor"
    },
    {
      id: 6,
      name: "Cookware Set",
      description: "Non-stick cookware set with all essential pots and pans",
      price: "₦65,000",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      purchased: true,
      category: "Kitchen"
    }
  ];

  const categories = ["All", "Kitchen", "Dining", "Bedroom", "Decor"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All" 
    ? giftItems 
    : giftItems.filter(item => item.category === selectedCategory);

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
        duration: 0.6
      }
    }
  };

  return (
    <section className="gift-registry" id="gift-registry">
      <div className="container">
        <motion.div
          className="gift-registry__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="gift-registry__header" variants={itemVariants}>
            <h2 className="gift-registry__title">Gift Registry</h2>
            <p className="gift-registry__subtitle">
              Your presence is the greatest gift, but if you'd like to help us start our new life together, 
              here are some items we'd love to have in our home.
            </p>
          </motion.div>

          <motion.div className="gift-registry__filters" variants={itemVariants}>
            {categories.map((category) => (
              <button
                key={category}
                className={`gift-registry__filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div className="gift-registry__grid" variants={containerVariants}>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className={`gift-registry__item ${item.purchased ? 'purchased' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="gift-registry__image-wrapper">
                  <LazyImage
                    src={item.image}
                    alt={item.name}
                    className="gift-registry__image"
                    loading="lazy"
                  />
                  {item.purchased && (
                    <div className="gift-registry__purchased-overlay">
                      <span className="gift-registry__purchased-text">✓ Purchased</span>
                    </div>
                  )}
                </div>
                
                <div className="gift-registry__details">
                  <div className="gift-registry__category">{item.category}</div>
                  <h3 className="gift-registry__name">{item.name}</h3>
                  <p className="gift-registry__description">{item.description}</p>
                  <div className="gift-registry__price">{item.price}</div>
                  
                  {!item.purchased && (
                    <button className="gift-registry__purchase-btn">
                      <span className="gift-registry__btn-icon">🎁</span>
                      Purchase This Gift
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="gift-registry__note" variants={itemVariants}>
            <p>
              <strong>Note:</strong> You can also contribute to our honeymoon fund or give a monetary gift. 
              Contact us at <a href="tel:09124766326">09124766326</a> or <a href="tel:08100226008">08100226008</a> for details.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftRegistry;
