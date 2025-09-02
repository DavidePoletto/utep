import { createRouter, createWebHistory } from 'vue-router'
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
      title: 'UTEP - Utensili Professionali',
    },
  },
  {
    path: '/cataloghi',
    name: 'Cataloghi',
    component: CataloghiPage,
    meta: {
      title: 'Cataloghi - UTEP',
    },
  },
  {
    path: '/promozioni',
    name: 'Promozioni',
    component: PromozioniPage,
    meta: {
      title: 'Promozioni - UTEP',
    },
  },
  {
    path: '/chi-siamo',
    name: 'ChiSiamo',
    component: ChiSiamoPage,
    meta: {
      title: 'Chi Siamo - UTEP',
    },
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: ContattiPage,
    meta: {
      title: 'Contatti - UTEP',
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'UTEP - Utensili Professionali'
  next()
})

export default router
