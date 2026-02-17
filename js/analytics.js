// Analytics & Tracking Module

class Analytics {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.initTracking();
    }

    // Generate unique session ID
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Initialize tracking
    initTracking() {
        this.trackPageView();
        this.trackUserBehavior();
        this.loadStoredAnalytics();
    }

    // Track page views
    trackPageView() {
        const pageData = {
            url: window.location.href,
            title: document.title,
            timestamp: new Date().toISOString(),
            sessionId: this.sessionId,
            referrer: document.referrer
        };

        this.saveEvent('pageview', pageData);
        console.log('📊 Page View:', pageData);
    }

    // Track user behavior
    trackUserBehavior() {
        // Track clicks on products
        document.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('.product-name')?.textContent;
                this.trackEvent('product_click', {
                    product: productName,
                    timestamp: new Date().toISOString()
                });
            }

            // Track add to cart
            const addToCartBtn = e.target.closest('.btn-add-cart');
            if (addToCartBtn && !addToCartBtn.disabled) {
                this.trackEvent('add_to_cart', {
                    timestamp: new Date().toISOString()
                });
            }

            // Track checkout
            const checkoutBtn = e.target.closest('.btn-checkout');
            if (checkoutBtn) {
                this.trackEvent('checkout_start', {
                    timestamp: new Date().toISOString()
                });
            }
        });

        // Track search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    if (e.target.value.trim()) {
                        this.trackEvent('search', {
                            query: e.target.value,
                            timestamp: new Date().toISOString()
                        });
                    }
                }, 1000);
            });
        }
    }

    // Track custom events
    trackEvent(eventName, eventData) {
        const event = {
            event: eventName,
            ...eventData,
            sessionId: this.sessionId
        };

        this.saveEvent(eventName, event);
        console.log('📊 Event:', event);

        // Send to Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
    }

    // Save event to localStorage
    saveEvent(eventType, eventData) {
        try {
            const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
            events.push({
                type: eventType,
                data: eventData,
                timestamp: new Date().toISOString()
            });

            // Keep only last 100 events
            if (events.length > 100) {
                events.shift();
            }

            localStorage.setItem('analytics_events', JSON.stringify(events));
        } catch (error) {
            console.error('Error saving analytics event:', error);
        }
    }

    // Load and display stored analytics
    loadStoredAnalytics() {
        try {
            const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');

            console.log('📊 Analytics Summary:');
            console.log('- Total Events:', events.length);
            console.log('- Total Orders:', orders.length);
            console.log('- Session ID:', this.sessionId);

            // Calculate statistics
            const stats = this.calculateStats(events, orders);
            this.displayStats(stats);
        } catch (error) {
            console.error('Error loading analytics:', error);
        }
    }

    // Calculate statistics
    calculateStats(events, orders) {
        const pageViews = events.filter(e => e.type === 'pageview').length;
        const productClicks = events.filter(e => e.type === 'product_click').length;
        const addToCarts = events.filter(e => e.type === 'add_to_cart').length;
        const searches = events.filter(e => e.type === 'search').length;
        const checkouts = events.filter(e => e.type === 'checkout_start').length;

        const totalRevenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);

        return {
            pageViews,
            productClicks,
            addToCarts,
            searches,
            checkouts,
            orders: orders.length,
            totalRevenue,
            conversionRate: checkouts > 0 ? ((orders.length / checkouts) * 100).toFixed(2) : 0
        };
    }

    // Display statistics in console
    displayStats(stats) {
        console.log('📈 Statistics:');
        console.log('- Page Views:', stats.pageViews);
        console.log('- Product Clicks:', stats.productClicks);
        console.log('- Add to Cart:', stats.addToCarts);
        console.log('- Searches:', stats.searches);
        console.log('- Checkouts Started:', stats.checkouts);
        console.log('- Orders Completed:', stats.orders);
        console.log('- Total Revenue:', stats.totalRevenue.toLocaleString('vi-VN') + 'đ');
        console.log('- Conversion Rate:', stats.conversionRate + '%');
    }

    // Get analytics report
    getReport() {
        const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        return {
            events,
            orders,
            stats: this.calculateStats(events, orders)
        };
    }

    // Export analytics data
    exportData() {
        const report = this.getReport();
        const dataStr = JSON.stringify(report, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `analytics_report_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    // Clear analytics data
    clearData() {
        if (confirm('Bạn có chắc muốn xóa tất cả dữ liệu phân tích?')) {
            localStorage.removeItem('analytics_events');
            console.log('✅ Analytics data cleared');
        }
    }
}

// Initialize analytics
const analytics = new Analytics();

// Make analytics available globally
window.analytics = analytics;

// Track order completion
document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', () => {
            analytics.trackEvent('order_completed', {
                timestamp: new Date().toISOString()
            });
        });
    }
});

console.log('📊 Analytics module loaded. Use window.analytics to access analytics functions.');
console.log('📊 Commands: analytics.getReport(), analytics.exportData(), analytics.clearData()');
