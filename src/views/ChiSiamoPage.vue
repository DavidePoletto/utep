<template>
    <div class="container">
        <h1 class="page-title">Chi Siamo</h1>

        <!-- Intro Section -->
        <div class="about-intro">
            <div class="about-content">
                <div class="about-text">
                    <h2>La Storia di UTEP</h2>
                    <p class="lead-text">
                        Fondata nel 1977, UTEP si è affermata come specialista nella distribuzione di utensili meccanici
                        per macchinari industriali.
                        Nel corso degli anni, l'azienda ha sviluppato anche il proprio marchio PRECICUT, diventando non
                        solo distributore ma anche produttore di utensili di qualità.
                    </p>
                    <p>
                        Da oltre 40 anni forniamo soluzioni di utensili specializzati a officine meccaniche, aziende
                        manifatturiere e centri di lavorazione in tutta Italia,
                        garantendo precisione, qualità e affidabilità per ogni tipo di macchinario. La nostra missione è
                        fornire gli utensili meccanici più adatti per ottimizzare ogni processo produttivo, sia
                        attraverso i migliori marchi internazionali che con le nostre soluzioni PRECICUT.
                    </p>
                </div>

                <div class="about-image">
                    <img src="/img/utensili.jpeg" alt="utensili">
                </div>
            </div>
        </div>

        <!-- Values Section -->
        <section class="values-section">
            <h2 class="section-title">I Nostri Valori</h2>
            <div class="values-grid">
                <div v-for="valore in valori" :key="valore.nome" class="value-card">
                    <div class="value-icon">
                        <i :class="valore.icon"></i>
                    </div>
                    <h3>{{ valore.nome }}</h3>
                    <p>{{ valore.descrizione }}</p>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="mission-section">
            <div class="mission-content">
                <h2>La Nostra Missione</h2>
                <blockquote>
                    "Fornire alle aziende meccaniche gli utensili più performanti per i loro macchinari, garantendo
                    precisione, durata e un supporto tecnico specializzato per ottimizzare ogni processo produttivo."
                </blockquote>
                <cite>- Fondatori UTEP</cite>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="timeline-section">
            <h2 class="section-title">La Nostra Storia</h2>
            <div class="timeline">
                <div v-for="(evento, index) in timeline" :key="evento.anno" class="timeline-item"
                    :class="{ 'timeline-right': index % 2 === 1 }">
                    <div class="timeline-marker">{{ evento.anno }}</div>
                    <div class="timeline-content">
                        <h3>{{ evento.titolo }}</h3>
                        <p>{{ evento.descrizione }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats-section">
            <h2 class="section-title">I Numeri di UTEP</h2>
            <div class="stats-grid">
                <div v-for="stat in statistiche" :key="stat.numero" class="stat-card">
                    <div class="stat-icon">
                        <i :class="stat.icon"></i>
                    </div>
                    <div class="stat-number">{{ stat.numero }}</div>
                    <div class="stat-description">{{ stat.descrizione }}</div>
                    <div class="stat-detail">{{ stat.dettaglio }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'ChiSiamoPage',
    data() {
        return {
            valori: [
                {
                    nome: "Precisione",
                    descrizione: "Selezioniamo solo utensili che garantiscono precisione e affidabilità",
                    icon: "fas fa-crosshairs"
                },
                {
                    nome: "Affidabilità",
                    descrizione: "Partner di fiducia per l'industria meccanica da oltre 20 anni",
                    icon: "fas fa-handshake"
                },
                {
                    nome: "Competenza Tecnica",
                    descrizione: "Supporto specializzato per ogni tipo di macchinario e lavorazione",
                    icon: "fas fa-tools"
                }
            ],
            statistiche: [
                {
                    icon: "fas fa-industry",
                    numero: "2000+",
                    descrizione: "Aziende metalmeccaniche servite",
                    dettaglio: "Officine e stabilimenti in tutta Brescia e provincia"
                },
                {
                    icon: "fas fa-cog",
                    numero: "500,000+",
                    descrizione: "Utensili standard in catalogo",
                    dettaglio: "Per ogni tipo di macchinario industriale"
                },
                {
                    icon: "fas fa-calendar-check",
                    numero: "40+",
                    descrizione: "Anni di specializzazione",
                    dettaglio: "Nel settore degli utensili"
                },
                {
                    icon: "fas fa-shipping-fast",
                    numero: "24h",
                    descrizione: "Consegna express",
                    dettaglio: "Per fermi macchina urgenti"
                }
            ],
            timeline: [
                {
                    anno: "1977",
                    titolo: "Fondazione",
                    descrizione: "Nasce UTEP come distributore specializzato di utensili meccanici per macchinari industriali."
                },
                {
                    anno: "2001",
                    titolo: "Nasce CDI-TEC",
                    descrizione: "Azienda partner, distributore ufficiale del marchio ISCAR per BRESCIA e provincia."
                },
                {
                    anno: "2016",
                    titolo: "Lancio PRECICUT",
                    descrizione: "Dopo investimenti e accurate prove, nasce il marchio proprietario PRECICUT con frese, inserti, maschi e punte."
                },
                {
                    anno: "2018",
                    titolo: "Espansione PRECICUT",
                    descrizione: "Il marchio PRECICUT si amplia includendo mandrini, morse, pinze e strumenti di misura."
                },
                {
                    anno: "2023",
                    titolo: "Innovazione Digitale",
                    descrizione: "Investimenti in tecnologie smart per l'industria 4.0 e sostenibilità ambientale."
                }
            ],
        }
    },
    methods: {
        animateStats() {
            console.log('Animating stats...')
        }
    },
    mounted() {
        console.log('Pagina Chi Siamo caricata')
        this.animateStats()
    }
}
</script>

<style scoped>
.about-intro {
    margin-bottom: 4rem;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text {
    font-size: 1.1rem;
    line-height: 1.8;
}

.about-text h2 {
    color: var(--color-primary);
    margin-bottom: 1.5rem;
}

.lead-text {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-text-dark);
    margin-bottom: 1.5rem;
}

.about-image {
    height: 400px;
    background: linear-gradient(135deg, var(--color-primary), #ff6b35);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 6rem;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
}

.values-section,
.mission-section,
.timeline-section,
.team-section {
    margin: 4rem 0;
}

.section-title {
    text-align: center;
    font-size: 2.2rem;
    color: var(--color-text-dark);
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--color-primary);
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.value-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.value-card:hover {
    transform: translateY(-5px);
}

.value-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.mission-section {
    background: linear-gradient(195deg, #8D8E8D 0%, #87615C 100%);
    color: white;
    padding: 4rem 2rem;
    border-radius: 15px;
    text-align: center;
}

.mission-content blockquote {
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.8;
    margin: 2rem 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    color: rgb(255, 243, 243);
}

.mission-content h2 {
    color: white;
}

.mission-content cite {
    font-size: 0.9rem;
    opacity: 0.8;
}

.timeline {
    position: relative;
    margin: 2rem 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-primary);
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
    padding-right: 50%;
    padding-left: 2rem;
}

.timeline-item.timeline-right {
    justify-content: flex-end;
    padding-right: 2rem;
    padding-left: 50%;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    z-index: 2;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.timeline-content {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    position: relative;
}

.timeline-right .timeline-content {
    margin-left: 3rem;
}

.timeline-item:not(.timeline-right) .timeline-content {
    margin-right: 3rem;
}

.timeline-content h3 {
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
}

.stats-section {
    padding: 4rem 0;
    background: var(--bg-accent);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.stat-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--color-text-dark);
    margin-bottom: 0.5rem;
}

.stat-description {
    font-weight: 600;
    color: var(--color-text-dark);
    margin-bottom: 0.5rem;
}

.stat-detail {
    font-size: 0.9rem;
    color: #666;
}

.approach-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.approach-card {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.approach-card:hover {
    transform: translateY(-5px);
}

.approach-card i {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

@media (max-width: 1024px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-image {
        height: 300px;
        font-size: 4.5rem;
    }

    .values-grid,
    .stats-grid,
    .approach-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }

    .timeline {
        max-width: 800px;
    }

    .timeline-content {
        max-width: 350px;
    }
}

@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
    }

    .about-image {
        height: 250px;
        font-size: 4rem;
    }

    .timeline {
        max-width: none;
        margin: 2rem 1rem;
    }

    .timeline::before {
        left: 40px;
        transform: none;
    }

    .timeline-item,
    .timeline-item.timeline-right {
        justify-content: flex-start;
        padding-left: 100px;
        padding-right: 0;
    }

    .timeline-marker {
        left: 40px;
        transform: none;
        width: 50px;
        height: 50px;
        font-size: 0.8rem;
    }

    .timeline-content {
        margin-left: 0;
        margin-right: 0;
        max-width: none;
        width: calc(100% - 2rem);
    }

    .timeline-content::before,
    .timeline-right .timeline-content::before {
        display: none;
    }

    .timeline-right .timeline-content {
        margin-left: 0;
    }

    .values-grid,
    .stats-grid,
    .approach-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .mission-content {
        padding: 3rem 1.5rem;
    }

    .mission-content blockquote {
        font-size: 1.1rem;
    }

    .value-card,
    .stat-card,
    .approach-card {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .about-image {
        height: 200px;
        font-size: 3rem;
    }

    .timeline {
        margin: 2rem 0.5rem;
    }

    .timeline::before {
        left: 30px;
    }

    .timeline-marker {
        left: 30px;
        width: 40px;
        height: 40px;
        font-size: 0.7rem;
    }

    .timeline-item,
    .timeline-item.timeline-right {
        padding-left: 80px;
    }

    .timeline-content {
        padding: 1.5rem;
        width: calc(100% - 1rem);
    }

    .section-title {
        font-size: 1.6rem;
    }

    .mission-content {
        padding: 2.5rem 1rem;
    }

    .value-card,
    .stat-card,
    .approach-card {
        padding: 1.25rem;
    }

    .stat-number {
        font-size: 2rem;
    }

    .value-icon,
    .stat-icon {
        font-size: 2rem;
    }

    .approach-card i {
        font-size: 2.5rem;
    }
}
</style>