// Vehicle Showcase Carousel
console.log("Vehicle showcase script loaded!");

const vehicles = [
    {
        id: 1,
        name: "McLaren 720S",
        price: 420,
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Supercar", "Automatic", "2 Seats"]
    },
    {
        id: 2,
        name: "Porsche 911 Turbo", 
        price: 380,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Sports", "Automatic", "4 Seats"]
    },
    {
        id: 3,
        name: "Mercedes-Benz S-Class",
        price: 320,
        image: "https://images.unsplash.com/photo-1563720223480-8bfe38a750c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Luxury", "Automatic", "5 Seats"]
    },
    {
        id: 4,
        name: "Audi R8",
        price: 450,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Supercar", "Automatic", "2 Seats"]
    },
    {
        id: 5,
        name: "BMW M8 Competition",
        price: 390,
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Grand Tourer", "Automatic", "4 Seats"]
    },
    {
        id: 6,
        name: "Lamborghini Huracán",
        price: 520,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Supercar", "Automatic", "2 Seats"]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing carousel...");
    
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pagination = document.getElementById('pagination');
    
    if (!carouselTrack) {
        console.error("Carousel track element not found!");
        return;
    }
    
    let currentIndex = 0;
    let cardsPerView = 4;
    
    function updateCardsPerView() {
        const width = window.innerWidth;
        if (width <= 768) {
            cardsPerView = 1;
        } else if (width <= 992) {
            cardsPerView = 2;
        } else if (width <= 1200) {
            cardsPerView = 3;
        } else {
            cardsPerView = 4;
        }
    }
    
    function renderCarousel() {
        carouselTrack.innerHTML = '';
        if (pagination) pagination.innerHTML = '';
        
        vehicles.forEach((vehicle, index) => {
            const card = document.createElement('div');
            card.className = 'car-card';
            card.style.animationDelay = `${index * 0.1}s`;
            card.innerHTML = `
                <div class="card-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                </div>
                <div class="card-content">
                    <h3 class="car-name">${vehicle.name}</h3>
                    <div class="car-price">$${vehicle.price}<span>/day</span></div>
                    <div class="card-footer">
                        <div class="car-features">
                            ${vehicle.features.map(feature => `
                                <div class="feature">
                                    <i class="fas fa-circle"></i>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                        <button class="details-btn" onclick="viewVehicleDetails(${vehicle.id})">
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `;
            carouselTrack.appendChild(card);
            
            // Create pagination dots
            if (pagination) {
                const dot = document.createElement('div');
                dot.className = `pagination-dot ${index === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goToSlide(index));
                pagination.appendChild(dot);
            }
        });
        
        updateCarouselPosition();
    }
    
    function updateCarouselPosition() {
        const cardWidth = carouselTrack.children[0]?.offsetWidth + 30;
        const translateX = -currentIndex * cardWidth;
        carouselTrack.style.transform = `translateX(${translateX}px)`;
        
        // Update pagination dots
        if (pagination) {
            document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        updateNavigation();
    }
    
    function updateNavigation() {
        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= vehicles.length - cardsPerView;
        }
    }
    
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, vehicles.length - cardsPerView));
        updateCarouselPosition();
    }
    
    function nextSlide() {
        if (currentIndex < vehicles.length - cardsPerView) {
            currentIndex++;
            updateCarouselPosition();
        }
    }
    
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    }
    
    function setupEventListeners() {
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        window.addEventListener('resize', () => {
            updateCardsPerView();
            currentIndex = Math.min(currentIndex, vehicles.length - cardsPerView);
            updateCarouselPosition();
        });
    }
    
    // Initialize
    updateCardsPerView();
    renderCarousel();
    setupEventListeners();
    updateNavigation();
    
    console.log("Carousel initialized successfully!");
});

// Global function for details button
function viewVehicleDetails(vehicleId) {
    alert(`Viewing details for vehicle ID: ${vehicleId}\n\nThis would open a detailed modal with specifications and booking options.`);
}

function updateCardsPerView() {
    const width = window.innerWidth;
    if (width <= 768) {
        cardsPerView = 1;
    } else if (width <= 992) {
        cardsPerView = 2;
    } else if (width <= 1200) {
        cardsPerView = 3;
    } else {
        cardsPerView = 4;
    }
}