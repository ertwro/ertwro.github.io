/**
 * Enhanced Translation System
 * Features:
 * - Better language detection
 * - Smooth transitions
 * - Fallback handling
 * - Browser language detection
 * - RTL support preparation
 * - Performance optimizations
 */

class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = ['en', 'es'];
        this.fallbackLanguage = 'en';
        this.storageKey = 'jp_website_language';
        this.isTranslating = false;

        // Enhanced translations object with better organization
        this.translations = {
            // Navigation
            "nav_home": {
                "en": "Home",
                "es": "Inicio"
            },
            "nav_about": {
                "en": "About",
                "es": "Acerca de"
            },
            "nav_cv": {
                "en": "CV",
                "es": "CV"
            },
            "nav_presentations": {
                "en": "Medicine",
                "es": "Medicina"
            },
            "nav_programming": {
                "en": "Programming",
                "es": "Programación"
            },
            "nav_exercising": {
                "en": "Exercising",
                "es": "Ejercicio"
            },

            // Hero Section
            "hero_title": {
                "en": "Meet JP Silva",
                "es": "Conoce a JP Silva"
            },
            "hero_subtitle": {
                "en": "A dedicated General Practitioner Physician with a passion for programming and fitness.",
                "es": "Un médico general dedicado con pasión por la programación y el fitness."
            },
            "hero_cta_button": {
                "en": "View My CV",
                "es": "Ver Mi CV"
            },

            // Footer
            "footer_copyright": {
                "en": "© 2023 JP Silva. All rights reserved.",
                "es": "© 2023 JP Silva. Todos los derechos reservados."
            },

            // Common phrases that might be used across pages
            "loading": {
                "en": "Loading...",
                "es": "Cargando..."
            },
            "error": {
                "en": "Error loading content",
                "es": "Error al cargar el contenido"
            },
            "back_to_top": {
                "en": "Back to top",
                "es": "Volver arriba"
            }
        };

        this.init();
    }

    /**
     * Initialize the translation system
     */
    init() {
        this.detectBrowserLanguage();
        this.loadSavedLanguage();
        this.setupEventListeners();
        this.updateLanguageButtons();
    }

    /**
     * Detect browser's preferred language
     */
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();

        if (this.supportedLanguages.includes(langCode)) {
            this.currentLanguage = langCode;
        }
    }

    /**
     * Load saved language from localStorage or use detected language
     */
    loadSavedLanguage() {
        try {
            const savedLang = localStorage.getItem(this.storageKey);
            if (savedLang && this.supportedLanguages.includes(savedLang)) {
                this.currentLanguage = savedLang;
            }
        } catch (error) {
            console.warn('Could not access localStorage:', error);
        }

        this.setLanguage(this.currentLanguage, false);
    }

    /**
     * Set up event listeners for language buttons
     */
    setupEventListeners() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.attachButtonListeners());
        } else {
            this.attachButtonListeners();
        }
    }

    /**
     * Attach event listeners to language buttons
     */
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

    /**
     * Set the active language
     * @param {string} lang - Language code
     * @param {boolean} animate - Whether to animate the transition
     */
    async setLanguage(lang, animate = true) {
        if (!this.supportedLanguages.includes(lang)) {
            console.warn(`Language '${lang}' is not supported`);
            return;
        }

        if (this.isTranslating) {
            return; // Prevent multiple simultaneous translations
        }

        this.isTranslating = true;
        this.currentLanguage = lang;

        // Add loading state if animating
        if (animate) {
            document.body.classList.add('translating');
        }

        try {
            // Small delay for smooth animation
            if (animate) {
                await this.delay(100);
            }

            this.translateElements();
            this.updateLanguageButtons();
            this.updateDocumentLanguage();
            this.saveLanguage();

            // Dispatch custom event for other scripts to listen to
            this.dispatchLanguageChangeEvent(lang);

        } catch (error) {
            console.error('Error during translation:', error);
        } finally {
            this.isTranslating = false;

            if (animate) {
                // Remove loading state after a short delay
                setTimeout(() => {
                    document.body.classList.remove('translating');
                }, 200);
            }
        }
    }

    /**
     * Translate all elements with data-translate-key attribute
     */
    translateElements() {
        const elements = document.querySelectorAll('[data-translate-key]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = this.getTranslation(key);

            if (translation) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG') {
                    element.alt = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    /**
     * Get translation for a specific key
     * @param {string} key - Translation key
     * @returns {string|null} - Translated text or null if not found
     */
    getTranslation(key) {
        if (this.translations[key] && this.translations[key][this.currentLanguage]) {
            return this.translations[key][this.currentLanguage];
        }

        // Fallback to default language
        if (this.translations[key] && this.translations[key][this.fallbackLanguage]) {
            console.warn(`Translation missing for '${key}' in '${this.currentLanguage}', using fallback`);
            return this.translations[key][this.fallbackLanguage];
        }

        console.warn(`Translation missing for key: '${key}'`);
        return null;
    }

    /**
     * Update the active state of language buttons
     */
    updateLanguageButtons() {
        this.supportedLanguages.forEach(lang => {
            const button = document.getElementById(`lang-${lang}`);
            if (button) {
                if (lang === this.currentLanguage) {
                    button.classList.add('active');
                    button.setAttribute('aria-pressed', 'true');
                } else {
                    button.classList.remove('active');
                    button.setAttribute('aria-pressed', 'false');
                }
            }
        });
    }

    /**
     * Update the document's language attribute
     */
    updateDocumentLanguage() {
        document.documentElement.lang = this.currentLanguage;

        // Update direction for RTL languages (future enhancement)
        const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
        if (rtlLanguages.includes(this.currentLanguage)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    /**
     * Save current language to localStorage
     */
    saveLanguage() {
        try {
            localStorage.setItem(this.storageKey, this.currentLanguage);
        } catch (error) {
            console.warn('Could not save language to localStorage:', error);
        }
    }

    /**
     * Dispatch custom event when language changes
     * @param {string} lang - New language code
     */
    dispatchLanguageChangeEvent(lang) {
        const event = new CustomEvent('languageChanged', {
            detail: {
                language: lang,
                previousLanguage: this.currentLanguage
            }
        });
        document.dispatchEvent(event);
    }

    /**
     * Add new translations dynamically (useful for additional pages)
     * @param {Object} newTranslations - Object containing new translation keys
     */
    addTranslations(newTranslations) {
        Object.assign(this.translations, newTranslations);
    }

    /**
     * Get current language
     * @returns {string} Current language code
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Get supported languages
     * @returns {Array} Array of supported language codes
     */
    getSupportedLanguages() {
        return [...this.supportedLanguages];
    }

    /**
     * Utility function to create a delay
     * @param {number} ms - Milliseconds to delay
     * @returns {Promise}
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Format text based on language (for future use with numbers, dates, etc.)
     * @param {string} type - Type of formatting (number, date, currency)
     * @param {*} value - Value to format
     * @returns {string} Formatted value
     */
    formatText(type, value) {
        const locale = this.currentLanguage === 'es' ? 'es-ES' : 'en-US';

        switch (type) {
            case 'number':
                return new Intl.NumberFormat(locale).format(value);
            case 'currency':
                return new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: this.currentLanguage === 'es' ? 'EUR' : 'USD'
                }).format(value);
            case 'date':
                return new Intl.DateTimeFormat(locale).format(new Date(value));
            default:
                return value.toString();
        }
    }
}

// Initialize the translation system
const translationManager = new TranslationManager();

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TranslationManager;
}

// Make it globally available
window.TranslationManager = translationManager;

// Example of listening to language change events
document.addEventListener('languageChanged', (event) => {
    console.log(`Language changed to: ${event.detail.language}`);
    // You can add additional logic here, such as:
    // - Loading different stylesheets for different languages
    // - Updating analytics
    // - Loading language-specific content
});

// Keyboard shortcut for language switching (Ctrl/Cmd + L)
document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
        event.preventDefault();
        const currentLang = translationManager.getCurrentLanguage();
        const nextLang = currentLang === 'en' ? 'es' : 'en';
        translationManager.setLanguage(nextLang);
    }
});
