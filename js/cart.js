// Shopping Cart Management

class ShoppingCart {
    constructor() {
        this.items = [];
        this.loadFromStorage();
    }

    // Load cart from localStorage
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('shopping_cart');
            if (saved) {
                const data = JSON.parse(saved);
                this.items = data.items || [];
            }
        } catch (error) {
            console.error('Error loading cart:', error);
            this.items = [];
        }
    }

    // Save cart to localStorage
    saveToStorage() {
        try {
            const data = {
                items: this.items,
                totalItems: this.getTotalItems(),
                totalAmount: this.getTotalAmount()
            };
            localStorage.setItem('shopping_cart', JSON.stringify(data));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }

    // Add product to cart
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.productId === product.id);
        
        // Get translated product name
        const productName = typeof i18n !== 'undefined' ? i18n.getProductTranslation(product.id, 'name') : product.name;
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId: product.id,
                name: product.name, // Store original for reference
                price: product.price,
                quantity: quantity,
                image: product.image
            });
        }
        
        this.saveToStorage();
        this.updateCartUI();
        
        const message = typeof i18n !== 'undefined' 
            ? i18n.t('notifications.addedToCart').replace('{product}', productName)
            : `Đã thêm "${productName}" vào giỏ hàng!`;
        utils.showNotification(message);
    }

    // Remove item from cart
    removeItem(productId) {
        const item = this.items.find(i => i.productId === productId);
        const productName = typeof i18n !== 'undefined' ? i18n.getProductTranslation(productId, 'name') : (item ? item.name : '');
        
        this.items = this.items.filter(item => item.productId !== productId);
        this.saveToStorage();
        this.updateCartUI();
        
        if (item) {
            const message = typeof i18n !== 'undefined' 
                ? i18n.t('notifications.removedFromCart').replace('{product}', productName)
                : `Đã xóa "${productName}" khỏi giỏ hàng!`;
            utils.showNotification(message);
        }
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.productId === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToStorage();
                this.updateCartUI();
            }
        }
    }

    // Get total number of items
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Get total amount
    getTotalAmount() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Clear cart
    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateCartUI();
    }

    // Update cart UI
    updateCartUI() {
        // Update cart count badge
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getTotalItems();
        }

        // Update cart modal
        this.renderCartModal();
    }

    // Render cart modal content
    renderCartModal() {
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const totalAmount = document.getElementById('totalAmount');

        if (this.items.length === 0) {
            if (cartItems) cartItems.style.display = 'none';
            if (cartEmpty) cartEmpty.style.display = 'block';
            if (totalAmount) totalAmount.textContent = utils.formatCurrency(0);
            return;
        }

        if (cartItems) cartItems.style.display = 'block';
        if (cartEmpty) cartEmpty.style.display = 'none';

        const removeButtonText = typeof i18n !== 'undefined' ? i18n.t('cart.removeButton') : 'Xóa';

        if (cartItems) {
            cartItems.innerHTML = this.items.map(item => {
                const productName = typeof i18n !== 'undefined' ? i18n.getProductTranslation(item.productId, 'name') : item.name;
                
                return `
                    <div class="cart-item" data-product-id="${item.productId}">
                        <img src="${item.image}" alt="${utils.sanitizeHTML(productName)}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${utils.sanitizeHTML(productName)}</div>
                            <div class="cart-item-price">${utils.formatCurrency(item.price)}</div>
                            <div class="cart-item-controls">
                                <button class="qty-btn" onclick="cart.updateQuantity('${item.productId}', ${item.quantity - 1})">-</button>
                                <span class="qty-display">${item.quantity}</span>
                                <button class="qty-btn" onclick="cart.updateQuantity('${item.productId}', ${item.quantity + 1})">+</button>
                                <button class="btn-remove" onclick="cart.removeItem('${item.productId}')">${removeButtonText}</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        if (totalAmount) {
            totalAmount.textContent = utils.formatCurrency(this.getTotalAmount());
        }
    }

    // Show cart modal
    showModal() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.classList.add('active');
            this.renderCartModal();
        }
    }

    // Hide cart modal
    hideModal() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Listen for language changes
window.addEventListener('localeChanged', () => {
    cart.updateCartUI();
    
    // Update checkout modal if it's open
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal && checkoutModal.classList.contains('active')) {
        showCheckoutModal();
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cart button click
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => cart.showModal());
    }

    // Close cart modal
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', () => cart.hideModal());
    }

    // Close modal when clicking outside
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cart.hideModal();
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.items.length === 0) {
                const emptyMessage = typeof i18n !== 'undefined' ? i18n.t('notifications.cartEmpty') : 'Giỏ hàng trống!';
                utils.showNotification(emptyMessage, 'error');
                return;
            }
            cart.hideModal();
            showCheckoutModal();
        });
    }

    // Close checkout modal
    const closeCheckout = document.getElementById('closeCheckout');
    if (closeCheckout) {
        closeCheckout.addEventListener('click', hideCheckoutModal);
    }

    // Back to cart button
    const backToCart = document.getElementById('backToCart');
    if (backToCart) {
        backToCart.addEventListener('click', () => {
            hideCheckoutModal();
            cart.showModal();
        });
    }

    // Checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    // Close success modal
    const closeSuccess = document.getElementById('closeSuccess');
    if (closeSuccess) {
        closeSuccess.addEventListener('click', hideSuccessModal);
    }

    // Continue shopping button
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            hideSuccessModal();
            cart.clear();
        });
    }

    // Initialize cart UI
    cart.updateCartUI();
});

// Show checkout modal
function showCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    // Render checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.items.map(item => {
            const productName = typeof i18n !== 'undefined' ? i18n.getProductTranslation(item.productId, 'name') : item.name;
            
            return `
                <div class="checkout-item">
                    <span class="item-name">${utils.sanitizeHTML(productName)} x ${item.quantity}</span>
                    <span class="item-price">${utils.formatCurrency(item.price * item.quantity)}</span>
                </div>
            `;
        }).join('');
    }

    // Update totals
    const subtotal = cart.getTotalAmount();
    document.getElementById('checkoutSubtotal').textContent = utils.formatCurrency(subtotal);
    document.getElementById('checkoutTotal').textContent = utils.formatCurrency(subtotal);

    modal.classList.add('active');
}

// Hide checkout modal
function hideCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Handle checkout form submission
function handleCheckoutSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        customerEmail: document.getElementById('customerEmail').value,
        shippingAddress: document.getElementById('shippingAddress').value,
        shippingWard: document.getElementById('shippingWard').value,
        shippingDistrict: document.getElementById('shippingDistrict').value,
        shippingCity: document.getElementById('shippingCity').value,
        orderNote: document.getElementById('orderNote').value,
        items: cart.items,
        totalAmount: cart.getTotalAmount(),
        orderDate: new Date().toISOString()
    };

    // Generate order code
    const orderCode = 'DH' + Date.now().toString().slice(-8);

    // Save order to localStorage (in real app, send to server)
    try {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
            orderCode,
            ...formData
        });
        localStorage.setItem('orders', JSON.stringify(orders));
    } catch (error) {
        console.error('Error saving order:', error);
    }

    // Hide checkout modal
    hideCheckoutModal();

    // Show success modal
    showSuccessModal(orderCode, formData);
}

// Show success modal
function showSuccessModal(orderCode, orderData) {
    const modal = document.getElementById('successModal');
    if (!modal) return;

    document.getElementById('orderCode').textContent = orderCode;
    document.getElementById('orderTotal').textContent = utils.formatCurrency(orderData.totalAmount);
    document.getElementById('orderTransferContent').textContent = `${orderData.customerName} ${orderData.customerPhone}`;

    modal.classList.add('active');
}

// Hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}