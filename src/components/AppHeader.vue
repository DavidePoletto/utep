<template>
    <header class="header" :class="{ 'scrolled': isScrolled, 'menu-open': mobileMenuOpen }">
        <!-- Top Header Band -->
        <div class="top-header">
            <div class="top-container">
                <!-- Left Logos -->
                <div class="header-logos">
                    <a href="https://www.iscar.com/index.aspx/countryid/9" target="_blank" class="logo-link-external">
                        <div class="external-logo">
                            <img src="/img/iscar.svg" alt="ISCAR" class="logo-img">
                        </div>
                    </a>
                    <a href="https://www.yg1.it/index.html#" target="_blank" class="logo-link-external">
                        <div class="external-logo">
                            <img src="/img/yg1.png" alt="YG1" class="logo-img">
                        </div>
                    </a>
                </div>

                <!-- Logo Center -->
                <div class="logo-section">
                    <router-link to="/" class="logo-link" @click="closeMobileMenu">
                        <div class="logo">
                            <div class="logo-icon">
                                <i data-lucide="wrench"></i>
                            </div>
                            <div class="logo-text">
                                <span class="logo-main">UTEP</span>
                                <span class="logo-sub">Utensili Professionali</span>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- Right CTA -->
                <div class="header-cta">
                    <a href="tel:+390301234567" class="btn btn-primary">
                        <i data-lucide="phone"></i>
                        <span class="cta-text">Chiamaci Ora</span>
                    </a>
                </div>

                <!-- Mobile Toggle -->
                <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }"
                    aria-label="Toggle navigation menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
        </div>

        <!-- Navigation Bar -->
        <div class="nav-bar" :class="{ 'mobile-hidden': !mobileMenuOpen }">
            <nav class="nav-container">
                <ul class="nav-list" :class="{ 'mobile-open': mobileMenuOpen }">
                    <li class="nav-item">
                        <router-link to="/" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="home"></i>
                            <span>Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/prodotti" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="grid-3x3"></i>
                            <span>Catalogo</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/chi-siamo" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="users"></i>
                            <span>Chi Siamo</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contatti" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="mail"></i>
                            <span>Contatti</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Mobile Menu Overlay -->
        <div class="mobile-overlay" :class="{ 'active': mobileMenuOpen }" @click="closeMobileMenu"></div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            mobileMenuOpen: false,
            isScrolled: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen

            // Prevent body scroll when menu is open
            if (this.mobileMenuOpen) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        },

        closeMobileMenu() {
            this.mobileMenuOpen = false
            document.body.style.overflow = ''
        },

        handleScroll() {
            this.isScrolled = window.scrollY > 50
        }
    },

    mounted() {
        // Add scroll listener for header effects
        window.addEventListener('scroll', this.handleScroll)

        // Initialize Lucide icons
        if (window.lucide) {
            window.lucide.createIcons()
        }

        // Handle route changes
        this.$router.beforeEach(() => {
            this.closeMobileMenu()
        })
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        document.body.style.overflow = ''
    }
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: white;
    transition: all var(--transition);
}

.header.scrolled {
    box-shadow: var(--shadow-lg);
}

/* Top Header Band */
.top-header {
    background: white;
    border-bottom: 1px solid var(--gray-200);
    padding: 1.5rem 0;
}

.top-container {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;
}

/* Header Logos (Left) */
.header-logos {
    display: flex;
    gap: 1.5rem;
    justify-self: start;
}

.logo-link-external {
    text-decoration: none;
    transition: all var(--transition);
}

.external-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.external-logo:hover {
    border-color: var(--accent-blue);
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
}

.logo-img {
    width: 60px;
    object-fit: contain;
    border-radius: 4px;
}

/* Fallback se le immagini non sono disponibili */
.logo-img:not([src]),
.logo-img[src=""] {
    display: none;
}

.external-logo:has(.logo-img:not([src])),
.external-logo:has(.logo-img[src=""]) {
    justify-content: center;
}

.external-logo:has(.logo-img:not([src])) .logo-name,
.external-logo:has(.logo-img[src=""]) .logo-name {
    font-weight: 700;
    color: var(--accent-blue);
}

.logo-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--gray-700);
    transition: color var(--transition);
}

.external-logo:hover .logo-name {
    color: var(--accent-blue);
}

/* Logo Center */
.logo-section {
    justify-self: center;
}

.logo-link {
    text-decoration: none;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform var(--transition-normal);
}

.logo:hover {
    transform: scale(1.05);
}

.logo-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, var(--primary-navy), var(--accent-blue));
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    box-shadow: var(--shadow-md);
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.logo-main {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--primary-navy);
}

.logo-sub {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Header CTA (Right) */
.header-cta {
    justify-self: end;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius-lg);
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all var(--transition-normal);
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--accent-blue);
    color: white;
    box-shadow: var(--shadow-sm);
    border: none;
}

.btn-primary::before {
    display: none;
}

.btn-primary:hover::before {
    display: none;
}

.btn-primary:hover {
    background: var(--accent-blue-light);
    box-shadow: var(--shadow-md);
}

/* Mobile Toggle */
.mobile-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    gap: 4px;
    transition: transform var(--transition-normal);
    justify-self: end;
}

.mobile-toggle:hover {
    transform: scale(1.1);
}

.hamburger-line {
    width: 24px;
    height: 3px;
    background: var(--gray-700);
    border-radius: 2px;
    transition: all var(--transition);
    transform-origin: center;
}

.mobile-toggle.active .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
    background: var(--primary-navy);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: var(--primary-navy);
}

/* Navigation Bar */
.nav-bar {
    background: var(--gray-800);
    border-bottom: 2px solid var(--accent-blue);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    min-height: 50px;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gray-300);
    transition: all var(--transition);
    position: relative;
    border-bottom: 2px solid transparent;
}

.nav-link:hover,
.nav-link.router-link-active {
    color: white;
    border-bottom-color: var(--accent-blue);
}

.nav-link i {
    font-size: 0.875rem;
    opacity: 0.8;
}

/* Mobile Overlay */
.mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition);
    z-index: 1000;
}

.mobile-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .top-container {
        padding: 0 1.5rem;
        gap: 1rem;
    }

    .nav-container {
        padding: 0 1.5rem;
    }

    .header-logos {
        gap: 1rem;
    }

    .external-logo {
        padding: 0.4rem 0.75rem;
    }

    .logo-name {
        font-size: 0.8rem;
    }

    .logo-img {}
}

@media (max-width: 768px) {
    .top-container {
        grid-template-columns: auto 1fr auto;
        padding: 0 1rem;
        gap: 0.75rem;
    }

    .header-logos {
        gap: 0.5rem;
    }

    .external-logo {
        flex-direction: column;
        padding: 0.4rem;
        gap: 0.25rem;
        min-width: 50px;
    }

    .logo-img {}

    .logo-name {
        font-size: 0.7rem;
        line-height: 1;
    }

    .logo-section {
        justify-self: start;
        margin-left: 0.5rem;
    }

    .logo-text {
        display: none;
    }

    .logo-icon {
        width: 40px;
        height: 40px;
        font-size: 1.25rem;
    }

    .header-cta {
        display: none;
    }

    .mobile-toggle {
        display: flex;
    }

    /* Hide nav bar on mobile unless menu is open */
    .nav-bar.mobile-hidden {
        display: none;
    }

    .nav-list {
        display: none;
    }

    .nav-list.mobile-open {
        display: flex;
        position: fixed;
        top: 100px;
        right: 0;
        width: 280px;
        height: calc(100vh - 100px);
        background: white;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0;
        padding: 1.5rem 0;
        border-left: 1px solid var(--gray-200);
        box-shadow: var(--shadow-xl);
        border-radius: var(--border-radius-lg) 0 0 0;
        z-index: 1001;
        animation: slideInFromRight 0.3s ease-out;
    }

    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }

        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .nav-item {
        width: 100%;
    }

    .mobile-open .nav-link {
        width: 100%;
        padding: 1rem 1.5rem;
        justify-content: flex-start;
        border-radius: 0;
        font-size: 1rem;
        border-bottom: none;
        border-left: 4px solid transparent;
        color: var(--gray-700);
        background: transparent;
    }

    .mobile-open .nav-link:hover,
    .mobile-open .nav-link.router-link-active {
        color: var(--gray-900);
        border-left-color: var(--accent-blue);
        background: var(--gray-50);
    }

    .mobile-open .nav-link i {
        font-size: 1rem;
        width: 20px;
    }
}

@media (max-width: 480px) {
    .top-container {
        gap: 0.5rem;
    }

    .header-logos {
        gap: 0.25rem;
    }

    .external-logo {
        min-width: 45px;
    }

    .logo-img {
        width: 20px;
        height: 20px;
    }

    .logo-name {
        font-size: 0.6rem;
    }

    .nav-list.mobile-open {
        width: 100vw;
        right: 0;
        border-left: none;
        border-radius: 0;
    }

    .mobile-open .nav-link {
        padding: 1rem;
    }
}

/* Main Content Spacing - Fix for Hero Sections */
body .main-content {
    margin-top: 130px;
    /* Space for double header */
    min-height: calc(100vh - 200px);
}

/* Ensure hero sections don't get covered */
.hero-section,
.hero,
.banner-section {
    padding-top: 2rem;
}

@media (max-width: 768px) {
    body .main-content {
        margin-top: 100px;
        /* Smaller mobile header */
    }

    .hero-section,
    .hero,
    .banner-section {
        padding-top: 1rem;
    }
}

/* Animation for mobile menu items */
.nav-list.mobile-open .nav-item {
    animation: slideInRight 0.4s ease-out forwards;
    opacity: 0;
    transform: translateX(20px);
}

.nav-list.mobile-open .nav-item:nth-child(1) {
    animation-delay: 0.1s;
}

.nav-list.mobile-open .nav-item:nth-child(2) {
    animation-delay: 0.15s;
}

.nav-list.mobile-open .nav-item:nth-child(3) {
    animation-delay: 0.2s;
}

.nav-list.mobile-open .nav-item:nth-child(4) {
    animation-delay: 0.25s;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Fix for header height calculations */
.header {
    --header-height: 130px;
}

@media (max-width: 768px) {
    .header {
        --header-height: 100px;
    }
}

/* Scroll Effects */
.header.scrolled .top-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: var(--shadow-lg);
}

.header.scrolled .nav-bar {
    background: rgba(26, 32, 44, 0.95);
    backdrop-filter: blur(20px);
}

/* Loading Animation */
.header.menu-open .nav-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-blue), var(--warning));
    animation: loading-bar 2s ease-in-out infinite;
}

@keyframes loading-bar {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>