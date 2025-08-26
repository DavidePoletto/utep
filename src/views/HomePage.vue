<template>
    <div>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-background">
                <div class="hero-pattern"></div>
            </div>

            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">
                        <span class="title-main">UTEP</span>
                        <span class="title-sub">Utensili Professionali</span>
                    </h1>

                    <p class="hero-description">
                        <strong>Non vendiamo direttamente online.</strong> Ti indirizziamo verso i nostri partner
                        autorizzati
                        dove puoi acquistare utensili professionali di qualità con la garanzia UTEP.
                    </p>

                    <div class="hero-features">
                        <div class="feature-item">
                            <i class="fas fa-handshake"></i>
                            <span>Partner Autorizzati</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-shield-check"></i>
                            <span>Garanzia UTEP</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-headset"></i>
                            <span>Supporto Tecnico</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Brief -->
        <section class="company-brief section bg-secondary">
            <div class="container">
                <div class="brief-content grid grid-cols-2">
                    <div class="brief-text">
                        <h2>30+ Anni di Esperienza</h2>
                        <p class="lead-text">
                            UTEP è il tuo consulente di fiducia per la scelta degli utensili professionali più adatti
                            alle tue esigenze.
                        </p>
                        <p>
                            Grazie alla nostra partnership con i leader mondiali del settore, ti garantiamo accesso
                            diretto ai migliori utensili da taglio disponibili sul mercato, con il supporto tecnico
                            della nostra esperienza trentennale.
                        </p>

                        <div class="company-values">
                            <div v-for="value in companyValues" :key="value.title" class="value-item">
                                <div class="value-icon">
                                    <i :class="value.icon"></i>
                                </div>
                                <div>
                                    <h4>{{ value.title }}</h4>
                                    <p>{{ value.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="image-container">
                        <img src="/img/tornitura.jpg" alt="Company Visual" class="company-visual">
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Section - ISCAR & YG1 -->
        <section class="partners-section">
            <div class="container">
                <div class="partners-header">
                    <h2 class="section-title">I Nostri Brand Partner</h2>
                    <p class="partners-intro">
                        Collaboriamo con i leader mondiali nella produzione di utensili da taglio professionali.
                        Accedi direttamente ai loro cataloghi e sistemi di acquisto.
                    </p>
                </div>

                <div class="partners-grid">
                    <div v-for="(partner, index) in partners" :key="partner.name" class="partner-card"
                        :class="`partner-${index + 1}`">

                        <!-- Logo Header Grande -->
                        <div class="partner-logo-header">
                            <div class="partner-logo-container">
                                <img :src="partner.logo" :alt="partner.name" class="partner-logo">
                            </div>
                            <div class="partner-info">
                                <h3>{{ partner.name }}</h3>
                                <p class="partner-tagline">{{ partner.tagline }}</p>
                            </div>
                        </div>

                        <!-- CTA Button -->
                        <a :href="partner.url" target="_blank" class="btn btn-xl partner-cta" :class="partner.btnClass"
                            @click="trackPartnerClick(partner.name)">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Acquista da {{ partner.name }}</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>

                        <!-- Note -->
                        <div class="partner-note">
                            <i class="fas fa-info-circle"></i>
                            <span>{{ partner.note }}</span>
                        </div>
                    </div>
                </div>

                <div class="partners-guarantee">
                    <div class="guarantee-content">
                        <i class="fas fa-certificate"></i>
                        <div>
                            <h4>Partnership Ufficiale UTEP</h4>
                            <p>Siamo distributori autorizzati di entrambi i brand. Tutti i prodotti sono originali e
                                coperti da garanzia ufficiale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Consultation CTA -->
        <section class="consultation-cta">
            <div class="container">
                <div class="cta-content">
                    <div class="cta-header">
                        <h2>Hai Bisogno di Consulenza?</h2>
                        <p>I nostri esperti sono a tua disposizione per consigliarti gli utensili più adatti al tuo
                            lavoro e guidarti verso il partner giusto.</p>
                    </div>

                    <div class="cta-options grid grid-cols-3">
                        <div class="cta-option">
                            <i class="fas fa-phone-alt"></i>
                            <h3>Chiamata Gratuita</h3>
                            <p>Parla direttamente con un nostro esperto</p>
                            <a href="tel:+390301234567" class="btn btn-outline">
                                <i class="fas fa-phone"></i>
                                030 123 4567
                            </a>
                        </div>

                        <div class="cta-option">
                            <i class="fas fa-envelope"></i>
                            <h3>Richiesta via Email</h3>
                            <p>Inviaci le tue specifiche esigenze</p>
                            <router-link to="/contatti" class="btn btn-outline">
                                <i class="fas fa-envelope"></i>
                                Scrivici
                            </router-link>
                        </div>

                        <div class="cta-option">
                            <i class="fas fa-th-large"></i>
                            <h3>Esplora il Catalogo</h3>
                            <p>Scopri tutte le nostre categorie</p>
                            <router-link to="/prodotti" class="btn btn-primary">
                                <i class="fas fa-search"></i>
                                Sfoglia Prodotti
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            partners: [
                {
                    name: "ISCAR",
                    tagline: "Leader mondiale in utensili da taglio",
                    logo: "/img/iscar.svg",
                    url: "https://webshop.iscaritalia.it/signin",
                    btnClass: "btn-primary",
                    features: [
                        "Inserti e utensili per tornitura",
                    ],
                },
                {
                    name: "YG1",
                    tagline: "Eccellenza coreana negli utensili da taglio",
                    logo: "/img/yg1.png",
                    url: "https://www.yg1.it/index.html#",
                    btnClass: "btn-secondary",
                    features: [
                        "Punte per foratura di precisione",
                        "Frese per applicazioni speciali",
                        "Utensili rivestiti con tecnologie avanzate",
                        "Soluzioni per industrie aerospace"
                    ],
                    products: "8000",
                    rating: "4.8★",
                    delivery: "Europa",
                    note: "Qualità e precisione made in Korea"
                }
            ],
            companyValues: [
                {
                    icon: "fas fa-search",
                    title: "Consulenza Specializzata",
                    description: "Ti aiutiamo a scegliere gli utensili giusti per ogni lavoro"
                },
                {
                    icon: "fas fa-shield-check",
                    title: "Qualità Garantita",
                    description: "Solo prodotti testati e certificati secondo gli standard più rigorosi"
                },
                {
                    icon: "fas fa-users",
                    title: "Supporto Continuo",
                    description: "Assistenza pre e post vendita tramite i nostri partner"
                }
            ],
            companyStats: [
                {
                    icon: "fas fa-calendar-alt",
                    number: "30+",
                    label: "Anni di Esperienza"
                },
                {
                    icon: "fas fa-users",
                    number: "10K+",
                    label: "Clienti Soddisfatti"
                },
                {
                    icon: "fas fa-tools",
                    number: "23K+",
                    label: "Prodotti Disponibili"
                },
                {
                    icon: "fas fa-handshake",
                    number: "2",
                    label: "Brand Partner Premium"
                }
            ]
        }
    },
    methods: {
        trackPartnerClick(partnerName) {
            console.log(`Click su partner: ${partnerName}`)

            // Analytics tracking
            if (window.gtag) {
                window.gtag('event', 'partner_click', {
                    partner_name: partnerName,
                    page_title: 'Homepage'
                })
            }
        }
    },

    mounted() {
        console.log('Homepage con ISCAR e YG1 caricata')
    }
}
</script>

<style scoped>
/* Homepage CSS con Partner Logos */

/* Container Base */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    box-sizing: border-box;
}

/* Hero Section - Professional */
.hero {
    position: relative;
    padding: 8rem 0 6rem;
    background: linear-gradient(135deg, var(--primary-navy-dark) 0%, var(--primary-navy) 100%);
    color: white;
    overflow: hidden;
    width: 100%;
}

.hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-pattern {
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 80px 80px;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;
}

.hero-title {
    margin-bottom: 2rem;
}

.title-main {
    display: block;
    font-size: 4.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.title-sub {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    font-family: var(--font-primary);
}

.hero-description {
    font-size: 1.25rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
    padding: 0 1rem;
}

.hero-description strong {
    color: var(--warning);
}

.hero-features {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 0 1rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.feature-item i {
    font-size: 1.25rem;
    color: var(--warning);
}

/* Partners Section - ISCAR & YG1 */
.partners-section {
    padding: 3rem 0;
    background: var(--bg-primary);
    width: 100%;
    overflow-x: hidden;
}

.partners-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.partners-intro {
    font-size: 1.125rem;
    color: var(--gray-600);
    margin-top: 1rem;
}

.partners-grid {
    display: flex;
    gap: 3rem;
    margin-bottom: 4rem;
    width: 100%;
}

.partner-card {
    background: rgb(255, 255, 255);
    border: 2px solid var(--gray-200);
    border-radius: var(--border-radius-2xl);
    padding: 2.5rem;
    text-align: center;
    transition: all var(--transition);
    position: relative;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
}

.partner-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
}

.partner-card.partner-1:hover {
    background: linear-gradient(135deg, var(--bg-primary) 0%, rgba(30, 41, 59, 0.02) 100%);
}

.partner-card.partner-2:hover {
    background: linear-gradient(135deg, var(--bg-primary) 0%, rgba(49, 130, 206, 0.02) 100%);
}

/* Partner Logo Header */
.partner-logo-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.partner-logo-container {
    width: 300px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.partner-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.partner-info h3 {
    font-size: 1.75rem;
    color: var(--primary-navy);
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.partner-tagline {
    color: var(--gray-600);
    font-size: 1rem;
    font-style: italic;
}

.partner-features {
    margin-bottom: 2rem;
    text-align: left;
}

.partner-feature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem 0;
}

.partner-feature i {
    color: var(--success);
    font-size: 0.875rem;
    width: 16px;
    flex-shrink: 0;
}

.partner-cta {
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    padding: 1.5rem 2rem;
    gap: 1rem;
    box-sizing: border-box;
}

.partner-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--gray-500);
    font-style: italic;
}

.partner-note i {
    font-size: 0.75rem;
}

.partners-guarantee {
    background: linear-gradient(135deg, var(--primary-navy), var(--accent-blue));
    color: white;
    padding: 2rem;
    border-radius: var(--border-radius-xl);
    margin-top: 2rem;
}

.guarantee-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
}

.guarantee-content i {
    font-size: 2rem;
    opacity: 0.9;
    flex-shrink: 0;
}

.guarantee-content h4 {
    color: white;
    margin-bottom: 0.5rem;
}

/* Company Brief */
.company-brief {
    padding: 5rem 0;
    width: 100%;
    overflow-x: hidden;
}

.brief-content {
    align-items: center;
    gap: 2rem;
}

.brief-text h2 {
    margin-bottom: 1.5rem;
}

.company-values {
    margin-top: 2rem;
}

.value-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.value-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary-navy-light), var(--accent-blue-light));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
    font-size: 0.875rem;
}

.value-item h4 {
    margin-bottom: 0.5rem;
    color: var(--primary-navy);
}

.image-container {
    height: 100%;
}

.company-visual {
    border-radius: var(--border-radius-xl);
    object-fit: cover;
    height: 100%;
}

/* Consultation CTA */
.consultation-cta {
    padding: 5rem 0;
    background: var(--bg-accent);
    width: 100%;
    overflow-x: hidden;
}

.cta-header {
    text-align: center;
    margin-bottom: 4rem;
}

.cta-header h2 {
    margin-bottom: 1rem;
}

.cta-header p {
    font-size: 1.125rem;
    color: var(--gray-600);
}

.cta-options {
    gap: 1.5rem;
}

.cta-option {
    background: var(--bg-primary);
    padding: 2rem;
    border-radius: var(--border-radius-xl);
    text-align: center;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--gray-200);
    transition: all var(--transition);
    width: 100%;
    box-sizing: border-box;
}

.cta-option:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.cta-option>i {
    font-size: 3rem;
    color: var(--primary-navy);
    margin-bottom: 1.5rem;
}

.cta-option h3 {
    margin-bottom: 1rem;
}

.cta-option p {
    margin-bottom: 2rem;
    color: var(--gray-600);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .partners-grid {
        gap: 2rem;
    }

    .partner-card {
        padding: 2rem;
    }

    .partner-logo-container {
        width: 100px;
        height: 100px;
    }

    .brief-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .cta-options {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 0.75rem;
    }

    /* Hero Responsive */
    .hero {
        padding: 6rem 0 4rem;
    }

    .title-main {
        font-size: 2.5rem;
    }

    .title-sub {
        font-size: 1.2rem;
    }

    .hero-description {
        font-size: 1.1rem;
        padding: 0 0.5rem;
        margin-bottom: 2rem;
    }

    .hero-features {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    /* Partners Responsive */
    .partners-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .partner-card {
        padding: 1.5rem;
    }

    .partner-logo-container {
        width: 80px;
        height: 80px;
    }

    .partner-info h3 {
        font-size: 1.5rem;
    }

    .partner-stats {
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
    }

    .stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--gray-200);
    }

    .stat:last-child {
        border-bottom: none;
    }

    .stat-number {
        font-size: 1.25rem;
        margin-bottom: 0;
    }

    .stat-label {
        margin-bottom: 0;
    }

    .partner-cta {
        font-size: 1rem;
        padding: 1rem 1.5rem;
    }

    /* Company Stats */
    .company-stats {
        grid-template-columns: 1fr;
    }

    /* CTA */
    .cta-option {
        padding: 1.5rem;
    }

    .cta-option>i {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 0.5rem;
    }

    .partner-card {
        padding: 1rem;
    }

    .partner-logo-container {
        width: 70px;
        height: 70px;
    }

    .partner-info h3 {
        font-size: 1.25rem;
    }

    .partner-tagline {
        font-size: 0.85rem;
    }

    .title-main {
        font-size: 2.2rem;
    }

    .title-sub {
        font-size: 1rem;
    }
}

/* Additional Safety Rules */
.hero,
.partners-section,
.company-brief,
.consultation-cta {
    max-width: 100vw;
    overflow-x: hidden;
}

img {
    max-width: 100%;
    height: auto;
}

.btn {
    word-break: keep-all;
    white-space: nowrap;
}
</style>