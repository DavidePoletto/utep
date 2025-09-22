import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Global properties
app.config.globalProperties.$appName = 'UTEP'
app.config.globalProperties.$version = '1.0.0'

// Error handling migliorato
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info)
  
  // Mantieni contenuto fallback visibile in caso di errore
  const fallbackContent = document.querySelector('.fallback-content')
  if (fallbackContent) {
    fallbackContent.style.display = 'block'
  }
}

// Mount app
app.mount('#app')

// 🔧 GESTIONE INTELLIGENTE DEL CONTENUTO FALLBACK
router.isReady().then(() => {
  // Nascondi contenuto fallback gradualmente dopo che Vue è caricato
  setTimeout(() => {
    const fallbackContent = document.querySelector('.fallback-content')
    const vueContent = document.querySelector('#app > *:not(.fallback-content)')
    
    if (fallbackContent && vueContent) {
      // Fade out del contenuto fallback
      fallbackContent.style.transition = 'opacity 0.5s ease-out'
      fallbackContent.style.opacity = '0'
      
      setTimeout(() => {
        fallbackContent.style.display = 'none'
      }, 500)
      
      console.log('✅ Vue app loaded, fallback hidden')
    }
  }, 1000) // Aspetta 1 secondo per essere sicuri
})

// 🔧 OTTIMIZZAZIONE TITLE PER OGNI ROTTA
router.afterEach((to) => {
  // Title specifici per ogni pagina
  const titles = {
    '/': 'UTEP - Utensili SRL | Utensili Professionali da Taglio | Mazzano Brescia',
    '/cataloghi': 'Cataloghi Utensili Professionali | ISCAR, YG1, Precicut | UTEP',
    '/promozioni': 'Offerte e Promozioni Utensili da Taglio | Sconti Speciali | UTEP',
    '/chi-siamo': 'Chi Siamo | 50 anni di Esperienza Utensili da Taglio | UTEP',
    '/contatti': 'Contatti UTEP | Distributore Utensili Professionali | Mazzano Brescia'
  }
  
  // Aggiorna title
  const newTitle = titles[to.path] || 'UTEP - Utensili Professionali da Taglio'
  document.title = newTitle
  
  // Aggiorna meta description se esiste
  let metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && to.path !== '/') {
    const descriptions = {
      '/cataloghi': 'Scarica i cataloghi digitali dei migliori brand di utensili da taglio: ISCAR, YG1, Precicut, Mitsubishi Materials. Consulta specifiche tecniche.',
      '/promozioni': 'Scopri le offerte speciali sui migliori utensili da taglio. Promozioni limitate su frese, punte, utensili per tornitura.',
      '/chi-siamo': 'UTEP: 50 anni di esperienza nella distribuzione di utensili professionali da taglio. Storia, valori e competenze al servizio dell\'industria.',
      '/contatti': 'Contatta UTEP per consulenza tecnica su utensili da taglio. Via Padana Superiore 82/H, Mazzano (BS). Tel: 030 2126362.'
    }
    
    if (descriptions[to.path]) {
      metaDesc.setAttribute('content', descriptions[to.path])
    }
  }
  
  console.log(`📄 Page loaded: ${to.path} - Title: ${newTitle}`)
})