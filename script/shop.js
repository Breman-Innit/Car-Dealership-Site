     // Car data - 30+ luxury vehicles
        const cars = [
            // Available Cars (12 vehicles)
            {
                id: 1,
                name: "Mercedes-Benz S-Class",
                price: 95000,
                rentalPrice: 450,
                type: "sedan",
                category: "available",
                image: "images/car3.jpg",
                features: ["V8 Engine", "Luxury Interior", "Auto Pilot"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 2,
                name: "BMW X7",
                price: 89000,
                rentalPrice: 420,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["7 Seats", "Panoramic Roof", "4WD"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 3,
                name: "Range Rover Sport",
                price: 82000,
                rentalPrice: 380,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Terrain Response", "Luxury Package", "4WD"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Diesel"
            },
            {
                id: 4,
                name: "Tesla Model X",
                price: 99000,
                rentalPrice: 480,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Electric", "Autopilot", "Falcon Doors"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Electric"
            },
            {
                id: 5,
                name: "Audi A8 L",
                price: 87000,
                rentalPrice: 410,
                type: "sedan",
                category: "available",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Quattro AWD", "Virtual Cockpit", "Massage Seats"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 6,
                name: "Lexus LX 600",
                price: 92000,
                rentalPrice: 440,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["V6 Twin-Turbo", "Off-Road Capable", "Luxury Package"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 7,
                name: "Porsche Panamera",
                price: 105000,
                rentalPrice: 520,
                type: "sedan",
                category: "available",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Sport Chrono", "Adaptive Suspension", "Premium Package"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 8,
                name: "Cadillac Escalade",
                price: 88000,
                rentalPrice: 430,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Super Cruise", "AKG Audio", "Massage Seats"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 9,
                name: "Jaguar F-Pace SVR",
                price: 83000,
                rentalPrice: 400,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Supercharged V8", "Sport Exhaust", "Dynamic Handling"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 10,
                name: "Genesis G90",
                price: 79000,
                rentalPrice: 370,
                type: "sedan",
                category: "available",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["3.5L V6", "Executive Package", "Rear Seat Entertainment"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 11,
                name: "Volvo XC90 Recharge",
                price: 76000,
                rentalPrice: 360,
                type: "suv",
                category: "available",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Plug-in Hybrid", "Bowers & Wilkins Audio", "Pilot Assist"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Hybrid"
            },
            {
                id: 12,
                name: "Maserati Quattroporte",
                price: 115000,
                rentalPrice: 580,
                type: "sedan",
                category: "available",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Ferrari-derived V8", "Skyhook Suspension", "Premium Leather"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            
            // Special Offers (12 vehicles)
            {
                id: 13,
                name: "Audi R8",
                price: 165000,
                rentalPrice: 850,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["V10 Engine", "Carbon Fiber", "Sport Exhaust"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 14,
                name: "Lexus LS 500",
                price: 78000,
                rentalPrice: 350,
                type: "sedan",
                category: "special",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Hybrid Engine", "Mark Levinson Audio", "Comfort Package"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Hybrid"
            },
            {
                id: 15,
                name: "BMW M8 Competition",
                price: 145000,
                rentalPrice: 720,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.4L V8", "M Sport Package", "Carbon Roof"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 16,
                name: "Mercedes-AMG GT",
                price: 158000,
                rentalPrice: 800,
                type: "sports",
                category: "special",
                image: "images/car3.jpg",
                features: ["Handcrafted AMG V8", "Race Mode", "Performance Exhaust"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 17,
                name: "Porsche Taycan Turbo",
                price: 175000,
                rentalPrice: 900,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Electric Performance", "800V Architecture", "Sport Chrono"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Electric"
            },
            {
                id: 18,
                name: "Aston Martin DB11",
                price: 225000,
                rentalPrice: 1100,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["5.2L V12", "GT Sports Seats", "Bang & Olufsen Audio"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 19,
                name: "Bentley Continental GT",
                price: 245000,
                rentalPrice: 1200,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["W12 Engine", "Mulliner Driving Spec", "Naim Audio"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 20,
                name: "McLaren 720S",
                price: 315000,
                rentalPrice: 1600,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.0L V8", "Carbon Fiber Monocage", "Active Dynamics"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 21,
                name: "Ferrari Roma",
                price: 285000,
                rentalPrice: 1400,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["3.9L V8", "8-Speed DCT", "Side Slip Control"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 22,
                name: "Lamborghini Huracan Evo",
                price: 295000,
                rentalPrice: 1500,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["5.2L V10", "LDVI System", "Carbon Ceramic Brakes"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 23,
                name: "Rolls-Royce Ghost",
                price: 385000,
                rentalPrice: 1900,
                type: "sedan",
                category: "special",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["6.75L V12", "Planar Suspension", "Starlight Headliner"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 24,
                name: "Bugatti Chiron",
                price: 3250000,
                rentalPrice: 16500,
                type: "sports",
                category: "special",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["8.0L W16", "Carbon Fiber Body", "Top Speed Mode"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            
            // Rentals (12 vehicles)
            {
                id: 25,
                name: "Porsche 911 Turbo",
                price: 185000,
                rentalPrice: 950,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Turbocharged", "Sport Chrono", "PDK"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 26,
                name: "Lamborghini Huracan",
                price: 245000,
                rentalPrice: 1200,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1544828262-9c4c5c6c8a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["V10 Engine", "Carbon Ceramic", "Launch Control"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 27,
                name: "Ferrari 488 GTB",
                price: 275000,
                rentalPrice: 1350,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1544828262-9c4c5c6c8a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["3.9L V8", "7-Speed DCT", "Side Slip Control"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 28,
                name: "Mercedes-Benz G-Class",
                price: 145000,
                rentalPrice: 700,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1563720223485-41b7d8334d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.0L V8", "Three Locking Diffs", "Luxury Interior"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 29,
                name: "Rolls-Royce Cullinan",
                price: 385000,
                rentalPrice: 1900,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["6.75L V12", "Magic Carpet Ride", "Starlight Headliner"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 30,
                name: "Bentley Bentayga",
                price: 195000,
                rentalPrice: 950,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["W12 Engine", "All-Terrain Spec", "Naim Audio"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 31,
                name: "Aston Martin DBX",
                price: 195000,
                rentalPrice: 950,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.0L V8", "GT Sports Seats", "Bang & Olufsen Audio"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 32,
                name: "Lamborghini Urus",
                price: 235000,
                rentalPrice: 1150,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.0L V8", "ANIMA Selector", "Carbon Ceramic Brakes"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 33,
                name: "Ferrari Purosangue",
                price: 425000,
                rentalPrice: 2100,
                type: "suv",
                category: "rental",
                image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["6.5L V12", "4-Seat Layout", "Ferrari DNA"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 34,
                name: "McLaren Artura",
                price: 245000,
                rentalPrice: 1200,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1544828262-9c4c5c6c8a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["V6 Hybrid", "Carbon Fiber Chassis", "Variable Drift Control"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Hybrid"
            },
            {
                id: 35,
                name: "Porsche 718 Cayman GT4",
                price: 115000,
                rentalPrice: 580,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["4.0L Flat-6", "PDK Transmission", "Clubsport Package"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Petrol"
            },
            {
                id: 36,
                name: "Audi e-tron GT",
                price: 115000,
                rentalPrice: 580,
                type: "sports",
                category: "rental",
                image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                features: ["Dual Motor AWD", "800V Architecture", "Sport Sound"],
                year: 2023,
                mileage: "0 miles",
                transmission: "Automatic",
                fuel: "Electric"
            }
        ];

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Check for saved theme preference or use OS preference
        const currentTheme = localStorage.getItem('theme') || 
                           (prefersDarkScheme.matches ? 'dark' : 'light');
        
        // Apply the theme
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Save theme preference
            const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });

        // Fade-in animation on scroll
        const appearOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                }
            });
        }, { threshold: 0.1 });

        // Observe all animated elements
        document.querySelectorAll('.fade-in').forEach(element => {
            appearOnScroll.observe(element);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Render cars function
        function renderCars(filter = 'all', searchTerm = '') {
            const carsGrid = document.getElementById('carsGrid');
            const specialGrid = document.getElementById('specialGrid');
            const rentalGrid = document.getElementById('rentalGrid');
            
            // Clear existing content
            carsGrid.innerHTML = '';
            specialGrid.innerHTML = '';
            rentalGrid.innerHTML = '';
            
            // Filter cars based on search and filter
            const filteredCars = cars.filter(car => {
                const matchesFilter = filter === 'all' || car.type === filter || car.category === filter;
                const matchesSearch = searchTerm === '' || 
                    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    car.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
                
                return matchesFilter && matchesSearch;
            });
            
            // Render cars to respective sections
            filteredCars.forEach(car => {
                const carCard = createCarCard(car);
                
                if (car.category === 'special') {
                    specialGrid.appendChild(carCard);
                } else if (car.category === 'rental') {
                    rentalGrid.appendChild(carCard);
                } else {
                    carsGrid.appendChild(carCard);
                }
            });
            
            // Re-observe for animations
            document.querySelectorAll('.fade-in').forEach(element => {
                appearOnScroll.observe(element);
            });
        }

        // Create car card element
        function createCarCard(car) {
            const card = document.createElement('div');
            card.className = 'car-card fade-in';
            card.innerHTML = `
                <div style="position: relative;">
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    <div class="car-badge">${car.category === 'special' ? 'Special Offer' : car.category === 'rental' ? 'For Rent' : 'Available'}</div>
                </div>
                <div class="car-content">
                    <div class="car-header">
                        <h3 class="car-title">${car.name}</h3>
                        <div class="car-price">
                            $${car.category === 'rental' ? car.rentalPrice + '<span>/day</span>' : car.price.toLocaleString()}
                        </div>
                    </div>
                    <div class="car-features">
                        <div class="car-feature">
                            <i class="fas fa-calendar"></i>
                            <span>${car.year}</span>
                        </div>
                        <div class="car-feature">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>${car.mileage}</span>
                        </div>
                        <div class="car-feature">
                            <i class="fas fa-cog"></i>
                            <span>${car.transmission}</span>
                        </div>
                        <div class="car-feature">
                            <i class="fas fa-gas-pump"></i>
                            <span>${car.fuel}</span>
                        </div>
                    </div>
                    <div class="car-actions">
                        <button class="car-btn car-btn-primary" onclick="openPaymentModal(${car.id}, 'purchase')">
                            <i class="fas fa-shopping-cart"></i>
                            ${car.category === 'rental' ? 'Rent Now' : 'Buy Now'}
                        </button>
                        <button class="car-btn car-btn-secondary" onclick="openPaymentModal(${car.id}, '${car.category === 'rental' ? 'rental' : 'finance'}')">
                            <i class="fas fa-file-contract"></i>
                            ${car.category === 'rental' ? 'Reserve' : 'Finance'}
                        </button>
                    </div>
                </div>
            `;
            return card;
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                const searchTerm = document.getElementById('searchInput').value;
                renderCars(filter, searchTerm);
            });
        });

        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => {
            const searchTerm = document.getElementById('searchInput').value;
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            renderCars(activeFilter, searchTerm);
        });

        // Search on enter key
        document.getElementById('searchInput').addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = document.getElementById('searchInput').value;
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                renderCars(activeFilter, searchTerm);
            }
        });

        // Payment modal functionality
        const paymentModal = document.getElementById('paymentModal');
        const modalClose = document.getElementById('modalClose');
        const paymentForm = document.getElementById('paymentForm');

        function openPaymentModal(carId, type) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;
            
            const modalTitle = document.getElementById('modalTitle');
            const summaryVehicle = document.getElementById('summaryVehicle');
            const summaryPrice = document.getElementById('summaryPrice');
            const summaryType = document.getElementById('summaryType');
            const summaryTotal = document.getElementById('summaryTotal');
            
            if (type === 'purchase') {
                modalTitle.textContent = 'Complete Your Purchase';
                summaryVehicle.textContent = car.name;
                summaryPrice.textContent = `$${car.price.toLocaleString()}`;
                summaryType.textContent = 'Purchase';
                summaryTotal.textContent = `$${car.price.toLocaleString()}`;
            } else if (type === 'rental') {
                modalTitle.textContent = 'Reserve Your Rental';
                summaryVehicle.textContent = car.name;
                summaryPrice.textContent = `$${car.rentalPrice}/day`;
                summaryType.textContent = 'Rental';
                summaryTotal.textContent = `$${car.rentalPrice}/day`;
            } else if (type === 'finance') {
                modalTitle.textContent = 'Apply for Financing';
                summaryVehicle.textContent = car.name;
                summaryPrice.textContent = `$${car.price.toLocaleString()}`;
                summaryType.textContent = 'Finance Application';
                summaryTotal.textContent = 'Monthly payments calculated';
            }
            
            paymentModal.classList.add('active');
        }

        // Close modal
        modalClose.addEventListener('click', () => {
            paymentModal.classList.remove('active');
        });

        // Close modal when clicking outside
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) {
                paymentModal.classList.remove('active');
            }
        });

        // Form submission
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = paymentForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate payment processing
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Payment Successful!';
                setTimeout(() => {
                    paymentModal.classList.remove('active');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    paymentForm.reset();
                    
                    // Show success message
                    alert('Thank you for your purchase! We will contact you shortly to complete the process.');
                }, 1500);
            }, 2000);
        });

        // Initial render
        renderCars();