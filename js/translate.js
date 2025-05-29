// 1. Translations Object
// Placeholder Spanish translations. These will be updated in a later step.
const translations = {
  "nav_home": { "en": "Home", "es": "Inicio" },
  "nav_about": { "en": "About", "es": "Acerca de" },
  "nav_cv": { "en": "CV", "es": "CV" },
  "nav_presentations": { "en": "Presentations", "es": "Presentaciones" },
  "nav_programming": { "en": "Programming", "es": "Programación" },
  "nav_exercising": { "en": "Exercising", "es": "Ejercicio" },
  "hero_title": { "en": "Meet JP Silva", "es": "Conoce a JP Silva" },
  "hero_subtitle": { "en": "A dedicated General Practitioner Physician with a passion for programming and fitness.", "es": "Un médico de cabecera dedicado con pasión por la programación y el fitness." },
  "hero_cta_button": { "en": "View My CV", "es": "Ver Mi CV" },
  "footer_copyright": { "en": "© 2023 JP Silva. All rights reserved.", "es": "© 2023 JP Silva. Todos los derechos reservados." }
};

// 2. setLanguage Function
function setLanguage(lang) {
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[key] && translations[key][lang]) {
      element.textContent = translations[key][lang];
    }
  });
  localStorage.setItem('language', lang);
  // Optionally, update the lang attribute of the <html> tag
  document.documentElement.lang = lang;
}

// 3. loadLanguage Function
function loadLanguage() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage('en'); // Default to English
  }
}

// 4. Event Listeners
// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
  const langEnButton = document.getElementById('lang-en');
  const langEsButton = document.getElementById('lang-es');

  if (langEnButton) {
    langEnButton.addEventListener('click', () => setLanguage('en'));
  }
  if (langEsButton) {
    langEsButton.addEventListener('click', () => setLanguage('es'));
  }

  // Load the saved language or default language when the page loads
  loadLanguage();
});
