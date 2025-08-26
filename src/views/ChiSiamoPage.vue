<template>
    <div class="container">
        <h1 class="page-title">Chi Siamo</h1>

        <!-- Intro Section -->
        <div class="about-intro">
            <div class="about-content">
                <div class="about-text">
                    <h2>La Storia di UTEP</h2>
                    <p class="lead-text">
                        Fondata nel 1990, UTEP è diventata un punto di riferimento nel settore degli utensili
                        professionali.
                        La nostra azienda nasce dalla passione per la qualità e dall'esperienza maturata nel campo degli
                        utensili industriali.
                    </p>
                    <p>
                        Da oltre 30 anni serviamo professionisti, artigiani e aziende in tutta Italia,
                        fornendo utensili di alta qualità e un servizio clienti impeccabile. La nostra missione è
                        semplice:
                        fornire gli strumenti migliori per realizzare ogni progetto.
                    </p>
                </div>

                <div class="about-image">
                    <i class="fas fa-industry"></i>
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
                    "Fornire agli artigiani e ai professionisti gli strumenti migliori per realizzare i loro progetti,
                    garantendo qualità, durabilità e un servizio clienti di eccellenza."
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

        <!-- Team Section -->
        <section class="team-section">
            <h2 class="section-title">Il Nostro Approccio</h2>
            <div class="approach-grid">
                <div v-for="approccio in approcci" :key="approccio.nome" class="approach-card">
                    <i :class="approccio.icon"></i>
                    <h3>{{ approccio.nome }}</h3>
                    <p>{{ approccio.descrizione }}</p>
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
                    nome: "Qualità",
                    descrizione: "Selezioniamo solo i migliori prodotti sul mercato",
                    icon: "fas fa-award"
                },
                {
                    nome: "Affidabilità",
                    descrizione: "Partner di fiducia per i professionisti da oltre 30 anni",
                    icon: "fas fa-handshake"
                },
                {
                    nome: "Innovazione",
                    descrizione: "Sempre aggiornati con le ultime tecnologie del settore",
                    icon: "fas fa-lightbulb"
                },
                {
                    nome: "Servizio",
                    descrizione: "Assistenza personalizzata per ogni cliente e progetto",
                    icon: "fas fa-headset"
                }
            ],
            statistiche: [
                {
                    icon: "fas fa-users",
                    numero: "10,000+",
                    descrizione: "Clienti soddisfatti in tutta Italia",
                    dettaglio: "Professionisti che si affidano alla nostra esperienza"
                },
                {
                    icon: "fas fa-boxes",
                    numero: "5,000+",
                    descrizione: "Prodotti in catalogo",
                    dettaglio: "Dalle più importanti marche internazionali"
                },
                {
                    icon: "fas fa-calendar-alt",
                    numero: "30+",
                    descrizione: "Anni di esperienza",
                    dettaglio: "Nel settore degli utensili professionali"
                },
                {
                    icon: "fas fa-truck",
                    numero: "48h",
                    descrizione: "Consegna media",
                    dettaglio: "In tutta Italia con i nostri partner"
                }
            ],
            timeline: [
                {
                    anno: "1990",
                    titolo: "Fondazione",
                    descrizione: "Nasce UTEP come piccola azienda familiare specializzata in utensili manuali."
                },
                {
                    anno: "1995",
                    titolo: "Espansione",
                    descrizione: "Ampliamento del catalogo con utensili elettrici e prime partnership con distributori."
                },
                {
                    anno: "2000",
                    titolo: "Digitalizzazione",
                    descrizione: "Lancio del primo sistema di catalogazione digitale e vendite online."
                },
                {
                    anno: "2010",
                    titolo: "Certificazioni",
                    descrizione: "Ottenimento delle principali certificazioni di qualità ISO per il settore."
                },
                {
                    anno: "2020",
                    titolo: "Partnership",
                    descrizione: "Accordi strategici con i maggiori e-commerce per la distribuzione nazionale."
                },
                {
                    anno: "2025",
                    titolo: "Innovazione",
                    descrizione: "Investimenti in tecnologie smart e sostenibilità ambientale."
                }
            ],
            approcci: [
                {
                    nome: "Ricerca",
                    descrizione: "Selezioniamo costantemente i migliori prodotti sul mercato",
                    icon: "fas fa-search"
                },
                {
                    nome: "Test",
                    descrizione: "Ogni prodotto viene testato per garantire qualità e durata",
                    icon: "fas fa-check-circle"
                },
                {
                    nome: "Consulenza",
                    descrizione: "Offriamo supporto personalizzato per ogni esigenza",
                    icon: "fas fa-users"
                }
            ]
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
    color: #e74c3c;
    margin-bottom: 1.5rem;
}

.lead-text {
    font-size: 1.2rem;
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 1.5rem;
}

.about-image {
    height: 400px;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 6rem;
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
    color: #2c3e50;
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
    background: #e74c3c;
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
    color: #e74c3c;
    margin-bottom: 1rem;
}

.mission-section {
    background: linear-gradient(135deg, #2c3e50, #34495e);
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
}

.mission-content cite {
    font-size: 0.9rem;
    opacity: 0.8;
}

.timeline {
    position: relative;
    margin: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e74c3c;
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    padding-right: 50%;
}

.timeline-item.timeline-right {
    justify-content: flex-end;
    padding-right: 0;
    padding-left: 50%;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #e74c3c;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 2;
}

.timeline-content {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
}

.timeline-right .timeline-content {
    margin-left: 2rem;
}

.timeline-item:not(.timeline-right) .timeline-content {
    margin-right: 2rem;
}

.stats-section {
    padding: 4rem 0;
    background: #f8f9fa;
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
    color: #e74c3c;
    margin-bottom: 1rem;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.stat-description {
    font-weight: 600;
    color: #2c3e50;
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
}

.approach-card i {
    font-size: 3rem;
    color: #e74c3c;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
    }

    .about-image {
        height: 250px;
        font-size: 4rem;
    }

    .timeline::before {
        left: 30px;
    }

    .timeline-item,
    .timeline-item.timeline-right {
        justify-content: flex-start;
        padding-left: 80px;
        padding-right: 0;
    }

    .timeline-marker {
        left: 30px;
        width: 40px;
        height: 40px;
        font-size: 0.7rem;
    }

    .timeline-content,
    .timeline-right .timeline-content {
        margin-left: 0;
        margin-right: 0;
        max-width: none;
    }

    .values-grid,
    .stats-grid,
    .approach-grid {
        grid-template-columns: 1fr;
    }
}
</style>