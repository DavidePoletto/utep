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

        <!-- Contact Form -->
        <section class="contact-form-section">
            <h2>Inviaci un Messaggio</h2>
            <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="nome">Nome *</label>
                        <input id="nome" v-model="contactForm.nome" type="text" required
                            :class="{ 'error': formErrors.nome }">
                        <span v-if="formErrors.nome" class="error-message">{{ formErrors.nome }}</span>
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input id="email" v-model="contactForm.email" type="email" required
                            :class="{ 'error': formErrors.email }">
                        <span v-if="formErrors.email" class="error-message">{{ formErrors.email }}</span>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="telefono">Telefono</label>
                        <input id="telefono" v-model="contactForm.telefono" type="tel">
                    </div>
                    <div class="form-group">
                        <label for="azienda">Azienda</label>
                        <input id="azienda" v-model="contactForm.azienda" type="text">
                    </div>
                </div>

                <div class="form-group">
                    <label for="messaggio">Messaggio *</label>
                    <textarea id="messaggio" v-model="contactForm.messaggio" required rows="5"
                        :class="{ 'error': formErrors.messaggio }"></textarea>
                    <span v-if="formErrors.messaggio" class="error-message">{{ formErrors.messaggio }}</span>
                </div>

                <div class="form-group">
                    <label class="checkbox-label">
                        <input v-model="contactForm.privacy" type="checkbox" required>
                        Accetto l'informativa sulla privacy *
                    </label>
                </div>

                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                    <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                    {{ isSubmitting ? 'Invio...' : 'Invia Messaggio' }}
                </button>
            </form>
        </section>

        <!-- FAQ Section -->
        <section class="faq-section">
            <h2>Domande Frequenti</h2>
            <div class="faq-list">
                <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
                    <button @click="toggleFaq(index)" class="faq-question">
                        {{ faq.domanda }}
                        <i :class="faq.aperta ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                    </button>
                    <div v-if="faq.aperta" class="faq-answer">
                        <p>{{ faq.risposta }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partners Section -->
        <section class="partners-contact">
            <h2>Partner per gli Ordini Online</h2>
            <div class="partners-grid">
                <div v-for="partner in partners" :key="partner.name" class="partner-card">
                    <h3>{{ partner.name }}</h3>
                    <p class="partner-specialization">{{ partner.specializzazione }}</p>
                    <ul class="partner-benefits">
                        <li v-for="vantaggio in partner.vantaggi" :key="vantaggio">
                            <i class="fas fa-check"></i> {{ vantaggio }}
                        </li>
                    </ul>
                    <a :href="partner.url" target="_blank" class="btn btn-outline">
                        <i class="fas fa-external-link-alt"></i>
                        Visita {{ partner.name }}
                    </a>
                </div>
            </div>
        </section>
    </div>
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.contact-form-section {
    margin: 4rem 0;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2c3e50;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: #e74c3c;
}

.form-group input.error,
.form-group textarea.error {
    border-color: #e74c3c;
}

.error-message {
    color: #e74c3c;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    display: block;
}

.checkbox-label {
    display: flex !important;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
    width: auto !important;
}

.faq-section {
    margin: 4rem 0;
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    margin-bottom: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 1.5rem;
    background: none;
    border: none;
    text-align: left;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c3e50;
}

.faq-question:hover {
    background: #f8f9fa;
}

.faq-answer {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: #666;
    line-height: 1.6;
}

.partners-contact {
    margin: 4rem 0;
}

.partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.partner-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.partner-specialization {
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
}

.partner-benefits {
    list-style: none;
    margin: 1rem 0;
}

.partner-benefits li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: left;
}

.partner-benefits i {
    color: #2ecc71;
    font-size: 0.8rem;
}

.btn-outline {
    background: transparent;
    border: 2px solid #e74c3c;
    color: #e74c3c;
}

.btn-outline:hover {
    background: #e74c3c;
    color: white;
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-info,
    .partners-grid {
        grid-template-columns: 1fr;
    }
}
</style>