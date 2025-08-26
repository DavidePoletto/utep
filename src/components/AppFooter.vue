<template>
    <footer class="footer">
        <!-- Main Footer Content -->
        <div class="footer-main">
            <div class="container">
                <div class="footer-grid">
                    <!-- Company Section -->
                    <div class="footer-section company-section">
                        <div class="footer-logo">
                            <div class="logo-icon">
                                <i class="fas fa-tools"></i>
                            </div>
                            <div class="logo-text">
                                <span class="logo-main">UTEP</span>
                                <span class="logo-sub">Dal 1990</span>
                            </div>
                        </div>

                        <p class="company-description">
                            Leader nel settore degli utensili professionali con oltre 30 anni di esperienza.
                            Qualità, affidabilità e innovazione per i professionisti italiani.
                        </p>

                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Brescia, Lombardia</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <a href="tel:+390301234567">+39 030 123 4567</a>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:info@utep.it">info@utep.it</a>
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
                            <li><router-link to="/prodotti">Catalogo Prodotti</router-link></li>
                            <li><router-link to="/chi-siamo">Chi Siamo</router-link></li>
                            <li><router-link to="/contatti">Contatti</router-link></li>
                        </ul>
                    </div>

                    <!-- Categories -->
                    <div class="footer-section">
                        <h4 class="footer-title">
                            <i class="fas fa-th-large"></i>
                            Categorie
                        </h4>
                        <ul class="footer-links">
                            <li><a href="#utensili-elettrici">Utensili Elettrici</a></li>
                            <li><a href="#utensili-manuali">Utensili Manuali</a></li>
                            <li><a href="#sicurezza">Sicurezza Lavoro</a></li>
                            <li><a href="#ferramenta">Ferramenta</a></li>
                            <li><a href="#strumenti-misura">Strumenti di Misura</a></li>
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

                    <!-- Newsletter -->
                    <div class="footer-section newsletter-section">
                        <h4 class="footer-title">
                            <i class="fas fa-envelope-open"></i>
                            Newsletter
                        </h4>
                        <p class="newsletter-description">
                            Rimani aggiornato su nuovi prodotti, offerte speciali e news dal settore.
                        </p>

                        <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
                            <div class="input-group">
                                <input v-model="newsletterEmail" type="email" placeholder="La tua email..."
                                    class="newsletter-input" required>
                                <button type="submit" class="newsletter-btn" :disabled="isSubscribing">
                                    <i v-if="isSubscribing" class="fas fa-spinner fa-spin"></i>
                                    <i v-else class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                            <div class="privacy-notice">
                                <i class="fas fa-shield-alt"></i>
                                <span>I tuoi dati sono protetti. No spam.</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Certifications & Partners -->
        <div class="footer-certifications">
            <div class="container">
                <div class="certifications-content">
                    <div class="certifications-title">
                        <h5>Certificazioni e Partner</h5>
                    </div>

                    <div class="certifications-grid">
                        <div v-for="cert in certifications" :key="cert.name" class="cert-badge">
                            <i :class="cert.icon"></i>
                            <span>{{ cert.name }}</span>
                        </div>
                    </div>

                    <div class="partners-note">
                        <i class="fas fa-handshake"></i>
                        <span>Partner autorizzato delle migliori marche internazionali</span>
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
                        <p class="vat-info">P.IVA: 01234567890 - REA: BS-123456</p>
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
                        <span>in Italy</span>
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
            newsletterEmail: '',
            isSubscribing: false,
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
    },
    methods: {
        async subscribeNewsletter() {
            if (!this.newsletterEmail) return

            this.isSubscribing = true

            try {
                // Simula sottoscrizione newsletter
                await new Promise(resolve => setTimeout(resolve, 2000))

                alert('Grazie per esserti iscritto alla newsletter!')
                this.newsletterEmail = ''

            } catch (error) {
                alert('Errore nella sottoscrizione. Riprova più tardi.')
            } finally {
                this.isSubscribing = false
            }
        }
    }
}
</script>

<style scoped>
.footer {
    background: var(--neutral-900);
    color: white;
}

/* Main Footer */
.footer-main {
    padding: 4rem 0 2rem;
    background: linear-gradient(135deg, var(--neutral-900), var(--neutral-800));
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
    gap: 3rem;
}

.footer-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Company Section */
.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.logo-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary-navy-light), var(--accent-red-light));
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: white;
}

.logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
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

/* Footer Titles */
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

/* Footer Links */
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

/* Newsletter Section */
.newsletter-section {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: var(--border-radius-xl);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.newsletter-description {
    color: var(--neutral-300);
    font-size: 0.9rem;
    line-height: 1.5;
}

.newsletter-form {
    margin-top: 1.5rem;
}

.input-group {
    display: flex;
    position: relative;
    margin-bottom: 0.75rem;
}

.newsletter-input {
    flex: 1;
    padding: 0.875rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg) 0 0 var(--border-radius-lg);
    color: white;
    font-size: 0.9rem;
    outline: none;
    transition: all var(--transition-normal);
}

.newsletter-input::placeholder {
    color: var(--neutral-400);
}

.newsletter-input:focus {
    border-color: var(--accent-red-light);
    background: rgba(255, 255, 255, 0.15);
}

.newsletter-btn {
    padding: 0.875rem 1.25rem;
    background: var(--accent-red);
    border: 1px solid var(--accent-red);
    border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;
    color: white;
    cursor: pointer;
    transition: all var(--transition-normal);
}

.newsletter-btn:hover {
    background: var(--accent-red-dark);
    transform: scale(1.05);
}

.newsletter-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.privacy-notice {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--neutral-400);
}

.privacy-notice i {
    color: var(--accent-red-light);
}

/* Certifications Section */
.footer-certifications {
    padding: 2rem 0;
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.certifications-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
}

.certifications-title h5 {
    color: var(--neutral-300);
    font-size: 0.95rem;
    font-weight: 500;
    margin: 0;
}

.certifications-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.cert-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    color: var(--neutral-300);
    font-size: 0.85rem;
    font-weight: 500;
}

.cert-badge i {
    color: var(--accent-red-light);
    font-size: 0.75rem;
}

.partners-note {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--neutral-400);
    font-size: 0.85rem;
    font-style: italic;
}

.partners-note i {
    color: var(--primary-navy-light);
}

/* Bottom Footer */
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

    .certifications-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    .certifications-grid {
        justify-content: center;
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