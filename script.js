// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Language Selector Initialization
    initializeLanguageSelector();

    // Loader animation
    const loader = document.querySelector('.loader');
    const loaderProgress = document.querySelector('.loader-progress');
    
    // Simulate loading progress
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Hide loader after a short delay
            setTimeout(() => {
                loader.style.animation = 'fadeOut 0.8s forwards';
            }, 500);
        }
        loaderProgress.style.width = `${progress}%`;
    }, 200);
    
    // Mobile menu toggle with improved touch handling
    const mobileMenu = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Scroll event for header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Subscription form handling
    const subscribeForm = document.getElementById('subscribe-form');
    const subscribeMessage = document.getElementById('subscribe-message');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            subscribeMessage.textContent = 'CHARGING UP YOUR SUBSCRIPTION...';
            subscribeMessage.style.color = 'var(--primary-blue)';
            
            setTimeout(function() {
                subscribeMessage.textContent = `YOU'RE IN! WELCOME TO THE BISON STAMPEDE!`;
                subscribeMessage.style.color = 'var(--primary-red)';
                subscribeForm.reset();
            }, 1500);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Play button animation
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            this.classList.add('playing');
            // Here you would normally trigger video playback
            alert('Video would play here in a real implementation!');
        });
    }

    // Product buttons hover effect
    const productBtns = document.querySelectorAll('.product-btn');
    productBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            const card = this.closest('.product-card');
            const glow = card.querySelector('.product-glow');
            glow.style.opacity = '1';
        });
        
        btn.addEventListener('mouseleave', function() {
            const card = this.closest('.product-card');
            const glow = card.querySelector('.product-glow');
            glow.style.opacity = '0.5';
        });
    });

    // Random lightning effect
    function triggerLightning() {
        const lightnings = document.querySelectorAll('.lightning, .lightning-small');
        const randomLightning = lightnings[Math.floor(Math.random() * lightnings.length)];
        
        randomLightning.style.opacity = '0';
        randomLightning.style.animation = 'none';
        
        setTimeout(() => {
            randomLightning.style.animation = 'lightning 3s linear';
        }, 100);
        
        // Schedule next lightning
        const nextTime = 5000 + Math.random() * 10000; // Between 5-15 seconds
        setTimeout(triggerLightning, nextTime);
    }
    
    // Start lightning effects after a delay
    setTimeout(triggerLightning, 3000);

    // Animate energy circles
    const energyCircles = document.querySelectorAll('.energy-circle');
    energyCircles.forEach((circle, index) => {
        circle.style.animationDelay = `${index * 0.5}s`;
    });

    // Glitch effect on text
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.classList.add('active');
            setTimeout(() => {
                glitchText.classList.remove('active');
            }, 200);
        }, 5000);
    }

    // Improved touch handling for product cards
    const productCards = document.querySelectorAll('.product-card.flippable');
    productCards.forEach(card => {
        card.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.classList.add('touched');
        }, { passive: false });

        card.addEventListener('touchend', function() {
            this.classList.remove('touched');
        });
    });

    // Optimize video loading
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.setAttribute('preload', 'metadata');
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
    });

    // Improved contact popup handling
    const devContact = document.querySelector('#devContact');
    const contactPopup = document.querySelector('.contact-popup');
    const closePopup = document.querySelector('.close-popup');

    if (devContact && contactPopup && closePopup) {
        devContact.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closePopup.addEventListener('click', (e) => {
            e.stopPropagation();
            contactPopup.classList.remove('active');
            document.body.style.overflow = '';
        });

        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactPopup.classList.contains('active')) {
                contactPopup.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Optimize image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.classList.contains('lazy')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // Handle WhatsApp button click
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(whatsappButton.href, '_blank');
        });
    }

    // Product Carousel
    const showcase = document.querySelector('.product-showcase');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.indicator-dot');
    let currentRotation = 0;
    let currentIndex = 0;
    const totalProducts = document.querySelectorAll('.product-card').length;
    const rotationStep = 360 / totalProducts;

    // Pause animation on hover
    showcase.addEventListener('mouseenter', () => {
        showcase.style.animationPlayState = 'paused';
    });

    showcase.addEventListener('mouseleave', () => {
        showcase.style.animationPlayState = 'running';
    });

    // Manual rotation controls
    function rotateCarousel(direction) {
        currentIndex = (currentIndex + direction + totalProducts) % totalProducts;
        currentRotation = currentIndex * -rotationStep;
        showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
        updateDots();
    }

    prevBtn.addEventListener('click', () => rotateCarousel(-1));
    nextBtn.addEventListener('click', () => rotateCarousel(1));

    // Update indicator dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Click on dots to rotate to specific product
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const diff = index - currentIndex;
            currentIndex = index;
            currentRotation = index * -rotationStep;
            showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
            updateDots();
        });
    });

    // Mouse drag rotation
    let isDragging = false;
    let startX = 0;
    let rotationSpeed = 0.5;

    showcase.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        showcase.style.animationPlayState = 'paused';
        showcase.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const deltaX = e.pageX - startX;
        currentRotation += deltaX * rotationSpeed;
        showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
        startX = e.pageX;
        
        // Update current index based on rotation
        currentIndex = Math.round((-currentRotation % 360) / rotationStep);
        if (currentIndex < 0) currentIndex += totalProducts;
        updateDots();
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        showcase.style.transition = 'transform 0.5s ease-out';
        showcase.style.animationPlayState = 'running';
        
        // Snap to nearest product
        const snapRotation = Math.round(currentRotation / rotationStep) * rotationStep;
        currentRotation = snapRotation;
        showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
    });

    // Touch events for mobile
    let touchStartX = 0;

    showcase.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX;
        showcase.style.animationPlayState = 'paused';
    });

    showcase.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].pageX - touchStartX;
        currentRotation += deltaX * rotationSpeed;
        showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
        touchStartX = e.touches[0].pageX;
        
        currentIndex = Math.round((-currentRotation % 360) / rotationStep);
        if (currentIndex < 0) currentIndex += totalProducts;
        updateDots();
    });

    showcase.addEventListener('touchend', () => {
        showcase.style.animationPlayState = 'running';
        const snapRotation = Math.round(currentRotation / rotationStep) * rotationStep;
        currentRotation = snapRotation;
        showcase.style.transform = `translateZ(-50vw) rotateY(${currentRotation}deg)`;
    });

    // Flippable cards functionality
    const flippableCards = document.querySelectorAll('.product-card.flippable');
    
    flippableCards.forEach(card => {
        // Click event for both desktop and mobile
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        // Touch events for mobile
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;

        card.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        card.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            
            // Calculate distance moved
            const deltaX = Math.abs(touchEndX - touchStartX);
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // If it's a tap (minimal movement) and not a scroll
            if (deltaX < 10 && deltaY < 10) {
                card.classList.toggle('flipped');
            }
        }, { passive: true });
    });

    // Image Zoom Functionality
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const closeZoom = document.querySelector('.close-zoom');
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            zoomedImage.src = img.src;
            zoomedImage.alt = img.alt;
            zoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeZoom.addEventListener('click', () => {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) {
            zoomModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add touch swipe to close
    let touchStartY;
    zoomModal.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    zoomModal.addEventListener('touchmove', function(e) {
        if (!touchStartY) return;
        
        const touchEndY = e.touches[0].clientY;
        const diff = touchEndY - touchStartY;
        
        // If swiped down more than 100px, close the modal
        if (diff > 100) {
            zoomModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, { passive: true });

    zoomModal.addEventListener('touchend', function() {
        touchStartY = null;
    }, { passive: true });
});

function initializeLanguageSelector() {
    // Check if translations object exists
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded!');
        return;
    }

    const languageButton = document.querySelector('.language-button');
    const languageMenu = document.querySelector('.language-menu');
    const languageOptions = document.querySelectorAll('.language-option');
    const selectedFlag = document.querySelector('#currentFlag');
    const selectedText = document.querySelector('#currentLang');

    if (!languageButton || !languageMenu || !selectedFlag || !selectedText) {
        console.error('Language selector elements not found!');
        return;
    }

    // Initialize with saved language or default to Turkish
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    setLanguage(savedLanguage);

    // Toggle language menu
    languageButton.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('show');
    });

    // Close language menu when clicking outside
    document.addEventListener('click', () => {
        languageMenu.classList.remove('show');
    });

    // Prevent menu from closing when clicking inside it
    languageMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            updateLanguage(lang);
            languageMenu.classList.remove('show');
        });
    });
}

function setLanguage(lang) {
    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Save preference
    localStorage.setItem('selectedLanguage', lang);

    // Update display
    const option = document.querySelector(`.language-option[data-lang="${lang}"]`);
    if (option) {
        const selectedFlag = document.querySelector('#currentFlag');
        const selectedText = document.querySelector('#currentLang');
        if (selectedFlag && selectedText) {
            selectedFlag.src = option.querySelector('img').src;
            selectedText.textContent = lang.toUpperCase();
        }
    }

    // Update translations
    updateTranslations(lang);
}

function updateTranslations(lang) {
    if (!translations[lang]) {
        console.error(`Translations for ${lang} not found!`);
        return;
    }

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (!key) return;
        
        const translation = translations[lang][key];
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        } else {
            console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        }
    });

    // Update RTL-specific styles
    document.body.classList.toggle('rtl', lang === 'ar');
}

// Language handling
let currentLang = localStorage.getItem('language') || 'tr';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    translatePage();
    updateLanguageButton(lang);
}

function updateLanguageButton(lang) {
    const flagMap = {
        'tr': 'tr.png',
        'en': 'gb.png',
        'ar': 'sa.png'
    };
    const langMap = {
        'tr': 'TR',
        'en': 'EN',
        'ar': 'AR'
    };
    document.getElementById('currentFlag').src = `https://flagcdn.com/w20/${flagMap[lang].split('.')[0]}.png`;
    document.getElementById('currentLang').textContent = langMap[lang];
}

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // Handle glitch text
    document.querySelectorAll('.glitch').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.setAttribute('data-text', translations[currentLang][key]);
        }
    });
}