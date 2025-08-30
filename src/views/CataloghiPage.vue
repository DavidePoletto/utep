<template>
    <div class="container">
        <h1 class="page-title">Cataloghi Utensili</h1>
        <p class="page-subtitle">
            Sfoglia i cataloghi digitali dei nostri marchi partner e scopri la gamma completa di utensili professionali
            disponibili.
        </p>

        <div class="catalogs-layout">
            <!-- Sidebar Marchi - Desktop -->
            <div class="brands-sidebar desktop-only">
                <div class="sidebar-header">
                    <h3>Marchi</h3>
                    <div class="search-mini">
                        <i class="fas fa-search"></i>
                        <input v-model="brandSearchQuery" type="text" placeholder="Cerca marchio..."
                            class="search-mini-input">
                    </div>
                </div>

                <div class="brands-list">
                    <div v-for="brand in filteredBrands" :key="brand.id" class="brand-item"
                        :class="{ active: selectedBrandId === brand.id }" @click="selectBrand(brand.id)">
                        <div class="brand-logo">
                            <img :src="brand.logo" :alt="brand.name" />
                        </div>
                        <div class="brand-info">
                            <h4>{{ brand.name }}</h4>
                            <span class="catalog-count">{{ getBrandCatalogs(brand.id).length }} cataloghi</span>
                        </div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>

            <!-- Dropdown Marchi - Mobile/Tablet -->
            <div class="brands-dropdown mobile-only">
                <label for="brand-select" class="dropdown-label">
                    <i class="fas fa-industry"></i>
                    Seleziona Marchio:
                </label>
                <select id="brand-select" v-model="selectedBrandId" @change="selectBrandFromDropdown"
                    class="brand-select">
                    <option value="">-- Scegli un marchio --</option>
                    <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                        {{ brand.name }} ({{ getBrandCatalogs(brand.id).length }} cataloghi)
                    </option>
                </select>
            </div>

            <!-- Area Cataloghi -->
            <div class="catalogs-content">
                <div v-if="selectedBrand" class="catalogs-section">
                    <!-- Header Marchio Selezionato -->
                    <div class="brand-header">
                        <div class="brand-header-content">
                            <div class="brand-header-title">
                                <div class="brand-header-fulllogo">
                                    <div class="brand-header-logo">
                                        <img :src="selectedBrand.logo" :alt="selectedBrand.name" />
                                    </div>
                                    <h2>{{ selectedBrand.name }}</h2>
                                </div>

                                <a :href="selectedBrand.url" target="_blank" class="btn btn-outline btn-sm">
                                    <i class="fas fa-external-link-alt"></i>
                                    Visita sito ufficiale
                                </a>
                            </div>

                            <div class="brand-header-info">
                                <p>{{ getBrandCatalogs(selectedBrand.id).length }} cataloghi disponibili</p>

                            </div>
                        </div>
                    </div>

                    <!-- Search Cataloghi -->
                    <div class="catalog-search">
                        <div class="search-bar">
                            <i class="fas fa-search"></i>
                            <input v-model="catalogSearchQuery" type="text" placeholder="Cerca nei cataloghi..."
                                class="search-input">
                            <button v-if="catalogSearchQuery" @click="catalogSearchQuery = ''" class="clear-btn">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="catalog-filters">
                            <select v-model="selectedCategory" class="filter-select">
                                <option value="">Tutte le categorie</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <!-- Grid Cataloghi -->
                    <div class="catalogs-grid">
                        <div v-for="catalog in filteredCatalogs" :key="catalog.id" class="catalog-card"
                            :class="{ featured: catalog.featured }" @click="openCatalog(catalog)">
                            <div class="catalog-cover">
                                <img :src="catalog.cover" :alt="catalog.title" />
                                <div v-if="catalog.featured" class="featured-badge">
                                    <i class="fas fa-star"></i>
                                    In Evidenza
                                </div>
                                <div class="catalog-overlay">
                                    <div class="catalog-actions">
                                        <button class="btn btn-primary">
                                            <i class="fas fa-external-link-alt"></i>
                                            Visualizza Catalogo
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="catalog-info">
                                <h4>{{ catalog.title }}</h4>
                                <p>{{ catalog.description }}</p>
                                <div class="catalog-meta">
                                    <span class="catalog-category">{{ getCategoryName(catalog.category) }}</span>
                                    <span class="catalog-year">{{ catalog.year }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- No Results -->
                    <div v-if="filteredCatalogs.length === 0" class="no-results">
                        <i class="fas fa-book-open"></i>
                        <h3>Nessun catalogo trovato</h3>
                        <p>Prova a modificare i filtri di ricerca</p>
                        <button @click="clearFilters" class="btn btn-primary">Cancella filtri</button>
                    </div>
                </div>

                <!-- Stato Iniziale -->
                <div v-else class="welcome-state">
                    <div class="welcome-content">
                        <i class="fas fa-book-open"></i>
                        <h3>Seleziona un marchio</h3>
                        <p class="desktop-only">Scegli un marchio dalla barra laterale per visualizzare i cataloghi
                            disponibili</p>
                        <p class="mobile-only">Seleziona un marchio dal menu a tendina per visualizzare i cataloghi
                            disponibili</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importa i dati dal file JSON esterno
import catalogsData from '@/data/catalogs-data.json'

export default {
    name: 'CataloghiPage',
    data() {
        return {
            selectedBrandId: null,
            brandSearchQuery: '',
            catalogSearchQuery: '',
            selectedCategory: '',

            // Carica i dati dal file JSON
            brands: catalogsData.brands,
            catalogs: catalogsData.catalogs,
            categories: catalogsData.categories
        }
    },

    computed: {
        filteredBrands() {
            if (!this.brandSearchQuery) return this.brands

            return this.brands.filter(brand =>
                brand.name.toLowerCase().includes(this.brandSearchQuery.toLowerCase())
            )
        },

        selectedBrand() {
            return this.brands.find(brand => brand.id === this.selectedBrandId)
        },

        filteredCatalogs() {
            let catalogs = this.getBrandCatalogs(this.selectedBrandId)

            if (this.catalogSearchQuery) {
                catalogs = catalogs.filter(catalog =>
                    catalog.title.toLowerCase().includes(this.catalogSearchQuery.toLowerCase()) ||
                    catalog.description.toLowerCase().includes(this.catalogSearchQuery.toLowerCase())
                )
            }

            if (this.selectedCategory) {
                catalogs = catalogs.filter(catalog => catalog.category === this.selectedCategory)
            }

            return catalogs
        }
    },

    methods: {
        selectBrand(brandId) {
            this.selectedBrandId = brandId
            this.catalogSearchQuery = ''
            this.selectedCategory = ''
        },

        selectBrandFromDropdown() {
            // Stesso comportamento di selectBrand ma per il dropdown
            this.catalogSearchQuery = ''
            this.selectedCategory = ''
        },

        getBrandCatalogs(brandId) {
            if (!brandId) return []
            return this.catalogs.filter(catalog => catalog.brandId === brandId)
        },

        getCategoryName(categoryId) {
            const category = this.categories.find(cat => cat.id === categoryId)
            return category ? category.name : categoryId
        },

        openCatalog(catalog) {
            // Reindirizza al sito del produttore per visualizzare il catalogo
            console.log('Apertura catalogo:', catalog.title)
            if (catalog.catalogUrl) {
                window.open(catalog.catalogUrl, '_blank')
            } else {
                // Fallback: apri il sito del marchio se catalogUrl non è disponibile
                const brand = this.brands.find(b => b.id === catalog.brandId)
                if (brand) {
                    window.open(brand.catalogsUrl || brand.url, '_blank')
                }
            }
        },

        clearFilters() {
            this.catalogSearchQuery = ''
            this.selectedCategory = ''
        }
    },

    mounted() {
        console.log('Pagina Cataloghi caricata')

        // Seleziona automaticamente il primo marchio se disponibile
        if (this.brands.length > 0) {
            this.selectedBrandId = this.brands[0].id
        }
    }
}
</script>

<style scoped>
.page-subtitle {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #666;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.catalogs-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    min-height: 600px;
}

/* Responsive Classes */
.desktop-only {
    display: block;
}

.mobile-only {
    display: none;
}

@media (max-width: 1024px) {

    /* Switch da sidebar a dropdown */
    .desktop-only {
        display: none !important;
    }

    .mobile-only {
        display: block !important;
    }
}

/* Dropdown Marchi - Mobile/Tablet */
.brands-dropdown {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

.dropdown-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-display);
    font-weight: 600;
    color: var(--color-text-dark);
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.dropdown-label i {
    color: var(--color-primary);
}

.brand-select {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid #ddd;
    border-radius: 12px;
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-dark);
    background: white;
    cursor: pointer;
    transition: all 0.3s;
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 1rem center;
    background-repeat: no-repeat;
    background-size: 1rem;
    padding-right: 3rem;
    line-height: 1.5;
    letter-spacing: 0.025em;
}

.brand-select:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(243, 76, 10, 0.1);
}

.brand-select option {
    padding: 1rem;
    font-family: var(--font-primary);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
}

/* Sidebar Marchi */
.brands-sidebar {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    height: fit-content;
    position: sticky;
    top: 110px;
}

.sidebar-header {
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    background: var(--bg-accent);
}

.sidebar-header h3 {
    margin-bottom: 1rem;
    color: var(--color-text-dark);
    font-size: 1.25rem;
}

.search-mini {
    position: relative;
}

.search-mini i {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 0.875rem;
}

.search-mini-input {
    width: 100%;
    padding: 0.5rem 0.75rem 0.5rem 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.3s;
}

.search-mini-input:focus {
    border-color: var(--color-primary);
}

.brands-list {
    max-height: 500px;
    overflow-y: auto;
}

.brand-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 1px solid #f5f5f5;
}

.brand-item:hover {
    background: var(--bg-accent);
}

.brand-item.active {
    background: var(--color-primary);
    color: white;
}

.brand-item.active .catalog-count {
    color: rgba(255, 255, 255, 0.8);
}

.brand-logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 8px;
    padding: 4px;
    flex-shrink: 0;
}

.brand-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.brand-info {
    flex: 1;
}

.brand-info h4 {
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
}

.catalog-count {
    font-size: 0.75rem;
    color: #666;
}

.brand-item i {
    color: #ccc;
    font-size: 0.75rem;
}

.brand-item.active i {
    color: white;
}

/* Area Cataloghi */
.catalogs-content {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    min-height: 600px;
}

.catalogs-section {
    height: 100%;
}

.brand-header {
    background: linear-gradient(135deg, var(--bg-accent), white);
    padding: 2rem;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid #eee;
}

.brand-header-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.brand-header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex: 1;
}

.brand-header-fulllogo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.brand-header-logo {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.brand-header-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.brand-header-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.brand-header-info h2 {
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
}

.brand-header-info p {
    color: #666;
    margin: none;
}

.catalog-search {
    padding: 2rem;
    border-bottom: 1px solid #eee;
    display: flex;
    gap: 1rem;
    align-items: center;
}

.search-bar {
    position: relative;
    flex: 1;
    max-width: 400px;
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
    padding: 0.75rem 3rem 0.75rem 3rem;
    border: 1px solid #ddd;
    border-radius: 25px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: var(--color-primary);
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
    font-size: 0.875rem;
}

.clear-btn:hover {
    color: var(--color-primary);
}

.catalog-filters {
    display: flex;
    gap: 1rem;
}

.filter-select {
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.875rem;
    outline: none;
    cursor: pointer;
}

.filter-select:focus {
    border-color: var(--color-primary);
}

/* Grid Cataloghi */
.catalogs-grid {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}

.catalog-card {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    cursor: pointer;
    background: white;
}

.catalog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.catalog-card.featured {
    border: 2px solid var(--color-primary);
    box-shadow: 0 6px 20px rgba(243, 76, 10, 0.2);
}

.catalog-card.featured:hover {
    box-shadow: 0 10px 30px rgba(243, 76, 10, 0.3);
}

.catalog-cover {
    position: relative;
    height: 250px;
    background: #f8f9fa;
    overflow: hidden;
}

.catalog-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.catalog-card:hover .catalog-cover img {
    transform: scale(1.05);
}

.featured-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--color-primary);
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    box-shadow: 0 2px 8px rgba(243, 76, 10, 0.3);
}

.featured-badge i {
    font-size: 0.625rem;
}

.catalog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.catalog-card:hover .catalog-overlay {
    opacity: 1;
}

.catalog-actions {
    display: flex;
    gap: 0.75rem;
}

.catalog-info {
    padding: 1.5rem;
}

.catalog-info h4 {
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
    font-size: 1.1rem;
    line-height: 1.3;
}

.catalog-info p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.catalog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.catalog-category {
    background: var(--color-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.catalog-year {
    color: #999;
    font-size: 0.75rem;
    font-weight: 600;
}

/* Welcome State */
.welcome-state {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 400px;
}

.welcome-content {
    text-align: center;
    color: #666;
}

.welcome-content i {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #ddd;
}

.welcome-content h3 {
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
}

/* No Results */
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
    color: var(--color-text-dark);
}

.no-results p {
    margin-bottom: 2rem;
}

/* CTA Partnership */
.partnership-cta {
    text-align: center;
    margin-top: 4rem;
    padding: 3rem;
    background: linear-gradient(135deg, var(--bg-accent), white);
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.partnership-cta h3 {
    color: var(--color-text-dark);
    margin-bottom: 1rem;
}

.partnership-cta p {
    margin-bottom: 2rem;
    color: #666;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 1024px) {

    /* Switch da sidebar a dropdown */
    .desktop-only {
        display: none !important;
    }

    .mobile-only {
        display: block !important;
    }

    .container {
        padding: 0 1.5rem;
    }

    .catalogs-layout {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .brands-sidebar {
        position: static;
        max-height: none;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    .page-title {
        font-size: 2.5rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .grid-cols-4 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }

    .catalogs-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        padding: 2rem 1rem;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }

    .header-spacer {
        height: 80px;
    }

    .brands-dropdown {
        padding: 1rem;
        margin-bottom: 1.5rem;
    }

    .dropdown-label {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }

    .brand-select {
        padding: 0.875rem 1rem;
        font-size: 0.9rem;
        padding-right: 2.5rem;
        background-size: 0.875rem;
        background-position: right 0.75rem center;
    }

    .brand-header {
        padding: 1.5rem 1rem;
    }

    .brand-header-content {
        flex-direction: column;
        gap: 1rem;
    }

    .brand-header-title {
        align-items: flex-start;
        gap: 1rem;
    }

    .brand-header-fulllogo {
        text-align: center;
        gap: 0.75rem;
    }

    .brand-header-logo {
        width: 60px;
        height: 60px;
    }

    .catalog-search {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
        padding: 1.5rem 1rem;
    }

    .search-bar {
        max-width: none;
    }

    .catalogs-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }

    .catalog-card {
        max-width: 400px;
        margin: 0 auto;
    }

    .catalog-cover {
        height: 250px;
    }

    .catalog-info {
        padding: 1.5rem;
    }

    .catalog-info h4 {
        font-size: 1rem;
        line-height: 1.2;
    }

    .catalog-info p {
        font-size: 0.85rem;
        margin-bottom: 0.75rem;
    }

    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }

    .cta-buttons .btn {
        width: 100%;
        max-width: 300px;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    .page-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .grid-cols-2 {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 4rem 0;
    }

    .section-lg {
        padding: 5rem 0;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 0.75rem;
    }

    .page-subtitle {
        font-size: 1rem;
        padding: 0 0.5rem;
    }

    .brands-dropdown {
        padding: 0.75rem;
    }

    .brand-header {
        padding: 1rem 0.75rem;
    }

    .catalog-search {
        padding: 1rem 0.75rem;
    }

    .catalogs-grid {
        padding: 0.75rem;
        gap: 0.75rem;
    }

    .catalog-card {
        max-width: 350px;
        margin: 0 auto;
    }

    .partnership-cta {
        padding: 2rem 1rem;
        margin-top: 2rem;
    }
}
</style>