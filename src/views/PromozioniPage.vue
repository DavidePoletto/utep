<template>
    <div class="container">
        <h1 class="page-title">Promozioni</h1>
        <p class="page-subtitle">
            Scopri le nostre offerte speciali su utensili meccanici e macchinari industriali. 
            Promozioni limitate nel tempo per professionisti del settore.
        </p>

        <section class="promotions-section">
            <div class="promotions-grid">
                <div 
                    v-for="promo in promozioni" 
                    :key="promo.id"
                    class="promo-card"
                    :style="{ backgroundImage: `url(${promo.immagine})` }"
                    @click="handlePromoClick(promo)"
                >
                    <div class="promo-overlay">
                        <div class="promo-content">
                            <h3>{{ promo.titolo }}</h3>
                            <p>{{ promo.descrizione }}</p>
                            <div class="promo-info">
                                <div class="validity">{{ promo.validita }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Messaggio se non ci sono promozioni -->
            <div v-if="promozioni.length === 0" class="no-promotions">
                <p>Nessuna promozione attiva al momento. Torna presto per nuove offerte!</p>
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
            promozioni: [],
            categorie: promozioniData.categorie
        }
    },
    
    methods: {
        handlePromoClick(promo) {
    console.log('Opening Vogel catalog:', promo.catalogoPdf)
    // Apre direttamente il catalogo Vogel 2025 in una nuova tab
    window.open('https://download.vogel.it/nav/Promo2025.pdf', '_blank')
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
        
        if (this.promozioni.length === 0) {
            console.warn('Nessuna promozione valida trovata!')
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


/* Sezione promozioni */
.promotions-section {
    padding: 40px 0;
    max-width: 1400px;
    margin: 0 auto;
}

.promotions-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0 20px;
}

.promo-card {
    height: 400px;
    width: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.promo-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}

.promo-card:hover .promo-overlay {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
}

.promo-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    display: flex;
    align-items: flex-end;
    transition: background 0.3s ease;
}

.promo-content {
    padding: 30px;
    color: white;
    width: 100%;
}

.promo-content h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.2;
}

.promo-content p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    opacity: 0.95;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.promo-info {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.discount {
    background: var(--color-primary);
    color: white;
    padding: 8px 16px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1.1rem;
    white-space: nowrap;
}

.validity {
    font-size: 0.9rem;
    opacity: 0.9;
    font-weight: 500;
}

/* Messaggio quando non ci sono promozioni */
.no-promotions {
    text-align: center;
    padding: 60px 20px;
    color: #666;
    font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 1200px) {
    .promotions-grid {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
    }
    
    .promo-card {
        max-width: 280px;
        height: 450px;
    }
    
    .validity-badge {
        top: 12px;
        right: 12px;
        padding: 7px 11px;
        font-size: 0.8rem;
    }
}

@media (max-width: 768px) {
    .promotions-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 18px;
        padding: 0 15px;
    }
    
    .promo-card {
        max-width: 250px;
        height: 400px;
        border-radius: 12px;
    }
    
    .promo-content {
        padding: 25px;
    }
    
    .promo-content h3 {
        font-size: 1.6rem;
    }
    
    .promo-content p {
        font-size: 0.95rem;
        margin-bottom: 18px;
    }
    
    .discount {
        padding: 6px 14px;
        font-size: 1rem;
    }
    
    .validity {
        font-size: 0.85rem;
    }
}

@media (max-width: 480px) {
    .promotions-section {
        padding: 30px 0;
    }
    
    .promotions-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 20px;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .promo-card {
        width: 100%;
        max-width: none;
        height: 420px;
        border-radius: 12px;
    }
    
    .promo-content {
        padding: 25px;
    }
    
    .promo-content h3 {
        font-size: 1.5rem;
        margin-bottom: 12px;
    }
    
    .promo-content p {
        font-size: 0.95rem;
        margin-bottom: 18px;
        -webkit-line-clamp: 3;
    }
    
    .promo-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    
    .discount {
        padding: 8px 16px;
        font-size: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .validity {
        font-size: 0.85rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
        color: white;
    }
    
    .line-title {
        width: 100%;
        font-size: 1.8rem;
        margin-bottom: 32px;
    }
    
    .page-subtitle {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        padding: 0 20px;
    }
}

/* Animazione per il caricamento delle card */
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

.promo-card {
    animation: fadeInUp 0.6s ease forwards;
}

.promo-card:nth-child(2) {
    animation-delay: 0.1s;
}

.promo-card:nth-child(3) {
    animation-delay: 0.2s;
}

.promo-card:nth-child(4) {
    animation-delay: 0.3s;
}

.promo-card:nth-child(5) {
    animation-delay: 0.4s;
}

.promo-card:nth-child(6) {
    animation-delay: 0.5s;
}
</style>