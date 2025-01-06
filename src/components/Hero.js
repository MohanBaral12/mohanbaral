import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <HeroSection>
      <GlowEffect
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="greeting" 
          variants={itemVariants}
        >
          👋 Hi there, I'm
        </motion.span>
        <motion.h1 
          className="name" 
          variants={itemVariants}
        >
          Mohan Baral
        </motion.h1>
        <motion.h2 
          className="title" 
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p 
          className="description" 
          variants={itemVariants}
        >
          I create beautiful, functional, and user-friendly digital experiences
        </motion.p>
        <motion.div 
          className="cta-buttons" 
          variants={itemVariants}
        >
          <Link to="portfolio" smooth={true} duration={800}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </PrimaryButton>
          </Link>
          <Link to="contact" smooth={true} duration={800}>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </SecondaryButton>
          </Link>
        </motion.div>
        <motion.div 
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 60vw;
  height: 60vw;
  background: radial-gradient(
    circle,
    rgba(37, 99, 235, 0.2) 0%,
    rgba(37, 99, 235, 0.1) 30%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 1;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 2;
  padding: 2rem;

  .greeting {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .name {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #60a5fa, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #94a3b8;
  }

  .description {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    color: #cbd5e1;
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .scroll-indicator {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    .name {
      font-size: 3rem;
    }
    .title {
      font-size: 2rem;
    }
    .description {
      font-size: 1.1rem;
    }
  }
`;

const ButtonBase = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  border: none;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);

  &:hover {
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);

  &:hover {
    background: rgba(37, 99, 235, 0.1);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.2);
  }
`;

export default Hero;
