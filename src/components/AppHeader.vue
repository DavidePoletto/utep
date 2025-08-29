<template>
    <header class="header" :class="{ 'scrolled': isScrolled, 'menu-open': mobileMenuOpen }">
        <div class="header-container">
            <!-- Logo Left -->
            <div class="logo-section">
                <router-link to="/" class="logo-link" @click="closeMobileMenu">
                    <img src="/img/UTEP SRL.png" alt="UTEP SRL" class="logo-img">
                </router-link>
            </div>

            <!-- Navigation Right -->
            <nav class="nav-section">
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
                        <router-link to="/promozioni" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="briefcase"></i>
                            <span>Promozioni</span>
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

            <!-- Mobile Toggle -->
            <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }"
                aria-label="Toggle navigation menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
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
    border-bottom: 1px solid var(--gray-200);
    transition: all var(--transition);
    height: 90px;
}

.header.scrolled {
    box-shadow: var(--shadow-lg);
    border-bottom-color: var(--gray-300);
}

.header-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    min-height: 70px;
}

/* Logo Section */
.logo-section {
    flex-shrink: 0;
}

.logo-link {
    text-decoration: none;
    display: block;
    transition: transform var(--transition);
}

.logo-link:hover {
    transform: scale(1.02);
}

.logo-img {
    height: 50px;
    width: auto;
    object-fit: contain;
    border-radius: 4px;
}

/* Navigation Section */
.nav-section {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.nav-list {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.10rem;
    color: var(--gray-700);
    transition: all var(--transition);
    border-radius: var(--border-radius);
    position: relative;
}

.nav-link.router-link-active {
    color: var(--color-primary);
    text-decoration: underline;
    font-weight: 800;
}

.nav-link i {
    font-size: 0.875rem;
    opacity: 0.8;
}

.nav-link.router-link-active i {
    opacity: 1;
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
    transition: transform var(--transition);
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
    background: var(--accent-blue);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: var(--accent-blue);
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
    z-index: 999;
}

.mobile-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .header-container {
        padding: 1rem 1.5rem;
    }

    .nav-list {
        gap: 0.25rem;
    }

    .nav-link {
        padding: 0.75rem 1rem;
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .header-container {
        padding: 1rem;
    }

    .header {
        height: 80px;
    }

    .logo-img {
        height: 45px;
    }

    .nav-section {
        display: none;
    }

    .mobile-toggle {
        display: flex;
    }

    /* Mobile Navigation */
    .nav-list.mobile-open {
        display: flex;
        position: fixed;
        top: 70px;
        right: 0;
        width: 280px;
        height: calc(100vh - 70px);
        background: white;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0;
        padding: 2rem 0;
        border-left: 1px solid var(--gray-200);
        box-shadow: var(--shadow-xl);
        z-index: 1000;
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
        color: var(--gray-700);
        background: transparent;
        border-left: 4px solid transparent;
    }

    .mobile-open .nav-link:hover,
    .mobile-open .nav-link.router-link-active {
        color: var(--accent-blue);
        background: var(--gray-50);
        border-left-color: var(--accent-blue);
    }

    .mobile-open .nav-link i {
        font-size: 1rem;
        width: 20px;
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
}

@media (max-width: 480px) {
    .header-container {
        padding: 0.75rem;
    }

    .header {
        height: 70px;
    }

    .logo-img {
        height: 40px;
    }

    .nav-list.mobile-open {
        width: 100vw;
        right: 0;
        border-left: none;
    }

    .mobile-open .nav-link {
        padding: 1rem;
    }
}

/* Scroll Effects */
.header.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
}
</style>