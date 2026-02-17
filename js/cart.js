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
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                image: product.image
            });
        }
        
        this.saveToStorage();
        this.updateCartUI();
        utils.showNotification(`Đã thêm "${product.name}" vào giỏ hàng!`);
    }

    // Remove item from cart
    removeItem(productId) {
        const item = this.items.find(i => i.productId === productId);
        this.items = this.items.filter(item => item.productId !== productId);
        this.saveToStorage();
        this.updateCartUI();
        if (item) {
            utils.showNotification(`Đã xóa "${item.name}" khỏi giỏ hàng!`);
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

        if (cartItems) {
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item" data-product-id="${item.productId}">
                    <img src="${item.image}" alt="${utils.sanitizeHTML(item.name)}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${utils.sanitizeHTML(item.name)}</div>
                        <div class="cart-item-price">${utils.formatCurrency(item.price)}</div>
                        <div class="cart-item-controls">
                            <button class="qty-btn" onclick="cart.updateQuantity('${item.productId}', ${item.quantity - 1})">-</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="cart.updateQuantity('${item.productId}', ${item.quantity + 1})">+</button>
                            <button class="btn-remove" onclick="cart.removeItem('${item.productId}')">Xóa</button>
                        </div>
                    </div>
                </div>
            `).join('');
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
                utils.showNotification('Giỏ hàng trống!', 'error');
                return;
            }
            // TODO: Navigate to checkout page
            utils.showNotification('Chức năng thanh toán đang được phát triển!');
        });
    }

    // Initialize cart UI
    cart.updateCartUI();
});