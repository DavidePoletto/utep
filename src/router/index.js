import { createRouter, createWebHistory } from 'vue-router'

// IMPORT DEI COMPONENTI - QUESTI ERANO MANCANTI!
import HomePage from '../views/HomePage.vue'
import CataloghiPage from '../views/CataloghiPage.vue'
import PromozioniPage from '../views/PromozioniPage.vue'
import ChiSiamoPage from '../views/ChiSiamoPage.vue'
import ContattiPage from '../views/ContattiPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'UTEP - Utensili Professionali da Taglio | 50 Anni di Esperienza',
      description: 'UTEP offre utensili professionali da taglio dei migliori brand mondiali: ISCAR, YG1, Mitsubishi. Consulenza specializzata e qualità garantita.',
      keywords: 'utensili da taglio, ISCAR, YG1, Mitsubishi, frese, punte, tornio'
    },
  },
  {
    path: '/cataloghi',
    name: 'Cataloghi',
    component: CataloghiPage,
    meta: {
      title: 'Cataloghi Utensili Professionali - UTEP',
      description: 'Sfoglia i cataloghi digitali dei migliori brand di utensili da taglio: ISCAR, YG1, Mitsubishi, Precicut e molti altri.',
      keywords: 'cataloghi utensili, ISCAR catalogo, YG1 catalogo, Mitsubishi utensili'
    },
  },
  {
    path: '/promozioni',
    name: 'Promozioni',
    component: PromozioniPage,
    meta: {
      title: 'Promozioni e Offerte Speciali - UTEP',
      description: 'Scopri le migliori offerte sui nostri utensili professionali. Promozioni esclusive sui brand ISCAR, YG1 e Mitsubishi.',
      keywords: 'promozioni utensili, offerte ISCAR, sconti utensili professionali'
    },
  },
  {
    path: '/chi-siamo',
    name: 'ChiSiamo',
    component: ChiSiamoPage,
    meta: {
      title: 'Chi Siamo - UTEP | 50 Anni di Esperienza negli Utensili',
      description: 'UTEP: 50 anni di esperienza nella distribuzione di utensili professionali. Partner autorizzato dei migliori brand mondiali.',
      keywords: 'UTEP storia, distributore utensili Brescia, esperienza utensili professionali'
    },
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: ContattiPage,
    meta: {
      title: 'Contatti - UTEP Brescia | Consulenza Utensili Professionali',
      description: 'Contatta UTEP per consulenza specializzata su utensili da taglio. Sede a Brescia, supporto tecnico qualificato.',
      keywords: 'contatti UTEP, consulenza utensili Brescia, assistenza tecnica utensili'
    },
  },
  // 404 redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Aggiorna i meta dinamici per SEO
router.beforeEach((to, from, next) => {
  // Title
  document.title = to.meta.title || 'UTEP - Utensili Professionali'
  
  // Meta Description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'UTEP - Utensili professionali di alta qualità')
  }
  
  // Meta Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords || 'utensili professionali, UTEP')
  }
  
  next()
})

export default router