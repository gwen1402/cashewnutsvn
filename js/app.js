// Main Application Logic

// Sample product data (will be replaced with API calls)
const sampleProducts = [
    {
        id: 'prod-001',
        name: 'Hạt điều rang muối cao cấp',
        price: 280000,
        category: 'salted',
        image: '',
        description: 'Hạt điều rang muối thơm bùi, giòn tan, vị mặn vừa phải',
        stock: 100,
        nutritionInfo: {
            calories: 553,
            protein: 18,
            carbs: 30,
            fat: 44
        },
        ingredients: ['Hạt điều 100%', 'Muối biển']
    },
    {
        id: 'prod-002',
        name: 'Hạt điều rang bơ',
        price: 320000,
        category: 'roasted',
        image: '',
        description: 'Hạt điều rang bơ thơm ngon, béo ngậy tự nhiên',
        stock: 80,
        nutritionInfo: {
            calories: 574,
            protein: 18,
            carbs: 32,
            fat: 46
        },
        ingredients: ['Hạt điều 100%', 'Bơ tự nhiên']
    },
    {
        id: 'prod-003',
        name: 'Hạt điều mật ong',
        price: 350000,
        category: 'honey',
        image: '',
        description: 'Hạt điều phủ mật ong nguyên chất, ngọt thanh tự nhiên',
        stock: 60,
        nutritionInfo: {
            calories: 590,
            protein: 17,
            carbs: 38,
            fat: 43
        },
        ingredients: ['Hạt điều 100%', 'Mật ong nguyên chất']
    },
    {
        id: 'prod-004',
        name: 'Hạt điều sống nguyên vỏ',
        price: 180000,
        category: 'raw',
        image: '',
        description: 'Hạt điều sống nguyên vỏ, tươi mới từ vườn',
        stock: 120,
        nutritionInfo: {
            calories: 553,
            protein: 18,
            carbs: 30,
            fat: 44
        },
        ingredients: ['Hạt điều sống 100%']
    },
    {
        id: 'prod-005',
        name: 'Hạt điều rang tỏi',
        price: 290000,
        category: 'roasted',
        image: '',
        description: 'Hạt điều rang tỏi thơm nồng, hương vị đặc biệt',
        stock: 20,
        nutritionInfo: {
            calories: 560,
            protein: 18,
            carbs: 31,
            fat: 45
        },
        ingredients: ['Hạt điều', 'Tỏi', 'Gia vị']
    },
    {
        id: 'prod-006',
        name: 'Hạt điều rang me',
        price: 310000,
        category: 'roasted',
        image: '',
        description: 'Hạt điều rang me chua ngọt, vị độc đáo',
        stock: 0,
        nutritionInfo: {
            calories: 565,
            protein: 17,
            carbs: 33,
            fat: 44
        },
        ingredients: ['Hạt điều', 'Me', 'Đường']
    },
    {
        id: 'prod-007',
        name: 'Hạt điều muối ớt',
        price: 300000,
        category: 'salted',
        image: '',
        description: 'Hạt điều muối ớt cay nồng, kích thích vị giác',
        stock: 35,
        nutritionInfo: {
            calories: 558,
            protein: 18,
            carbs: 30,
            fat: 44
        },
        ingredients: ['Hạt điều', 'Muối', 'Ớt']
    },
    {
        id: 'prod-008',
        name: 'Hạt điều sấy giòn',
        price: 260000,
        category: 'roasted',
        image: '',
        description: 'Hạt điều sấy giòn tự nhiên, không dầu mỡ',
        stock: 45,
        nutritionInfo: {
            calories: 553,
            protein: 18,
            carbs: 30,
            fat: 44
        },
        ingredients: ['Hạt điều 100%']
    },
    {
        id: 'prod-009',
        name: 'Hạt điều vỡ rang muối',
        price: 200000,
        category: 'salted',
        image: '',
        description: 'Hạt điều vỡ rang muối, giá tốt, chất lượng cao',
        stock: 60,
        nutritionInfo: {
            calories: 553,
            protein: 18,
            carbs: 30,
            fat: 44
        },
        ingredients: ['Hạt điều vỡ', 'Muối']
    },
    {
        id: 'prod-010',
        name: 'Hạt điều mật ong chanh',
        price: 360000,
        category: 'honey',
        image: '',
        description: 'Hạt điều mật ong chanh, vị chua ngọt hài hòa',
        stock: 0,
        nutritionInfo: {
            calories: 595,
            protein: 17,
            carbs: 39,
            fat: 43
        },
        ingredients: ['Hạt điều', 'Mật ong', 'Chanh']
    },
    {
        id: 'prod-011',
        name: 'Ngũ cốc hạt điều yến mạch',
        price: 180000,
        category: 'granola',
        image: '',
        description: 'Ngũ cốc hạt điều kết hợp yến mạch, nho khô, giàu chất xơ',
        stock: 30,
        nutritionInfo: {
            calories: 450,
            protein: 12,
            carbs: 55,
            fat: 18
        },
        ingredients: ['Yến mạch', 'Hạt điều', 'Nho khô', 'Mật ong']
    },
    {
        id: 'prod-012',
        name: 'Ngũ cốc hạt điều hạnh nhân',
        price: 220000,
        category: 'granola',
        image: '',
        description: 'Ngũ cốc cao cấp với hạt điều, hạnh nhân và cranberry',
        stock: 25,
        nutritionInfo: {
            calories: 480,
            protein: 14,
            carbs: 52,
            fat: 22
        },
        ingredients: ['Yến mạch', 'Hạt điều', 'Hạnh nhân', 'Cranberry', 'Mật ong']
    },
    {
        id: 'prod-013',
        name: 'Ngũ cốc hạt điều chocolate',
        price: 200000,
        category: 'granola',
        image: '',
        description: 'Ngũ cốc hạt điều với chocolate đen, thơm ngon bổ dưỡng',
        stock: 0,
        nutritionInfo: {
            calories: 490,
            protein: 13,
            carbs: 58,
            fat: 20
        },
        ingredients: ['Yến mạch', 'Hạt điều', 'Chocolate đen', 'Mật ong']
    },
    {
        id: 'prod-014',
        name: 'Thanh dinh dưỡng hạt điều protein',
        price: 45000,
        category: 'bar',
        image: '',
        description: 'Thanh dinh dưỡng hạt điều giàu protein, năng lượng tức thì',
        stock: 100,
        nutritionInfo: {
            calories: 220,
            protein: 12,
            carbs: 25,
            fat: 9
        },
        ingredients: ['Hạt điều', 'Protein whey', 'Yến mạch', 'Mật ong']
    },
    {
        id: 'prod-015',
        name: 'Thanh dinh dưỡng hạt điều chocolate',
        price: 50000,
        category: 'bar',
        image: '',
        description: 'Thanh dinh dưỡng hạt điều phủ chocolate đen 70%',
        stock: 80,
        nutritionInfo: {
            calories: 240,
            protein: 10,
            carbs: 28,
            fat: 11
        },
        ingredients: ['Hạt điều', 'Chocolate đen 70%', 'Yến mạch', 'Mật ong']
    },
    {
        id: 'prod-016',
        name: 'Thanh dinh dưỡng hạt điều cranberry',
        price: 48000,
        category: 'bar',
        image: '',
        description: 'Thanh dinh dưỡng hạt điều với cranberry sấy khô',
        stock: 90,
        nutritionInfo: {
            calories: 210,
            protein: 9,
            carbs: 27,
            fat: 8
        },
        ingredients: ['Hạt điều', 'Cranberry', 'Yến mạch', 'Mật ong']
    },
    {
        id: 'prod-017',
        name: 'Thanh dinh dưỡng hạt điều chuối',
        price: 42000,
        category: 'bar',
        image: '',
        description: 'Thanh dinh dưỡng hạt điều với chuối sấy tự nhiên',
        stock: 0,
        nutritionInfo: {
            calories: 200,
            protein: 8,
            carbs: 29,
            fat: 7
        },
        ingredients: ['Hạt điều', 'Chuối sấy', 'Yến mạch', 'Mật ong']
    },
    {
        id: 'prod-018',
        name: 'Ngũ cốc hạt điều mix hạt',
        price: 240000,
        category: 'granola',
        image: '',
        description: 'Ngũ cốc cao cấp với 5 loại hạt dinh dưỡng',
        stock: 0,
        nutritionInfo: {
            calories: 510,
            protein: 16,
            carbs: 50,
            fat: 25
        },
        ingredients: ['Yến mạch', 'Hạt điều', 'Hạnh nhân', 'Óc chó', 'Hạt chia', 'Mật ong']
    },
    {
        id: 'prod-019',
        name: 'Thanh dinh dưỡng hạt điều dừa',
        price: 46000,
        category: 'bar',
        image: '',
        description: 'Thanh dinh dưỡng hạt điều với dừa nạo sấy thơm',
        stock: 0,
        nutritionInfo: {
            calories: 230,
            protein: 9,
            carbs: 26,
            fat: 10
        },
        ingredients: ['Hạt điều', 'Dừa nạo', 'Yến mạch', 'Mật ong']
    },
    {
        id: 'prod-020',
        name: 'Ngũ cốc hạt điều quinoa',
        price: 260000,
        category: 'granola',
        image: '',
        description: 'Ngũ cốc siêu thực phẩm với hạt điều và quinoa',
        stock: 0,
        nutritionInfo: {
            calories: 470,
            protein: 15,
            carbs: 53,
            fat: 19
        },
        ingredients: ['Quinoa', 'Yến mạch', 'Hạt điều', 'Hạt chia', 'Mật ong']
    }
];

// Application state
let allProducts = [...sampleProducts];
let filteredProducts = [...sampleProducts];
let currentPage = 1;
const productsPerPage = 8;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    renderProducts();
    updateProductCount();
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', utils.debounce((e) => {
            searchProducts(e.target.value);
        }, 300));
    }

    // Category filters
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Price filter
    const applyFilterBtn = document.getElementById('applyFilter');
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', applyFilters);
    }

    // Sort
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortProducts(e.target.value);
        });
    }

    // Clear filters
    const clearFilterBtn = document.getElementById('clearFilter');
    if (clearFilterBtn) {
        clearFilterBtn.addEventListener('click', clearFilters);
    }

    // Close product modal
    const closeProduct = document.getElementById('closeProduct');
    if (closeProduct) {
        closeProduct.addEventListener('click', hideProductModal);
    }

    // Close modal when clicking outside
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                hideProductModal();
            }
        });
    }
}

// Search products
function searchProducts(keyword) {
    if (!keyword.trim()) {
        filteredProducts = [...allProducts];
    } else {
        const lowerKeyword = keyword.toLowerCase();
        filteredProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(lowerKeyword) ||
            product.description.toLowerCase().includes(lowerKeyword)
        );
    }
    currentPage = 1;
    renderProducts();
    updateProductCount();
}

// Apply filters
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    filteredProducts = allProducts.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || 
                            selectedCategories.includes('all') ||
                            selectedCategories.includes(product.category);
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    currentPage = 1;
    renderProducts();
    updateProductCount();
}

// Sort products
function sortProducts(sortBy) {
    switch(sortBy) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name, 'vi'));
            break;
        default:
            filteredProducts = [...allProducts];
    }
    renderProducts();
}

// Clear all filters
function clearFilters() {
    // Reset checkboxes
    document.querySelectorAll('input[name="category"]').forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    
    // Reset price inputs
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    
    // Reset sort
    document.getElementById('sortBy').value = 'default';
    
    // Reset search
    document.getElementById('searchInput').value = '';
    
    // Reset products
    filteredProducts = [...allProducts];
    currentPage = 1;
    renderProducts();
    updateProductCount();
}

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="loading">
                <p>Không tìm thấy sản phẩm</p>
                <p class="text-muted">Vui lòng thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc</p>
            </div>
        `;
        return;
    }

    // Pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" onclick="showProductDetail('${product.id}')">
            <img src="${product.image}" alt="${utils.sanitizeHTML(product.name)}" class="product-image">
            <div class="product-info">
                <div class="product-category">${utils.getCategoryName(product.category)}</div>
                <h3 class="product-name">${utils.sanitizeHTML(product.name)}</h3>
                <div class="product-price">${utils.formatCurrency(product.price)}</div>
                <span class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                    ${product.stock > 0 ? 'Còn hàng' : 'Hết hàng'}
                </span>
                <button class="btn-add-cart" 
                        onclick="event.stopPropagation(); addToCart('${product.id}')"
                        ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> ${product.stock > 0 ? 'Thêm vào giỏ' : 'Hết hàng'}
                </button>
            </div>
        </div>
    `).join('');

    renderPagination();
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Trước
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    // Next button
    paginationHTML += `
        <button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Sau →
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update product count
function updateProductCount() {
    const productCount = document.getElementById('productCount');
    if (productCount) {
        productCount.textContent = filteredProducts.length;
    }
}

// Add to cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product && product.stock > 0) {
        cart.addItem(product);
    }
}

// Show product detail
function showProductDetail(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');

    if (modalTitle) {
        modalTitle.textContent = product.name;
    }

    if (modalBody) {
        modalBody.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <div>
                    <img src="${product.image}" alt="${utils.sanitizeHTML(product.name)}" 
                         style="width: 100%; border-radius: 8px;">
                </div>
                <div>
                    <div style="margin-bottom: 1rem;">
                        <span style="color: var(--secondary-green); font-weight: 500; text-transform: uppercase;">
                            ${utils.getCategoryName(product.category)}
                        </span>
                    </div>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-brown); margin-bottom: 1rem;">
                        ${utils.formatCurrency(product.price)}
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <span class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                            ${product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng'}
                        </span>
                    </div>
                    <p style="margin-bottom: 1.5rem; line-height: 1.8;">
                        ${utils.sanitizeHTML(product.description)}
                    </p>
                    <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;">Thành phần:</h4>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                        ${product.ingredients.map(ing => `<li>${utils.sanitizeHTML(ing)}</li>`).join('')}
                    </ul>
                    <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;">Thông tin dinh dưỡng (100g):</h4>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                        <li>Calories: ${product.nutritionInfo.calories} kcal</li>
                        <li>Protein: ${product.nutritionInfo.protein}g</li>
                        <li>Carbs: ${product.nutritionInfo.carbs}g</li>
                        <li>Fat: ${product.nutritionInfo.fat}g</li>
                    </ul>
                    <button class="btn-add-cart" 
                            onclick="addToCart('${product.id}'); hideProductModal();"
                            ${product.stock === 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> ${product.stock > 0 ? 'Thêm vào giỏ hàng' : 'Hết hàng'}
                    </button>
                </div>
            </div>
        `;
    }

    if (modal) {
        modal.classList.add('active');
    }
}

// Hide product modal
function hideProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
    }
}