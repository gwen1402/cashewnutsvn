// Internationalization (i18n) Module
// Manages language switching and translations

class I18n {
    constructor() {
        this.currentLocale = 'vi'; // Default language
        this.supportedLocales = ['vi', 'en'];
        this.translations = translations || {};
        this.productTranslations = productTranslations || {};
    }

    // Initialize i18n system
    init() {
        // Load saved preference
        const savedLocale = this.loadPreference();
        if (savedLocale && this.supportedLocales.includes(savedLocale)) {
            this.currentLocale = savedLocale;
        }
        
        // Update content on initialization
        this.updateContent();
        this.updateMetaTags();
        
        return this;
    }

    // Get current locale
    getCurrentLocale() {
        return this.currentLocale;
    }

    // Set locale and update UI
    setLocale(locale) {
        // Validate locale
        if (!this.supportedLocales.includes(locale)) {
            console.warn(`Unsupported locale: ${locale}. Defaulting to 'vi'`);
            locale = 'vi';
        }

        // Store current scroll position
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Update locale
        this.currentLocale = locale;

        // Save preference
        this.savePreference(locale);

        // Update all content
        this.updateContent();
        this.updateMetaTags();

        // Restore scroll position
        window.scrollTo(0, scrollPosition);

        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('localeChanged', { 
            detail: { locale } 
        }));
    }

    // Get translation by key
    t(key, locale = null) {
        locale = locale || this.currentLocale;
        
        // Get nested value from translations object
        const value = this.getNestedValue(this.translations[locale], key);
        
        // Fallback to Vietnamese if translation missing
        if (!value && locale !== 'vi') {
            const fallback = this.getNestedValue(this.translations['vi'], key);
            if (process.env.NODE_ENV === 'development') {
                console.warn(`Missing translation for key: ${key} in locale: ${locale}`);
            }
            return fallback || key;
        }
        
        return value || key;
    }

    // Get nested value from object using dot notation
    getNestedValue(obj, path) {
        if (!obj || !path) return null;
        
        const keys = path.split('.');
        let current = obj;
        
        for (const key of keys) {
            if (current[key] === undefined) {
                return null;
            }
            current = current[key];
        }
        
        return current;
    }

    // Get product translation
    getProductTranslation(productId, field, locale = null) {
        locale = locale || this.currentLocale;
        
        const product = this.productTranslations[locale]?.[productId];
        if (!product) {
            // Fallback to Vietnamese
            return this.productTranslations['vi']?.[productId]?.[field] || '';
        }
        
        return product[field] || '';
    }

    // Save preference to localStorage
    savePreference(locale) {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }
        
        try {
            const data = {
                locale: locale,
                timestamp: Date.now()
            };
            localStorage.setItem('preferred_language', JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving language preference:', error);
            return false;
        }
    }

    // Load preference from localStorage
    loadPreference() {
        if (!this.isLocalStorageAvailable()) {
            return null;
        }
        
        try {
            const saved = localStorage.getItem('preferred_language');
            if (saved) {
                const data = JSON.parse(saved);
                return data.locale;
            }
        } catch (error) {
            console.error('Error loading language preference:', error);
        }
        
        return null;
    }

    // Check if localStorage is available
    isLocalStorageAvailable() {
        try {
            const test = '__localStorage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    // Update all translatable content
    updateContent() {
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.value = translation;
                }
            } else {
                element.textContent = translation;
            }
        });

        // Update elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            element.innerHTML = this.t(key);
        });

        // Update select options
        this.updateSelectOptions();

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLocale;

        // Update language switcher UI
        this.updateLanguageSwitcher();
    }

    // Update select options with translations
    updateSelectOptions() {
        const sortSelect = document.getElementById('sortBy');
        if (sortSelect) {
            const options = sortSelect.querySelectorAll('option');
            options.forEach(option => {
                const value = option.value;
                let key = '';
                switch(value) {
                    case 'default':
                        key = 'sidebar.sortOptions.default';
                        break;
                    case 'price-asc':
                        key = 'sidebar.sortOptions.priceAsc';
                        break;
                    case 'price-desc':
                        key = 'sidebar.sortOptions.priceDesc';
                        break;
                    case 'name-asc':
                        key = 'sidebar.sortOptions.nameAsc';
                        break;
                    case 'name-desc':
                        key = 'sidebar.sortOptions.nameDesc';
                        break;
                }
                if (key) {
                    option.textContent = this.t(key);
                }
            });
        }
    }

    // Update language switcher active state
    updateLanguageSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const lang = btn.getAttribute('data-lang');
            if (lang === this.currentLocale) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Update meta tags
    updateMetaTags() {
        const locale = this.currentLocale;
        
        // Update page title
        const title = this.t('meta.title');
        if (title) {
            document.title = title;
        }

        // Update meta description
        const description = this.t('meta.description');
        this.updateMetaTag('name', 'description', description);

        // Update meta keywords
        const keywords = this.t('meta.keywords');
        this.updateMetaTag('name', 'keywords', keywords);

        // Update Open Graph tags
        this.updateMetaTag('property', 'og:title', title);
        this.updateMetaTag('property', 'og:description', description);

        // Update Twitter tags
        this.updateMetaTag('property', 'twitter:title', title);
        this.updateMetaTag('property', 'twitter:description', description);
    }

    // Helper to update meta tag
    updateMetaTag(attribute, name, content) {
        if (!content) return;
        
        let meta = document.querySelector(`meta[${attribute}="${name}"]`);
        if (meta) {
            meta.setAttribute('content', content);
        } else {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            meta.setAttribute('content', content);
            document.head.appendChild(meta);
        }
    }

    // Format currency based on locale
    formatCurrency(amount) {
        const locale = this.currentLocale === 'vi' ? 'vi-VN' : 'en-US';
        const currency = this.currentLocale === 'vi' ? 'VND' : 'USD';
        
        if (this.currentLocale === 'en') {
            // Convert VND to USD (approximate rate: 1 USD = 24,000 VND)
            amount = amount / 24000;
        }
        
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: this.currentLocale === 'en' ? 2 : 0
        }).format(amount);
    }

    // Get translated text with variable replacement
    tWithVars(key, vars = {}) {
        let text = this.t(key);
        Object.keys(vars).forEach(varKey => {
            text = text.replace(`{${varKey}}`, vars[varKey]);
        });
        return text;
    }
}

// Create global i18n instance
const i18n = new I18n();

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.i18n = i18n;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = i18n;
}
