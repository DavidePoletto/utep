<template>
    <div class="container">
        <h1 class="page-title">Contatti - UTEP</h1>

        <div class="contact-intro">
            <p>Siamo qui per aiutarti. Contattaci per informazioni, consulenze o supporto tecnico.</p>
        </div>

        <!-- Contact Info Grid -->
        <div class="contact-info">
            <div v-for="contatto in contatti" :key="contatto.tipo" class="contact-card">
                <div class="contact-header">
                    <div class="contact-icon">
                        <i :class="contatto.icon"></i>
                    </div>
                    <h3>{{ contatto.tipo }}</h3>
                </div>

                <!-- Dynamic content based on contact type -->
                <div class="contact-details">
                    <template v-if="contatto.tipo === 'Sede'">
                        <p><strong>{{ contatto.info.indirizzo }}</strong></p>
                        <p>{{ contatto.info.citta }}</p>
                        <p>{{ contatto.info.paese }}</p>
                    </template>

                    <template v-else-if="contatto.tipo === 'Telefono'">
                        <p>
                            <a :href="'tel:' + contatto.info.principale.replace(/\s/g, '')">
                                {{ contatto.info.principale }}
                            </a>
                        </p>
                        <small>{{ contatto.orari }}</small>
                    </template>

                    <template v-else-if="contatto.tipo === 'Email'">
                            <a :href="'mailto:' + contatto.info.generale">
                                {{ contatto.info.generale }}
                            </a>
                    </template>

                    <template v-else-if="contatto.tipo === 'Orari'">
                        <p><strong>{{ contatto.info.lunVen }}</strong></p>
                        <p>{{ contatto.info.sabato }}</p>
                        <p><em>{{ contatto.info.domenica }}</em></p>
                    </template>
                </div>
            </div>
        </div>

        <!-- Quick Contact Actions -->
        <section class="quick-contact">
            <h2>Contattaci Subito</h2>
            <p>Il nostro team di esperti è pronto ad assisterti nella scelta degli utensili più adatti alle tue
                esigenze.</p>
            <div class="cta-buttons">
                <a href="tel:+390302126362" class="btn btn-primary">
                    <i class="fas fa-phone"></i> Chiamaci Ora
                </a>
                <a href="mailto:commerciale@uteputensili.com" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Invia Email
                </a>
            </div>
        </section>
    </div>

    <section class="posizione-container">
        <h2>Dove ci troviamo</h2>

        <div class="map-wrapper">
            <iframe
                src="https://www.google.com/maps?q=Via+Padana+Superiore+82%2FH,+Ciliverghe,+25080+Mazzano+BS,+Italia&ll=45.4949836,10.3549864&z=18&output=embed"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ContattiPage',
    data() {
        return {
            contatti: [
                {
                    tipo: "Sede",
                    icon: "fas fa-map-marker-alt",
                    info: {
                        indirizzo: "Via Padana Superiore 82/H",
                        citta: "25080 Brescia (BS)",
                    }
                },
                {
                    tipo: "Telefono",
                    icon: "fas fa-phone",
                    info: {
                        principale: "+39 030 2126362"
                    },
                    orari: "Lun-Ven: 8:00-17:00"
                },
                {
                    tipo: "Email",
                    icon: "fas fa-envelope",
                    info: {
                        generale: "COMMERCIALE@UTEPUTENSILI.COM",
                    }
                },
                {
                    tipo: "Orari",
                    icon: "fas fa-clock",
                    info: {
                        lunVen: "Lunedì - Venerdì: 8:00 - 17:00",
                        sabato: "Sabato: Chiuso",
                        domenica: "Domenica: Chiuso"
                    }
                }
            ]
        }
    },

    mounted() {
        // SEO: Aggiorna title e meta description specifici per questa pagina
        document.title = "Contatti - UTEP Brescia | Consulenza Utensili Professionali";
        
        // Aggiorna meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Contatta UTEP per consulenze specializzate. Via Padana Superiore 82/H, Brescia. Tel: 030 2126362. Email: commerciale@uteputensili.com. Supporto tecnico esperto.');
        } else {
            // Crea meta description se non esiste
            const meta = document.createElement('meta');
            meta.setAttribute('name', 'description');
            meta.setAttribute('content', 'Contatta UTEP per consulenze specializzate. Via Padana Superiore 82/H, Brescia. Tel: 030 2126362. Email: commerciale@uteputensili.com. Supporto tecnico esperto.');
            document.head.appendChild(meta);
        }

        console.log('Pagina Contatti caricata con SEO aggiornato');
    }
}
</script>

<style scoped>
.contact-intro {
    text-align: center;
    margin-bottom: 3rem;
}

.contact-intro p {
    font-size: 1.2rem;
    color: #666;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
}

.contact-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.contact-header {
    display: flex;
    justify-content: center;
    gap: 2px;
    align-items: center;
    margin-bottom: 0.5rem;
}

.contact-header h3 {
    margin: 0;
    font-size: 1.4rem;
    color: #333;
}

.contact-icon {
    font-size: 2rem;
    color: #e74c3c;
    flex-shrink: 0;
}

.contact-details {
    line-height: 1.6;
}

.contact-details p {
    margin-bottom: 0.5rem;
}

.contact-details a {
    color: #e74c3c;
    text-decoration: none;
}

.contact-details a:hover {
    text-decoration: underline;
}

.contact-details small {
    color: #666;
    font-style: italic;
}

.quick-contact {
    text-align: center;
    padding: 3rem;
    background: #f8f9fa;
    border-radius: 15px;
    margin: 4rem 0;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #e74c3c;
    color: white;
}

.btn-primary:hover {
    background: #c0392b;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
}

.btn-success {
    background: #25d366;
    color: white;
}

.btn-success:hover {
    background: #20c55a;
}

.posizione-container {
    text-align: center;
    margin: 4rem 0 0 0;
}

.map-wrapper {
    width: 100%;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 15px;
}

.posizione-container h2 {
    margin-bottom: 1.5rem;
    color: #333;
}

@media (max-width: 1240px) {
    .contact-info {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .contact-info {
        grid-template-columns: 1fr;
    }
    
    .contact-card {
        padding: 1.5rem;
    }
    
    .contact-header h3 {
        font-size: 1.2rem;
    }
    
    .contact-icon {
        font-size: 1.8rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .contact-card {
        padding: 1.2rem;
    }
    
    .contact-header {
        margin-bottom: 1rem;
    }
    
    .contact-header h3 {
        font-size: 1.1rem;
    }
    
    .contact-icon {
        font-size: 1.6rem;
    }
    
    .quick-contact {
        padding: 2rem 1rem;
    }
}
</style>