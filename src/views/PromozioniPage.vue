<template>
    <div class="container">
        <h1 class="page-title">Promozioni</h1>
        <p class="page-subtitle">
            Scopri le nostre offerte speciali su utensili meccanici e macchinari industriali. 
            Promozioni limitate nel tempo per professionisti del settore.
        </p>

        <h2 class="line-title">Offerte in Corso</h2>

        <section class="promotions-section">
            <div class="carousel-container">
                <div class="carousel-track" :style="{ transform: `translateX(-${activePromo * 100}%)` }">
                    <div 
                        v-for="(promo, index) in promozioni" 
                        :key="promo.id"
                        class="promo-slide"
                        @click="setActivePromo(index)"
                    >
                        <div class="promo-card" :style="{ backgroundImage: `url(${promo.immagine})` }">
                            <div class="promo-overlay">
                                <div class="promo-content">
                                    <h3>{{ promo.titolo }}</h3>
                                    <p>{{ promo.descrizione }}</p>
                                    <div class="promo-info">
                                        <div class="discount">{{ promo.sconto }}</div>
                                        <div class="validity">{{ promo.validita }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Navigation arrows -->
                <button class="carousel-btn prev" @click="prevSlide" :disabled="activePromo === 0">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-btn next" @click="nextSlide" :disabled="activePromo === promozioni.length - 1">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <!-- Dots navigation -->
            <div class="carousel-dots">
                <button 
                    v-for="(promo, index) in promozioni"
                    :key="`dot-${index}`"
                    class="dot"
                    :class="{ active: activePromo === index }"
                    @click="setActivePromo(index)"
                ></button>
            </div>
        </section>
    </div>
</template>

<script>
// Importa i dati dal file JSON esterno
import promozioniData from '@/data/promozioni-data.json'

export default {
    name: 'PromozioniPage',
    data() {
        return {
            activePromo: 0,
            promozioni: [],
            categorie: promozioniData.categorie
        }
    },
    
    methods: {
        setActivePromo(index) {
            this.activePromo = index
            this.resetAutoRotate()
        },
        
        nextSlide() {
            if (this.activePromo < this.promozioni.length - 1) {
                this.activePromo++
                this.resetAutoRotate()
            }
        },
        
        prevSlide() {
            if (this.activePromo > 0) {
                this.activePromo--
                this.resetAutoRotate()
            }
        },
        
        autoNext() {
            this.activePromo = (this.activePromo + 1) % this.promozioni.length
        },
        
        resetAutoRotate() {
            if (this.autoRotateInterval) {
                clearInterval(this.autoRotateInterval)
            }
            setTimeout(() => {
                this.startAutoRotate()
            }, 6000)
        },
        
        startAutoRotate() {
            this.autoRotateInterval = setInterval(() => {
                this.autoNext()
            }, 4000)
        },
        
        isPromoValid(promo) {
            const now = new Date()
            const endDate = new Date(promo.dataFine)
            return now <= endDate
        }
    },
    
    mounted() {
        console.log('Pagina Promozioni caricata')
        console.log('Dati promozioni caricati dal JSON:', promozioniData.promozioni.length, 'promozioni totali')
        
        // Filtra solo le promozioni attive e valide
        this.promozioni = promozioniData.promozioni
            .filter(promo => promo.attiva)
            .filter(promo => this.isPromoValid(promo))
        
        console.log(`Promozioni attive e valide: ${this.promozioni.length}`)
        
        if (this.promozioni.length > 0) {
            this.startAutoRotate()
            console.log('Auto-rotate avviato')
        } else {
            console.warn('Nessuna promozione valida trovata!')
        }
    },
    
    beforeDestroy() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval)
        }
    }
}
</script>

<style scoped>
/* Import del font */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

/* Reset e base */
.container {
    font-family: "Roboto", sans-serif;
}

.page-subtitle {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #666;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Stile del titolo con linea */
.line-title {
    position: relative;
    width: 400px;
    margin: 0 auto 48px;
    padding-bottom: 16px;
    font-size: 2.2rem;
    line-height: 28px;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--color-text-dark);
    text-align: center;
}

.line-title::before,
.line-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    border-radius: 2px;
}

.line-title::before {
    width: 100px;
    background: #f2f2f2;
}

.line-title::after {
    width: 32px;
    background: var(--color-primary);
}

/* Sezione promozioni */
.promotions-section {
    padding: 40px 0;
    max-width: 1200px;
    margin: 0 auto;
}

.carousel-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.carousel-track {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
}

.promo-slide {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
}

.promo-card {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
}

.promo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    display: flex;
    align-items: flex-end;
}

.promo-content {
    padding: 40px;
    color: white;
    width: 100%;
    max-width: 600px;
}

.promo-content h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.2;
}

.promo-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 25px;
    opacity: 0.95;
}

.promo-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.discount {
    background: var(--color-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1.3rem;
}

.validity {
    font-size: 1rem;
    opacity: 0.9;
    font-weight: 500;
}

/* Navigation buttons */
.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--color-text-dark);
    transition: all 0.3s ease;
    z-index: 5;
}

.carousel-btn:hover:not(:disabled) {
    background: white;
    transform: translateY(-50%) scale(1.1);
}

.carousel-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.carousel-btn.prev {
    left: 20px;
}

.carousel-btn.next {
    right: 20px;
}

/* Dots navigation */
.carousel-dots {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 25px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
}

.dot:hover {
    background: #bbb;
    transform: scale(1.2);
}

.dot.active {
    background: var(--color-primary);
    transform: scale(1.3);
}

.dot:focus {
    outline: none;
}

/* Responsive */
@media (max-width: 768px) {
    .carousel-container {
        height: 400px;
        border-radius: 15px;
    }
    
    .promo-content {
        padding: 25px;
    }
    
    .promo-content h3 {
        font-size: 2rem;
    }
    
    .promo-content p {
        font-size: 1rem;
    }
    
    .discount {
        padding: 10px 20px;
        font-size: 1.1rem;
    }
    
    .carousel-btn {
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
    }
    
    .carousel-btn.prev {
        left: 15px;
    }
    
    .carousel-btn.next {
        right: 15px;
    }
}

@media (max-width: 480px) {
    .promotions-section {
        padding: 30px 15px;
    }
    
    .carousel-container {
        height: 350px;
        border-radius: 12px;
    }
    
    .promo-content {
        padding: 20px;
    }
    
    .promo-content h3 {
        font-size: 1.6rem;
    }
    
    .promo-content p {
        font-size: 0.95rem;
        margin-bottom: 20px;
    }
    
    .promo-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .discount {
        padding: 8px 16px;
        font-size: 1rem;
    }
    
    .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .carousel-btn.prev {
        left: 10px;
    }
    
    .carousel-btn.next {
        right: 10px;
    }
    
    .dot {
        width: 10px;
        height: 10px;
    }
    
    .carousel-dots {
        gap: 10px;
        margin-top: 20px;
    }
}
</style>