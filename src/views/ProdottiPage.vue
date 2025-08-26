<template>
    <div class="container">
        <h1 class="page-title">I Nostri Prodotti</h1>
        <p class="page-subtitle">
            Scopri la nostra ampia gamma di utensili professionali, selezionati per garantire qualità e durata nel
            tempo.
        </p>

        <!-- Search and Filter -->
        <div class="search-section">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input v-model="searchQuery" type="text" placeholder="Cerca prodotti o categorie..."
                    class="search-input">
                <button v-if="searchQuery" @click="clearSearch" class="clear-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <!-- Products Grid -->
        <div class="products-grid">
            <div v-for="categoria in filteredCategories" :key="categoria.id" class="product-card"
                :style="{ '--category-color': categoria.colore }">
                <div class="product-image">
                    <i :class="categoria.icon" :style="{ color: categoria.colore }"></i>
                </div>
                <div class="product-info">
                    <h3>{{ categoria.nome }}</h3>
                    <p>{{ categoria.descrizione }}</p>
                    <div class="product-list">
                        <h4>Prodotti disponibili:</h4>
                        <ul>
                            <li v-for="prodotto in categoria.prodotti" :key="prodotto">
                                {{ prodotto }}
                            </li>
                        </ul>
                    </div>
                    <div class="product-actions">
                        <span class="product-count">{{ categoria.prodotti.length }} prodotti</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredCategories.length === 0" class="no-results">
            <i class="fas fa-search"></i>
            <h3>Nessun prodotto trovato</h3>
            <p>Prova a modificare i termini di ricerca</p>
            <button @click="clearSearch" class="btn btn-primary">Cancella ricerca</button>
        </div>

        <!-- Order Section -->
        <div class="order-cta">
            <h3>Pronto per ordinare?</h3>
            <p>
                Visita i nostri partner autorizzati per vedere prezzi, disponibilità e per effettuare i tuoi ordini.
            </p>
            <div class="cta-buttons">
                <a v-for="partner in partners" :key="partner.name" :href="partner.url" target="_blank" class="btn"
                    :class="partner.class" @click="trackOrderClick(partner.name)">
                    <i class="fas fa-shopping-cart"></i>
                    Ordina da {{ partner.shortName }}
                    <small>{{ partner.specializzazione }}</small>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProdottiPage',
    data() {
        return {
            searchQuery: '',
            categorie: [
                {
                    id: 'utensili-mano',
                    nome: "Utensili a Mano",
                    icon: "fas fa-hammer",
                    descrizione: "Martelli, cacciaviti, pinze, chiavi e molto altro per il lavoro manuale di precisione.",
                    prodotti: ["Martelli", "Cacciaviti", "Pinze", "Chiavi inglesi", "Lime", "Scalpelli"],
                    colore: "#e74c3c"
                },
                {
                    id: 'utensili-elettrici',
                    nome: "Utensili Elettrici",
                    icon: "fas fa-plug",
                    descrizione: "Trapani, smerigliatrici, seghe e utensili elettrici per lavori professionali.",
                    prodotti: ["Trapani", "Smerigliatrici", "Seghe circolari", "Avvitatori", "Fresatrici", "Pialle"],
                    colore: "#3498db"
                },
                {
                    id: 'strumenti-misura',
                    nome: "Strumenti di Misura",
                    icon: "fas fa-ruler",
                    descrizione: "Metri, livelle, calibri e strumenti di precisione per misurazioni accurate.",
                    prodotti: ["Metri", "Livelle", "Calibri", "Squadre", "Goniometri", "Micrometri"],
                    colore: "#2ecc71"
                },
                {
                    id: 'sicurezza',
                    nome: "Attrezzature di Sicurezza",
                    icon: "fas fa-hard-hat",
                    descrizione: "Dispositivi di protezione individuale e attrezzature per la sicurezza sul lavoro.",
                    prodotti: ["Caschi", "Guanti", "Occhiali", "Scarpe antinfortunistiche", "Mascherine", "Imbracature"],
                    colore: "#f39c12"
                },
                {
                    id: 'utensili-taglio',
                    nome: "Utensili da Taglio",
                    icon: "fas fa-cut",
                    descrizione: "Lame, seghe, cutter e utensili specializzati per ogni tipo di taglio.",
                    prodotti: ["Lame", "Seghe", "Cutter", "Forbici industriali", "Tronchesi", "Cesoje"],
                    colore: "#9b59b6"
                },
                {
                    id: 'ferramenta',
                    nome: "Ferramenta",
                    icon: "fas fa-screwdriver",
                    descrizione: "Viti, bulloni, rondelle e tutti gli elementi di fissaggio necessari.",
                    prodotti: ["Viti", "Bulloni", "Rondelle", "Tasselli", "Chiodi", "Rivetti"],
                    colore: "#95a5a6"
                }
            ],
            partners: [
                {
                    name: "Partner 1",
                    shortName: "Partner 1",
                    url: "https://esempio-partner1.com",
                    class: "btn-primary",
                    specializzazione: "Utensili elettrici e manuali"
                },
                {
                    name: "Partner 2",
                    shortName: "Partner 2",
                    url: "https://esempio-partner2.com",
                    class: "btn-secondary",
                    specializzazione: "Attrezzature e sicurezza"
                }
            ]
        }
    },
    computed: {
        filteredCategories() {
            if (!this.searchQuery) return this.categorie

            const query = this.searchQuery.toLowerCase()
            return this.categorie.filter(categoria =>
                categoria.nome.toLowerCase().includes(query) ||
                categoria.descrizione.toLowerCase().includes(query) ||
                categoria.prodotti.some(prodotto =>
                    prodotto.toLowerCase().includes(query)
                )
            )
        }
    },
    methods: {
        trackOrderClick(partnerName) {
            console.log(`Click ordine partner: ${partnerName}`)
        },
        clearSearch() {
            this.searchQuery = ''
        }
    },
    mounted() {
        console.log('Pagina Prodotti caricata')
    }
}
</script>

<style scoped>
.page-subtitle {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #666;
}

.search-section {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
}

.search-bar {
    position: relative;
    max-width: 400px;
    width: 100%;
}

.search-bar i {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.search-input {
    width: 100%;
    padding: 1rem 3rem 1rem 3rem;
    border: 2px solid #ddd;
    border-radius: 50px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: #e74c3c;
}

.clear-btn {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 1rem;
}

.clear-btn:hover {
    color: #e74c3c;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    border-top: 4px solid var(--category-color);
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-image {
    height: 180px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
}

.product-info {
    padding: 1.5rem;
}

.product-info h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.product-list h4 {
    margin: 1rem 0 0.5rem 0;
    color: #e74c3c;
    font-size: 0.9rem;
}

.product-list ul {
    list-style: none;
    padding: 0;
    columns: 2;
    column-gap: 1rem;
}

.product-list li {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.3rem;
    break-inside: avoid;
}

.product-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
}

.product-count {
    font-size: 0.8rem;
    color: #666;
    background: #f8f9fa;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
}

.no-results {
    text-align: center;
    padding: 4rem 2rem;
    color: #666;
}

.no-results i {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #ddd;
}

.no-results h3 {
    margin-bottom: 1rem;
}

.no-results p {
    margin-bottom: 2rem;
}

.order-cta {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 15px;
}

.order-cta h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.order-cta p {
    margin-bottom: 2rem;
    color: #666;
}

.order-cta .btn {
    flex-direction: column;
    gap: 0.3rem;
}

.order-cta .btn small {
    font-size: 0.8rem;
    opacity: 0.8;
}

@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: 1fr;
    }

    .product-list ul {
        columns: 1;
    }
}
</style>