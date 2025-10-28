       // DOM Elements
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        const navbar = document.querySelector('.navbar');
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        const themeToggle = document.getElementById('themeToggle');

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

        // Dark Mode Toggle
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDarkMode = document.body.classList.contains('dark-theme');
            themeToggle.innerHTML = isDarkMode 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
            
            // Save preference to localStorage
            localStorage.setItem('darkMode', isDarkMode);
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

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

        // Featured vehicles data (4 cars)
        const featuredVehicles = [
            {
                id: 1,
                name: "BMW M5 Competition",
                brand: "BMW",
                type: "Sedan",
                price: 105000,
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                year: 2023,
                fuel: "Petrol",
                transmission: "Automatic",
                seats: 5,
                status: "available"
            },
            {
                id: 2,
                name: "Mercedes-Benz GLE",
                brand: "Mercedes-Benz",
                type: "SUV",
                price: 75000,
                image: "https://images.unsplash.com/photo-1563720223480-8bfe38a750c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                year: 2023,
                fuel: "Diesel",
                transmission: "Automatic",
                seats: 7,
                status: "available"
            },
            {
                id: 3,
                name: "Tesla Model S Plaid",
                brand: "Tesla",
                type: "Electric",
                price: 135000,
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                year: 2023,
                fuel: "Electric",
                transmission: "Automatic",
                seats: 5,
                status: "reserved"
            },
            {
                id: 4,
                name: "Porsche 911 Turbo S",
                brand: "Porsche",
                type: "Sports",
                price: 215000,
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                year: 2023,
                fuel: "Petrol",
                transmission: "Automatic",
                seats: 4,
                status: "available"
            }
        ];

        // DOM Elements
        const featuredVehiclesGrid = document.getElementById('featuredVehiclesGrid');

        // Initialize the featured vehicles
        function initFeaturedVehicles() {
            renderFeaturedVehicles();
            setupAnimations();
            setupCounterAnimation();
        }

        // Render featured vehicles to the grid
        function renderFeaturedVehicles() {
            if (!featuredVehiclesGrid) return;
            
            featuredVehiclesGrid.innerHTML = '';
            
            featuredVehicles.forEach(vehicle => {
                const vehicleCard = createVehicleCard(vehicle);
                featuredVehiclesGrid.appendChild(vehicleCard);
            });
        }

        // Create vehicle card HTML (without buttons)
        function createVehicleCard(vehicle) {
            const card = document.createElement('div');
            card.className = 'vehicle-card fade-in';
            
            const badgeClass = `card-badge badge-${vehicle.status}`;
            const badgeText = vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1);
            
            card.innerHTML = `
                <div class="${badgeClass}">${badgeText}</div>
                <img src="${vehicle.image}" alt="${vehicle.name}" class="card-image">
                <div class="card-content">
                    <div class="card-header">
                        <div>
                            <h3 class="vehicle-name">${vehicle.name}</h3>
                            <div class="vehicle-brand">${vehicle.brand}</div>
                        </div>
                        <div class="vehicle-price">$${vehicle.price.toLocaleString()}</div>
                    </div>
                    <div class="vehicle-type">${vehicle.type}</div>
                    <div class="quick-specs">
                        <div class="quick-spec">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${vehicle.year}</span>
                        </div>
                        <div class="quick-spec">
                            <i class="fas fa-gas-pump"></i>
                            <span>${vehicle.fuel}</span>
                        </div>
                        <div class="quick-spec">
                            <i class="fas fa-user"></i>
                            <span>${vehicle.seats} Seats</span>
                        </div>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Setup animations
        function setupAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        }

        // Counter animation for statistics
        function setupCounterAnimation() {
            const counters = document.querySelectorAll('.stat-number');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000;
                        const step = target / (duration / 16);
                        let current = 0;
                        
                        const updateCounter = () => {
                            current += step;
                            if (current < target) {
                                counter.textContent = Math.ceil(current) + (counter.getAttribute('data-target') === '98' ? '%' : '+');
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target + (counter.getAttribute('data-target') === '98' ? '%' : '+');
                            }
                        };
                        
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(counter => {
                observer.observe(counter);
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initFeaturedVehicles);