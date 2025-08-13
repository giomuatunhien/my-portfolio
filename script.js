// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            
            // Special handling for about section to add extra spacing
            let extraOffset = 20;
            if (this.getAttribute('href') === '#about') {
                extraOffset = 60; // Extra spacing for about section
            }
            
            const targetPosition = target.offsetTop - navbarHeight - extraOffset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust for navbar height + some buffer
        if (scrollY >= (sectionTop - navbarHeight - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in-up');
//         }
//     });
// }, observerOptions);

// // Observe elements for animation
// document.querySelectorAll('.skill-category, .about-content, .contact-content').forEach(el => {
//     observer.observe(el);
// });

// Typing animation for hero title
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

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Đang gửi...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Skills animation on hover
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Project video hover control - Enhanced for better compatibility
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up video controls');
    
    const projectCards = document.querySelectorAll('.project-card');
    console.log('Found project cards:', projectCards.length);
    
    projectCards.forEach((card, index) => {
        const video = card.querySelector('video');
        
        if (video) {
            console.log(`Setting up video ${index + 1}:`, video.src);
            
            // Đảm bảo video được setup đúng
            video.muted = true; // Đảm bảo muted để bypass autoplay policy
            video.controls = false;
            
            // Event listeners cho video
            video.addEventListener('loadeddata', function() {
                console.log(`Video ${index + 1} loaded successfully`);
            });

            video.addEventListener('canplaythrough', function() {
                console.log(`Video ${index + 1} can play through`);
            });

            video.addEventListener('error', function(e) {
                console.error(`Video ${index + 1} error:`, e);
            });

            // Hover events với autoplay control
            card.addEventListener('mouseenter', function() {
                console.log(`Hover enter on card ${index + 1}`);
                
                // Thêm autoplay attribute và reset video về đầu
                video.setAttribute('autoplay', '');
                video.currentTime = 0;
                
                // Thử play với multiple fallbacks
                const playVideo = () => {
                    const playPromise = video.play();
                    
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            console.log(`Video ${index + 1} playing successfully with autoplay`);
                        }).catch(error => {
                            console.error(`Video ${index + 1} play failed:`, error);
                            
                            // Fallback: thử force muted và play lại
                            video.muted = true;
                            setTimeout(() => {
                                video.play().catch(e => {
                                    console.error(`Video ${index + 1} retry failed:`, e);
                                });
                            }, 100);
                        });
                    }
                };
                
                // Nếu video chưa ready, chờ và thử lại
                if (video.readyState >= 3) {
                    playVideo();
                } else {
                    video.addEventListener('canplaythrough', playVideo, { once: true });
                }
            });
            
            card.addEventListener('mouseleave', function() {
                console.log(`Hover leave on card ${index + 1}`);
                
                // Xóa autoplay attribute và dừng video
                video.removeAttribute('autoplay');
                video.pause();
                video.currentTime = 0;
                
                console.log(`Video ${index + 1} autoplay removed`);
            });

            // Initial setup - preload video
            if (video.readyState < 2) {
                video.load();
            }
        } else {
            console.log(`No video found in card ${index + 1}`);
        }
    });
});

// Project card tilt effect - Modified to not interfere with video
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        // const rect = this.getBoundingClientRect();
        // const x = e.clientX - rect.left;
        // const y = e.clientY - rect.top;
        
        // const centerX = rect.width / 2;
        // const centerY = rect.height / 2;
        
        // const rotateX = (y - centerY) / 10;
        // const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) scale3d(1, 1, 1)';
    });
});

// Parallax effect for hero section - DISABLED to fix section overlap
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Dark mode toggle (optional feature)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: var(--transition);
        box-shadow: var(--shadow);
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
    
    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.body.appendChild(toggle);
}

// Initialize dark mode toggle
createDarkModeToggle();

// Loading screen
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 3px solid var(--border-color);
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// Add spin animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .dark-mode {
        --bg-color: #1a1a1a;
        --bg-light: #2d2d2d;
        --text-color: #ffffff;
        --text-light: #cccccc;
        --border-color: #404040;
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
