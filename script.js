// Bloemfontein SPCA - JavaScript Functionality
// Part 3 Assignment - Interactive Elements and Form Validation

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // ==============================================
    // 1. SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ==============================================
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add smooth scroll effect when clicking nav links
            if (this.hash !== '') {
                const hash = this.hash;
                const target = document.querySelector(hash);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==============================================
    // 2. IMAGE GALLERY WITH LIGHTBOX (for adopt.html)
    // ==============================================
    const adoptArticles = document.querySelectorAll('article img');
    
    adoptArticles.forEach(img => {
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function() {
            // Create lightbox overlay
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;
            
            // Create enlarged image
            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
            `;
            
            lightbox.appendChild(enlargedImg);
            document.body.appendChild(lightbox);
            
            // Close lightbox when clicked
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });

    // ==============================================
    // 3. CONTACT FORM VALIDATION (contactus.html)
    // ==============================================
    const contactForm = document.querySelector('form');
    
    if (contactForm && !contactForm.id) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('Message').value.trim();
            
            // Validation flags
            let isValid = true;
            let errorMessages = [];
            
            // Validate name (must be at least 2 characters)
            if (name.length < 2) {
                isValid = false;
                errorMessages.push('Name must be at least 2 characters long.');
            }
            
            // Validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                errorMessages.push('Please enter a valid email address.');
            }
            
            // Validate phone (if provided, must be numbers and at least 10 digits)
            if (phone && phone.length < 10) {
                isValid = false;
                errorMessages.push('Phone number must be at least 10 digits.');
            }
            
            // Validate subject selection
            if (subject === '') {
                isValid = false;
                errorMessages.push('Please select a subject.');
            }
            
            // Validate message (must be at least 10 characters)
            if (message.length < 10) {
                isValid = false;
                errorMessages.push('Message must be at least 10 characters long.');
            }
            
            // Display results
            if (isValid) {
                // Success message
                showMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon!');
                contactForm.reset(); // Clear form
            } else {
                // Error message
                showMessage('error', 'Please fix the following errors:\n\n' + errorMessages.join('\n'));
            }
        });
    }

    // ==============================================
    // 4. VOLUNTEER FORM VALIDATION (volunteer.html)
    // ==============================================
    const volunteerForm = document.getElementById('volunteerForm');
    
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('volunteer_name').value.trim();
            const email = document.getElementById('volunteer_email').value.trim();
            const phone = document.getElementById('volunteer_phone').value.trim();
            const age = document.getElementById('volunteer_age').value;
            const availability = document.getElementById('volunteer_availability').value;
            const interests = document.getElementById('volunteer_interests').value.trim();
            
            // Validation
            let isValid = true;
            let errorMessages = [];
            
            if (name.length < 2) {
                isValid = false;
                errorMessages.push('Name must be at least 2 characters long.');
            }
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                errorMessages.push('Please enter a valid email address.');
            }
            
            if (phone.length < 10) {
                isValid = false;
                errorMessages.push('Phone number must be at least 10 digits.');
            }
            
            if (age === '') {
                isValid = false;
                errorMessages.push('Please select your age range.');
            }
            
            if (availability === '') {
                isValid = false;
                errorMessages.push('Please select your availability.');
            }
            
            if (interests.length < 10) {
                isValid = false;
                errorMessages.push('Please tell us more about what you\'d like to help with (at least 10 characters).');
            }
            
            // Display results
            if (isValid) {
                showMessage('success', 'Thank you for signing up to volunteer! We will contact you soon with more information about our volunteer program.');
                volunteerForm.reset();
            } else {
                showMessage('error', 'Please fix the following errors:\n\n' + errorMessages.join('\n'));
            }
        });
    }

    // ==============================================
    // 5. DONATION FORM VALIDATION (donate.html)
    // ==============================================
    const donationForm = document.getElementById('donationForm');
    
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('donor_name').value.trim();
            const email = document.getElementById('donor_email').value.trim();
            const amount = document.getElementById('donation_amount').value;
            const type = document.getElementById('donation_type').value;
            const purpose = document.getElementById('donation_purpose').value;
            
            // Validation
            let isValid = true;
            let errorMessages = [];
            
            if (name.length < 2) {
                isValid = false;
                errorMessages.push('Name must be at least 2 characters long.');
            }
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                isValid = false;
                errorMessages.push('Please enter a valid email address.');
            }
            
            if (!amount || amount < 10) {
                isValid = false;
                errorMessages.push('Donation amount must be at least R10.');
            }
            
            if (type === '') {
                isValid = false;
                errorMessages.push('Please select a donation type.');
            }
            
            if (purpose === '') {
                isValid = false;
                errorMessages.push('Please select what you would like to support.');
            }
            
            // Display results
            if (isValid) {
                const formattedAmount = parseFloat(amount).toFixed(2);
                showMessage('success', `Thank you for your generous donation of R${formattedAmount}! You will receive a confirmation email shortly.\n\nNote: This is a demonstration. In a real website, you would be redirected to a secure payment gateway.`);
                donationForm.reset();
            } else {
                showMessage('error', 'Please fix the following errors:\n\n' + errorMessages.join('\n'));
            }
        });
        
        // Add formatting to donation amount field
        const amountInput = document.getElementById('donation_amount');
        if (amountInput) {
            amountInput.addEventListener('blur', function() {
                if (this.value) {
                    const value = parseFloat(this.value);
                    if (!isNaN(value)) {
                        this.value = Math.round(value);
                    }
                }
            });
        }
    }
    
    // ==============================================
    // SHARED FUNCTION: Display Messages
    // ==============================================
    function showMessage(type, text) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message';
        messageDiv.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
            animation: slideIn 0.3s ease;
        `;
        
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '2px solid #c3e6cb';
        } else {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '2px solid #f5c6cb';
            messageDiv.style.whiteSpace = 'pre-line';
        }
        
        messageDiv.textContent = text;
        
        // Find the active form
        const activeForm = volunteerForm || donationForm || contactForm;
        if (activeForm) {
            activeForm.parentNode.insertBefore(messageDiv, activeForm);
        }
        
        // Auto-remove success messages after 7 seconds
        if (type === 'success') {
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 7000);
        }
    }
    
    // ==============================================
    // REAL-TIME EMAIL VALIDATION (All Forms)
    // ==============================================
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(emailInput => {
        emailInput.addEventListener('blur', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailPattern.test(this.value)) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#4a90e2';
            }
        });
    });

    // ==============================================
    // 6. BUTTON ANIMATIONS AND INTERACTIONS
    // ==============================================
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==============================================
    // 7. SCROLL ANIMATIONS FOR ELEMENTS
    // ==============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe article elements
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';
        article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(article);
    });

    // ==============================================
    // 8. DYNAMIC "BACK TO TOP" BUTTON
    // ==============================================
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑ Top';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: none;
        z-index: 999;
        padding: 0.75rem 1.5rem;
        border-radius: 25px;
    `;
    document.body.appendChild(backToTopButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==============================================
    // 9. HIGHLIGHT ACTIVE NAVIGATION LINK
    // ==============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            link.style.fontWeight = 'bold';
        }
    });

    // ==============================================
    // 10. PHONE NUMBER FORMATTING
    // ==============================================
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            this.value = value;
        });
    });

    // ==============================================
    // 11. CONSOLE MESSAGE (for testing)
    // ==============================================
    console.log('Bloemfontein SPCA JavaScript loaded successfully! 🐾');
    console.log('Active features: Contact form, Volunteer form, Donation form, Gallery lightbox, Animations');
});
// ==============================================
// INTERACTIVE MAP FUNCTIONALITY
// ==============================================
function initMap() {
    // Bloemfontein coordinates
    const bloemfonteinLocation = { 
        lat: -29.1167, 
        lng: 26.2167 
    };
    
    const mapElement = document.getElementById('map');
    
    if (mapElement && typeof google !== 'undefined') {
        try {
            const map = new google.maps.Map(mapElement, {
                zoom: 12,
                center: bloemfonteinLocation,
                mapTypeControl: true,
                streetViewControl: true,
                zoomControl: true,
            });
            
            // Add marker
            const marker = new google.maps.Marker({
                position: bloemfonteinLocation,
                map: map,
                title: "Bloemfontein SPCA - Animal Care Street",
                icon: {
                    url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="15" fill="#2c5aa0" stroke="white" stroke-width="2"/>
                            <text x="20" y="26" text-anchor="middle" fill="white" font-size="14">🐾</text>
                        </svg>
                    `),
                    scaledSize: new google.maps.Size(40, 40)
                }
            });
            
            // Info window
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 1rem; max-width: 200px;">
                        <h3 style="color: #2c5aa0; margin: 0 0 0.5rem 0;">Bloemfontein SPCA</h3>
                        <p style="margin: 0.25rem 0; font-size: 14px;">
                            <strong>📍 Address:</strong><br>
                            123 Animal Care Street<br>
                            Bloemfontein, 9300
                        </p>
                        <p style="margin: 0.25rem 0; font-size: 14px;">
                            <strong>📞 Phone:</strong><br>
                            (051) 123-4567
                        </p>
                    </div>
                `
            });
            
            // Show info window on marker click
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
            
            // Auto-open info window
            setTimeout(() => {
                infoWindow.open(map, marker);
            }, 1500);
            
        } catch (error) {
            console.error('Google Maps error:', error);
            showMapFallback();
        }
    } else {
        showMapFallback();
    }
}

// Fallback if Google Maps fails to load
function showMapFallback() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f8f9fa; border-radius: 10px; padding: 2rem; text-align: center;">
                <h4 style="color: #2c5aa0; margin-bottom: 1rem;">📍 Bloemfontein SPCA Location</h4>
                <p style="margin-bottom: 1rem;"><strong>Address:</strong><br>123 Animal Care Street, Bloemfontein, 9300</p>
                <p style="margin-bottom: 1rem;"><strong>Directions:</strong><br>Located in central Bloemfontein near the city center.</p>
                <button onclick="openInGoogleMaps()" style="background: #2c5aa0; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 25px; cursor: pointer;">
                    Open in Google Maps
                </button>
            </div>
        `;
    }
}

function openInGoogleMaps() {
    window.open('https://www.google.com/maps/place/Bloemfontein', '_blank');
}

// Load Google Maps with error handling
function loadGoogleMaps() {
    // Use a test API key (replace with your actual key)
    const apiKey = 'AIzaSyCQ3f3pP5vY7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y'; // This is invalid - you need to replace it
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = function() {
        console.error('Failed to load Google Maps API');
        showMapFallback();
    };
    
    document.head.appendChild(script);
}