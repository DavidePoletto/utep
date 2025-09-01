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
                        <router-link to="/cataloghi" @click="closeMobileMenu" class="nav-link">
                            <i data-lucide="grid-3x3"></i>
                            <span>Catalogo</span>
                        </router-link>
                    </li>
                    <li class="nav-item promo-item">
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
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
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
    position: relative;
    z-index: 1001;
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
    background: var(--gray-700);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
    background: var(--gray-700);
}

/* Mobile Overlay */
.mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
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

    .nav-list {
        display: none;
    }

    .mobile-toggle {
        display: flex;
    }

    .nav-list.mobile-open {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;
        z-index: 1000;
        animation: slideInFromRight 0.4s ease-out;
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
        max-width: 300px;
    }

    .mobile-open .nav-link {
        width: 100%;
        padding: 1.5rem 2rem;
        justify-content: center;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--gray-700);
        background: none;
        border: none;
        transition: all 0.3s ease;
    }

    .mobile-open .nav-link:hover,
    .mobile-open .nav-link.router-link-active {
        color: var(--color-primary);
        text-decoration: underline;
        font-weight: 800;
    }

    /* Stile speciale per Promozioni */
    .mobile-open .promo-item .nav-link {
        color: var(--color-primary);
        font-weight: 700;
    }

    .mobile-open .promo-item .nav-link:hover,
    .mobile-open .promo-item .nav-link.router-link-active {
        color: var(--color-primary);
        text-decoration: underline;
        font-weight: 800;
    }

    .mobile-open .nav-link i {
        font-size: 1.5rem;
        width: auto;
        margin-bottom: 0.5rem;
        opacity: 1;
    }

    .mobile-open .nav-link span {
        display: block;
        margin-top: 0.5rem;
    }

    /* Animazioni stagger per gli elementi del menu */
    .nav-list.mobile-open .nav-item {
        animation: slideInUp 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }

    .nav-list.mobile-open .nav-item:nth-child(1) {
        animation-delay: 0.1s;
    }

    .nav-list.mobile-open .nav-item:nth-child(2) {
        animation-delay: 0.2s;
    }

    .nav-list.mobile-open .nav-item:nth-child(3) {
        animation-delay: 0.3s;
    }

    .nav-list.mobile-open .nav-item:nth-child(4) {
        animation-delay: 0.4s;
    }

    .nav-list.mobile-open .nav-item:nth-child(5) {
        animation-delay: 0.5s;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
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

    .mobile-open .nav-link {
        padding: 1.25rem 1.5rem;
        font-size: 1.25rem;
    }

    .mobile-open .nav-link i {
        font-size: 1.25rem;
    }
}
</style>