// Discord Analytics Bot
// Gửi thông tin lượng truy cập website qua Discord webhook

class DiscordAnalytics {
    constructor(webhookUrl) {
        this.webhookUrl = webhookUrl;
        this.sessionKey = 'analytics_session';
        this.statsKey = 'analytics_stats';
        this.lastSentKey = 'analytics_last_sent';
        
        // Khởi tạo session
        this.initSession();
        
        // Gửi thông báo khi có người truy cập
        this.trackVisit();
        
        // Gửi báo cáo định kỳ (mỗi 1 giờ)
        this.scheduleReports();
    }
    
    // Khởi tạo session cho người dùng
    initSession() {
        const session = sessionStorage.getItem(this.sessionKey);
        if (!session) {
            const sessionId = this.generateSessionId();
            sessionStorage.setItem(this.sessionKey, sessionId);
            this.isNewVisitor = true;
        } else {
            this.isNewVisitor = false;
        }
    }
    
    // Tạo session ID ngẫu nhiên
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Lấy thông tin thiết bị và trình duyệt
    getDeviceInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let os = 'Unknown';
        
        // Phát hiện trình duyệt
        if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
        else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
        else if (ua.indexOf('Safari') > -1) browser = 'Safari';
        else if (ua.indexOf('Edge') > -1) browser = 'Edge';
        else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) browser = 'IE';
        
        // Phát hiện hệ điều hành
        if (ua.indexOf('Win') > -1) os = 'Windows';
        else if (ua.indexOf('Mac') > -1) os = 'MacOS';
        else if (ua.indexOf('Linux') > -1) os = 'Linux';
        else if (ua.indexOf('Android') > -1) os = 'Android';
        else if (ua.indexOf('iOS') > -1) os = 'iOS';
        
        return { browser, os };
    }
    
    // Lấy thông tin trang hiện tại
    getPageInfo() {
        return {
            url: window.location.href,
            path: window.location.pathname,
            title: document.title,
            referrer: document.referrer || 'Direct'
        };
    }
    
    // Lưu thống kê vào localStorage
    saveStats(stats) {
        try {
            const currentStats = this.getStats();
            const updated = {
                totalVisits: (currentStats.totalVisits || 0) + 1,
                uniqueVisitors: currentStats.uniqueVisitors || 0,
                pages: currentStats.pages || {},
                browsers: currentStats.browsers || {},
                os: currentStats.os || {},
                lastVisit: new Date().toISOString()
            };
            
            // Cập nhật unique visitors
            if (this.isNewVisitor) {
                updated.uniqueVisitors += 1;
            }
            
            // Cập nhật thống kê trang
            const page = stats.page.path;
            updated.pages[page] = (updated.pages[page] || 0) + 1;
            
            // Cập nhật thống kê trình duyệt
            updated.browsers[stats.device.browser] = (updated.browsers[stats.device.browser] || 0) + 1;
            
            // Cập nhật thống kê OS
            updated.os[stats.device.os] = (updated.os[stats.device.os] || 0) + 1;
            
            localStorage.setItem(this.statsKey, JSON.stringify(updated));
            return updated;
        } catch (e) {
            console.error('Error saving stats:', e);
            return null;
        }
    }
    
    // Lấy thống kê từ localStorage
    getStats() {
        try {
            const stats = localStorage.getItem(this.statsKey);
            return stats ? JSON.parse(stats) : {};
        } catch (e) {
            return {};
        }
    }
    
    // Theo dõi lượt truy cập
    async trackVisit() {
        if (!this.webhookUrl) {
            console.warn('Discord webhook URL not configured');
            return;
        }
        
        const device = this.getDeviceInfo();
        const page = this.getPageInfo();
        const timestamp = new Date().toISOString();
        
        const visitData = {
            device,
            page,
            timestamp,
            isNewVisitor: this.isNewVisitor
        };
        
        // Lưu thống kê
        const stats = this.saveStats(visitData);
        
        // Gửi thông báo real-time cho lượt truy cập mới
        if (this.isNewVisitor) {
            await this.sendVisitNotification(visitData, stats);
        }
    }
    
    // Gửi thông báo lượt truy cập qua Discord
    async sendVisitNotification(visitData, stats) {
        const embed = {
            title: '🌐 Người truy cập mới',
            color: 0x00ff00, // Màu xanh lá
            fields: [
                {
                    name: '📄 Trang',
                    value: `[${visitData.page.title}](${visitData.page.url})`,
                    inline: false
                },
                {
                    name: '🌐 Trình duyệt',
                    value: visitData.device.browser,
                    inline: true
                },
                {
                    name: '💻 Hệ điều hành',
                    value: visitData.device.os,
                    inline: true
                },
                {
                    name: '🔗 Nguồn',
                    value: visitData.page.referrer,
                    inline: false
                },
                {
                    name: '📊 Tổng lượt truy cập',
                    value: stats.totalVisits.toString(),
                    inline: true
                },
                {
                    name: '👥 Người dùng duy nhất',
                    value: stats.uniqueVisitors.toString(),
                    inline: true
                }
            ],
            timestamp: visitData.timestamp,
            footer: {
                text: 'Premium Cashew Nuts Analytics'
            }
        };
        
        await this.sendToDiscord({ embeds: [embed] });
    }
    
    // Gửi báo cáo tổng hợp
    async sendSummaryReport() {
        const stats = this.getStats();
        
        if (!stats.totalVisits) {
            return; // Không có dữ liệu
        }
        
        // Tạo danh sách trang phổ biến
        const topPages = Object.entries(stats.pages || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([page, count]) => `• ${page}: **${count}** lượt`)
            .join('\n') || 'Chưa có dữ liệu';
        
        // Tạo danh sách trình duyệt
        const browserStats = Object.entries(stats.browsers || {})
            .sort((a, b) => b[1] - a[1])
            .map(([browser, count]) => `• ${browser}: **${count}** (${((count/stats.totalVisits)*100).toFixed(1)}%)`)
            .join('\n') || 'Chưa có dữ liệu';
        
        // Tạo danh sách OS
        const osStats = Object.entries(stats.os || {})
            .sort((a, b) => b[1] - a[1])
            .map(([os, count]) => `• ${os}: **${count}** (${((count/stats.totalVisits)*100).toFixed(1)}%)`)
            .join('\n') || 'Chưa có dữ liệu';
        
        const embed = {
            title: '📊 Báo cáo lượng truy cập',
            description: 'Thống kê tổng hợp lượng truy cập website',
            color: 0x0099ff, // Màu xanh dương
            fields: [
                {
                    name: '📈 Tổng quan',
                    value: `**Tổng lượt truy cập:** ${stats.totalVisits}\n**Người dùng duy nhất:** ${stats.uniqueVisitors}\n**Lượt truy cập cuối:** ${new Date(stats.lastVisit).toLocaleString('vi-VN')}`,
                    inline: false
                },
                {
                    name: '📄 Top trang được xem',
                    value: topPages,
                    inline: false
                },
                {
                    name: '🌐 Trình duyệt',
                    value: browserStats,
                    inline: true
                },
                {
                    name: '💻 Hệ điều hành',
                    value: osStats,
                    inline: true
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Premium Cashew Nuts Analytics'
            }
        };
        
        await this.sendToDiscord({ embeds: [embed] });
        
        // Cập nhật thời gian gửi báo cáo cuối
        localStorage.setItem(this.lastSentKey, Date.now().toString());
    }
    
    // Gửi dữ liệu đến Discord webhook
    async sendToDiscord(payload) {
        if (!this.webhookUrl) return;
        
        try {
            await fetch(this.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        } catch (error) {
            console.error('Error sending to Discord:', error);
        }
    }
    
    // Lên lịch gửi báo cáo định kỳ
    scheduleReports() {
        // Kiểm tra xem đã đến lúc gửi báo cáo chưa
        const checkAndSend = () => {
            const lastSent = localStorage.getItem(this.lastSentKey);
            const now = Date.now();
            const oneHour = 60 * 60 * 1000; // 1 giờ
            
            if (!lastSent || (now - parseInt(lastSent)) >= oneHour) {
                this.sendSummaryReport();
            }
        };
        
        // Kiểm tra ngay khi load
        checkAndSend();
        
        // Kiểm tra mỗi 10 phút
        setInterval(checkAndSend, 10 * 60 * 1000);
    }
    
    // Reset thống kê (dùng cho testing hoặc reset định kỳ)
    resetStats() {
        localStorage.removeItem(this.statsKey);
        localStorage.removeItem(this.lastSentKey);
        console.log('Analytics stats reset');
    }
}

// Export để sử dụng
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DiscordAnalytics;
}
