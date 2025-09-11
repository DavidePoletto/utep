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
                        <router-link class="btn btn-primary" to="/promozioni">Promozioni</router-link>
                        <router-link class="btn btn-secondary" to="/cataloghi">Cataloghi</router-link>
                    </div>
                </div>
            </div>
            <img src="/img/hero.webp" alt="utensili" class="hero-image">
        </section>

        <!-- Carousel -->
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
                        <div class="company-visual" 
                             @mouseenter="pauseCarousel" 
                             @mouseleave="resumeCarousel">
                            <div class="carousel-wrapper">
                                <img 
                                    v-for="(image, index) in carouselImages" 
                                    :key="index"
                                    :src="image" 
                                    :class="['carousel-image', { active: index === currentImageIndex }]"
                                    alt="Lavorazioni UTEP" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="brief-text">
                        <h2>50 Anni di <strong>Esperienza</strong></h2>
                        <p class="lead-text">
                            UTEP è il tuo fornitore di fiducia dei migliori utensili da taglio presenti sul mercato.
                        </p>
                        <p>
                            Grazie alla nostra collaborazione con i leader mondiali del settore, ti garantiamo accesso
                            diretto ai migliori utensili da taglio disponibili sul mercato, con il supporto tecnico
                            della nostra esperienza cinquantennale.
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

        <!-- Cataloghi CTA -->
        <section class="catalogs-cta-section">
            <div class="container">
                <div class="catalogs-hero">
                    <div class="catalogs-content">
                        <div class="catalogs-header">
                            <h2>Esplora i Nostri <strong>Cataloghi</strong></h2>
                            <p class="catalogs-subtitle">
                                Accedi a migliaia di utensili professionali dei migliori brand mondiali. 
                                Trova subito quello che ti serve con i nostri cataloghi digitali sempre aggiornati.
                            </p>
                        </div>

                        <div class="brands-preview">
                            <div class="brands-grid">
                                <div v-for="brand in featuredBrands" :key="brand.id" class="brand-preview">
                                    <img :src="brand.logo" :alt="brand.name" class="brand-logo">
                                </div>
                            </div>
                            <div class="brands-more">
                                <span>e molti altri in arrivo</span>
                            </div>
                        </div>

                        <div class="catalogs-cta">
                            <router-link to="/cataloghi" class="btn-catalog-main">
                                <span>Sfoglia Tutti i Cataloghi</span>
                                <i class="fas fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>

                    <div class="catalogs-visual">
                        <div class="catalog-mockup">
                            <div class="mockup-screen">
                                <div class="mockup-header">
                                    <div class="mockup-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                                <div class="mockup-content">
                                    <div class="mockup-brands">
                                        <div v-for="brand in featuredBrands.slice(0, 6)" :key="brand.id" class="mockup-brand">
                                            <img :src="brand.logo" :alt="brand.name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Consultation -->
        <section class="consultation-redesign">
            <div class="consultation-hero">
                <div class="hero-backdrop"></div>
                <div class="hero-pattern"></div>

                <div class="container">
                    <div class="consultation-grid">
                        <!-- Contenuto -->
                        <div class="consultation-content">
                            <h2 class="consultation-title">
                                Non sai quale <span class="highlight">utensile</span> scegliere?
                            </h2>

                            <p class="consultation-subtitle">
                                Ogni lavoro ha le sue esigenze. I nostri tecnici specializzati ti guidano
                                nella scelta perfetta, analizzando materiali, lavorazioni e budget.
                            </p>

                            <div class="expertise-points">
                                <div class="point" v-for="p in points" :key="p.title">
                                    <div class="point-icon"><i :class="p.icon"></i></div>
                                    <div class="point-content">
                                        <h4>{{ p.title }}</h4>
                                        <p>{{ p.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                        <div class="consultation-form-section">
                            <div class="form-card">
                                <div class="form-header">
                                    <h3>Richiedi Consulenza Gratuita</h3>
                                    <p>Compila il form e ti ricontatteremo subito</p>
                                </div>

                                <form name="consulenza" 
                                      data-netlify="true"
                                      netlify-honeypot="bot-field"
                                      method="POST"
                                      @submit="handleSubmit"
                                      class="consultation-form">

                                    <input type="hidden" name="form-name" value="consulenza" />

                                    <p style="display:none;">
                                        <label>Non compilare se sei umano: 
                                            <input name="bot-field" />
                                        </label>
                                    </p>

                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="nome">Nome</label>
                                            <input id="nome" name="nome" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="azienda">Azienda</label>
                                            <input id="azienda" name="azienda">
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" name="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="telefono">Telefono</label>
                                            <input type="tel" id="telefono" name="telefono">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="lavorazione">Tipo di Lavorazione</label>
                                        <select id="lavorazione" name="lavorazione" required>
                                            <option value="">Seleziona</option>
                                            <option value="tornitura">Tornitura</option>
                                            <option value="fresatura">Fresatura</option>
                                            <option value="foratura">Foratura</option>
                                            <option value="alesatura">Alesatura</option>
                                            <option value="filettatura">Filettatura</option>
                                            <option value="altro">Altro</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="materiale">Materiale</label>
                                        <input id="materiale" name="materiale">
                                    </div>

                                    <div class="form-group">
                                        <label for="messaggio">Messaggio</label>
                                        <textarea id="messaggio" name="messaggio" rows="3"></textarea>
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
                                            <a href="tel:+390302126362" class="quick-contact">
                                                <i class="fas fa-phone"></i> 030 212 6362
                                            </a>
                                            <a href="mailto:commerciale@uteputensili.com" class="quick-contact">
                                                <i class="fas fa-envelope"></i> commerciale@uteputensili.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Statistiche -->
            <div class="trust-indicators">
                <div class="container">
                    <div class="indicators-grid">
                        <div class="indicator" v-for="i in stats" :key="i.label">
                            <div class="indicator-number">{{ i.num }}</div>
                            <div class="indicator-label">{{ i.label }}</div>
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
    components: { AppCarousel },
    data() {
        return {
            carouselImages: [
                '/img/tornitura.webp',
                '/img/tornitura1.webp',
                '/img/tornitura2.webp',
                '/img/tornitura3.webp',
                '/img/tornitura4.webp'
            ],
            currentImageIndex: 0,
            carouselInterval: null,
            isCarouselPaused: false,
            isSubmitting: false,
            featuredBrands: [
                { id: 1, name: 'ISCAR', logo: '/img/brands/iscar.webp' },
                { id: 2, name: 'YG1', logo: '/img/brands/yg1.webp' },
                { id: 3, name: 'Precicut', logo: '/img/brands/PRECICUT.webp' },
                { id: 4, name: 'Mitsubishi', logo: '/img/brands/mitsubishi.webp' },
                { id: 5, name: 'Caporali', logo: '/img/brands/caporali.webp' },
                { id: 6, name: 'Vogel', logo: '/img/brands/vogel.webp' }
            ],
            companyValues: [
                { icon:"fas fa-search", title:"Consulenza Specializzata", description:"Ti aiutiamo a scegliere gli utensili giusti" },
                { icon:"fas fa-certificate", title:"Qualità Garantita", description:"Solo prodotti testati e certificati" },
                { icon:"fas fa-users", title:"Supporto Continuo", description:"Assistenza pre e post vendita" }
            ],
            points: [
                { icon:"fas fa-microscope", title:"Analisi Tecnica", text:"Valutiamo le specifiche del tuo progetto" },
                { icon:"fas fa-chart-line", title:"Ottimizzazione Costi", text:"Massimo rendimento col budget" },
                { icon:"fas fa-clock", title:"Supporto Rapido", text:"Risposta entro 2 ore lavorative" }
            ],
            stats: [
                { num: "50+", label: "Anni di Esperienza" },
                { num: "1000+", label: "Clienti Soddisfatti" },
                { num: "20+", label: "Aziende Partner" },
                { num: "2h", label: "Tempo di Risposta" }
            ]
        }
    },
    methods: {
        startCarousel() {
            if (this.carouselInterval) {
                clearInterval(this.carouselInterval);
            }
            
            this.carouselInterval = setInterval(() => {
                if (!this.isCarouselPaused) {
                    this.nextImage();
                }
            }, 3000); // 3 secondi tra i cambi
        },

        stopCarousel() {
            if (this.carouselInterval) {
                clearInterval(this.carouselInterval);
                this.carouselInterval = null;
            }
        },

        nextImage() {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
        },

        pauseCarousel() { 
            this.isCarouselPaused = true;
        },

        resumeCarousel() { 
            this.isCarouselPaused = false;
        },

        async handleSubmit(e) {
            e.preventDefault()
            this.isSubmitting = true
            try {
                await fetch('/', { method:'POST', body:new FormData(e.target) })
                alert('Richiesta inviata con successo!')
                e.target.reset()
            } catch (err) {
                alert('Errore durante l\'invio. Riprova più tardi.')
            } finally {
                this.isSubmitting = false
            }
        }
    },
    mounted() { 
        this.startCarousel() 
    },
    beforeUnmount() { 
        this.stopCarousel() 
    }
}
</script>

<style scoped>
/* Carosello migliorato */
.carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-xl, 16px);
    overflow: hidden;
}

/* Hover effect per migliorare l'interattività */
.company-visual:hover .carousel-image.active {
    transform: scale(1.02);
    transition: opacity 1s ease-in-out, transform 0.3s ease;
}

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
    bottom: 20px;
    right: 120px;
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
    color: var(--color-primary, #f34c0a);
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
    color: var(--color-primary, #f34c0a);
}

.image-container {
    height: 100%;
    min-height: 400px;
}

.company-visual {
    height: 100%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: var(--border-radius-xl, 16px);
}

/* Catalogs CTA Section */
.catalogs-cta-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #fafbfc 0%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
}

.catalogs-cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.03) 0%, transparent 50%);
}

.catalogs-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

.catalogs-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.catalogs-header h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.catalogs-subtitle {
    font-size: 1.25rem;
    line-height: 1.7;
    color: #6b7280;
}

/* Brands Preview */
.brands-preview {
    text-align: center;
}

.brands-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 1rem;
}

.brand-preview {
    background: white;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid rgba(226, 232, 240, 0.6);
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brand-preview:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: rgba(243, 76, 10, 0.3);
}

.brand-logo {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    transition: transform 0.3s ease;
}

.brand-preview:hover .brand-logo {
    transform: scale(1.1);
}

.brands-more {
    margin-top: 1rem;
}

.brands-more span {
    font-size: 1rem;
    color: #9ca3af;
    font-style: italic;
}

/* Main CTA */
.catalogs-cta {
    text-align: center;
}

.btn-catalog-main {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #f34c0a, #ff6b35);
    color: white;
    text-decoration: none;
    padding: 1.25rem 2.5rem;
    border-radius: 16px;
    font-size: 1.125rem;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(243, 76, 10, 0.3);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
}

.btn-catalog-main::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-catalog-main:hover::before {
    left: 100%;
}

.btn-catalog-main:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 20px 40px rgba(243, 76, 10, 0.4);
}

.btn-catalog-main i {
    transition: transform 0.3s ease;
    font-size: 1rem;
}

.btn-catalog-main:hover i {
    transform: translateX(5px);
}

/* Visual Element - Mockup */
.catalogs-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.catalog-mockup {
    position: relative;
    width: 400px;
    height: 500px;
}

.mockup-screen {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border: 8px solid #374151;
    overflow: hidden;
    position: relative;
}

.mockup-header {
    background: #f3f4f6;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e7eb;
}

.mockup-dots {
    display: flex;
    gap: 0.5rem;
}

.mockup-dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.mockup-dots span:nth-child(1) {
    background: #ef4444;
}

.mockup-dots span:nth-child(2) {
    background: #f59e0b;
}

.mockup-dots span:nth-child(3) {
    background: #10b981;
}

.mockup-content {
    padding: 2rem;
    height: calc(100% - 70px);
    overflow: hidden;
}

.mockup-brands {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    animation: float 6s ease-in-out infinite;
}

.mockup-brand {
    background: #f9fafb;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    transition: transform 0.3s ease;
}

.mockup-brand:hover {
    transform: scale(1.05);
}

.mockup-brand img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
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

.consultation-title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
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

/* Animations */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.catalogs-content {
    animation: slideInLeft 0.8s ease-out;
}

.catalogs-visual {
    animation: slideInRight 0.8s ease-out;
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

/* Responsive Design */
@media (max-width: 1024px) {
    .brief-content {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .hero-image {
        width: 500px;
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

    .catalogs-hero {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
    }
    
    .catalog-mockup {
        width: 300px;
        height: 375px;
    }
    
    .brands-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
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
        width: 500px;
        bottom: -20px;
        right: -100px;
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

    .catalogs-cta-section {
        padding: 4rem 0;
    }
    
    .catalogs-header h2 {
        font-size: 2.5rem;
    }
    
    .catalogs-subtitle {
        font-size: 1.125rem;
    }
    
    .brands-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
    }
    
    .btn-catalog-main {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
    
    .catalog-mockup {
        width: 250px;
        height: 300px;
    }
    
    .mockup-content {
        padding: 1rem;
    }
    
    .mockup-brands {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .company-brief {
        padding: 2rem 0;
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

    .catalogs-content {
        gap: 2rem;
    }
    
    .catalogs-header h2 {
        font-size: 2rem;
    }
    
    .brands-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .btn-catalog-main {
        padding: 1rem 1.5rem;
        width: 100%;
        max-width: 300px;
    }
}

/* Miglioramenti per accessibilità e performance */
@media (prefers-reduced-motion: reduce) {
    .carousel-image,
    .brand-preview,
    .brand-logo,
    .btn-catalog-main,
    .mockup-brands {
        transition: none;
        animation: none;
    }

    .brand-preview:hover,
    .brand-logo:hover,
    .btn-catalog-main:hover,
    .company-visual:hover .carousel-image.active {
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