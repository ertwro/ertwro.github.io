class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = ['en', 'es'];
        this.fallbackLanguage = 'en';
        this.storageKey = 'jpsa_website_language';
        this.isTranslating = false;

        this.translations = {
            // Navigation
            "nav_research": {
                "en": "Research",
                "es": "Investigación"
            },
            "nav_engine": {
                "en": "Tools",
                "es": "Herramientas"
            },
            "nav_publications": {
                "en": "Publications",
                "es": "Publicaciones"
            },
            "nav_code": {
                "en": "Code",
                "es": "Código"
            },

            // Hero
            "hero_subtitle": {
                "en": "M.D. — Theoretical Physics, Topology & Medical Education",
                "es": "M.D. — Física Teórica, Topología y Educación Médica"
            },
            "hero_tagline": {
                "en": "Exploring what discrete causal structure can tell us about fundamental physics.",
                "es": "Explorando lo que la estructura causal discreta puede decirnos sobre la física fundamental."
            },

            // Research
            "research_title": {
                "en": "Research",
                "es": "Investigación"
            },
            "axiom1_title": {
                "en": "The Kuratowski Calculus",
                "es": "El Cálculo de Kuratowski"
            },
            "axiom1_desc": {
                "en": "A framework for discrete spacetime built on causal set theory and graph planarity. The central object is a finite directed acyclic graph whose local topology is constrained by Kuratowski\u2019s theorem. The calculus studies what emerges when planarity violations are resolved dynamically.",
                "es": "Un marco para el espaciotiempo discreto construido sobre la teoría de conjuntos causales y la planaridad de grafos. El objeto central es un grafo acíclico dirigido finito cuya topología local está restringida por el teorema de Kuratowski. El cálculo estudia lo que emerge cuando las violaciones de planaridad se resuelven dinámicamente."
            },
            "axiom2_title": {
                "en": "Discrete Spacetime & Combinatorial Topology",
                "es": "Espaciotiempo Discreto y Topología Combinatoria"
            },
            "axiom2_desc": {
                "en": "My work sits at the intersection of causal set theory, graph theory, and combinatorics. I study how topological obstructions in finite posets\u2014specifically K\u2085 and K\u2083\u2083 subdivisions\u2014can serve as a dynamical principle, and what physical structure this implies.",
                "es": "Mi trabajo se sitúa en la intersección de la teoría de conjuntos causales, la teoría de grafos y la combinatoria. Estudio cómo las obstrucciones topológicas en posets finitos\u2014específicamente las subdivisiones de K\u2085 y K\u2083\u2083\u2014pueden servir como principio dinámico, y qué estructura física implica esto."
            },
            "what_emerges_title": {
                "en": "Current Direction",
                "es": "Dirección Actual"
            },
            "what_emerges_desc": {
                "en": "The programme explores whether a minimal combinatorial substrate\u2014a Poisson-sprinkled DAG with planarity enforcement\u2014is sufficient to reproduce known physics. Ongoing work includes numerical simulation, formal verification in Lean 4, and the development of a hadron spectrum from Kirchhoff polynomial counting on causal subgraphs.",
                "es": "El programa explora si un sustrato combinatorio mínimo\u2014un DAG rociado por Poisson con aplicación de planaridad\u2014es suficiente para reproducir la física conocida. El trabajo en curso incluye simulación numérica, verificación formal en Lean 4, y el desarrollo de un espectro hadrónico a partir del conteo de polinomios de Kirchhoff en subgrafos causales."
            },

            // Engine
            "engine_title": {
                "en": "Computational Tools",
                "es": "Herramientas Computacionales"
            },
            "engine_desc": {
                "en": "A Rust simulation engine for exploring the Kuratowski Calculus numerically. Each realization passes through Poisson sprinkling, Kuratowski contraction, spectral dimension measurement, and 15 topological measurements (M1\u2013M15). Designed for ensemble statistics at scale\u2014O(N) per realization, deterministic seeding, binary checkpointing.",
                "es": "Un motor de simulación en Rust para explorar el Cálculo de Kuratowski numéricamente. Cada realización pasa por rociado de Poisson, contracción de Kuratowski, medición de dimensión espectral, y 15 mediciones topológicas (M1\u2013M15). Diseñado para estadísticas de ensamble a escala\u2014O(N) por realización, semilla determinista, checkpointing binario."
            },
            "stat_params": {
                "en": "free parameters",
                "es": "parámetros libres"
            },
            "stat_measurements": {
                "en": "measurements",
                "es": "mediciones"
            },
            "stat_time": {
                "en": "quick ensemble",
                "es": "ensamble rápido"
            },

            // Book
            "btn_amazon": {
                "en": "Available on Amazon",
                "es": "Disponible en Amazon"
            },

            // Publications
            "pub_title": {
                "en": "Publications",
                "es": "Publicaciones"
            },
            "pub_kc_desc": {
                "en": "The foundational mathematical framework. 10 chapters covering discrete calculus, emergent gravity, dessins d'enfants, hadron spectrum, particle decay, and modular interference. 110+ pages with formal axiom reference.",
                "es": "El marco matemático fundacional. 10 capítulos que cubren cálculo discreto, gravedad emergente, dessins d'enfants, espectro hadrónico, decaimiento de partículas e interferencia modular. 110+ páginas con referencia axiomática formal."
            },
            "pub_feg_desc": {
                "en": "The Rust simulation engine for the Kuratowski Calculus. 15 measurement modules, adaptive ensemble averaging, binary checkpointing, and deterministic seeding for reproducible topological experiments.",
                "es": "El motor de simulación en Rust para el Cálculo de Kuratowski. 15 módulos de medición, promediado adaptativo de ensamble, checkpointing binario, y semilla determinista para experimentos topológicos reproducibles."
            },
            "pub_13_title": {
                "en": "The 1/3\u20132/3 Poset Conjecture",
                "es": "La Conjetura 1/3\u20132/3 de Posets"
            },
            "pub_13_desc": {
                "en": "Formal proof architecture for the Kislitsyn-Fredman conjecture. Six-phase proof by contradiction, partially formalized in Lean 4 with Mathlib 4.",
                "es": "Arquitectura de demostración formal para la conjetura de Kislitsyn-Fredman. Demostración en seis fases por contradicción, parcialmente formalizada en Lean 4 con Mathlib 4."
            },

            "pub_platform_tag": {
                "en": "Platform",
                "es": "Plataforma"
            },
            "pub_cm_desc": {
                "en": "A bilingual medical education platform covering multiple clinical specialties. Built with Vite, Tailwind CSS, and Python automation for structured content generation, search indexing, and modular specialty pages.",
                "es": "Una plataforma bilingue de educación médica que cubre múltiples especialidades clínicas. Construida con Vite, Tailwind CSS y automatización en Python para generación estructurada de contenido, indexación de búsqueda y páginas modulares por especialidad."
            },

            // Open Source
            "code_title": {
                "en": "Open Source",
                "es": "Código Abierto"
            },
            "repo_feg": {
                "en": "Simulation engine for the Kuratowski Calculus.",
                "es": "Motor de simulación para el Cálculo de Kuratowski."
            },
            "repo_13": {
                "en": "Formal proof of the 1/3-2/3 Poset Conjecture.",
                "es": "Demostración formal de la Conjetura 1/3-2/3 de Posets."
            },
            "repo_medicine": {
                "en": "Bilingual medical education platform. Multi-specialty clinical content with automated navigation and search.",
                "es": "Plataforma bilingue de educación médica. Contenido clínico multiespecialidad con navegación automatizada y búsqueda."
            },

            // Footer
            "footer_quote": {
                "en": "\"The universe is strictly computable, finite, and structurally homeostatic. The rest is just counting.\"",
                "es": "\"El universo es estrictamente computable, finito y estructuralmente homeostático. El resto es solo contar.\""
            }
        };

        this.init();
    }

    init() {
        this.detectBrowserLanguage();
        this.loadSavedLanguage();
        this.setupEventListeners();
        this.updateLanguageButtons();
    }

    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        if (this.supportedLanguages.includes(langCode)) {
            this.currentLanguage = langCode;
        }
    }

    loadSavedLanguage() {
        try {
            const savedLang = localStorage.getItem(this.storageKey);
            if (savedLang && this.supportedLanguages.includes(savedLang)) {
                this.currentLanguage = savedLang;
            }
        } catch (e) { /* localStorage unavailable */ }
        this.setLanguage(this.currentLanguage, false);
    }

    setupEventListeners() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.attachButtonListeners());
        } else {
            this.attachButtonListeners();
        }
    }

    attachButtonListeners() {
        this.supportedLanguages.forEach(lang => {
            const button = document.getElementById(`lang-${lang}`);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.setLanguage(lang);
                });
            }
        });
    }

    async setLanguage(lang, animate = true) {
        if (!this.supportedLanguages.includes(lang) || this.isTranslating) return;

        this.isTranslating = true;
        this.currentLanguage = lang;

        if (animate) document.body.classList.add('translating');

        try {
            if (animate) await new Promise(r => setTimeout(r, 80));
            this.translateElements();
            this.updateLanguageButtons();
            document.documentElement.lang = lang;
            this.saveLanguage();
        } finally {
            this.isTranslating = false;
            if (animate) setTimeout(() => document.body.classList.remove('translating'), 150);
        }
    }

    translateElements() {
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            const t = this.translations[key];
            if (!t) return;
            const text = t[this.currentLanguage] || t[this.fallbackLanguage];
            if (text) el.textContent = text;
        });
    }

    updateLanguageButtons() {
        this.supportedLanguages.forEach(lang => {
            const btn = document.getElementById(`lang-${lang}`);
            if (!btn) return;
            btn.classList.toggle('active', lang === this.currentLanguage);
            btn.setAttribute('aria-pressed', lang === this.currentLanguage ? 'true' : 'false');
        });
    }

    saveLanguage() {
        try { localStorage.setItem(this.storageKey, this.currentLanguage); } catch (e) { /* */ }
    }
}

const translationManager = new TranslationManager();
window.TranslationManager = translationManager;
