// VWTech Dev - Main JavaScript

// Scroll lock helpers (evita travamento no iOS/Android ao abrir overlays)
var scrollLockCount = 0;
var scrollLockY = 0;

function lockScroll() {
    try {
        scrollLockCount += 1;
        if (scrollLockCount > 1) return;
        scrollLockY = window.scrollY || window.pageYOffset || 0;
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollLockY + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    } catch (e) {}
}

function unlockScroll() {
    try {
        if (scrollLockCount === 0) return;
        scrollLockCount -= 1;
        if (scrollLockCount > 0) return;
        var top = document.body.style.top || '0';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        var y = Math.abs(parseInt(top, 10)) || 0;
        window.scrollTo(0, y);
    } catch (e) {}
}

// i18n helper: retorna a tradução do idioma atual ou fallback pt-BR se i18n indisponível
function tt(key, fallback) {
    try {
        if (window.i18n && typeof window.i18n.t === 'function') return window.i18n.t(key);
    } catch (e) {}
    return fallback;
}

// Plans Modal Functions - Global Scope
function openPlansModal(serviceType) {
    const modal = document.getElementById('plansModal');
    if (!modal) {
        showNotification(tt('notify.modalNotFound', 'Erro: Modal não encontrado. Tente recarregar a página.'), 'error');
        return;
    }
    
    // Define service titles mapping (i18n com fallback pt-BR)
    const serviceTitles = {
        'web': tt('services.web.title', 'Desenvolvimento Web'),
        'mobile': tt('services.mobile.title', 'Aplicativos Mobile'),
        'gamer': tt('services.gamer.title', 'PC Gamer'),
        'maintenance': tt('services.maintenance.title', 'PC\'s e Celulares'),
        'support': tt('services.support.title', 'Suporte Técnico'),
        'onsite': tt('services.onsite.title', 'Atendimento Presencial')
    };
    
    // Update modal title with service name
    const modalServiceTitle = document.getElementById('modal-service-title');
    if (modalServiceTitle && serviceTitles[serviceType]) {
        modalServiceTitle.textContent = serviceTitles[serviceType];
    }
    
    // Hide all service plans
    const allServicePlans = document.querySelectorAll('.service-plans');
    allServicePlans.forEach(plan => {
        plan.classList.add('service-plans--hidden');
    });
    
    // Show the selected service plans
    const selectedPlans = document.getElementById(serviceType + '-plans');
    if (selectedPlans) {
        selectedPlans.classList.remove('service-plans--hidden');
    } else {
        showNotification(tt('notify.plansNotFound', 'Erro: Planos não encontrados para este serviço.'), 'error');
        return;
    }
    
    // Hide floating buttons when modal opens
    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.display = 'none';
    }
    
    // Show modal
    modal.style.display = 'block';
    lockScroll();
    
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
    unlockScroll();
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('plansModal');
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
    
    // Service buttons: open plans modal
    var serviceButtons = document.querySelectorAll('.service-button[data-service]');
    serviceButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            openPlansModal(this.getAttribute('data-service'));
        });
    });
    
    // Plans modal close button
    var plansModalClose = document.getElementById('plans-modal-close');
    if (plansModalClose) {
        plansModalClose.addEventListener('click', closePlansModal);
    }
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

// Navbar scroll effect (throttle + passive para scroll fluido em mobile)
function initNavbarScroll() {
    try {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        function updateNavbar() {
            try {
                if (window.pageYOffset > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            } catch (e) {}
        }

        updateNavbar();
        var throttled = throttleRAF(updateNavbar);
        window.addEventListener('scroll', throttled, { passive: true });
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
        lockScroll();
        
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
        unlockScroll();
        
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

// Language selector dropdown (UI + i18n wiring)
function initLanguageSelector() {
    try {
        const langToggle = document.getElementById('lang-toggle');
        const langDropdown = document.getElementById('lang-dropdown');
        const langContainer = langToggle ? langToggle.closest('.navbar-lang') : null;
        if (!langToggle || !langDropdown || !langContainer) return;

        function closeDropdown() {
            langContainer.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }

        function openDropdown() {
            langContainer.classList.add('open');
            langToggle.setAttribute('aria-expanded', 'true');
        }

        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (langContainer.classList.contains('open')) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        // Aplica o idioma ao clicar numa opção (setLanguage atualiza aria-checked)
        const options = langDropdown.querySelectorAll('.navbar-lang-option');
        options.forEach(function(opt) {
            opt.addEventListener('click', function() {
                var lang = opt.getAttribute('data-lang');
                if (window.i18n && lang) {
                    window.i18n.setLanguage(lang);
                }
                closeDropdown();
            });
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (!langContainer.contains(e.target)) closeDropdown();
        });

        // Close on Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeDropdown();
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
        
        function updateVisibility() {
            try {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            } catch (e) {}
        }
        var throttled = throttleRAF(updateVisibility);
        window.addEventListener('scroll', throttled, { passive: true });
        
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
                            unlockScroll();
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

// Phone input mask (BR): (XX) XXXXX-XXXX
function initPhoneMask() {
    try {
        const phoneInput = document.getElementById('phone');
        if (!phoneInput) return;

        phoneInput.addEventListener('input', function() {
            var value = this.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 6) {
                this.value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
            } else if (value.length > 2) {
                this.value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
            } else if (value.length > 0) {
                this.value = '(' + value;
            }
        });
    } catch (error) {
        // Fallback silencioso
    }
}

// Form validation and redirect to WhatsApp
function initContactForm() {
    try {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            try {
                const name = document.getElementById('name')?.value?.trim();
                const email = document.getElementById('email')?.value?.trim();
                const phone = document.getElementById('phone')?.value?.trim();
                const message = document.getElementById('message')?.value?.trim();

                if (!name || !email || !message) {
                    showNotification(tt('notify.fillRequired', 'Por favor, preencha todos os campos obrigatórios.'), 'error');
                    return;
                }

                var phoneText = phone ? tt('contact.form.phoneLabelTpl', 'Telefone: {phone}.').replace('{phone}', phone) : '';
                var text = tt('contact.form.whatsappTemplate', 'Olá! Me chamo {name}.\nE-mail: {email}.\n{phone}\n\n{message}')
                    .replace('{name}', name)
                    .replace('{email}', email)
                    .replace('{phone}', phoneText)
                    .replace('{message}', message);
                const url = `https://api.whatsapp.com/send/?phone=5547992893609&text=${encodeURIComponent(text)}`;

                window.open(url, '_blank');
                contactForm.reset();
            } catch (error) {
                showNotification(tt('notify.whatsappError', 'Erro ao redirecionar para o WhatsApp. Tente novamente.'), 'error');
            }
        });
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
                    
                    const message = encodeURIComponent(tt('notify.planInquiryTpl', 'Olá! Gostaria de assinar o plano {plan}.').replace('{plan}', planName));
                    window.open(WHATSAPP_BASE_URL + message, '_blank');
                } catch (error) {
                    // Fallback para WhatsApp genérico
                    window.open(WHATSAPP_BASE_URL + encodeURIComponent(tt('notify.plansGeneral', 'Olá! Gostaria de conhecer seus planos.')), '_blank');
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

// Throttle por requestAnimationFrame: 1 execução por frame (evita travamento em mobile)
function throttleRAF(callback) {
    var raf = null;
    return function fn() {
        if (raf !== null) return;
        raf = requestAnimationFrame(function() {
            callback();
            raf = null;
        });
    };
}

// Lazy load de widgets terceiros (evita travar scroll no mobile)
function initThirdPartyWidgets() {
    try {
        const elfsightContainer = document.querySelector('.elfsight-app-adece873-304f-457f-aa47-db1527fcc652');
        if (!elfsightContainer) return;

        function loadElfsight() {
            if (window.__elfsightLoaded) return;
            window.__elfsightLoaded = true;
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.body.appendChild(script);
        }

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadElfsight();
                        observer.disconnect();
                    }
                });
            }, { rootMargin: '200px 0px' });
            observer.observe(elfsightContainer);
        } else {
            setTimeout(loadElfsight, 2000);
        }
    } catch (e) {}
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

// Inicializa apenas o necessário para first paint / LCP (melhor performance em mobile)
function initCritical() {
    try {
        updateCurrentYear();
        initNavbarScroll();
        initMobileMenu();
        initLanguageSelector();
        initBackToTop();
        initSmoothScrolling();
        initContactForm();
        initPhoneMask();
        initPlanButtons();
        initWhatsAppButton();
        handleScrollAnimations();
        // Debounce maior (150ms) + passive: scroll suave em aparelhos fracos
        var debouncedScrollHandler = debounce(handleScrollAnimations, 150);
        window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
        initLazyLoading();
    } catch (err) {
        // fallback silencioso
    }
}

// Inicializa após first paint (não atrasa LCP em celulares lentos)
function initDeferred() {
    try {
        initAOS();
        initThirdPartyWidgets();
    } catch (err) {
        // fallback silencioso
    }
}

// Initialize all functions when DOM is loaded
function initApp() {
    try {
        initCritical();
        // AOS e preload depois da primeira pintura
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() { initDeferred(); }, { timeout: 2000 });
        } else {
            setTimeout(initDeferred, 100);
        }
    } catch (error) {
        showNotification(tt('notify.loadError', 'Erro ao carregar algumas funcionalidades. Recarregue a página se necessário.'), 'error');
    }
}

// Aguardar DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM já está pronto
    initApp();
} 