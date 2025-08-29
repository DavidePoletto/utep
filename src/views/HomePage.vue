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
                        <span class="title-sub">Acquista la qualità,</span>
                        <span class="title-main">acquista da UTEP</span>
                    </h1>
                    <p class="hero-description">
                        Acquista <strong>utensili professionali</strong> dai nostri migliori partner autorizzati.
                    </p>
                    <div class="buttons-container">
                        <button class="btn btn-primary">Promozioni</button>
                        <button class="btn btn-secondary">Cataloghi</button>
                    </div>
                </div>
            </div>
            <img src="/img/punteutensili.png" alt="utensili" class="hero-image">
        </section>

        <section class="app-carousel">
            <div class="carousel-container">
                <AppCarousel />
            </div>
        </section>

        <!-- Company Brief -->
        <section class="company-brief section bg-secondary">
            <div class="container">
                <div class="brief-content">
                    <div class="image-container">
                        <div class="company-visual">
                            <img src="/img/tornitura.jpg" alt="Tornitura" class="company-image" />
                        </div>
                    </div>
                    <div class="brief-text">
                        <h2>25 Anni di <strong>Esperienza</strong></h2>
                        <p class="lead-text">
                            UTEP è il tuo fornitore di fiducia dei migliori utensili da taglio presenti sul mercato.
                        </p>
                        <p>
                            Grazie alla nostra collaborazione con i leader mondiali del settore, ti garantiamo accesso
                            diretto ai migliori utensili da taglio disponibili sul mercato, con il supporto tecnico
                            della nostra esperienza venticinquennale.
                        </p>
                        <div class="company-values">
                            <div v-for="value in companyValues" :key="value.title" class="value-item">
                                <div class="value-icon">
                                    <i :class="value.icon"></i>
                                </div>
                                <div>
                                    <h5>{{ value.title }}</h5>
                                    <p>{{ value.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Section - Slider Migliorato -->
        <section class="partners-section">
            <div class="container">
                <div class="partners-header">
                    <h2>I Nostri <strong>Cataloghi</strong></h2>
                    <p class="partners-intro">
                        Collaboriamo con i leader mondiali nella produzione di utensili da taglio professionali.
                        Accedi direttamente ai loro cataloghi e sistemi di acquisto.
                    </p>
                </div>
            </div>
            <!-- Slider Container -->
            <div class="partners-slider-container">
                <!-- Navigation Arrows - Solo per desktop -->
                <button class="slider-nav prev" @click="scrollLeft" aria-label="Scorri a sinistra">
                </button>

                <button class="slider-nav next" @click="scrollRight" aria-label="Scorri a destra">
                </button>

                <div class="partners-slider" ref="partnersSlider">
                    <div v-for="partner in partnersWithDescriptions" :key="partner.id" class="partner-slide">
                        <div class="partner-card">
                            <div class="card-logo-section">
                                <img :src="partner.logo" :alt="partner.name" class="partner-logo">
                            </div>
                            <div class="card-content-section">
                                <p class="partner-description">{{ partner.description }}</p>
                                <a :href="partner.url" target="_blank" class="btn-partner-cta"
                                    @click="trackPartnerClick(partner.name)">
                                    <span>Vai al Catalogo</span>
                                    <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Consultation CTA - Completamente Rinnovata -->
        <section class="consultation-redesign">
            <div class="consultation-hero">
                <div class="hero-backdrop"></div>
                <div class="hero-pattern"></div>

                <div class="container">
                    <div class="consultation-grid">
                        <!-- Lato Sinistro - Contenuto Principale -->
                        <div class="consultation-content">
                            <h2 class="consultation-title">
                                Non sai quale <span class="highlight">utensile</span> scegliere?
                            </h2>

                            <p class="consultation-subtitle">
                                Ogni lavoro ha le sue esigenze. I nostri tecnici specializzati ti guidano
                                nella scelta perfetta, analizzando materiali, lavorazioni e budget.
                            </p>

                            <div class="expertise-points">
                                <div class="point">
                                    <div class="point-icon">
                                        <i class="fas fa-microscope"></i>
                                    </div>
                                    <div class="point-content">
                                        <h4>Analisi Tecnica</h4>
                                        <p>Valutiamo insieme le specifiche del tuo progetto</p>
                                    </div>
                                </div>

                                <div class="point">
                                    <div class="point-icon">
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="point-content">
                                        <h4>Ottimizzazione Costi</h4>
                                        <p>Massimo rendimento con il budget disponibile</p>
                                    </div>
                                </div>

                                <div class="point">
                                    <div class="point-icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="point-content">
                                        <h4>Supporto Rapido</h4>
                                        <p>Risposta entro 2 ore lavorative</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Lato Destro - Form di Contatto -->
                        <div class="consultation-form-section">
                            <div class="form-card">
                                <div class="form-header">
                                    <h3>Richiedi Consulenza Gratuita</h3>
                                    <p>Compila il form e ti ricontatteremo subito</p>
                                </div>

                                <form @submit.prevent="submitConsultationForm" class="consultation-form">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="nome">Nome</label>
                                            <input type="text" id="nome" v-model="consultationForm.nome"
                                                placeholder="Il tuo nome" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="azienda">Azienda</label>
                                            <input type="text" id="azienda" v-model="consultationForm.azienda"
                                                placeholder="Nome azienda">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" v-model="consultationForm.email"
                                                placeholder="email@esempio.com" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="telefono">Telefono</label>
                                            <input type="tel" id="telefono" v-model="consultationForm.telefono"
                                                placeholder="+39 123 456 789">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="lavorazione">Tipo di Lavorazione</label>
                                        <select id="lavorazione" v-model="consultationForm.lavorazione" required>
                                            <option value="">Seleziona il tipo di lavorazione</option>
                                            <option value="tornitura">Tornitura</option>
                                            <option value="fresatura">Fresatura</option>
                                            <option value="foratura">Foratura</option>
                                            <option value="alesatura">Alesatura</option>
                                            <option value="filettatura">Filettatura</option>
                                            <option value="altro">Altro</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="materiale">Materiale da Lavorare</label>
                                        <input type="text" id="materiale" v-model="consultationForm.materiale"
                                            placeholder="Es: Acciaio, Alluminio, Titanio...">
                                    </div>

                                    <div class="form-group">
                                        <label for="messaggio">Descrivi la tua esigenza</label>
                                        <textarea id="messaggio" v-model="consultationForm.messaggio"
                                            placeholder="Raccontaci di cosa hai bisogno..." rows="3"></textarea>
                                    </div>

                                    <button type="submit" class="form-submit-btn" :disabled="isSubmitting">
                                        <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
                                        <i class="fas fa-spinner fa-spin" v-else></i>
                                        <span>{{ isSubmitting ? 'Invio in corso...' : 'Invia Richiesta' }}</span>
                                    </button>
                                </form>

                                <div class="form-footer">
                                    <div class="contact-alternatives">
                                        <span>Oppure contattaci direttamente:</span>
                                        <div class="quick-contacts">
                                            <a href="tel:+39030-2126362" class="quick-contact">
                                                <i class="fas fa-phone"></i>
                                                030 212 6362
                                            </a>
                                            <a href="mailto:info@utep.it" class="quick-contact">
                                                <i class="fas fa-envelope"></i>
                                                info@utep.it
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sezione Statistiche/Fiducia -->
            <div class="trust-indicators">
                <div class="container">
                    <div class="indicators-grid">
                        <div class="indicator">
                            <div class="indicator-number">25+</div>
                            <div class="indicator-label">Anni di Esperienza</div>
                        </div>
                        <div class="indicator">
                            <div class="indicator-number">1000+</div>
                            <div class="indicator-label">Clienti Soddisfatti</div>
                        </div>
                        <div class="indicator">
                            <div class="indicator-number">50+</div>
                            <div class="indicator-label">Aziende Partner</div>
                        </div>
                        <div class="indicator">
                            <div class="indicator-number">24h</div>
                            <div class="indicator-label">Tempo di Risposta</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import AppCarousel from '@/components/AppCarousel.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    name: 'HomePage',
    components: {
        AppCarousel
    },
    data() {
        return {
            partners: [
                {
                    id: 1,
                    name: 'ISCAR',
                    logo: '/img/brands/iscar.svg',
                    url: 'https://webshop.iscaritalia.it/signin'
                },
                {
                    id: 2,
                    name: 'YG1',
                    logo: '/img/brands/yg1.png',
                    url: 'https://www.yg1.it/'
                },
                {
                    id: 3,
                    name: 'Precicut',
                    logo: '/img/brands/PRECICUT.png',
                    url: 'https://www.sandvik.coromant.com/'
                },
                {
                    id: 4,
                    name: 'Mitsubishi Materials',
                    logo: '/img/brands/mitsubishi.png',
                    url: 'https://www.mitsubishicarbide.com/'
                },
                {
                    id: 6,
                    name: 'Gaetano Caporali',
                    logo: '/img/brands/caporali.avif',
                    url: 'https://www.mitsubishicarbide.com/'
                },
                {
                    id: 7,
                    name: 'Vogel',
                    logo: '/img/brands/vogel.jpg',
                    url: 'https://www.vogel.com/'
                },
                {
                    id: 8,
                    name: 'Fami',
                    logo: '/img/brands/fami.svg',
                    url: 'https://www.fami.com/'
                },
                {
                    id: 9,
                    name: 'Gerardi',
                    logo: '/img/brands/gerardi.jpg',
                    url: 'https://www.gerardi.it/'
                }
            ],
            companyValues: [
                {
                    icon: "fas fa-search",
                    title: "Consulenza Specializzata",
                    description: "Ti aiutiamo a scegliere gli utensili giusti per ogni lavoro"
                },
                {
                    icon: "fas fa-certificate",
                    title: "Qualità Garantita",
                    description: "Solo prodotti testati e certificati secondo gli standard più rigorosi"
                },
                {
                    icon: "fas fa-users",
                    title: "Supporto Continuo",
                    description: "Assistenza pre e post vendita tramite i nostri partner"
                }
            ],
            // NUOVI DATI PER IL FORM DI CONSULENZA
            consultationForm: {
                nome: '',
                azienda: '',
                email: '',
                telefono: '',
                lavorazione: '',
                materiale: '',
                messaggio: ''
            },
            isSubmitting: false
        }
    },
    computed: {
        partnersWithDescriptions() {
            const descriptions = {
                'ISCAR': 'Leader mondiale nella produzione di utensili da taglio in metallo duro, offre soluzioni innovative per l\'industria manifatturiera.',
                'YG1': 'Eccellenza coreana negli utensili da taglio, specializzata in punte elicoidali e frese di alta precisione.',
                'Precicut': 'Specialista in utensili da taglio di precisione, offre soluzioni tecnologicamente avanzate per applicazioni industriali.',
                'Mitsubishi Materials': 'Multinazionale giapponese leader nella produzione di utensili e materiali avanzati per l\'industria.',
                'Gaetano Caporali': 'Azienda italiana con lunga tradizione nella distribuzione di utensili professionali e attrezzature industriali.',
                'Vogel': 'Specialista tedesco in sistemi di lubrificazione e raffreddamento per macchine utensili industriali.',
                'Fami': 'Produttore italiano di morsi, dispositivi di fissaggio e accessori per macchine utensili di alta qualità.',
                'Gerardi': 'Azienda italiana leader nella produzione di morsi e attrezzature per macchine utensili di precisione.'
            };

            return this.partners.map(partner => ({
                ...partner,
                description: descriptions[partner.name] || 'Partner autorizzato specializzato in utensili professionali di alta qualità.'
            }));
        }
    },
    methods: {
        trackPartnerClick(partnerName) {
            console.log(`Click su partner: ${partnerName}`);
            if (window.gtag) {
                window.gtag('event', 'partner_click', {
                    partner_name: partnerName,
                    page_title: 'Homepage'
                });
            }
        },
        scrollLeft() {
            const slider = this.$refs.partnersSlider;
            if (slider) {
                slider.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            }
        },
        scrollRight() {
            const slider = this.$refs.partnersSlider;
            if (slider) {
                slider.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            }
        },
        // NUOVI METODI PER IL FORM DI CONSULENZA
        async submitConsultationForm() {
            this.isSubmitting = true;

            try {
                // Simula invio form - sostituisci con la tua logica
                await new Promise(resolve => setTimeout(resolve, 2000));

                console.log('Form inviato:', this.consultationForm);

                // Reset form
                this.resetConsultationForm();

                // Mostra messaggio di successo (implementa con toast/modal)
                alert('Richiesta inviata con successo! Ti contatteremo presto.');

                // Traccia evento per analytics
                if (window.gtag) {
                    window.gtag('event', 'consultation_request_submitted', {
                        event_category: 'Lead Generation',
                        event_label: this.consultationForm.lavorazione || 'Non specificato'
                    });
                }

            } catch (error) {
                console.error('Errore invio form:', error);
                alert('Si è verificato un errore. Riprova o contattaci direttamente.');
            } finally {
                this.isSubmitting = false;
            }
        },

        resetConsultationForm() {
            this.consultationForm = {
                nome: '',
                azienda: '',
                email: '',
                telefono: '',
                lavorazione: '',
                materiale: '',
                messaggio: ''
            };
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
/* Hero Styles */
.hero {
    position: relative;
    padding: 8rem 0 6rem;
    background: linear-gradient(195deg, #8D8E8D 0%, #87615C 100%);
    color: white;
    overflow: hidden;
    height: 60vh;
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
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.10) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(131, 53, 53, 0.05) 1px, transparent 1px);
    background-size: 80px 80px;
}

.hero-content {
    position: relative;
    z-index: 2;
    margin: 0 auto;
}

.title-main {
    display: block;
    font-size: 4rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.title-sub {
    display: block;
    font-size: 3rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    font-family: var(--font-primary);
}

.hero-description {
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
}

.hero-description strong {
    color: var(--color-primary);
}

.buttons-container {
    display: flex;
    gap: 1.5rem;
}

.buttons-container .btn-primary {
    width: 240px;
}

.buttons-container .btn-secondary {
    width: 200px;
}

.hero-image {
    position: absolute;
    bottom: -140px;
    right: 0;
    width: 600px;
}

.app-carousel {
    margin: 20px 0;
}

/* Company Brief */
.company-brief {
    padding: 5rem 0;
}

.brief-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
}

.brief-text h2 {
    margin-bottom: 0.5rem;
}

strong {
    color: var(--color-primary);
}

.company-values {
    margin-top: 2rem;
}

.value-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
}

.value-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f34c0a, #ff6b35);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
    font-size: 1rem;
}

.value-item h5 {
    color: var(--color-primary);
}

.image-container {
    height: 100%;
    min-height: 400px;
}

.company-visual {
    height: 100%;
}

.company-image {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-xl);
    object-fit: cover;
}

/* Partners Section */
.partners-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%);
    position: relative;
}

.partners-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.03) 0%, transparent 50%);
}

.partners-header {
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
}

.partners-intro {
    font-size: 1.125rem;
    color: var(--gray-600);
    margin-top: 1rem;
}

/* Slider Container */
.partners-slider-container {
    position: relative;
}

.partners-slider {
    display: flex;
    gap: 1.5rem;
    padding: 20px 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE/Edge */
}

/* Nasconde scrollbar su Webkit (Chrome, Safari) */
.partners-slider::-webkit-scrollbar {
    display: none;
}

.partner-slide {
    flex: 0 0 calc(40% - 1rem);
    min-width: 300px;
    max-width: 400px;
}

/* Partner Card - Migliorata */
.partner-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid rgba(226, 232, 240, 0.6);
    height: 420px;
    display: flex;
    flex-direction: column;
    position: relative;
}

.partner-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
}

.partner-card:hover::before {
    opacity: 1;
}

/* Logo Section */
.card-logo-section {
    padding: 1rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(226, 232, 240, 0.3);
    position: relative;
    overflow: hidden;
}

.card-logo-section::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.partner-card:hover .card-logo-section::before {
    opacity: 1;
}

.partner-logo {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.partner-card:hover .partner-logo {
    transform: scale(1.1);
}

/* Content Section */
.card-content-section {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.partner-name {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--primary-navy);
    margin-bottom: 1rem;
    text-align: center;
}

.partner-description {
    font-size: 0.9rem;
    color: var(--gray-600);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: center;
    flex: 1;
    display: flex;
    align-items: center;
}

/* CTA Button - Migliorato */
.btn-partner-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--color-primary);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.btn-partner-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-partner-cta:hover::before {
    left: 100%;
}

.btn-partner-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(145deg, var(--color-secondary) 60%, var(--color-neutral-light));
}

.btn-partner-cta i {
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.btn-partner-cta:hover i {
    transform: translateX(4px);
}

.slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.slider-nav:hover {
    background: white;
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-50%) scale(1.05);
}

.slider-nav:active {
    transform: translateY(-50%) scale(0.95);
}

.slider-nav:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.5);
    border-color: rgba(0, 0, 0, 0.05);
}

.slider-nav:disabled:hover {
    transform: translateY(-50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.slider-nav.prev {
    left: 20px;
}

.slider-nav.next {
    right: 20px;
}

/* Frecce create con CSS - Design pulito */
.slider-nav::after {
    content: '';
    width: 8px;
    height: 8px;
    border-right: 2px solid #374151;
    border-bottom: 2px solid #374151;
    transition: border-color 0.2s ease;
}

.slider-nav.prev::after {
    transform: rotate(135deg);
    margin-left: 2px;
}

.slider-nav.next::after {
    transform: rotate(-45deg);
    margin-right: 2px;
}

.slider-nav:hover::after {
    border-color: #1f2937;
}

.slider-nav:disabled::after {
    border-color: #9ca3af;
}

/* Nascondi le vecchie implementazioni */
.slider-nav::before {
    display: none;
}

.slider-nav i {
    display: none;
}

/* Consultation Redesign Styles */
.consultation-redesign {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    position: relative;
    overflow: hidden;
}

.consultation-hero {
    position: relative;
    padding: 6rem 0 4rem;
}

.hero-backdrop {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.9));
    z-index: 0;
}

.hero-pattern {
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.05) 0%, transparent 50%);
    z-index: 1;
}

.consultation-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

/* Contenuto Principale */
.consultation-content {
    color: #1f2937;
}

.highlight {
    background: linear-gradient(135deg, #f34c0a, #ff6b35);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.consultation-subtitle {
    font-size: 1.25rem;
    line-height: 1.7;
    color: #6b7280;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

.expertise-points {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.point {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.point-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f34c0a, #ff6b35);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.point-content h4 {
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.point-content p {
    color: #6b7280;
    line-height: 1.6;
}

/* Form Section */
.consultation-form-section {
    position: relative;
}

.form-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-header {
    text-align: center;
    margin-bottom: 2rem;
}

.form-header h3 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.form-header p {
    color: #6b7280;
    font-size: 1rem;
}

/* Form Styles */
.consultation-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.875rem 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #f34c0a;
    box-shadow: 0 0 0 3px rgba(243, 76, 10, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #f34c0a, #ff6b35);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
}

.form-submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(243, 76, 10, 0.4);
}

.form-submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.form-footer {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
}

.contact-alternatives span {
    display: block;
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.quick-contacts {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.quick-contact {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #f3f4f6;
    border-radius: 8px;
    text-decoration: none;
    color: #374151;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.quick-contact:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
}

/* Trust Indicators */
.trust-indicators {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(226, 232, 240, 0.8);
    padding: 3rem 0;
}

.indicators-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.indicator {
    text-align: center;
    color: #1f2937;
}

.indicator-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #f34c0a;
    margin-bottom: 0.5rem;
}

.indicator-label {
    font-size: 1rem;
    color: #6b7280;
    font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .brief-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .partner-card {
        height: 400px;
    }

    .card-logo-section {
        height: 180px;
        padding: 2rem;
    }

    .hero-image {
        width: 500px;
    }

    /* Frecce ridimensionate su tablet */
    .slider-nav {
        width: 60px;
        height: 60px;
    }

    .slider-nav.prev {
        left: -30px;
    }

    .slider-nav.next {
        right: -30px;
    }

    .consultation-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .form-card {
        padding: 2rem;
    }

    .indicators-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .hero {
        padding: 2.5rem 0;
    }

    .title-main {
        font-size: 3rem;
    }

    .title-sub {
        font-size: 1.25rem;
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }

    .buttons-container .btn-primary {
        width: 50%;
    }

    .buttons-container .btn-secondary {
        width: 40%;
    }

    .hero-image {
        width: 400px;
        bottom: -100px;
        right: -100px;
    }

    .partner-card {
        height: 380px;
        max-width: 350px;
        margin: 0 auto;
    }

    .card-logo-section {
        height: 160px;
        padding: 1.5rem;
    }

    .card-content-section {
        padding: 1.5rem;
    }

    .partner-name {
        font-size: 1.1rem;
    }

    .partner-description {
        font-size: 1rem;
    }

    /* Nascondi frecce su mobile - solo touch */
    .slider-nav {
        display: none !important;
    }

    .partners-stats {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .guarantee-content {
        flex-direction: column;
    }

    .consultation-hero {
        padding: 4rem 0 2rem;
    }

    .consultation-subtitle {
        font-size: 1.125rem;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .quick-contacts {
        flex-direction: column;
        align-items: center;
    }

    .indicators-grid {
        gap: 1.5rem;
    }

    .indicator-number {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .partners-section {
        padding: 4rem 0;
    }

    .hero {
        height: auto;
        padding: 6vh 0;
    }

    .hero-image {
        width: 250px;
        bottom: -60px;
        right: -60px;
    }

    .title-sub {
        font-size: 1.7rem;
    }

    .title-main {
        font-size: 2.5rem;
    }

    .hero-description {
        margin-bottom: 1rem;
    }

    .company-brief {
        padding: 2rem 0;
    }

    .partner-card {
        height: 400px;
        max-width: 350px;
    }

    .card-logo-section {
        height: 150px;
        padding: 1.25rem;
    }

    .card-content-section {
        padding: 1.25rem;
    }

    .form-card {
        padding: 1.5rem;
        margin: 0 1rem;
    }

    .expertise-points {
        gap: 1.5rem;
    }

    .point {
        gap: 1rem;
    }
}

/* Touch device detection */
@media (hover: none) and (pointer: coarse) {
    .slider-nav {
        display: none !important;
    }

    .partners-slider {
        scroll-behavior: smooth;
    }
}

/* Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.partner-card {
    animation: slideIn 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.form-card {
    animation: fadeInUp 0.8s ease-out;
}

.point {
    animation: fadeInUp 0.6s ease-out;
}

.point:nth-child(2) {
    animation-delay: 0.2s;
}

.point:nth-child(3) {
    animation-delay: 0.4s;
}

/* Accessibility */
.btn-partner-cta:focus,
.slider-nav:focus {
    outline-offset: 2px;
}

.partner-card:focus-within {
    box-shadow: 0 25px 50px rgba(59, 130, 246, 0.3);
    border-color: var(--accent-blue);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {

    .partners-slider,
    .partner-card,
    .partner-logo,
    .btn-partner-cta,
    .slider-nav {
        transition: none;
    }

    .partner-card:hover,
    .partner-logo:hover,
    .btn-partner-cta:hover,
    .slider-nav:hover {
        transform: none;
    }
}

/* Dark mode considerations */
@media (prefers-color-scheme: dark) {
    .form-card {
        background: rgba(31, 41, 55, 0.95);
        color: white;
    }

    .form-header h3 {
        color: white;
    }

    .form-group label {
        color: #d1d5db;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        background: rgba(55, 65, 81, 0.8);
        border-color: #4b5563;
        color: white;
    }

    .quick-contact {
        background: rgba(55, 65, 81, 0.8);
        color: #d1d5db;
    }
}
</style>