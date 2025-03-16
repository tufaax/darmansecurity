// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Add animation classes to elements
    const sections = document.querySelectorAll('.intro-section, .features-grid, .testimonial-section, .atlanta-section, .coming-soon-section, .contact-section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });
    
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        if (index % 2 === 0) {
            item.classList.add('animate-on-scroll', 'animate-left');
        } else {
            item.classList.add('animate-on-scroll', 'animate-right');
        }
    });
    
    const cards = document.querySelectorAll('.contact-card, .category-item');
    cards.forEach(card => {
        card.classList.add('animate-on-scroll', 'animate-scale', 'float-on-hover');
    });
    
    const images = document.querySelectorAll('.feature-image');
    images.forEach(image => {
        image.classList.add('zoom-on-hover');
    });
    
    // Text reveal animations
    const headings = document.querySelectorAll('h1, h2, .hero p');
    headings.forEach(heading => {
        const text = heading.textContent;
        heading.innerHTML = `<span class="text-reveal"><span>${text}</span></span>`;
        heading.classList.add('animate-on-scroll');
    });
    
    // Section transitions
    const transitionSections = document.querySelectorAll('.intro-section, .features-grid, .testimonial-section');
    transitionSections.forEach(section => {
        section.classList.add('section-transition');
    });
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Handle scroll events
    function handleScroll() {
        // Update header style on scroll
        if (window.scrollY > 10) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
        
        // Update scroll progress indicator
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrollPercentage}%`;
        
        // Animate elements when they enter viewport
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
        
        // Reveal sections with transition effect
        document.querySelectorAll('.section-transition').forEach(section => {
            if (isInViewport(section) && !section.classList.contains('revealed')) {
                section.classList.add('revealed');
            }
        });
        
        // Reveal text animations
        document.querySelectorAll('.text-reveal').forEach(text => {
            if (isInViewport(text) && !text.classList.contains('revealed')) {
                text.classList.add('revealed');
            }
        });
        
        // Parallax effect
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            const scrollPosition = window.scrollY;
            const parent = bg.parentElement;
            const parentTop = parent.offsetTop;
            const speed = 0.5;
            
            if (scrollPosition > parentTop - window.innerHeight && 
                scrollPosition < parentTop + parent.offsetHeight) {
                const yPos = (scrollPosition - parentTop) * speed;
                bg.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
    
    // Initial check for elements in viewport
    setTimeout(function() {
        handleScroll();
    }, 100);
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
}); 