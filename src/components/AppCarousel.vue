<template>
    <div class="brand-slider">
        <div class="slider-track">
            <!-- Prima serie di loghi -->
            <div v-for="brand in brands" :key="`first-${brand.id}`" class="slide">
                <a :href="brand.url" target="_blank" rel="noopener noreferrer" class="brand-link"
                    @click="trackBrandClick(brand.name)">
                    <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
                </a>
            </div>
            <!-- Duplicazione per effetto infinito -->
            <div v-for="brand in brands" :key="`second-${brand.id}`" class="slide">
                <a target="_blank" rel="noopener noreferrer" class="brand-link"
                    @click="trackBrandClick(brand.name)">
                    <img :src="brand.logo" :alt="brand.name" class="brand-logo" />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BrandSlider',
    data() {
        return {
            brands: [
                {
                    id: 1,
                    name: 'ISCAR',
                    logo: '/img/brands/iscar.webp',
                    url: 'https://www.iscar.com/'
                },
                {
                    id: 2,
                    name: 'YG1',
                    logo: '/img/brands/yg1.webp',
                    url: 'https://www.yg1.it/index.html#'
                },
                {
                    id: 3,
                    name: 'Precicut',
                    logo: '/img/brands/PRECICUT.webp',
                    url: 'https://uteputensili.com'
                },
                {
                    id: 4,
                    name: 'ZCC',
                    logo: '/img/brands/zcc.webp',
                    url: "https://www.zccct-europe.com/it/home/",
                },
                {
                    id: 5,
                    name: 'Mitsubishi Materials',
                    logo: '/img/brands/mitsubishi.webp',
                    url: "https://www.mmc-carbide.com/it",
                },
                {
                    id: 6,
                    name: 'Gaetano Caporali',
                    logo: '/img/brands/caporali.webp',
                    url: "https://www.caporali.net/it/",
                },
                {
                    id: 7,
                    name: 'Vogel',
                    logo: '/img/brands/vogel.webp',
                    url: "https://www.ileveninstruments.com/it/",
                },
                {
                    id: 8,
                    name: 'Fami',
                    logo: '/img/brands/fami.webp',
                    url: "https://shop.famispa.com/?utm_medium=ppc&utm_source=google&gad_source=1&gad_campaignid=15143323368&gbraid=0AAAAABjak02aJGDN7uOiFMgSz6XTNNI__&gclid=EAIaIQobChMIus-a7r_QjwMVBKeDBx2AJhQPEAAYASAAEgIRgPD_BwE",
                },
                {
                    id: 9,
                    name: 'gerardi',
                    logo: '/img/brands/gerardi.webp',
                    url: "http://gerardi.it/",
                },
            ]
        }
    },
    methods: {
        trackBrandClick(brandName) {
            console.log(`Click su brand: ${brandName}`)

            // Analytics tracking
            if (window.gtag) {
                window.gtag('event', 'brand_click', {
                    brand_name: brandName,
                    component: 'BrandSlider'
                })
            }
        }
    }
}
</script>

<style scoped>
.brand-slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 100px;
    margin: 2rem auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius-lg);
}

.brand-slider::before,
.brand-slider::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 100px;
    z-index: 2;
    pointer-events: none;
}

.brand-slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}

.brand-slider::before {
    left: 0;
    top: 0;
}

.slider-track {
    display: flex;
    width: calc(250px * 16);
    /* 8 brands × 2 duplicazioni */
    animation: scroll 40s linear infinite;
}

.slide {
    height: 100px;
    width: 250px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.brand-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    transition: transform var(--transition);
    border-radius: var(--border-radius);
}

.brand-link:hover {
    transform: scale(1.05);
}

.brand-logo {
    max-width: 180px;
    max-height: 60px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(0.3) opacity(0.9);
    transition: all var(--transition);
}

.brand-link:hover .brand-logo {
    filter: grayscale(0) opacity(1);
    transform: scale(1.05);
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 8));
        /* 8 brand */
    }
}

/* Pausa animazione al hover */
.brand-slider:hover .slider-track {
    animation-play-state: paused;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .brand-slider {
        height: 90px;
    }

    .brand-slider::before,
    .brand-slider::after {
        height: 90px;
        width: 80px;
    }

    .slide {
        height: 90px;
        width: 200px;
        padding: 0.75rem;
    }

    .slider-track {
        width: calc(200px * 16);
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-200px * 8));
        }
    }
}

@media (max-width: 768px) {
    .brand-slider {
        height: 110px;
        /* Aumentato da 120px */
        margin: 1.5rem auto;
    }

    .brand-slider::before,
    .brand-slider::after {
        height: 110px;
        /* Aggiornato */
        width: 60px;
    }

    .slide {
        height: 110px;
        /* Aumentato */
        width: 180px;
        /* Aumentato da 150px */
        padding: 0.75rem;
        /* Aumentato padding */
    }

    .slider-track {
        width: calc(180px * 16);
        /* Aggiornato per 8 brand */
    }

    .brand-logo {
        max-width: 150px;
        /* Aumentato da 120px */
        max-height: 65px;
        /* Aumentato da 40px */
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-180px * 8));
            /* 8 brand */
        }
    }
}

@media (max-width: 480px) {
    .brand-slider {
        height: 100px;
        /* Aumentato, era troppo piccolo */
    }

    .brand-slider::before,
    .brand-slider::after {
        height: 100px;
        /* Aggiornato */
        width: 50px;
        /* Aumentato da 40px */
    }

    .slide {
        height: 100px;
        /* Aumentato */
        width: 160px;
        /* Aumentato da 120px */
        padding: 0.75rem;
        /* Aumentato padding */
    }

    .slider-track {
        width: calc(160px * 16);
        /* Aggiornato per 8 brand */
    }

    .brand-logo {
        max-width: 130px;
        /* Molto più grande */
        max-height: 55px;
        /* Molto più grande */
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(calc(-160px * 8));
            /* 8 brand */
        }
    }
}

/* Accessibilità */
@media (prefers-reduced-motion: reduce) {
    .slider-track {
        animation-duration: 80s;
        /* Rallenta l'animazione */
    }

    .brand-link:hover,
    .brand-logo {
        transform: none;
    }
}

/* Loading state per immagini mancanti */
.brand-logo[src=""],
.brand-logo:not([src]) {
    background: var(--gray-100);
    border: 2px dashed var(--gray-300);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--gray-500);
    font-weight: 600;
}

.brand-logo[src=""]::after,
.brand-logo:not([src])::after {
    content: attr(alt);
}
</style>