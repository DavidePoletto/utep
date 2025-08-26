import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Use router
app.use(router)

// Global properties (se necessarie)
app.config.globalProperties.$appName = 'UTEP'
app.config.globalProperties.$version = '1.0.0'

// Error handling
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info)
}

// Mount app
app.mount('#app')
