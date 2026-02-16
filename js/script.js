// ===== PAGE SWITCHING FUNCTION =====
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId + '-page');
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Find and activate the correct nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-initialize skills animation if on about page
    if (pageId === 'about') {
        setTimeout(animateSkills, 300);
    }

    // Prevent default and return false
    return false;
}

// ===== BLOG POST FILTERING =====
function filterBlogPosts(category, button) {
    // Update active button
    document.querySelectorAll('.category-tabs .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');

    // Filter posts
    const posts = document.querySelectorAll('.blog-post-card');
    posts.forEach(post => {
        if (category === 'all') {
            post.style.display = 'block';
        } else {
            const postCategory = post.getAttribute('data-category');
            post.style.display = postCategory === category ? 'block' : 'none';
        }
    });
}

// ===== DARK MODE TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
        localStorage.setItem('theme', 'dark');
    }

    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'light';

            if (currentTheme !== 'dark') {
                newTheme = 'dark';
            }

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // Update icon based on theme
    function updateThemeIcon(theme) {
        if (!themeToggle) return;

        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');

        if (moonIcon && sunIcon) {
            if (theme === 'dark') {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }
    }
});

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
                navLinks.classList.remove('show');
            }
        });
    }
});

// ===== CIRCULAR SKILLS ANIMATION =====
function animateSkills() {
    const circularProgresses = document.querySelectorAll('.circular-progress');

    circularProgresses.forEach(progress => {
        const percent = progress.getAttribute('data-percent') || '0';
        const degrees = (parseInt(percent) / 100) * 360;

        // Get the icon to determine color
        const icon = progress.querySelector('i');
        let color = '#4f46e5'; // default color

        if (icon) {
            if (icon.classList.contains('fa-html5')) color = '#E34F26';
            else if (icon.classList.contains('fa-css3-alt')) color = '#1572B6';
            else if (icon.classList.contains('fa-js')) color = '#F7DF1E';
            else if (icon.classList.contains('fa-react')) color = '#61DAFB';
            else if (icon.classList.contains('fa-git-alt')) color = '#F05032';
            else if (icon.classList.contains('fa-node')) color = '#339933';
            else if (icon.classList.contains('fa-python')) color = '#3776AB';
            else if (icon.classList.contains('fa-database')) color = '#47A248';
        }

        progress.style.background = `conic-gradient(${color} ${degrees}deg, #e2e8f0 0deg)`;
    });
}

// ===== INTERSECTION OBSERVER FOR SKILLS =====
document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }
});

// ===== PROJECT FILTER =====
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        const category = card.getAttribute('data-category');
                        if (category === filterValue) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }
});

// ===== CONTACT FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const subject = document.getElementById('subject')?.value;
            const message = document.getElementById('message')?.value;

            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        });
    }
});

// ===== NEWSLETTER FORM =====
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]')?.value;

            if (email && isValidEmail(email)) {
                showNotification('Successfully subscribed to newsletter!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email', 'error');
            }
        });
    }
});

// ===== EMAIL VALIDATION HELPER =====
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== SHOW NOTIFICATION =====
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    // Add styles for notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = '10px';
    notification.style.background = type === 'success' ? '#10b981' : '#ef4444';
    notification.style.color = 'white';
    notification.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    notification.style.transform = 'translateX(400px)';
    notification.style.transition = 'transform 0.3s ease';
    notification.style.zIndex = '9999';

    notification.querySelector('.notification-content').style.display = 'flex';
    notification.querySelector('.notification-content').style.alignItems = 'center';
    notification.querySelector('.notification-content').style.gap = '1rem';

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.style.transform = 'translateX(0)', 100);

    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== UPDATE COPYRIGHT YEAR =====
document.addEventListener('DOMContentLoaded', function () {
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${year} Kelvin Atsu Djayouri. All rights reserved.`;
    }
});

// ===== BACK TO TOP BUTTON =====
document.addEventListener('DOMContentLoaded', function () {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '30px';
    backToTop.style.right = '30px';
    backToTop.style.width = '50px';
    backToTop.style.height = '50px';
    backToTop.style.borderRadius = '50%';
    backToTop.style.background = '#4f46e5';
    backToTop.style.color = 'white';
    backToTop.style.border = 'none';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';
    backToTop.style.alignItems = 'center';
    backToTop.style.justifyContent = 'center';
    backToTop.style.fontSize = '1.2rem';
    backToTop.style.boxShadow = '0 5px 20px rgba(79, 70, 229, 0.3)';
    backToTop.style.zIndex = '999';
    backToTop.style.transition = 'all 0.3s';

    document.body.appendChild(backToTop);

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===== INITIALIZE EVERYTHING ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio initialized');

    // Make sure home page is visible by default
    const activePage = document.querySelector('.page.active');
    if (!activePage) {
        const homePage = document.getElementById('home-page');
        if (homePage) {
            homePage.classList.add('active');
        }
    }

    // Set up all navigation links
    document.querySelectorAll('.nav-links a').forEach((link, index) => {
        const pages = ['home', 'about', 'projects', 'blog', 'contact'];
        if (index < pages.length) {
            link.setAttribute('onclick', `showPage('${pages[index]}'); return false;`);
        }
    });

    // Set up footer links
    document.querySelectorAll('.footer-links a').forEach((link, index) => {
        const pages = ['home', 'about', 'projects', 'blog', 'contact'];
        if (index < pages.length) {
            link.setAttribute('onclick', `showPage('${pages[index]}'); return false;`);
        }
    });

    // Set up breadcrumb links
    document.querySelectorAll('.breadcrumb a').forEach(link => {
        if (link.textContent === 'Home') {
            link.setAttribute('onclick', "showPage('home'); return false;");
        }
    });

    // Set up "View All Skills" link
    document.querySelectorAll('a[onclick*="about.html#skills"]').forEach(link => {
        link.setAttribute('onclick', "showPage('about'); return false;");
    });

    // Set up "Learn More" project links
    document.querySelectorAll('.project-links a[onclick*="projects.html"]').forEach(link => {
        link.setAttribute('onclick', "showPage('projects'); return false;");
    });

    // Set up "View All Projects" button
    document.querySelectorAll('a.btn-primary:not([href])').forEach(link => {
        if (link.textContent.includes('View All Projects')) {
            link.setAttribute('onclick', "showPage('projects'); return false;");
        }
    });

    // Set up "Hire Me" and "Get In Touch" buttons
    document.querySelectorAll('a.btn-primary').forEach(link => {
        if (link.textContent.includes('Hire Me') || link.textContent.includes('Get In Touch')) {
            link.setAttribute('onclick', "showPage('contact'); return false;");
        }
    });

    // Set up "Read More" blog links
    document.querySelectorAll('.read-more, .btn-primary').forEach(link => {
        if (link.closest('.blog-post-card') || link.closest('.featured-content')) {
            if (!link.getAttribute('onclick')) {
                link.setAttribute('onclick', "alert('Article opened! (Demo)'); return false;");
            }
        }
    });

    // Set up pagination links
    document.querySelectorAll('.pagination .page-link').forEach(link => {
        if (!link.getAttribute('onclick')) {
            link.setAttribute('onclick', "alert('Page navigation (Demo)'); return false;");
        }
    });

    // Set up social media links
    document.querySelectorAll('.social-item, .social-links a').forEach(link => {
        if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
            link.setAttribute('onclick', "alert('Social media profile (Demo)'); return false;");
        }
    });

    // Set up contact card links
    document.querySelectorAll('.contact-link').forEach(link => {
        if (link.textContent.includes('Get directions')) {
            link.setAttribute('onclick', "alert('Google Maps would open here (Demo)'); return false;");
        }
    });

    // Set up FAQ links
    document.querySelectorAll('.faq-preview a').forEach(link => {
        if (link.textContent.includes('FAQ')) {
            link.setAttribute('onclick', "document.getElementById('faq').scrollIntoView({behavior: 'smooth'}); return false;");
        } else if (link.textContent.includes('blog')) {
            link.setAttribute('onclick', "showPage('blog'); return false;");
        }
    });

    // Fix any remaining links
    document.querySelectorAll('a[href="#"]').forEach(link => {
        if (!link.getAttribute('onclick')) {
            link.setAttribute('onclick', "return false;");
        }
    });
});