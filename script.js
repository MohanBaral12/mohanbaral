// Navigation scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollTop = 0;
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Portfolio filtering
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Sample portfolio items - Replace with your actual projects
    const portfolioItems = [
        {
            category: 'web',
            title: 'E-commerce Website',
            image: 'project1.jpg',
            description: 'A modern e-commerce platform built with React'
        },
        {
            category: 'design',
            title: 'Brand Identity',
            image: 'project2.jpg',
            description: 'Complete brand identity design for a tech startup'
        },
        {
            category: 'app',
            title: 'Mobile App',
            image: 'project3.jpg',
            description: 'iOS fitness tracking application'
        }
        // Add more portfolio items as needed
    ];

    // Initialize portfolio grid
    function initializePortfolio() {
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = `portfolio-item ${item.category}`;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    function initPortfolioFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                        item.style.display = 'block';
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Filter portfolio items
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            document.querySelectorAll('.portfolio-item').forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize portfolio
    initializePortfolio();

    // Initialize portfolio filter
    initPortfolioFilter();

    // 3D Navigation Animations
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-links li');
    
    // Add active class to nav items when scrolling
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').slice(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // 3D hover effect
    navItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            const dx = x - xc;
            const dy = y - yc;
            
            item.style.transform = `translateZ(15px) rotateX(${dy / -5}deg) rotateY(${dx / 5}deg)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
        });
    });

    // Parallax effect for logo
    document.querySelector('.logo').addEventListener('mousemove', (e) => {
        const logo = e.target;
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const dx = x - xc;
        const dy = y - yc;
        
        logo.style.transform = `translateZ(20px) rotateX(${dy / -10}deg) rotateY(${dx / 10}deg)`;
    });

    document.querySelector('.logo').addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });

    // Skill progress animation
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');

    function animateSkills() {
        progressBars.forEach(progress => {
            progress.style.width = progress.parentElement.parentElement.getAttribute('data-progress') + '%';
        });
    }

    // Animate skills when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
            }
        });
    });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll reveal animation
    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    // Animate skill bars when they come into view
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.setProperty('--progress-width', `${width}%`);
                    progressBar.classList.add('animate');
                    // Unobserve after animation
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // Initialize skill bars animation
    animateSkillBars();
});

// Dynamic typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
const heroText = document.querySelector('.hero p');
if (heroText) {
    typeWriter(heroText, 'Software Developer & Designer');
}
