// VWTech Dev - Main JavaScript

// Configuração centralizada
var WHATSAPP_NUMBER = '5547992893609';
var WHATSAPP_BASE_URL = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=';

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
    } catch (e) { console.error('[VWTech]', e); }
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
    } catch (e) { console.error('[VWTech]', e); }
}

// i18n helper: retorna a tradução do idioma atual ou fallback pt-BR se i18n indisponível
function tt(key, fallback) {
    try {
        if (window.i18n && typeof window.i18n.t === 'function') return window.i18n.t(key);
    } catch (e) { console.error('[VWTech]', e); }
    return fallback;
}

// Plans Modal Functions - Global Scope
function openPlansModal(serviceType) {
    const modal = document.getElementById('plansModal');
    if (!modal) {
        showNotification(tt('notify.modalNotFound', 'Erro: Modal não encontrado. Tente recarregar a página.'), 'error');
        return;
    }

    if (modal.style.display === 'block') return;

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

function setupModalEvents() {
    var modal = document.getElementById('plansModal');
    if (!modal) return;

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
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
}

// Project Gallery (lightbox) - Global Scope
var GALLERY_BASE = 'src/img/projects/';
var galleryImages = [];
var galleryIndex = 0;
var galleryTrigger = null;

function openGallery(project, images, trigger) {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;

    if (modal.style.display === 'block') return;

    galleryImages = images.map(function(file) {
        return GALLERY_BASE + project + '/' + file;
    });
    galleryIndex = 0;
    galleryTrigger = trigger || null;

    // Modal title from the card's project title
    try {
        var card = trigger ? trigger.closest('.project-card') : null;
        var titleEl = card ? card.querySelector('.project-title') : null;
        var modalTitle = document.getElementById('gallery-project-title');
        if (modalTitle && titleEl) modalTitle.textContent = titleEl.textContent.trim();
    } catch (e) { console.error('[VWTech]', e); }

    modal.classList.toggle('single', galleryImages.length <= 1);
    renderGallery();

    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.display = 'none';
    }

    modal.style.display = 'block';
    lockScroll();

    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    // Focus management for screen readers / keyboard users
    var closeBtn = document.getElementById('gallery-modal-close');
    if (closeBtn) closeBtn.focus();
}

function renderGallery() {
    var img = document.getElementById('gallery-image');
    var counter = document.getElementById('gallery-counter');
    var thumbs = document.getElementById('gallery-thumbs');
    if (!img || !galleryImages.length) return;

    img.src = galleryImages[galleryIndex];

    // Alt text from the card image when showing the first slide
    try {
        if (galleryIndex === 0 && galleryTrigger) {
            var cardImg = galleryTrigger.querySelector('img');
            if (cardImg && cardImg.alt) img.alt = cardImg.alt;
        } else {
            img.alt = '';
        }
    } catch (e) { console.error('[VWTech]', e); }

    if (counter) counter.textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;

    if (thumbs) {
        thumbs.innerHTML = '';
        galleryImages.forEach(function(src, i) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'gallery-thumb' + (i === galleryIndex ? ' active' : '');
            btn.setAttribute('role', 'listitem');
            btn.setAttribute('aria-label', tt('gallery.thumbTpl', 'Ver imagem {n}').replace('{n}', String(i + 1)));
            var thumbImg = document.createElement('img');
            thumbImg.src = src;
            thumbImg.alt = '';
            thumbImg.loading = 'lazy';
            btn.appendChild(thumbImg);
            btn.addEventListener('click', function() {
                goToSlide(i);
            });
            thumbs.appendChild(btn);
        });
    }

    // Preload neighbors for smooth navigation
    [galleryIndex - 1, galleryIndex + 1].forEach(function(i) {
        var n = (i + galleryImages.length) % galleryImages.length;
        var pre = new Image();
        pre.src = galleryImages[n];
    });
}

function goToSlide(n) {
    if (!galleryImages.length) return;
    galleryIndex = (n + galleryImages.length) % galleryImages.length;
    renderGallery();
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;

    const floatingButtons = document.querySelector('.floating-buttons');
    if (floatingButtons) {
        floatingButtons.style.display = 'flex';
    }

    modal.style.display = 'none';
    unlockScroll();

    galleryImages = [];
    galleryIndex = 0;

    if (galleryTrigger) {
        galleryTrigger.focus();
        galleryTrigger = null;
    }
}

function initGallery() {
    try {
        const modal = document.getElementById('galleryModal');
        if (!modal) return;

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGallery();
            }
        });

        var closeBtn = document.getElementById('gallery-modal-close');
        if (closeBtn) closeBtn.addEventListener('click', closeGallery);

        var prevBtn = document.getElementById('gallery-prev');
        if (prevBtn) prevBtn.addEventListener('click', function() { goToSlide(galleryIndex - 1); });

        var nextBtn = document.getElementById('gallery-next');
        if (nextBtn) nextBtn.addEventListener('click', function() { goToSlide(galleryIndex + 1); });

        // Arrow-key navigation (Escape handled globally)
        document.addEventListener('keydown', function(e) {
            if (modal.style.display !== 'block') return;
            if (e.key === 'ArrowLeft') goToSlide(galleryIndex - 1);
            else if (e.key === 'ArrowRight') goToSlide(galleryIndex + 1);
        });

        // Touch swipe navigation
        var touchX = null;
        var mainBox = modal.querySelector('.gallery-main');
        if (mainBox) {
            mainBox.addEventListener('touchstart', function(e) {
                if (e.touches.length === 1) touchX = e.touches[0].clientX;
            }, { passive: true });
            mainBox.addEventListener('touchend', function(e) {
                if (touchX === null) return;
                var dx = e.changedTouches[0].clientX - touchX;
                touchX = null;
                if (Math.abs(dx) < 40) return;
                if (dx > 0) goToSlide(galleryIndex - 1);
                else goToSlide(galleryIndex + 1);
            }, { passive: true });
        }

        // Card preview triggers
        var triggers = document.querySelectorAll('.project-preview-btn[data-project]');
        triggers.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var files = (this.getAttribute('data-images') || 'main.webp')
                    .split(',')
                    .map(function(f) { return f.trim(); })
                    .filter(Boolean);
                openGallery(this.getAttribute('data-project'), files, this);
            });
        });
    } catch (error) {
        console.error('[VWTech]', error);
    }
}

// Global Escape key handler for gallery, plans modal and mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    var gallery = document.getElementById('galleryModal');
    if (gallery && gallery.style.display === 'block') {
        closeGallery();
        return;
    }
    var modal = document.getElementById('plansModal');
    if (modal && modal.style.display === 'block') {
        closePlansModal();
        return;
    }
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('mobile-menu-open')) {
        mobileMenu.classList.remove('mobile-menu-open');
        document.getElementById('mobile-menu-overlay')?.classList.remove('active');
        document.getElementById('menu-toggle')?.classList.remove('active');
        unlockScroll();
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
        console.error('[VWTech]', error);
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
        console.error('[VWTech]', error);
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
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            } catch (e) { console.error('[VWTech]', e); }
        }

        updateNavbar();
        var throttled = throttleRAF(updateNavbar);
        window.addEventListener('scroll', throttled, { passive: true });
    } catch (error) {
        console.error('[VWTech]', error);
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
    } catch (error) {
        console.error('[VWTech]', error);
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
        console.error('[VWTech]', error);
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
                if (window.scrollY > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            } catch (e) { console.error('[VWTech]', e); }
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
        console.error('[VWTech]', error);
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
                            const floatingButtons = document.querySelector('.floating-buttons');
                            if (floatingButtons) floatingButtons.style.display = 'flex';
                        }
                    }
                } catch (error) {
                    console.error('[VWTech]', error);
        // Fallback silencioso
                }
            });
        });
    } catch (error) {
        console.error('[VWTech]', error);
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

            var formatted = '';
            if (value.length > 6) {
                formatted = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
            } else if (value.length > 2) {
                formatted = '(' + value.slice(0, 2) + ') ' + value.slice(2);
            } else if (value.length > 0) {
                formatted = '(' + value;
            }

            var cursor = this.selectionStart;
            var prevLen = this.value.length;
            this.value = formatted;
            var delta = this.value.length - prevLen;
            this.setSelectionRange(cursor + delta, cursor + delta);
        });
    } catch (error) {
        console.error('[VWTech] Phone mask error:', error);
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

                if (!isValidEmail(email)) {
                    showNotification(tt('notify.invalidEmail', 'Por favor, informe um e-mail válido.'), 'error');
                    return;
                }

                var phoneText = phone ? tt('contact.form.phoneLabelTpl', 'Telefone: {phone}.').replace('{phone}', phone) : '';
                var text = tt('contact.form.whatsappTemplate', 'Olá! Me chamo {name}.\nE-mail: {email}.\n{phone}\n\n{message}')
                    .replace('{name}', name)
                    .replace('{email}', email)
                    .replace('{phone}', phoneText)
                    .replace('{message}', message);
                const url = WHATSAPP_BASE_URL + encodeURIComponent(text);

                window.open(url, '_blank');
                contactForm.reset();
            } catch (error) {
                showNotification(tt('notify.whatsappError', 'Erro ao redirecionar para o WhatsApp. Tente novamente.'), 'error');
            }
        });
    } catch (error) {
        console.error('[VWTech]', error);
        // Fallback silencioso
    }
}

// Notification function com verificação de segurança
function showNotification(message, type) {
    try {
        var safeMessage = String(message).replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
                <span>${safeMessage}</span>
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
            z-index: var(--z-notification);
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
        console.error('[VWTech]', error);
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
                console.error('[VWTech]', error);
        // Fallback silencioso
            }
        });
        
        // Add hover effect to pause animation
        whatsappButton.addEventListener('mouseenter', function() {
            try {
                this.style.animationPlayState = 'paused';
            } catch (error) {
                console.error('[VWTech]', error);
        // Fallback silencioso
            }
        });
        
        whatsappButton.addEventListener('mouseleave', function() {
            try {
                this.style.animationPlayState = 'running';
            } catch (error) {
                console.error('[VWTech]', error);
        // Fallback silencioso
            }
        });
    } catch (error) {
        console.error('[VWTech]', error);
        // Fallback silencioso
    }
}

// Animações de entrada CSS puro com verificação de segurança
var scrollAnimatedElements = null;

function handleScrollAnimations() {
    try {
        if (!scrollAnimatedElements) {
            scrollAnimatedElements = document.querySelectorAll('.fade-in, .fade-up, .fade-right, .fade-left');
        }
        if (!scrollAnimatedElements.length) return;
        
        const windowHeight = window.innerHeight;
        scrollAnimatedElements.forEach(el => {
            if (el && el.getBoundingClientRect) {
                const rect = el.getBoundingClientRect();
                if (rect.top < windowHeight - 60) {
                    el.classList.add('visible');
                }
            }
        });
    } catch (error) {
        console.error('[VWTech]', error);
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
    } catch (e) { console.error('[VWTech]', e); }
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
        console.error('[VWTech]', error);
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
        setupModalEvents();
        initGallery();
        handleScrollAnimations();
        // Debounce maior (150ms) + passive: scroll suave em aparelhos fracos
        var debouncedScrollHandler = debounce(handleScrollAnimations, 150);
        window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
        initLazyLoading();
    } catch (err) {
        console.error('[VWTech]', error);
        // fallback silencioso
    }
}

// Inicializa após first paint (não atrasa LCP em celulares lentos)
function initDeferred() {
    try {
        initAOS();
        initThirdPartyWidgets();
    } catch (err) {
        console.error('[VWTech]', error);
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