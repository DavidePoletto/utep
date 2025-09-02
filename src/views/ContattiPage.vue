<template>
    <div class="container">
        <h1 class="page-title">Contatti</h1>

        <div class="contact-intro">
            <p>Siamo qui per aiutarti. Contattaci per informazioni, consulenze o supporto tecnico.</p>
        </div>

        <!-- Contact Info Grid -->
        <div class="contact-info">
            <div v-for="contatto in contatti" :key="contatto.tipo" class="contact-card">
                <div class="contact-icon">
                    <i :class="contatto.icon"></i>
                </div>
                <h3>{{ contatto.tipo }}</h3>

                <!-- Dynamic content based on contact type -->
                <div class="contact-details">
                    <template v-if="contatto.tipo === 'Sede Principale'">
                        <p><strong>{{ contatto.info.indirizzo }}</strong></p>
                        <p>{{ contatto.info.citta }}</p>
                        <p>{{ contatto.info.paese }}</p>
                    </template>

                    <template v-else-if="contatto.tipo === 'Telefono'">
                        <p><strong>Generale:</strong>
                            <a :href="'tel:' + contatto.info.principale.replace(/\s/g, '')">
                                {{ contatto.info.principale }}
                            </a>
                        </p>
                        <p><strong>Vendite:</strong>
                            <a :href="'tel:' + contatto.info.vendite.replace(/\s/g, '')">
                                {{ contatto.info.vendite }}
                            </a>
                        </p>
                        <p><strong>Supporto:</strong>
                            <a :href="'tel:' + contatto.info.supporto.replace(/\s/g, '')">
                                {{ contatto.info.supporto }}
                            </a>
                        </p>
                        <small>{{ contatto.orari }}</small>
                    </template>

                    <template v-else-if="contatto.tipo === 'Email'">
                        <p><strong>Generale:</strong>
                            <a :href="'mailto:' + contatto.info.generale">
                                {{ contatto.info.generale }}
                            </a>
                        </p>
                        <p><strong>Vendite:</strong>
                            <a :href="'mailto:' + contatto.info.vendite">
                                {{ contatto.info.vendite }}
                            </a>
                        </p>
                        <p><strong>Supporto:</strong>
                            <a :href="'mailto:' + contatto.info.supporto">
                                {{ contatto.info.supporto }}
                            </a>
                        </p>
                    </template>

                    <template v-else-if="contatto.tipo === 'Orari di Apertura'">
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
                <a href="tel:+390301234567" class="btn btn-primary">
                    <i class="fas fa-phone"></i> Chiamaci Ora
                </a>
                <a href="mailto:info@utep.it" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Invia Email
                </a>
                <a href="https://wa.me/390301234567" target="_blank" class="btn btn-success">
                    <i class="fab fa-whatsapp"></i> WhatsApp
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
                    tipo: "Sede Principale",
                    icon: "fas fa-map-marker-alt",
                    info: {
                        indirizzo: "Via degli Utensili 123",
                        citta: "25100 Brescia (BS)",
                        paese: "Italia"
                    }
                },
                {
                    tipo: "Telefono",
                    icon: "fas fa-phone",
                    info: {
                        principale: "+39 030 123 4567",
                        vendite: "+39 030 123 4568",
                        supporto: "+39 030 123 4569"
                    },
                    orari: "Lun-Ven: 8:00-18:00, Sab: 8:00-12:00"
                },
                {
                    tipo: "Email",
                    icon: "fas fa-envelope",
                    info: {
                        generale: "info@utep.it",
                        vendite: "vendite@utep.it",
                        supporto: "supporto@utep.it"
                    }
                },
                {
                    tipo: "Orari di Apertura",
                    icon: "fas fa-clock",
                    info: {
                        lunVen: "Lunedì - Venerdì: 8:00 - 18:00",
                        sabato: "Sabato: 8:00 - 12:00",
                        domenica: "Domenica: Chiuso"
                    }
                }
            ],
            partners: [
                {
                    name: "Partner Store 1",
                    url: "https://esempio-partner1.com",
                    specializzazione: "Utensili elettrici e manuali",
                    vantaggi: ["Spedizione gratuita oltre 50€", "Garanzia estesa", "Supporto tecnico"]
                },
                {
                    name: "Partner Store 2",
                    url: "https://esempio-partner2.com",
                    specializzazione: "Attrezzature e sicurezza sul lavoro",
                    vantaggi: ["Consulenza specializzata", "Formazione gratuita", "Sconti volume"]
                }
            ],
            faqList: [
                {
                    domanda: "Come posso effettuare un ordine?",
                    risposta: "Puoi ordinare direttamente dai nostri partner autorizzati cliccando sui link presenti nel sito. Il nostro staff è disponibile per assistenza nella scelta.",
                    aperta: false
                },
                {
                    domanda: "Offrite assistenza tecnica?",
                    risposta: "Sì, il nostro team tecnico è disponibile per consulenze sulla scelta degli utensili più adatti alle tue esigenze professionali.",
                    aperta: false
                },
                {
                    domanda: "Quali sono i tempi di consegna?",
                    risposta: "I tempi di consegna dipendono dal partner scelto, generalmente entro 24-48 ore per l'Italia continentale.",
                    aperta: false
                },
                {
                    domanda: "Offrite garanzia sui prodotti?",
                    risposta: "Tutti i nostri prodotti sono coperti da garanzia del produttore. Contattaci per informazioni specifiche su ogni articolo.",
                    aperta: false
                }
            ],
            contactForm: {
                nome: '',
                email: '',
                telefono: '',
                azienda: '',
                messaggio: '',
                privacy: false
            },
            formErrors: {},
            isSubmitting: false
        }
    },
    methods: {
        toggleFaq(index) {
            this.faqList[index].aperta = !this.faqList[index].aperta
        },

        validateForm() {
            this.formErrors = {}

            if (!this.contactForm.nome.trim()) {
                this.formErrors.nome = 'Il nome è obbligatorio'
            }

            if (!this.contactForm.email.trim()) {
                this.formErrors.email = 'L\'email è obbligatoria'
            } else if (!this.isValidEmail(this.contactForm.email)) {
                this.formErrors.email = 'Inserisci un\'email valida'
            }

            if (!this.contactForm.messaggio.trim()) {
                this.formErrors.messaggio = 'Il messaggio è obbligatorio'
            }

            return Object.keys(this.formErrors).length === 0
        },

        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        },

        async submitForm() {
            if (!this.validateForm()) {
                return
            }

            this.isSubmitting = true

            try {
                // Simulazione invio form
                await new Promise(resolve => setTimeout(resolve, 2000))

                alert('Messaggio inviato con successo! Ti ricontatteremo presto.')

                // Reset form
                this.contactForm = {
                    nome: '',
                    email: '',
                    telefono: '',
                    azienda: '',
                    messaggio: '',
                    privacy: false
                }

            } catch (error) {
                alert('Errore nell\'invio del messaggio. Riprova più tardi.')
            } finally {
                this.isSubmitting = false
            }
        }
    },

    mounted() {
        console.log('Pagina Contatti caricata')
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
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
}

.contact-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.contact-icon {
    font-size: 2.5rem;
    color: #e74c3c;
    margin-bottom: 1rem;
}

.contact-details a {
    color: #e74c3c;
    text-decoration: none;
}

.contact-details a:hover {
    text-decoration: underline;
}

.quick-contact {
    text-align: center;
    padding: 3rem;
    background: #f8f9fa;
    border-radius: 15px;
    margin: 4rem 0;
}

.btn-success {
    background: #25d366;
    color: white;
}

.posizione-container {
  text-align: center;
  margin: 4rem 0 0 0;
}

.map-wrapper {
  width: 100%;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.posizione-container h2 {
  margin-bottom: 1.5rem;
}

@media (max-width: 1240px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr); /* tablet: 2 colonne */
  }
}

@media (max-width: 768px) {
  .contact-info {
    grid-template-columns: 1fr; /* mobile: 1 colonna */
  }
}
</style>