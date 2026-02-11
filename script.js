// Portfolio Data
const projects = [
    {
        title: "E-commerce Website",
        description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
        tags: ["React", "Node.js", "MySQL"],
        icon: "fa-shopping-cart",
        demo: "#",
        code: "#"
    },
    {
        title: "Jarvis AI Assistant",
        description: "An AI-powered assistant with voice recognition and natural language processing capabilities.",
        tags: ["Python", "AI", "NLP"],
        icon: "fa-robot",
        demo: "#",
        code: "https://github.com/raghul692/jarvis-AI-.git"
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing skills, projects, and certifications.",
        tags: ["HTML", "CSS", "JavaScript"],
        icon: "fa-user",
        demo: "#",
        code: "#"
    },
    {
        title: "Student Management System",
        description: "A comprehensive system for managing student records, grades, and attendance.",
        tags: ["Java", "MySQL", "JavaFX"],
        icon: "fa-graduation-cap",
        demo: "#",
        code: "https://github.com/raghul692/student-management-system.git"
    },
    {
        title: "Weather Application",
        description: "Real-time weather application with location-based forecasts and weather alerts.",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        icon: "fa-cloud",
        demo: "#",
        code: "https://github.com/raghul692/Weather-Application.git"
    },
    {
        title: "Food Made App Design",
        description: "UI/UX design for a food delivery mobile application with modern interface.",
        tags: ["Figma", "UI/UX", "Prototyping"],
        icon: "fa-utensils",
        demo: "#",
        code: "https://github.com/raghul692/home-made-food-delivery-.git"
    }
];

const certificates = [
    { name: "Appreciation Certification", issuer: "Professional", file: "CERTIFICATES/APEARICIATION CERTIFICATE.jpeg" },
    { name: "UI/UX Design Certification", issuer: "Guvi", file: "CERTIFICATES/UIUX DESIGN CERTIFICATE IN GUVI.pdf" },
    { name: "Guvi Participation Certification", issuer: "Professional", file: "CERTIFICATES/DATA SCIENCE FUNDAMENTALS  WEBINAR IN GUVI CERTIFICATE.jpeg" },
    { name: "GEN AI Certificate", issuer: "Oracle", file: "CERTIFICATES/GEN AI CERTIFICATE IN ORACLE.pdf" },
    { name: "EBPL Certificate", issuer: "NM", file: "CERTIFICATES/EBPL CERTIFICATE IN NM.pdf" },
    { name: "Management Conclave Certificate", issuer: "Professional", file: "CERTIFICATES/MANAGEMENT CONCLAVE CERTIFICATE.jpeg" }
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const certificatesGrid = document.getElementById('certificates-grid');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const contactForm = document.getElementById('contact-form');

// Load Projects
function loadProjects() {
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card animate-fadeInUp';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image">
                <i class="fas ${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}" class="demo">Demo</a>
                    <a href="${project.code}" class="code">Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

// Load Certificates
function loadCertificates() {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const pdfExtensions = ['.pdf'];
    
    certificates.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'certificate-card animate-fadeInUp';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const ext = cert.file.toLowerCase().slice(cert.file.lastIndexOf('.'));
        const isImage = imageExtensions.includes(ext);
        const isPdf = pdfExtensions.includes(ext);
        
        let displayContent = '';
        if (isImage) {
            displayContent = `<img src="${cert.file}" alt="${cert.name}" class="certificate-image" style="object-fit: cover;">`;
        } else if (isPdf) {
            displayContent = `
                <div class="certificate-image">
                    <i class="fas fa-file-pdf"></i>
                </div>
            `;
        } else {
            displayContent = `
                <div class="certificate-image">
                    <i class="fas fa-certificate"></i>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${displayContent}
            <div class="certificate-content">
                <h3>${cert.name}</h3>
                <p>${cert.issuer}</p>
            </div>
        `;
        
        // Make certificate clickable to open
        card.addEventListener('click', () => {
            if (isPdf) {
                window.open(cert.file, '_blank');
            } else if (isImage) {
                window.open(cert.file, '_blank');
            }
        });
        
        certificatesGrid.appendChild(card);
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
}

// Smooth Scroll for Navigation Links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
    }
}

// Animate Progress Bars on Scroll
function animateProgressBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const progress = item.querySelector('.progress');
        const rect = item.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const width = progress.style.width;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        }
    });
}

// Contact Form Handler with EmailJS
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('from_name').value;
    const email = document.getElementById('from_email').value;
    const message = document.getElementById('message').value;
    
    // Get or create message element
    let messageEl = document.getElementById('form-message');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'form-message';
        messageEl.className = 'form-message';
        e.target.appendChild(messageEl);
    }
    
    // EmailJS configuration
    const serviceID = 'service_k7n8hrd';
    const templateID = 'template_yh5621p';
    
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Disable button and show loading
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then((response) => {
            console.log('Email sent successfully!', response);
            messageEl.textContent = 'Thank you! Your message has been sent successfully.';
            messageEl.className = 'form-message success';
            e.target.reset();
        })
        .catch((error) => {
            console.error('EmailJS Error:', error);
            
            // Fallback to mailto if EmailJS fails
            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:raghulraja2006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            messageEl.innerHTML = 'There was an error sending your message. <a href="' + mailtoLink + '" style="color: inherit; text-decoration: underline;">Click here to send via email</a> or try again.';
            messageEl.className = 'form-message error';
        })
        .finally(() => {
            // Re-enable button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards
    const cards = document.querySelectorAll('.project-card, .certificate-card, .stat-card, .skill-category');
    cards.forEach(card => observer.observe(card));
}

// Active Navigation Link on Scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadCertificates();
    setupIntersectionObserver();
    
    // Event Listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    contactForm.addEventListener('submit', handleContactForm);
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Trigger initial progress bar animation
    setTimeout(animateProgressBars, 500);
    
    // Update active nav link on scroll
    updateActiveNavLink();
});

// Add scroll event listener for active nav link
window.addEventListener('scroll', updateActiveNavLink);

// Lazy Load Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Copy email to clipboard
function copyEmail() {
    navigator.clipboard.writeText('raghulraja2006@gmail.com').then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
}
