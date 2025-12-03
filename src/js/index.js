// VWTech Dev - Main JavaScript

// Plans Modal Functions - Global Scope
function openPlansModal(serviceType) {
    const modal = document.getElementById('plansModal');
    if (!modal) {
        showNotification('Erro: Modal não encontrado. Tente recarregar a página.', 'error');
        return;
    }
    
    // Define service titles mapping
    const serviceTitles = {
        'web': 'Desenvolvimento Web',
        'mobile': 'Aplicativos Mobile',
        'gamer': 'PC Gamer',
        'maintenance': 'PC\'s e Celulares',
        'support': 'Suporte Técnico',
        'onsite': 'Atendimento Presencial'
    };
    
    // Update modal title with service name
    const modalServiceTitle = document.getElementById('modal-service-title');
    if (modalServiceTitle && serviceTitles[serviceType]) {
        modalServiceTitle.textContent = serviceTitles[serviceType];
    }
    
    // Hide all service plans
    const allServicePlans = document.querySelectorAll('.service-plans');
    allServicePlans.forEach(plan => {
        plan.style.display = 'none';
    });
    
    // Show the selected service plans
    const selectedPlans = document.getElementById(serviceType + '-plans');
    if (selectedPlans) {
        selectedPlans.style.display = 'block';
    } else {
        showNotification('Erro: Planos não encontrados para este serviço.', 'error');
        return;
    }
    
    // Hide floating buttons when modal opens
    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.display = 'none';
    }
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade-in animation
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closePlansModal() {
    const modal = document.getElementById('plansModal');
    if (!modal) return;
    
    // Show floating buttons again when modal closes
    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.display = 'flex';
    }
    
    // Hide modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('plansModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePlansModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePlansModal();
        }
    });
});

// Verificar se AOS está disponível antes de inicializar
function initAOS() {
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: false,
                mirror: true
            });
        } else {
            // Fallback: usar animações CSS puras se AOS não estiver disponível
            handleScrollAnimations();
        }
    } catch (error) {
        // Fallback silencioso para animações
        handleScrollAnimations();
    }
}

// Lazy Loading melhorado para imagens
function initLazyLoading() {
    try {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if (!images.length) return;
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Adicionar loading state
                        img.style.opacity = '0.5';
                        
                        // Simular carregamento com timeout mínimo
                        setTimeout(() => {
                            img.classList.add('loaded');
                            img.style.opacity = '1';
                            imageObserver.unobserve(img);
                        }, 100);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            images.forEach(img => {
                // Adicionar estado inicial de loading
                img.style.transition = 'opacity 0.3s ease-in-out';
                imageObserver.observe(img);
            });
        } else {
            // Fallback para navegadores que não suportam IntersectionObserver
            images.forEach(img => {
                img.classList.add('loaded');
            });
        }
    } catch (error) {
        // Fallback silencioso
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.classList.add('loaded');
        });
    }
}

// Navbar scroll effect
function initNavbarScroll() {
    try {
        const navbar = document.querySelector('.navbar');
        
        if (!navbar) return;
        
        function handleScroll() {
            try {
                if (window.pageYOffset > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            } catch (error) {
                // Fallback silencioso
            }
        }
        
        // Aplicar efeito inicial
        handleScroll();
        
        // Adicionar listener de scroll com debounce
        const debouncedScrollHandler = debounce(handleScroll, 10);
        window.addEventListener('scroll', debouncedScrollHandler);
    } catch (error) {
        // Fallback silencioso
    }
}

// Mobile Menu Toggle com verificação de segurança
function initMobileMenu() {
    try {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        
        if (!menuToggle || !mobileMenu || !mobileMenuOverlay) return;
    
    function openMenu() {
        mobileMenu.classList.add('mobile-menu-open');
        mobileMenuOverlay.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Hide floating buttons when drawer opens
        const floatingButtons = document.querySelector('.floating-buttons');
        if (floatingButtons) {
            floatingButtons.style.display = 'none';
        }
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('mobile-menu-open');
        mobileMenuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Show floating buttons again when drawer closes
        const floatingButtons = document.querySelector('.floating-buttons');
        if (floatingButtons) {
            floatingButtons.style.display = 'flex';
        }
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (mobileMenu.classList.contains('mobile-menu-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Close menu when clicking on nav links
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu-open')) {
                closeMenu();
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Back to Top Button com verificação de segurança
function initBackToTop() {
    try {
        const backToTopButton = document.getElementById('back-to-top');
        
        if (!backToTopButton) return;
        
        const debouncedScrollHandler = debounce(function() {
            try {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            } catch (error) {
                // Fallback silencioso
            }
        }, 10);
        
        window.addEventListener('scroll', debouncedScrollHandler);
        
        backToTopButton.addEventListener('click', function(e) {
            try {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } catch (error) {
                // Fallback para navegadores que não suportam smooth scroll
                window.scrollTo(0, 0);
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Smooth scrolling for navigation links com verificação de segurança
function initSmoothScrolling() {
    try {
        const anchors = document.querySelectorAll('a[href^="#"]');
        
        anchors.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                try {
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        e.preventDefault();
                        
                        try {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        } catch (error) {
                            // Fallback para navegadores que não suportam smooth scroll
                            window.scrollTo(0, targetElement.offsetTop - 80);
                        }
                        
                        // Close mobile menu if open
                        const mobileMenu = document.getElementById('mobile-menu');
                        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
                        const menuToggle = document.getElementById('menu-toggle');
                        if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
                            mobileMenu.classList.remove('mobile-menu-open');
                            if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
                            if (menuToggle) menuToggle.classList.remove('active');
                            document.body.style.overflow = 'auto';
                        }
                    }
                } catch (error) {
                    // Fallback silencioso
                }
            });
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Form validation and submission with EmailJS com verificação de segurança
function initContactForm() {
    try {
        const contactForm = document.getElementById('contact-form');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            try {
                // Basic form validation
                const name = document.getElementById('name')?.value?.trim();
                const email = document.getElementById('email')?.value?.trim();
                const phone = document.getElementById('phone')?.value?.trim();
                const message = document.getElementById('message')?.value?.trim();
                
                if (!name || !email || !message) {
                    showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Por favor, insira um e-mail válido.', 'error');
                    return;
                }
                
                // Get submit button
                const submitButton = contactForm.querySelector('button[type="submit"]');
                if (!submitButton) return;
                
                const originalText = submitButton.textContent;
                
                // Update button state with loading animation
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                submitButton.disabled = true;
                submitButton.style.opacity = '0.7';
                submitButton.style.cursor = 'not-allowed';
                
                // Add loading state to form
                contactForm.style.opacity = '0.8';
                contactForm.style.pointerEvents = 'none';
                
                // Prepare template parameters
                const templateParams = {
                    user_name: name,
                    user_email: email,
                    user_phone: phone || '',
                    message: message,
                    to_email: 'vwtechdev@gmail.com'
                };
                
                // Send email using EmailJS
                if (typeof sendEmail === 'function') {
                    sendEmail(templateParams)
                        .then(function(response) {
                            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                            contactForm.reset();
                            
                            // Add success animation
                            submitButton.innerHTML = '<i class="fas fa-check"></i> Enviado!';
                            submitButton.style.background = '#22c55e';
                            
                            setTimeout(() => {
                                resetFormState(submitButton, originalText, contactForm);
                            }, 2000);
                        }, function(error) {
                            showNotification('Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.', 'error');
                            resetFormState(submitButton, originalText, contactForm);
                        });
                } else {
                    showNotification('Serviço de email não disponível. Tente novamente mais tarde ou entre em contato pelo WhatsApp.', 'error');
                    resetFormState(submitButton, originalText, contactForm);
                }
            } catch (error) {
                showNotification('Erro inesperado. Tente novamente ou entre em contato pelo WhatsApp.', 'error');
                resetFormState(submitButton, originalText, contactForm);
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Helper function to reset form state
function resetFormState(submitButton, originalText, contactForm) {
    try {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
        submitButton.style.background = '';
        
        contactForm.style.opacity = '1';
        contactForm.style.pointerEvents = 'auto';
    } catch (error) {
        // Fallback silencioso
    }
}

// Notification function com verificação de segurança
function showNotification(message, type) {
    try {
        // Remove existing notifications to avoid stacking
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => {
            if (notif.parentNode) {
                notif.parentNode.removeChild(notif);
            }
        });
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 1rem;
            right: 1rem;
            z-index: 10000;
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            transform: translateX(100%);
            max-width: 400px;
            background: ${type === 'success' ? '#22c55e' : '#ef4444'};
            color: white;
            font-weight: 500;
            border-left: 4px solid ${type === 'success' ? '#16a34a' : '#dc2626'};
        `;
        
        // Add close button styles
        const closeButton = notification.querySelector('.notification-close');
        if (closeButton) {
            closeButton.style.cssText = `
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 0.25rem;
                margin-left: 0.5rem;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background-color 0.2s ease;
            `;
            
            closeButton.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            });
            
            closeButton.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
            });
        }
        
        // Add to page
        if (document.body) {
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.transform = 'translateX(0)';
                }
            }, 100);
            
            // Auto remove after 6 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                    }, 300);
                }
            }, 6000);
        }
    } catch (error) {
        // Fallback simples
        alert(message);
    }
}

// Email validation function
function isValidEmail(email) {
    if (!email || typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Plan button click handlers com verificação de segurança
function initPlanButtons() {
    try {
        const WHATSAPP_NUMBER = '5547992893609';
        const WHATSAPP_BASE_URL = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=';
        
        const planButtons = document.querySelectorAll('.plan-button');
        
        planButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                try {
                    const planCard = this.closest('.plan-card');
                    if (!planCard) return;
                    
                    const planTitle = planCard.querySelector('.plan-title');
                    if (!planTitle) return;
                    
                    const planName = planTitle.textContent.trim();
                    if (!planName) return;
                    
                    const message = encodeURIComponent(`Olá! Gostaria de assinar o plano ${planName}.`);
                    window.open(WHATSAPP_BASE_URL + message, '_blank');
                } catch (error) {
                    // Fallback para WhatsApp genérico
                    window.open(WHATSAPP_BASE_URL + encodeURIComponent('Olá! Gostaria de conhecer seus planos.'), '_blank');
                }
            });
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// WhatsApp button functionality com verificação de segurança
function initWhatsAppButton() {
    try {
        const whatsappButton = document.querySelector('.whatsapp-button');
        
        if (!whatsappButton) return;
        
        // Add click tracking
        whatsappButton.addEventListener('click', function(e) {
            try {
                // You can add analytics tracking here
            } catch (error) {
                // Fallback silencioso
            }
        });
        
        // Add hover effect to pause animation
        whatsappButton.addEventListener('mouseenter', function() {
            try {
                this.style.animationPlayState = 'paused';
            } catch (error) {
                // Fallback silencioso
            }
        });
        
        whatsappButton.addEventListener('mouseleave', function() {
            try {
                this.style.animationPlayState = 'running';
            } catch (error) {
                // Fallback silencioso
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Animações de entrada CSS puro com verificação de segurança
function handleScrollAnimations() {
    try {
        const animatedElements = document.querySelectorAll('.fade-in, .fade-up, .fade-right, .fade-left');
        if (!animatedElements.length) return;
        
        const windowHeight = window.innerHeight;
        animatedElements.forEach(el => {
            if (el && el.getBoundingClientRect) {
                const rect = el.getBoundingClientRect();
                if (rect.top < windowHeight - 60) {
                    el.classList.add('visible');
                }
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Preload critical images com verificação de segurança
function preloadCriticalImages() {
    try {
        const criticalImages = [
            'src/img/logo.png',
            'src/img/background.png'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            if (document.head) {
                document.head.appendChild(link);
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Update current year in footer
function updateCurrentYear() {
    try {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            const currentYear = new Date().getFullYear();
            currentYearElement.textContent = currentYear;
        }
    } catch (error) {
        // Fallback silencioso
    }
}

// Initialize all functions when DOM is loaded
function initApp() {
    try {
        // Show loading state
        showNotification('Carregando...', 'success');
        
        // Atualizar ano atual no footer
        updateCurrentYear();
        
        // Inicializar AOS
        initAOS();
        
        // Inicializar funcionalidades básicas
        initLazyLoading();
        initNavbarScroll();
        initMobileMenu();
        initBackToTop();
        initSmoothScrolling();
        initContactForm();
        initPlanButtons();
        initWhatsAppButton();
        
        // Inicializar animações
        handleScrollAnimations();
        
        // Debounced scroll handler for better performance
        const debouncedScrollHandler = debounce(handleScrollAnimations, 10);
        window.addEventListener('scroll', debouncedScrollHandler);
        
        // Preload de imagens críticas
        preloadCriticalImages();
        
        // Register Service Worker for PWA
        registerServiceWorker();
        
        // Hide loading notification after initialization
        setTimeout(() => {
            const loadingNotification = document.querySelector('.notification');
            if (loadingNotification && loadingNotification.textContent.includes('Carregando')) {
                loadingNotification.remove();
            }
        }, 1000);
        
    } catch (error) {
        showNotification('Erro ao carregar algumas funcionalidades. Recarregue a página se necessário.', 'error');
    }
}

// Service Worker Registration
function registerServiceWorker() {
    try {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        // Service Worker registered successfully
                    })
                    .catch(function(error) {
                        // Service Worker registration failed - fallback silencioso
                    });
            });
        }
    } catch (error) {
        // Fallback silencioso
    }
}

// Aguardar DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM já está pronto
    initApp();
} 