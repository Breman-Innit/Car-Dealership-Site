// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');


let currentSlide = 0;
let slideInterval;

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Slide Functions
function showSlide(index) {
    // Reset all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Show the selected slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
    
    // Reset animation classes for the new slide
    const contentElements = slides[index].querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    contentElements.forEach(el => {
        el.classList.remove('appear');
    });
    
    // Trigger animations after a short delay
    setTimeout(() => {
        contentElements.forEach(el => {
            el.classList.add('appear');
        });
    }, 300);
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
}

function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) prev = slides.length - 1;
    showSlide(prev);
}

// Start automatic slideshow
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Stop automatic slideshow
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event Listeners for slide navigation
nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow();
    startSlideShow();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopSlideShow();
    startSlideShow();
});

// Add click events to indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        stopSlideShow();
        startSlideShow();
    });
});

// Initialize slideshow
startSlideShow();

// Fade-in animation on scroll
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    appearOnScroll.observe(element);
});

// Dropdown functionality for mobile
document.querySelectorAll('.nav-item').forEach(item => {
    if (window.innerWidth <= 992) {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (dropdown) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
            });
        }
    }
});