<template>
    <footer class="footer">
        <!-- Main Footer Content -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    <!-- Company Section -->
                    <div class="footer-section company-section">
                        <div class="footer-logo">
                            <div class="logo-image-container">
                                <img class="logo-image" src="/img/utep-logo.webp" alt="logo">
                            </div>
                        </div>

                        <p class="company-description">
                            Leader nel settore degli utensili professionali con oltre 50 anni di esperienza.
                            Qualità, affidabilità e innovazione per i professionisti italiani.
                        </p>

                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Brescia, Lombardia</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <a href="tel:+390301234567">+39 030-2126362</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:commerciale@uteputensili.com">COMMERCIALE@UTEPUTENSILI.COM</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:l.bosio@uteputensili.com">L.BOSIO@UTEPUTENSILI.COM</a>
                            </div>
                        </div>

                        <div class="social-links">
                            <a href="#" class="social-link" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-section">
                        <h4 class="footer-title">
                            <i class="fas fa-sitemap"></i>
                            Navigazione
                        </h4>
                        <ul class="footer-links">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/cataloghi">Cataloghi Prodotti</router-link></li>
                            <li><router-link to="/chi-siamo">Chi Siamo</router-link></li>
                            <li><router-link to="/contatti">Contatti</router-link></li>
                        </ul>
                    </div>

                    <!-- Services -->
                    <div class="footer-section">
                        <h4 class="footer-title">
                            <i class="fas fa-cogs"></i>
                            Servizi
                        </h4>
                        <ul class="footer-links">
                            <li><a href="#consulenza">Consulenza Tecnica</a></li>
                            <li><a href="#assistenza">Assistenza Clienti</a></li>
                            <li><a href="#garanzia">Garanzia Prodotti</a></li>
                            <li><a href="#formazione">Formazione</a></li>
                            <li><a href="#manutenzione">Manutenzione</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h4 class="footer-title">
                            <i class="fas fa-cogs"></i>
                            Partner and CoFounder
                        </h4>
                        <div class="logocontainer">
                            <img loading="lazy" class="logo-image" src="/img/brands/LOGCDI.webp" alt="logo cditec">
                        <img loading="lazy" class="logo-image" src="/img/brands/atools.png" alt="logo atools">
                        </div>   
                        
                    </div>

                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="copyright">
                        <p>&copy; {{ currentYear }} UTEP S.r.l. - Tutti i diritti riservati.</p>
                        <p class="vat-info">P.IVA: 03596070171 - REA: BS-123456</p>
                    </div>

                    <div class="legal-links">
                        <a href="#privacy">Privacy Policy</a>
                        <span class="separator">|</span>
                        <a href="#cookies">Cookie Policy</a>
                        <span class="separator">|</span>
                        <a href="#terms">Termini di Servizio</a>
                    </div>

                    <div class="made-with">
                        <span>Made with</span>
                        <i class="fas fa-heart"></i>
                        <span>by dprogrammazione@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            certifications: [
                { name: 'ISO 9001', icon: 'fas fa-certificate' },
                { name: 'CE Marking', icon: 'fas fa-stamp' },
                { name: 'Made in Italy', icon: 'fas fa-flag' },
                { name: 'TÜV Certified', icon: 'fas fa-award' }
            ]
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
/* Il tuo CSS originale funziona perfettamente ora */
.footer {
    background: var(--neutral-900);
    color: white;
}

.footer-main {
    padding: 3rem 0 1.5rem;
    background: linear-gradient(135deg, var(--neutral-900), var(--neutral-800));
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2.5rem;
}

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.logo-image {
    width: 120px;
    height: auto;
}

.logo-main {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.logo-sub {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--neutral-400);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.company-description {
    color: var(--neutral-300);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--neutral-300);
    font-size: 0.9rem;
}

.contact-item i {
    width: 16px;
    color: var(--accent-orange-light);
}

.contact-item a {
    color: var(--neutral-300);
    text-decoration: none;
    transition: color var(--transition-normal);
}

.contact-item a:hover {
    color: var(--accent-orange-light);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--neutral-300);
    text-decoration: none;
    transition: all var(--transition-normal);
}

.social-link:hover {
    background: var(--accent-red);
    border-color: var(--accent-red);
    color: white;
    transform: translateY(-2px);
}

.footer-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.footer-title i {
    color: var(--accent-red-light);
    font-size: 0.875rem;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 0.75rem;
}

.footer-links a {
    color: var(--neutral-300);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all var(--transition-normal);
    display: flex;
    align-items: center;
    padding: 0.25rem 0;
}

.footer-links a:hover {
    color: var(--accent-red-light);
    transform: translateX(4px);
}

.footer-links a::before {
    content: '→';
    opacity: 0;
    margin-right: 0.5rem;
    transition: opacity var(--transition-normal);
}

.footer-links a:hover::before {
    opacity: 1;
}

.footer-bottom {
    padding: 1.5rem 0;
    background: rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
}

.copyright {
    color: var(--neutral-400);
    font-size: 0.85rem;
}

.vat-info {
    font-size: 0.75rem;
    margin-top: 0.25rem;
}

.legal-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.85rem;
}

.legal-links a {
    color: var(--neutral-400);
    text-decoration: none;
    transition: color var(--transition-normal);
}

.legal-links a:hover {
    color: var(--accent-red-light);
}

.separator {
    color: var(--neutral-600);
}

.logocontainer {
    display: flex;
    flex-direction: column;
    justify-content:
    center;
    align-items: center;
    gap: 1rem;
}

.made-with {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--neutral-400);
    font-size: 0.85rem;
}

.made-with i {
    color: #e74c3c;
    animation: heartbeat 2s infinite;
}

@keyframes heartbeat {

    0%,
    50%,
    100% {
        transform: scale(1);
    }

    25%,
    75% {
        transform: scale(1.1);
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }

    .company-section {
        grid-column: 1 / -1;
    }

    .newsletter-section {
        grid-column: 1 / -1;
        margin-top: 2rem;
    }
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .legal-links {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .footer-main {
        padding: 3rem 0 2rem;
    }

    .newsletter-section {
        padding: 1.5rem;
    }

    .social-links {
        justify-content: center;
    }

    .certifications-grid {
        flex-direction: column;
        align-items: center;
    }

    .cert-badge {
        width: fit-content;
    }
}
</style>