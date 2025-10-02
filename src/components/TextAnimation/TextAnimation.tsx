import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TextAnimation.scss';

interface TextAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  cursor = false,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const cursorVariants = {
    visible: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  return (
    <motion.span
      className={`text-animation ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {displayText}
      {cursor && (
        <motion.span
          className="text-animation__cursor"
          variants={cursorVariants}
          animate="visible"
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

// Word-by-word reveal animation
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const WordReveal: React.FC<WordRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.1
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.span
      className={`word-reveal ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="word-reveal__word"
          variants={wordVariants}
        >
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Character-by-character reveal animation
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const CharReveal: React.FC<CharRevealProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03
}) => {
  const characters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.span
      className={`char-reveal ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="char-reveal__char"
          variants={charVariants}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextAnimation;
