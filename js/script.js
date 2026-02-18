// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateThemeIcon('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggle) return;

        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    }

    // Real-time Clock
    function updateClock() {
        const now = new Date();
        const timeElement = document.getElementById('time');
        if (timeElement) {
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;

            // Check if on mobile (screen width < 768px)
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                // Shorter format for mobile: HH:MM AM/PM
                timeElement.textContent = `${displayHours}:${minutes} ${ampm}`;
            } else {
                // Full format for desktop: HH:MM:SS AM/PM
                timeElement.textContent = `${displayHours}:${minutes}:${seconds} ${ampm}`;
            }

            timeElement.style.display = 'inline'; // Ensure it's visible
        }
    }

    // Initialize clock immediately and set interval
    updateClock();
    setInterval(updateClock, 1000);
});

// Navigation Active Link Highlighting
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Smooth scroll behavior
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Scroll Animation
document.addEventListener('DOMContentLoaded', function () {
    // Add animation classes on page load
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const projectCards = document.querySelectorAll('.project-card');
    const valueCards = document.querySelectorAll('.value-card');
    const sections = document.querySelectorAll('section');

    // Initial animations
    if (sidebar) sidebar.classList.add('slide-in-left');
    if (mainContent) mainContent.classList.add('slide-in-right');

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.classList.contains('project-card')) {
                    element.style.animation = 'slideInUp 0.6s ease-out forwards';
                } else if (element.classList.contains('value-card')) {
                    element.style.animation = 'scaleIn 0.6s ease-out forwards';
                } else if (element.tagName === 'SECTION') {
                    element.style.animation = 'fadeIn 0.6s ease-out forwards';
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    projectCards.forEach(card => observer.observe(card));
    valueCards.forEach(card => observer.observe(card));
    sections.forEach(section => {
        if (section.id) observer.observe(section);
    });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }
});

// Project Filter
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const categories = card.getAttribute('data-category') || '';
                        card.style.display = categories.includes(filterValue) ? 'block' : 'none';
                    }
                });
            });
        });
    }
});

// Blog Category Filter
document.addEventListener('DOMContentLoaded', function () {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    if (categoryTabs.length && blogPosts.length) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const category = tab.getAttribute('data-category');

                blogPosts.forEach(post => {
                    if (category === 'all') {
                        post.style.display = 'block';
                    } else {
                        const postCategory = post.getAttribute('data-category') || '';
                        post.style.display = postCategory.includes(category) ? 'block' : 'none';
                    }
                });
            });
        });
    }
});

// Contact Form (Demo)
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent! (Demo)');
            contactForm.reset();
        });
    }
});

// Active Navigation
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Update Copyright Year
document.addEventListener('DOMContentLoaded', function () {
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
    }
});

// Project Modal Functions
function openProjectModal(projectCard) {
    const modal = document.getElementById('projectModal');
    const projectId = projectCard.getAttribute('data-project-id');
    const title = projectCard.getAttribute('data-title');
    const status = projectCard.getAttribute('data-status');
    const description = projectCard.getAttribute('data-description');
    const featuresStr = projectCard.getAttribute('data-features');
    const techStr = projectCard.getAttribute('data-tech');
    const link = projectCard.getAttribute('data-link');
    const repo = projectCard.getAttribute('data-repo');

    // Set title and status
    document.getElementById('modalTitle').textContent = title;
    const statusElement = document.getElementById('modalStatus');
    statusElement.textContent = status === 'completed' ? '✅ Completed' : '🚀 In Progress';
    statusElement.classList.remove('completed');
    if (status === 'completed') {
        statusElement.classList.add('completed');
    }

    // Set description
    document.getElementById('modalDescription').textContent = description;

    // Set features
    const features = featuresStr.split(',').map(f => f.trim());
    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = '';
    features.forEach(feature => {
        const featureSpan = document.createElement('span');
        featureSpan.className = 'modal-feature';
        featureSpan.textContent = feature;
        modalFeatures.appendChild(featureSpan);
    });

    // Set tech tags
    const techs = techStr.split(',').map(t => t.trim());
    const modalTech = document.getElementById('modalTech');
    modalTech.innerHTML = '';
    techs.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.className = 'modal-tech-tag';
        techSpan.innerHTML = `<i class="fas fa-code"></i>${tech}`;
        modalTech.appendChild(techSpan);
    });

    // Set action buttons
    const linkBtn = document.getElementById('modalLinkBtn');
    const repoBtn = document.getElementById('modalRepoBtn');

    if (link && link !== '') {
        linkBtn.style.display = 'inline-flex';
        linkBtn.href = link;
    } else {
        linkBtn.style.display = 'none';
    }

    if (repo && repo !== '') {
        repoBtn.style.display = 'inline-flex';
        repoBtn.href = repo;
    } else {
        repoBtn.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Add click handlers to project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            openProjectModal(this);
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
});

// Project Modal Functions
function openProjectModal(projectCard) {
    const modal = document.getElementById('projectModal');
    const projectId = projectCard.getAttribute('data-project-id');
    const title = projectCard.getAttribute('data-title');
    const status = projectCard.getAttribute('data-status');
    const description = projectCard.getAttribute('data-description');
    const featuresStr = projectCard.getAttribute('data-features');
    const techStr = projectCard.getAttribute('data-tech');
    const link = projectCard.getAttribute('data-link');
    const repo = projectCard.getAttribute('data-repo');

    // Set title and status
    document.getElementById('modalTitle').textContent = title;
    const statusElement = document.getElementById('modalStatus');
    statusElement.textContent = status === 'completed' ? '✅ Completed' : '🚀 In Progress';
    statusElement.classList.remove('completed');
    if (status === 'completed') {
        statusElement.classList.add('completed');
    }

    // Set description
    document.getElementById('modalDescription').textContent = description;

    // Set features
    const features = featuresStr.split(',').map(f => f.trim());
    const modalFeatures = document.getElementById('modalFeatures');
    modalFeatures.innerHTML = '';
    features.forEach(feature => {
        const featureSpan = document.createElement('span');
        featureSpan.className = 'modal-feature';
        featureSpan.textContent = feature;
        modalFeatures.appendChild(featureSpan);
    });

    // Set tech tags
    const techs = techStr.split(',').map(t => t.trim());
    const modalTech = document.getElementById('modalTech');
    modalTech.innerHTML = '';
    techs.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.className = 'modal-tech-tag';
        techSpan.innerHTML = `<i class="fas fa-code"></i>${tech}`;
        modalTech.appendChild(techSpan);
    });

    // Set action buttons
    const linkBtn = document.getElementById('modalLinkBtn');
    const repoBtn = document.getElementById('modalRepoBtn');

    if (link && link !== '') {
        linkBtn.style.display = 'inline-flex';
        linkBtn.href = link;
    } else {
        linkBtn.style.display = 'none';
    }

    if (repo && repo !== '') {
        repoBtn.style.display = 'inline-flex';
        repoBtn.href = repo;
    } else {
        repoBtn.style.display = 'none';
    }

    // Show modal
    modal.classList.add('active');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Add click handlers to project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            openProjectModal(this);
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeProjectModal();
        }
    });
});