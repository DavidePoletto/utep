<template>
  <div id="app">
    <AppHeader />
    <div class="header-spacer"></div>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* Import Google Fonts - Corporate Professional */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

/* CSS Variables - Nuova Palette UTEP */
:root {
  /* UTEP Color Palette */
  --color-primary: #f34c0a;
  /* Rosso principale */
  --color-secondary: #8C6461;
  /* Marrone rosato */
  --color-neutral-light: #BFBFBF;
  /* Grigio chiaro */
  --color-background: #F2F2F2;
  /* Grigio molto chiaro */
  --color-text-dark: #0D0D0D;
  /* Nero/grigio scuro */
  --color-white: #FFFFFF;

  /* Primary Colors - Aggiornati con la nuova palette */
  --primary-navy: #8C0303;
  --primary-navy-light: #A61E1E;
  --primary-navy-dark: #730202;

  /* Accent Colors - Derivati dalla palette */
  --accent-blue: #8C6461;
  --accent-blue-light: #A37B77;
  --accent-blue-dark: #75524F;

  --accent-orange: #8C0303;
  --accent-orange-light: #A61E1E;
  --accent-orange-dark: #730202;

  /* Alias per compatibilità */
  --accent-red: #8C0303;
  --accent-red-light: #A61E1E;
  --accent-red-dark: #730202;

  /* Supporting Colors */
  --success: #4F7942;
  --warning: #8C0303;
  --error: #8C0303;
  --info: #8C6461;

  /* Professional Grays - Aggiornati */
  --gray-50: #FAFAFA;
  --gray-100: #F2F2F2;
  --gray-200: #E5E5E5;
  --gray-300: #D4D4D4;
  --gray-400: #BFBFBF;
  --gray-500: #A3A3A3;
  --gray-600: #737373;
  --gray-700: #525252;
  --gray-800: #262626;
  --gray-900: #0D0D0D;

  /* Alias per compatibilità footer */
  --neutral-50: #FAFAFA;
  --neutral-100: #F2F2F2;
  --neutral-200: #E5E5E5;
  --neutral-300: #D4D4D4;
  --neutral-400: #BFBFBF;
  --neutral-500: #A3A3A3;
  --neutral-600: #737373;
  --neutral-700: #525252;
  --neutral-800: #262626;
  --neutral-900: #0D0D0D;

  /* Background Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F2F2F2;
  --bg-accent: #FAFAFA;
  --bg-dark: #0D0D0D;

  /* Typography - Corporate Professional */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Professional Shadows - Aggiornate */
  --shadow-xs: 0 0 0 1px rgba(13, 13, 13, 0.05);
  --shadow-sm: 0 1px 2px 0 rgba(13, 13, 13, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(13, 13, 13, 0.1), 0 2px 4px -1px rgba(13, 13, 13, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(13, 13, 13, 0.1), 0 4px 6px -2px rgba(13, 13, 13, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(13, 13, 13, 0.1), 0 10px 10px -5px rgba(13, 13, 13, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(13, 13, 13, 0.25);

  /* Borders */
  --border-radius-sm: 0.25rem;
  --border-radius: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;
  --border-radius-2xl: 1.5rem;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition: 0.2s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}

/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-primary);
  line-height: 1.6;
  color: var(--color-text-dark);
  background: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Typography - Professional */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-display);
  line-height: 1.25;
  font-weight: 600;
  color: var(--color-text-dark);
  letter-spacing: -0.025em;
}

h1 {
  font-size: 3.75rem;
  font-weight: 700;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
}

h3 {
  font-size: 2.25rem;
  font-weight: 600;
}

h4 {
  font-size: 1.875rem;
  font-weight: 600;
}

h5 {
  font-size: 1.5rem;
  font-weight: 500;
}

h6 {
  font-size: 1.25rem;
  font-weight: 500;
}

p {
  margin-bottom: 1.1rem;
  color: var(--gray-600);
  font-weight: 500;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 1.33;
}

.lead-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gray-700);
  line-height: 1.6;
}

/* Layout */
.main-content {
  min-height: calc(100vh - 160px);
  padding: 50px 0;
}

.header-spacer {
  height: 90px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 6rem 0;
}

.section-sm {
  padding: 4rem 0;
}

.section-lg {
  padding: 8rem 0;
}

/* Page Transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity var(--transition-slow);
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Professional Buttons - Aggiornati */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-family: var(--font-primary);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: all var(--transition);
  letter-spacing: 0.025em;
  white-space: nowrap;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: var(--accent-red-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--accent-blue-dark);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: rgb(88, 49, 30);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-neutral-light);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.btn-white {
  background: white;
  color: var(--color-text-dark);
  border-color: var(--color-neutral-light);
  box-shadow: var(--shadow-sm);
}

.btn-white:hover {
  background: var(--color-background);
  box-shadow: var(--shadow-md);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1rem;
}

.btn-xl {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

/* Professional Cards */
.card {
  background: var(--bg-primary);
  border: 1px solid var(--color-neutral-light);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
  border-color: var(--color-primary);
}

.card-body {
  padding: 1.5rem;
}

.card-header {
  padding: 1.5rem 1.5rem 0;
}

.card-footer {
  padding: 0 1.5rem 1.5rem;
}

/* Professional Grid */
.grid {
  display: grid;
  gap: 2rem;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-cols-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Professional Utilities */
.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-text-dark);
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--gray-600);
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-primary {
  color: var(--color-primary);
}

.text-secondary {
  color: var(--color-secondary);
}

.text-muted {
  color: var(--gray-500);
}

.text-success {
  color: var(--success);
}

.text-warning {
  color: var(--warning);
}

.text-error {
  color: var(--error);
}

.bg-primary {
  background: var(--bg-primary);
}

.bg-secondary {
  background: var(--bg-secondary);
}

.bg-accent {
  background: var(--bg-accent);
}

.bg-dark {
  background: var(--bg-dark);
}

/* Professional Spacing */
.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

/* Icons Professional */
.icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.icon-sm {
  width: 1rem;
  height: 1rem;
}

.icon-lg {
  width: 1.5rem;
  height: 1.5rem;
}

.icon-xl {
  width: 2rem;
  height: 2rem;
}

/* Professional Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-primary {
  background: var(--color-primary);
  color: white;
}

.badge-secondary {
  background: var(--color-secondary);
  color: white;
}

.badge-success {
  background: var(--success);
  color: white;
}

.badge-outline {
  background: transparent;
  border: 1px solid var(--color-neutral-light);
  color: var(--gray-600);
}

/* Responsive */
@media (max-width: 1024px) {
  .container {
    padding: 0 1.5rem;
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
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .header-spacer {
    height: 80px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
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
  .header-spacer {
    height: 70px;
  }
}

/* Professional Focus States */
.btn:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-secondary);
  outline-offset: 2px;
}

/* Professional Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Professional Loading States */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--gray-200);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Scrollbar personalizzata - Aggiornata */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}
</style>