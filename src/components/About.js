import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const skills = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python',
    'HTML/CSS', 'SQL', 'Git', 'AWS', 'Docker'
  ];

  return (
    <AboutSection ref={ref}>
      <AboutContainer
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <ContentWrapper>
          <TextContent>
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="intro"
            >
              Hello! I'm Mohan, a passionate software developer with a keen eye for design.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="description"
            >
              I specialize in creating beautiful, functional, and user-friendly applications 
              that solve real-world problems. With a strong foundation in both front-end and 
              back-end development, I bring ideas to life through clean, efficient code.
            </motion.p>
            <SkillsContainer variants={itemVariants}>
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: index * 0.1,
                      },
                    },
                  }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </SkillsContainer>
          </TextContent>
          <ImageContainer variants={itemVariants}>
            <motion.div
              className="image-wrapper"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src="/images/about.jpeg" alt="Mohan Baral" />
              <motion.div 
                className="blob"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </ImageContainer>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  .intro {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillBadge = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.secondary}20);
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 2px solid ${({ theme }) => theme.colors.primary}30;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: default;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  .image-wrapper {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    img {
      width: 100%;
      height: auto;
      display: block;
      position: relative;
      z-index: 2;
    }
  }

  .blob {
    position: absolute;
    top: -20%;
    right: -20%;
    width: 140%;
    height: 140%;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}40, ${({ theme }) => theme.colors.secondary}40);
    z-index: 1;
  }
`;

export default About;
