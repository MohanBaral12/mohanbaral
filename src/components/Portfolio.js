import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Admin Dashboard',
      description: 'Modern admin panel with data visualization',
      category: 'web',
      image: '/images/DALL·E 2025-01-06 17.17.55 - A modern, sleek, and professional admin dashboard interface for a portfolio website. The dashboard should feature a clean layout with a sidebar menu o.webp',
      links: {
        preview: '#',
        code: '#'
      }
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design',
      category: 'web',
      image: '/images/portfolio.webp',
    },
    {
      id: 3,
      title: 'Brand Identity',
      description: 'Complete brand identity design with modern corporate style',
      category: 'design',
      image: '/images/brand-identity.webp',
      links: {
        preview: '#',
        code: '#'
      }
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <StyledPortfolio ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="section-container"
      >
        <motion.h2 
          variants={itemVariants}
          className="section-title"
        >
          My Portfolio
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="section-subtitle"
        >
          Showcasing some of my best work
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="portfolio-filters"
        >
          <FilterButton
            active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton
            active={activeFilter === 'web'}
            onClick={() => setActiveFilter('web')}
          >
            Web Development
          </FilterButton>
          <FilterButton
            active={activeFilter === 'design'}
            onClick={() => setActiveFilter('design')}
          >
            Design
          </FilterButton>
        </motion.div>

        <motion.div className="portfolio-grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-item"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  translateZ: 50,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="portfolio-card">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="portfolio-overlay"
                    initial={{ opacity: 0, y: 50 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.links && (
                      <div className="portfolio-links">
                        <motion.a
                          href={project.links.preview}
                          className="btn-view"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-eye"></i>
                        </motion.a>
                        <motion.a
                          href={project.links.code}
                          className="btn-code"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fab fa-github"></i>
                        </motion.a>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  perspective: 2000px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
    animation: gradientPulse 8s ease-in-out infinite;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 3rem;
    padding: 1.5rem;
  }

  .portfolio-item {
    border-radius: 20px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.card};
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  .portfolio-card img {
    width: 100%;
    height: 340px;
    object-fit: cover;
  }

  .portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.8) 40%,
      transparent 100%
    );
    color: white;
  }

  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  }
`;

const FilterButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : 'rgba(255, 255, 255, 0.9)'};
  color: ${({ active }) => active ? 'white' : 'inherit'};
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

export default Portfolio;
