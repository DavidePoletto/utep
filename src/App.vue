<template>
  <div id="app">
    <AppHeader />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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

/* CSS Variables - Corporate Professional Palette */
:root {
  /* Primary Colors - Professional Navy & Steel */
  --primary-navy: #1a365d;
  --primary-navy-light: #2c5282;
  --primary-navy-dark: #153e75;

  /* Accent Colors - Professional Blue */
  --accent-blue: #3182ce;
  --accent-blue-light: #4299e1;
  --accent-blue-dark: #2b77cb;

  /* Supporting Colors */
  --success: #38a169;
  --warning: #ed8936;
  --error: #e53e3e;
  --info: #3182ce;

  /* Professional Grays */
  --gray-50: #f7fafc;
  --gray-100: #edf2f7;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e1;
  --gray-400: #a0aec0;
  --gray-500: #718096;
  --gray-600: #4a5568;
  --gray-700: #2d3748;
  --gray-800: #1a202c;
  --gray-900: #171923;

  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-accent: #edf2f7;
  --bg-dark: #1a202c;

  /* Typography - Corporate Professional */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Professional Shadows */
  --shadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

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
  color: var(--gray-800);
  background: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  color: var(--gray-900);
  letter-spacing: -0.025em;
}

h1 {
  font-size: 3.75rem;
  font-weight: 700;
}

h2 {
  font-size: 3rem;
  font-weight: 600;
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
  margin-bottom: 1rem;
  color: var(--gray-600);
  font-weight: 400;
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

/* Layout */
.main-content {
  margin-top: 157px;
  min-height: calc(100vh - 160px);
}

.container {
  max-width: 1200px;
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

/* Professional Buttons */
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
  background: var(--primary-navy);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: var(--primary-navy-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--accent-blue);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: var(--accent-blue-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--primary-navy);
  border-color: var(--gray-300);
}

.btn-outline:hover {
  background: var(--primary-navy);
  color: white;
  border-color: var(--primary-navy);
}

.btn-white {
  background: white;
  color: var(--gray-900);
  border-color: var(--gray-200);
  box-shadow: var(--shadow-sm);
}

.btn-white:hover {
  background: var(--gray-50);
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
  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  overflow: hidden;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
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
  color: var(--gray-900);
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--gray-900);
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
  color: var(--primary-navy);
}

.text-secondary {
  color: var(--accent-blue);
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
  background: var(--primary-navy);
  color: white;
}

.badge-secondary {
  background: var(--accent-blue);
  color: white;
}

.badge-success {
  background: var(--success);
  color: white;
}

.badge-outline {
  background: transparent;
  border: 1px solid var(--gray-300);
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

  .main-content {
    margin-top: 97px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
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

/* Professional Focus States */
.btn:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--accent-blue);
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
  border-top-color: var(--primary-navy);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>