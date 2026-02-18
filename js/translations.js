// Translation Data Structure
// Supports Vietnamese (vi) and English (en)

const translations = {
    vi: {
        // Navigation
        nav: {
            home: "Trang chủ",
            about: "Về chúng tôi",
            policy: "Chính sách",
            contact: "Liên hệ"
        },
        
        // Header
        header: {
            searchPlaceholder: "Tìm kiếm sản phẩm...",
            cartButton: "Giỏ hàng"
        },
        
        // Hero Section
        hero: {
            title: "Premium Cashew Nuts",
            subtitle: "Hạt điều cao cấp - Thơm ngon, bổ dưỡng từ Bình Phước",
            exploreButton: "Khám phá sản phẩm"
        },
        
        // Sidebar Filters
        sidebar: {
            categoryTitle: "Danh mục",
            categories: {
                all: "Tất cả",
                roasted: "Hạt rang",
                salted: "Hạt muối",
                honey: "Hạt mật ong",
                raw: "Hạt sống",
                granola: "Ngũ cốc",
                bar: "Thanh dinh dưỡng"
            },
            priceTitle: "Khoảng giá",
            priceFrom: "Từ",
            priceTo: "Đến",
            applyButton: "Áp dụng",
            sortTitle: "Sắp xếp",
            sortOptions: {
                default: "Mặc định",
                priceAsc: "Giá tăng dần",
                priceDesc: "Giá giảm dần",
                nameAsc: "Tên A-Z",
                nameDesc: "Tên Z-A"
            },
            clearButton: "Xóa bộ lọc"
        },
        
        // Products Section
        products: {
            title: "Sản phẩm nổi bật",
            showing: "Hiển thị",
            productsText: "sản phẩm",
            inStock: "Còn hàng",
            outOfStock: "Hết hàng",
            addToCart: "Thêm vào giỏ",
            noProducts: "Không tìm thấy sản phẩm",
            noProductsHint: "Vui lòng thử tìm kiếm với từ khóa khác hoặc điều chỉnh bộ lọc",
            loading: "Đang tải sản phẩm...",
            previous: "Trước",
            next: "Sau"
        },
        
        // Product Detail Modal
        productDetail: {
            title: "Chi tiết sản phẩm",
            ingredients: "Thành phần:",
            nutrition: "Thông tin dinh dưỡng (100g):",
            calories: "Calories",
            protein: "Protein",
            carbs: "Carbs",
            fat: "Fat",
            stockAvailable: "Còn",
            stockUnit: "sản phẩm",
            addToCartButton: "Thêm vào giỏ hàng"
        },
        
        // Cart Modal
        cart: {
            title: "Giỏ hàng của bạn",
            empty: "Giỏ hàng trống",
            emptyHint: "Hãy thêm sản phẩm vào giỏ hàng!",
            total: "Tổng cộng:",
            checkoutButton: "Thanh toán",
            removeButton: "Xóa",
            quantityLabel: "Số lượng"
        },
        
        // Checkout Modal
        checkout: {
            title: "Thanh toán đơn hàng",
            customerInfo: "Thông tin khách hàng",
            fullName: "Họ và tên",
            fullNamePlaceholder: "Nhập họ và tên",
            phone: "Số điện thoại",
            phonePlaceholder: "Nhập số điện thoại",
            email: "Email",
            emailPlaceholder: "Nhập email (không bắt buộc)",
            shippingInfo: "Địa chỉ giao hàng",
            address: "Địa chỉ cụ thể",
            addressPlaceholder: "Số nhà, tên đường",
            ward: "Phường/Xã",
            wardPlaceholder: "Phường/Xã",
            district: "Quận/Huyện",
            districtPlaceholder: "Quận/Huyện",
            city: "Tỉnh/Thành phố",
            cityPlaceholder: "Tỉnh/Thành phố",
            orderNote: "Ghi chú đơn hàng",
            orderNotePlaceholder: "Ghi chú thêm về đơn hàng (không bắt buộc)",
            orderInfo: "Thông tin đơn hàng",
            subtotal: "Tạm tính:",
            shipping: "Phí vận chuyển:",
            shippingContact: "Liên hệ",
            total: "Tổng cộng:",
            paymentMethod: "Phương thức thanh toán",
            bankTransfer: "Chuyển khoản ngân hàng",
            bankName: "Ngân hàng:",
            accountNumber: "Số tài khoản:",
            accountHolder: "Chủ tài khoản:",
            transferContent: "Nội dung:",
            transferNote: "* Vui lòng chuyển khoản và gửi ảnh xác nhận qua Zalo/SMS",
            backToCart: "Quay lại giỏ hàng",
            confirmOrder: "Xác nhận đặt hàng",
            required: "*"
        },
        
        // Success Modal
        success: {
            title: "Đặt hàng thành công!",
            thankYou: "Cảm ơn bạn đã đặt hàng!",
            orderReceived: "Đơn hàng của bạn đã được ghi nhận.",
            orderCode: "Mã đơn hàng:",
            totalAmount: "Tổng tiền:",
            bankTransferInfo: "Thông tin chuyển khoản:",
            bankName: "Ngân hàng:",
            accountNumber: "Số TK:",
            accountHolder: "Chủ TK:",
            transferContent: "Nội dung:",
            contactNote: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!",
            continueShoppingButton: "Tiếp tục mua hàng"
        },
        
        // Footer
        footer: {
            aboutTitle: "Về chúng tôi",
            aboutText: "Chuyên cung cấp hạt điều cao cấp từ vùng đất Bình Phước - Thơm ngon, bổ dưỡng.",
            contactTitle: "Liên hệ",
            hotline: "Hotline:",
            email: "Email:",
            address: "Địa chỉ:",
            addressText: "Ấp 1B, Xã Phước Thái, Huyện Long Thành, Tỉnh Bình Phước",
            policyTitle: "Chính sách",
            returnPolicy: "Chính sách đổi trả",
            privacyPolicy: "Chính sách bảo mật",
            termsOfUse: "Điều khoản sử dụng",
            copyright: "© 2025 Premium Cashew Nuts. All rights reserved."
        },
        
        // Floating Contact
        floatingContact: {
            zalo: "Zalo",
            phone: "Gọi ngay"
        },
        
        // Notifications
        notifications: {
            addedToCart: "Đã thêm \"{product}\" vào giỏ hàng!",
            removedFromCart: "Đã xóa \"{product}\" khỏi giỏ hàng!",
            cartEmpty: "Giỏ hàng trống!",
            orderSuccess: "Đặt hàng thành công!"
        },
        
        // Meta Tags
        meta: {
            title: "Premium Cashew Nuts - Hạt Điều Cao Cấp Bình Phước",
            description: "Chuyên cung cấp hạt điều cao cấp từ Bình Phước - Hạt rang, hạt muối, ngũ cốc, thanh dinh dưỡng. Giao hàng toàn quốc. Hotline: 0343-365-160",
            keywords: "hạt điều, hạt điều bình phước, hạt điều cao cấp, hạt điều rang muối, ngũ cốc hạt điều, thanh dinh dưỡng"
        },
        
        // About Page
        about: {
            pageTitle: "Về Chúng Tôi",
            storyTitle: "Câu Chuyện Của Chúng Tôi",
            storyP1: "Premium Cashew Nuts được thành lập với sứ mệnh mang đến những sản phẩm hạt điều cao cấp, chất lượng nhất từ vùng đất Bình Phước - nơi có điều kiện khí hậu và đất đai lý tưởng cho cây điều phát triển.",
            storyP2: "Chúng tôi tự hào là đơn vị cung cấp hạt điều với quy trình sản xuất khép kín, từ khâu chọn giống, trồng trọt, chăm sóc, thu hoạch đến chế biến và đóng gói, đảm bảo mang đến sản phẩm tươi ngon, an toàn và bổ dưỡng nhất cho khách hàng.",
            valuesTitle: "Giá Trị Cốt Lõi",
            valueQuality: "Chất Lượng",
            valueQualityDesc: "Cam kết 100% hạt điều tự nhiên, không chất bảo quản, không hóa chất độc hại.",
            valueTrust: "Uy Tín",
            valueTrustDesc: "Minh bạch nguồn gốc, rõ ràng quy trình, đảm bảo quyền lợi khách hàng.",
            valueDedication: "Tận Tâm",
            valueDedicationDesc: "Phục vụ khách hàng với sự nhiệt tình, chu đáo và chuyên nghiệp.",
            valueInnovation: "Đổi Mới",
            valueInnovationDesc: "Không ngừng cải tiến, phát triển sản phẩm mới đáp ứng nhu cầu thị trường.",
            processTitle: "Quy Trình Sản Xuất",
            step1: "Chọn Giống",
            step1Desc: "Lựa chọn giống hạt điều chất lượng cao, năng suất tốt",
            step2: "Trồng & Chăm Sóc",
            step2Desc: "Áp dụng quy trình canh tác hữu cơ, thân thiện môi trường",
            step3: "Thu Hoạch",
            step3Desc: "Thu hái đúng độ chín, đảm bảo chất lượng tốt nhất",
            step4: "Chế Biến",
            step4Desc: "Sử dụng công nghệ hiện đại, giữ nguyên dinh dưỡng",
            step5: "Đóng Gói",
            step5Desc: "Đóng gói chân không, bảo quản tươi ngon lâu dài",
            step6: "Giao Hàng",
            step6Desc: "Vận chuyển nhanh chóng, đảm bảo sản phẩm nguyên vẹn",
            whyChooseTitle: "Tại Sao Chọn Chúng Tôi?",
            benefit1: "✓ Hạt điều 100% tự nhiên, không hóa chất",
            benefit2: "✓ Nguồn gốc rõ ràng từ vùng đất Bình Phước",
            benefit3: "✓ Giá cả cạnh tranh, ưu đãi cho khách hàng thân thiết",
            benefit4: "✓ Đa dạng sản phẩm: hạt rang, hạt muối, ngũ cốc, thanh dinh dưỡng",
            benefit5: "✓ Giao hàng nhanh chóng toàn quốc",
            benefit6: "✓ Hỗ trợ tư vấn nhiệt tình 24/7",
            benefit7: "✓ Chính sách đổi trả linh hoạt",
            contactTitle: "Liên Hệ Với Chúng Tôi",
            workingHours: "Giờ làm việc:",
            workingHoursValue: "8:00 - 20:00 (Thứ 2 - Chủ Nhật)"
        },
        
        // Policy Page
        policy: {
            pageTitle: "Chính Sách & Điều Khoản",
            returnTitle: "1. Chính Sách Đổi Trả",
            returnConditionsTitle: "1.1. Điều Kiện Đổi Trả",
            returnConditionsIntro: "Chúng tôi chấp nhận đổi trả sản phẩm trong các trường hợp sau:",
            returnCond1: "Sản phẩm bị lỗi do nhà sản xuất",
            returnCond2: "Sản phẩm không đúng với mô tả",
            returnCond3: "Sản phẩm bị hư hỏng trong quá trình vận chuyển",
            returnCond4: "Giao nhầm sản phẩm",
            returnTimeTitle: "1.2. Thời Gian Đổi Trả",
            returnTime1: "Khách hàng có thể yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng",
            returnTime2: "Sản phẩm phải còn nguyên vẹn, chưa qua sử dụng",
            returnTime3: "Còn đầy đủ bao bì, tem nhãn, hóa đơn mua hàng",
            returnProcessTitle: "1.3. Quy Trình Đổi Trả",
            returnProcess1: "Liên hệ với chúng tôi qua Hotline hoặc Zalo",
            returnProcess2: "Cung cấp thông tin đơn hàng và lý do đổi trả",
            returnProcess3: "Gửi ảnh sản phẩm cần đổi trả",
            returnProcess4: "Chúng tôi sẽ xác nhận và hướng dẫn cụ thể",
            returnProcess5: "Gửi sản phẩm về địa chỉ của chúng tôi",
            returnProcess6: "Nhận sản phẩm mới hoặc hoàn tiền trong 3-5 ngày làm việc",
            returnCostTitle: "1.4. Chi Phí Đổi Trả",
            returnCost1: "Nếu lỗi từ nhà cung cấp: Chúng tôi chịu toàn bộ chi phí",
            returnCost2: "Nếu khách hàng đổi ý: Khách hàng chịu phí vận chuyển 2 chiều",
            shippingTitle: "2. Chính Sách Giao Hàng",
            shippingRangeTitle: "2.1. Phạm Vi Giao Hàng",
            shippingRangeIntro: "Chúng tôi giao hàng toàn quốc qua các đơn vị vận chuyển uy tín:",
            shippingTimeTitle: "2.2. Thời Gian Giao Hàng",
            shippingTime1: "Nội thành Bình Phước: 1-2 ngày",
            shippingTime2: "TP.HCM và các tỉnh lân cận: 2-3 ngày",
            shippingTime3: "Các tỉnh thành khác: 3-5 ngày",
            shippingTime4: "Vùng xa, hải đảo: 5-7 ngày",
            shippingFeeTitle: "2.3. Phí Vận Chuyển",
            shippingFee1: "Đơn hàng từ 500.000đ: Miễn phí vận chuyển",
            shippingFee2: "Đơn hàng dưới 500.000đ: Phí vận chuyển theo khu vực (20.000đ - 50.000đ)",
            shippingCheckTitle: "2.4. Kiểm Tra Hàng Khi Nhận",
            shippingCheckIntro: "Khách hàng vui lòng:",
            shippingCheck1: "Kiểm tra tình trạng bên ngoài của kiện hàng",
            shippingCheck2: "Quay video khi mở hàng (nếu có thể)",
            shippingCheck3: "Kiểm tra số lượng, chủng loại sản phẩm",
            shippingCheck4: "Liên hệ ngay nếu phát hiện sai sót",
            paymentTitle: "3. Chính Sách Thanh Toán",
            paymentMethodTitle: "3.1. Hình Thức Thanh Toán",
            paymentMethod1: "Chuyển khoản ngân hàng: Chuyển trước khi giao hàng",
            paymentMethod2: "COD: Thanh toán khi nhận hàng (áp dụng đơn hàng dưới 2.000.000đ)",
            paymentInfoTitle: "3.2. Thông Tin Chuyển Khoản",
            paymentConfirmTitle: "3.3. Xác Nhận Thanh Toán",
            paymentConfirmIntro: "Sau khi chuyển khoản, vui lòng:",
            paymentConfirm1: "Chụp ảnh biên lai chuyển khoản",
            paymentConfirm2: "Gửi qua Zalo hoặc SMS đến số hotline",
            paymentConfirm3: "Chúng tôi sẽ xác nhận và xử lý đơn hàng trong 1-2 giờ",
            privacyTitle: "4. Chính Sách Bảo Mật",
            privacyCollectTitle: "4.1. Thu Thập Thông Tin",
            privacyCollectIntro: "Chúng tôi thu thập các thông tin sau:",
            privacyCollect1: "Họ tên, số điện thoại, email",
            privacyCollect2: "Địa chỉ giao hàng",
            privacyCollect3: "Thông tin đơn hàng",
            privacyUseTitle: "4.2. Sử Dụng Thông Tin",
            privacyUseIntro: "Thông tin của bạn được sử dụng để:",
            privacyUse1: "Xử lý và giao đơn hàng",
            privacyUse2: "Liên hệ xác nhận đơn hàng",
            privacyUse3: "Gửi thông tin khuyến mãi (nếu đồng ý)",
            privacyUse4: "Cải thiện dịch vụ khách hàng",
            privacyProtectTitle: "4.3. Bảo Vệ Thông Tin",
            privacyProtectIntro: "Chúng tôi cam kết:",
            privacyProtect1: "Không chia sẻ thông tin với bên thứ ba",
            privacyProtect2: "Bảo mật thông tin khách hàng tuyệt đối",
            privacyProtect3: "Sử dụng công nghệ mã hóa an toàn",
            termsTitle: "5. Điều Khoản Sử Dụng",
            termsOwnershipTitle: "5.1. Quyền Sở Hữu",
            termsOwnershipText: "Toàn bộ nội dung, hình ảnh, logo trên website thuộc quyền sở hữu của Premium Cashew Nuts. Nghiêm cấm sao chép, sử dụng mà không có sự cho phép.",
            termsResponsibilityTitle: "5.2. Trách Nhiệm Người Dùng",
            termsResponsibilityIntro: "Khi sử dụng website, bạn đồng ý:",
            termsResponsibility1: "Cung cấp thông tin chính xác, trung thực",
            termsResponsibility2: "Không sử dụng website cho mục đích bất hợp pháp",
            termsResponsibility3: "Tuân thủ các quy định pháp luật hiện hành",
            termsLimitTitle: "5.3. Giới Hạn Trách Nhiệm",
            termsLimitIntro: "Chúng tôi không chịu trách nhiệm về:",
            termsLimit1: "Thiệt hại do sử dụng sai cách sản phẩm",
            termsLimit2: "Sự cố ngoài tầm kiểm soát (thiên tai, dịch bệnh...)",
            termsLimit3: "Thông tin sai lệch do khách hàng cung cấp",
            contactSupportTitle: "6. Liên Hệ & Hỗ Trợ",
            contactSupportIntro: "Nếu có bất kỳ thắc mắc nào về chính sách, vui lòng liên hệ:",
            policyNote1: "* Chính sách có thể được cập nhật mà không cần thông báo trước. Vui lòng kiểm tra thường xuyên để cập nhật thông tin mới nhất.",
            policyNote2: "* Ngày cập nhật cuối: 17/02/2025"
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About Us",
            policy: "Policy",
            contact: "Contact"
        },
        
        // Header
        header: {
            searchPlaceholder: "Search products...",
            cartButton: "Cart"
        },
        
        // Hero Section
        hero: {
            title: "Premium Cashew Nuts",
            subtitle: "Premium cashews - Delicious and nutritious from Binh Phuoc",
            exploreButton: "Explore Products"
        },
        
        // Sidebar Filters
        sidebar: {
            categoryTitle: "Categories",
            categories: {
                all: "All",
                roasted: "Roasted",
                salted: "Salted",
                honey: "Honey",
                raw: "Raw",
                granola: "Granola",
                bar: "Nutrition Bar"
            },
            priceTitle: "Price Range",
            priceFrom: "From",
            priceTo: "To",
            applyButton: "Apply",
            sortTitle: "Sort By",
            sortOptions: {
                default: "Default",
                priceAsc: "Price: Low to High",
                priceDesc: "Price: High to Low",
                nameAsc: "Name: A-Z",
                nameDesc: "Name: Z-A"
            },
            clearButton: "Clear Filters"
        },
        
        // Products Section
        products: {
            title: "Featured Products",
            showing: "Showing",
            productsText: "products",
            inStock: "In Stock",
            outOfStock: "Out of Stock",
            addToCart: "Add to Cart",
            noProducts: "No products found",
            noProductsHint: "Please try searching with different keywords or adjust filters",
            loading: "Loading products...",
            previous: "Previous",
            next: "Next"
        },
        
        // Product Detail Modal
        productDetail: {
            title: "Product Details",
            ingredients: "Ingredients:",
            nutrition: "Nutrition Facts (per 100g):",
            calories: "Calories",
            protein: "Protein",
            carbs: "Carbs",
            fat: "Fat",
            stockAvailable: "Available:",
            stockUnit: "items",
            addToCartButton: "Add to Cart"
        },
        
        // Cart Modal
        cart: {
            title: "Your Cart",
            empty: "Cart is empty",
            emptyHint: "Add some products to your cart!",
            total: "Total:",
            checkoutButton: "Checkout",
            removeButton: "Remove",
            quantityLabel: "Quantity"
        },
        
        // Checkout Modal
        checkout: {
            title: "Checkout",
            customerInfo: "Customer Information",
            fullName: "Full Name",
            fullNamePlaceholder: "Enter your full name",
            phone: "Phone Number",
            phonePlaceholder: "Enter your phone number",
            email: "Email",
            emailPlaceholder: "Enter email (optional)",
            shippingInfo: "Shipping Address",
            address: "Street Address",
            addressPlaceholder: "House number, street name",
            ward: "Ward",
            wardPlaceholder: "Ward",
            district: "District",
            districtPlaceholder: "District",
            city: "City/Province",
            cityPlaceholder: "City/Province",
            orderNote: "Order Note",
            orderNotePlaceholder: "Additional notes about your order (optional)",
            orderInfo: "Order Information",
            subtotal: "Subtotal:",
            shipping: "Shipping:",
            shippingContact: "Contact",
            total: "Total:",
            paymentMethod: "Payment Method",
            bankTransfer: "Bank Transfer",
            bankName: "Bank:",
            accountNumber: "Account Number:",
            accountHolder: "Account Holder:",
            transferContent: "Transfer Note:",
            transferNote: "* Please transfer and send confirmation via Zalo/SMS",
            backToCart: "Back to Cart",
            confirmOrder: "Confirm Order",
            required: "*"
        },
        
        // Success Modal
        success: {
            title: "Order Successful!",
            thankYou: "Thank you for your order!",
            orderReceived: "Your order has been received.",
            orderCode: "Order Code:",
            totalAmount: "Total Amount:",
            bankTransferInfo: "Bank Transfer Information:",
            bankName: "Bank:",
            accountNumber: "Account:",
            accountHolder: "Holder:",
            transferContent: "Note:",
            contactNote: "We will contact you as soon as possible!",
            continueShoppingButton: "Continue Shopping"
        },
        
        // Footer
        footer: {
            aboutTitle: "About Us",
            aboutText: "Specializing in premium cashews from Binh Phuoc - Delicious and nutritious.",
            contactTitle: "Contact",
            hotline: "Hotline:",
            email: "Email:",
            address: "Address:",
            addressText: "Hamlet 1B, Phuoc Thai Commune, Long Thanh District, Binh Phuoc Province",
            policyTitle: "Policies",
            returnPolicy: "Return Policy",
            privacyPolicy: "Privacy Policy",
            termsOfUse: "Terms of Use",
            copyright: "© 2025 Premium Cashew Nuts. All rights reserved."
        },
        
        // Floating Contact
        floatingContact: {
            zalo: "Zalo",
            phone: "Call Now"
        },
        
        // Notifications
        notifications: {
            addedToCart: "Added \"{product}\" to cart!",
            removedFromCart: "Removed \"{product}\" from cart!",
            cartEmpty: "Cart is empty!",
            orderSuccess: "Order placed successfully!"
        },
        
        // Meta Tags
        meta: {
            title: "Premium Cashew Nuts - High Quality Cashews from Binh Phuoc",
            description: "Specializing in premium cashews from Binh Phuoc - Roasted, salted, granola, nutrition bars. Nationwide delivery. Hotline: 0343-365-160",
            keywords: "cashew nuts, binh phuoc cashews, premium cashews, roasted salted cashews, cashew granola, nutrition bars"
        },
        
        // About Page
        about: {
            pageTitle: "About Us",
            storyTitle: "Our Story",
            storyP1: "Premium Cashew Nuts was founded with the mission to bring the highest quality premium cashew products from Binh Phuoc - a region with ideal climate and soil conditions for cashew trees to thrive.",
            storyP2: "We are proud to be a cashew supplier with a closed production process, from seed selection, cultivation, care, harvesting to processing and packaging, ensuring the freshest, safest and most nutritious products for customers.",
            valuesTitle: "Core Values",
            valueQuality: "Quality",
            valueQualityDesc: "Committed to 100% natural cashews, no preservatives, no toxic chemicals.",
            valueTrust: "Trust",
            valueTrustDesc: "Transparent origin, clear process, ensuring customer rights.",
            valueDedication: "Dedication",
            valueDedicationDesc: "Serving customers with enthusiasm, care and professionalism.",
            valueInnovation: "Innovation",
            valueInnovationDesc: "Continuously improving and developing new products to meet market needs.",
            processTitle: "Production Process",
            step1: "Seed Selection",
            step1Desc: "Selecting high-quality cashew varieties with good yield",
            step2: "Cultivation & Care",
            step2Desc: "Applying organic farming processes, environmentally friendly",
            step3: "Harvesting",
            step3Desc: "Harvesting at the right ripeness, ensuring the best quality",
            step4: "Processing",
            step4Desc: "Using modern technology, preserving nutrition",
            step5: "Packaging",
            step5Desc: "Vacuum packaging, keeping fresh for a long time",
            step6: "Delivery",
            step6Desc: "Fast shipping, ensuring intact products",
            whyChooseTitle: "Why Choose Us?",
            benefit1: "✓ 100% natural cashews, no chemicals",
            benefit2: "✓ Clear origin from Binh Phuoc region",
            benefit3: "✓ Competitive prices, special offers for loyal customers",
            benefit4: "✓ Diverse products: roasted, salted, granola, nutrition bars",
            benefit5: "✓ Fast nationwide delivery",
            benefit6: "✓ Enthusiastic 24/7 support",
            benefit7: "✓ Flexible return policy",
            contactTitle: "Contact Us",
            workingHours: "Working Hours:",
            workingHoursValue: "8:00 AM - 8:00 PM (Monday - Sunday)"
        },
        
        // Policy Page
        policy: {
            pageTitle: "Policies & Terms",
            returnTitle: "1. Return Policy",
            returnConditionsTitle: "1.1. Return Conditions",
            returnConditionsIntro: "We accept product returns in the following cases:",
            returnCond1: "Product defects from manufacturer",
            returnCond2: "Product does not match description",
            returnCond3: "Product damaged during shipping",
            returnCond4: "Wrong product delivered",
            returnTimeTitle: "1.2. Return Period",
            returnTime1: "Customers can request returns within 7 days from receipt",
            returnTime2: "Product must be intact and unused",
            returnTime3: "Complete with packaging, labels, and purchase invoice",
            returnProcessTitle: "1.3. Return Process",
            returnProcess1: "Contact us via Hotline or Zalo",
            returnProcess2: "Provide order information and return reason",
            returnProcess3: "Send photos of the product to be returned",
            returnProcess4: "We will confirm and provide specific instructions",
            returnProcess5: "Send the product to our address",
            returnProcess6: "Receive new product or refund within 3-5 business days",
            returnCostTitle: "1.4. Return Costs",
            returnCost1: "If supplier error: We cover all costs",
            returnCost2: "If customer changes mind: Customer pays two-way shipping",
            shippingTitle: "2. Shipping Policy",
            shippingRangeTitle: "2.1. Shipping Coverage",
            shippingRangeIntro: "We ship nationwide through reputable carriers:",
            shippingTimeTitle: "2.2. Delivery Time",
            shippingTime1: "Binh Phuoc city: 1-2 days",
            shippingTime2: "Ho Chi Minh City and nearby provinces: 2-3 days",
            shippingTime3: "Other provinces: 3-5 days",
            shippingTime4: "Remote areas, islands: 5-7 days",
            shippingFeeTitle: "2.3. Shipping Fees",
            shippingFee1: "Orders from 500,000 VND: Free shipping",
            shippingFee2: "Orders under 500,000 VND: Shipping fee by region (20,000 - 50,000 VND)",
            shippingCheckTitle: "2.4. Package Inspection Upon Receipt",
            shippingCheckIntro: "Please:",
            shippingCheck1: "Check the external condition of the package",
            shippingCheck2: "Record video when opening (if possible)",
            shippingCheck3: "Check quantity and product types",
            shippingCheck4: "Contact immediately if any discrepancies found",
            paymentTitle: "3. Payment Policy",
            paymentMethodTitle: "3.1. Payment Methods",
            paymentMethod1: "Bank transfer: Transfer before delivery",
            paymentMethod2: "COD: Cash on delivery (applies to orders under 2,000,000 VND)",
            paymentInfoTitle: "3.2. Bank Transfer Information",
            paymentConfirmTitle: "3.3. Payment Confirmation",
            paymentConfirmIntro: "After transferring, please:",
            paymentConfirm1: "Take a photo of the transfer receipt",
            paymentConfirm2: "Send via Zalo or SMS to hotline",
            paymentConfirm3: "We will confirm and process your order within 1-2 hours",
            privacyTitle: "4. Privacy Policy",
            privacyCollectTitle: "4.1. Information Collection",
            privacyCollectIntro: "We collect the following information:",
            privacyCollect1: "Full name, phone number, email",
            privacyCollect2: "Shipping address",
            privacyCollect3: "Order information",
            privacyUseTitle: "4.2. Information Usage",
            privacyUseIntro: "Your information is used to:",
            privacyUse1: "Process and deliver orders",
            privacyUse2: "Contact for order confirmation",
            privacyUse3: "Send promotional information (if agreed)",
            privacyUse4: "Improve customer service",
            privacyProtectTitle: "4.3. Information Protection",
            privacyProtectIntro: "We commit to:",
            privacyProtect1: "Not sharing information with third parties",
            privacyProtect2: "Absolute customer information confidentiality",
            privacyProtect3: "Using secure encryption technology",
            termsTitle: "5. Terms of Use",
            termsOwnershipTitle: "5.1. Ownership Rights",
            termsOwnershipText: "All content, images, and logos on the website are owned by Premium Cashew Nuts. Copying or using without permission is strictly prohibited.",
            termsResponsibilityTitle: "5.2. User Responsibility",
            termsResponsibilityIntro: "By using the website, you agree to:",
            termsResponsibility1: "Provide accurate and truthful information",
            termsResponsibility2: "Not use the website for illegal purposes",
            termsResponsibility3: "Comply with current legal regulations",
            termsLimitTitle: "5.3. Limitation of Liability",
            termsLimitIntro: "We are not responsible for:",
            termsLimit1: "Damage from improper product use",
            termsLimit2: "Incidents beyond control (natural disasters, epidemics...)",
            termsLimit3: "Incorrect information provided by customers",
            contactSupportTitle: "6. Contact & Support",
            contactSupportIntro: "If you have any questions about our policies, please contact:",
            policyNote1: "* Policies may be updated without prior notice. Please check regularly for the latest information.",
            policyNote2: "* Last updated: 02/17/2025"
        }
    }
};

// Product translations
const productTranslations = {
    vi: {
        'prod-001': {
            name: 'Hạt điều rang muối cao cấp',
            description: 'Hạt điều rang muối thơm bùi, giòn tan, vị mặn vừa phải',
            category: 'Hạt muối',
            ingredients: ['Hạt điều 100%', 'Muối biển']
        },
        'prod-002': {
            name: 'Hạt điều rang bơ',
            description: 'Hạt điều rang bơ thơm ngon, béo ngậy tự nhiên',
            category: 'Hạt rang',
            ingredients: ['Hạt điều 100%', 'Bơ tự nhiên']
        },
        'prod-003': {
            name: 'Hạt điều mật ong',
            description: 'Hạt điều phủ mật ong nguyên chất, ngọt thanh tự nhiên',
            category: 'Hạt mật ong',
            ingredients: ['Hạt điều 100%', 'Mật ong nguyên chất']
        },
        'prod-004': {
            name: 'Hạt điều sống nguyên vỏ',
            description: 'Hạt điều sống nguyên vỏ, tươi mới từ vườn',
            category: 'Hạt sống',
            ingredients: ['Hạt điều sống 100%']
        },
        'prod-005': {
            name: 'Hạt điều rang tỏi',
            description: 'Hạt điều rang tỏi thơm nồng, hương vị đặc biệt',
            category: 'Hạt rang',
            ingredients: ['Hạt điều', 'Tỏi', 'Gia vị']
        },
        'prod-006': {
            name: 'Hạt điều rang me',
            description: 'Hạt điều rang me chua ngọt, vị độc đáo',
            category: 'Hạt rang',
            ingredients: ['Hạt điều', 'Me', 'Đường']
        },
        'prod-007': {
            name: 'Hạt điều muối ớt',
            description: 'Hạt điều muối ớt cay nồng, kích thích vị giác',
            category: 'Hạt muối',
            ingredients: ['Hạt điều', 'Muối', 'Ớt']
        },
        'prod-008': {
            name: 'Hạt điều sấy giòn',
            description: 'Hạt điều sấy giòn tự nhiên, không dầu mỡ',
            category: 'Hạt rang',
            ingredients: ['Hạt điều 100%']
        },
        'prod-009': {
            name: 'Hạt điều vỡ rang muối',
            description: 'Hạt điều vỡ rang muối, giá tốt, chất lượng cao',
            category: 'Hạt muối',
            ingredients: ['Hạt điều vỡ', 'Muối']
        },
        'prod-010': {
            name: 'Hạt điều mật ong chanh',
            description: 'Hạt điều mật ong chanh, vị chua ngọt hài hòa',
            category: 'Hạt mật ong',
            ingredients: ['Hạt điều', 'Mật ong', 'Chanh']
        },
        'prod-011': {
            name: 'Ngũ cốc hạt điều yến mạch',
            description: 'Ngũ cốc hạt điều kết hợp yến mạch, nho khô, giàu chất xơ',
            category: 'Ngũ cốc',
            ingredients: ['Yến mạch', 'Hạt điều', 'Nho khô', 'Mật ong']
        },
        'prod-012': {
            name: 'Ngũ cốc hạt điều hạnh nhân',
            description: 'Ngũ cốc cao cấp với hạt điều, hạnh nhân và cranberry',
            category: 'Ngũ cốc',
            ingredients: ['Yến mạch', 'Hạt điều', 'Hạnh nhân', 'Cranberry', 'Mật ong']
        },
        'prod-013': {
            name: 'Ngũ cốc hạt điều chocolate',
            description: 'Ngũ cốc hạt điều với chocolate đen, thơm ngon bổ dưỡng',
            category: 'Ngũ cốc',
            ingredients: ['Yến mạch', 'Hạt điều', 'Chocolate đen', 'Mật ong']
        },
        'prod-014': {
            name: 'Thanh dinh dưỡng hạt điều protein',
            description: 'Thanh dinh dưỡng hạt điều giàu protein, năng lượng tức thì',
            category: 'Thanh dinh dưỡng',
            ingredients: ['Hạt điều', 'Protein whey', 'Yến mạch', 'Mật ong']
        },
        'prod-015': {
            name: 'Thanh dinh dưỡng hạt điều chocolate',
            description: 'Thanh dinh dưỡng hạt điều phủ chocolate đen 70%',
            category: 'Thanh dinh dưỡng',
            ingredients: ['Hạt điều', 'Chocolate đen 70%', 'Yến mạch', 'Mật ong']
        },
        'prod-016': {
            name: 'Thanh dinh dưỡng hạt điều cranberry',
            description: 'Thanh dinh dưỡng hạt điều với cranberry sấy khô',
            category: 'Thanh dinh dưỡng',
            ingredients: ['Hạt điều', 'Cranberry', 'Yến mạch', 'Mật ong']
        },
        'prod-017': {
            name: 'Thanh dinh dưỡng hạt điều chuối',
            description: 'Thanh dinh dưỡng hạt điều với chuối sấy tự nhiên',
            category: 'Thanh dinh dưỡng',
            ingredients: ['Hạt điều', 'Chuối sấy', 'Yến mạch', 'Mật ong']
        },
        'prod-018': {
            name: 'Ngũ cốc hạt điều mix hạt',
            description: 'Ngũ cốc cao cấp với 5 loại hạt dinh dưỡng',
            category: 'Ngũ cốc',
            ingredients: ['Yến mạch', 'Hạt điều', 'Hạnh nhân', 'Óc chó', 'Hạt chia', 'Mật ong']
        },
        'prod-019': {
            name: 'Thanh dinh dưỡng hạt điều dừa',
            description: 'Thanh dinh dưỡng hạt điều với dừa nạo sấy thơm',
            category: 'Thanh dinh dưỡng',
            ingredients: ['Hạt điều', 'Dừa nạo', 'Yến mạch', 'Mật ong']
        },
        'prod-020': {
            name: 'Ngũ cốc hạt điều quinoa',
            description: 'Ngũ cốc siêu thực phẩm với hạt điều và quinoa',
            category: 'Ngũ cốc',
            ingredients: ['Quinoa', 'Yến mạch', 'Hạt điều', 'Hạt chia', 'Mật ong']
        }
    },
    en: {
        'prod-001': {
            name: 'Premium Salted Roasted Cashews',
            description: 'Aromatic salted roasted cashews, crispy, perfectly salted',
            category: 'Salted',
            ingredients: ['100% Cashews', 'Sea Salt']
        },
        'prod-002': {
            name: 'Butter Roasted Cashews',
            description: 'Delicious butter roasted cashews, naturally rich',
            category: 'Roasted',
            ingredients: ['100% Cashews', 'Natural Butter']
        },
        'prod-003': {
            name: 'Honey Cashews',
            description: 'Cashews coated with pure honey, naturally sweet',
            category: 'Honey',
            ingredients: ['100% Cashews', 'Pure Honey']
        },
        'prod-004': {
            name: 'Raw Cashews with Shell',
            description: 'Raw cashews with shell, fresh from the farm',
            category: 'Raw',
            ingredients: ['100% Raw Cashews']
        },
        'prod-005': {
            name: 'Garlic Roasted Cashews',
            description: 'Aromatic garlic roasted cashews, special flavor',
            category: 'Roasted',
            ingredients: ['Cashews', 'Garlic', 'Spices']
        },
        'prod-006': {
            name: 'Tamarind Roasted Cashews',
            description: 'Sweet and sour tamarind roasted cashews, unique taste',
            category: 'Roasted',
            ingredients: ['Cashews', 'Tamarind', 'Sugar']
        },
        'prod-007': {
            name: 'Spicy Salted Cashews',
            description: 'Spicy salted cashews, stimulating taste',
            category: 'Salted',
            ingredients: ['Cashews', 'Salt', 'Chili']
        },
        'prod-008': {
            name: 'Crispy Dried Cashews',
            description: 'Naturally crispy dried cashews, oil-free',
            category: 'Roasted',
            ingredients: ['100% Cashews']
        },
        'prod-009': {
            name: 'Broken Salted Roasted Cashews',
            description: 'Broken salted roasted cashews, great value, high quality',
            category: 'Salted',
            ingredients: ['Broken Cashews', 'Salt']
        },
        'prod-010': {
            name: 'Honey Lemon Cashews',
            description: 'Honey lemon cashews, harmonious sweet and sour taste',
            category: 'Honey',
            ingredients: ['Cashews', 'Honey', 'Lemon']
        },
        'prod-011': {
            name: 'Cashew Oat Granola',
            description: 'Cashew granola with oats, raisins, high in fiber',
            category: 'Granola',
            ingredients: ['Oats', 'Cashews', 'Raisins', 'Honey']
        },
        'prod-012': {
            name: 'Cashew Almond Granola',
            description: 'Premium granola with cashews, almonds and cranberries',
            category: 'Granola',
            ingredients: ['Oats', 'Cashews', 'Almonds', 'Cranberries', 'Honey']
        },
        'prod-013': {
            name: 'Cashew Chocolate Granola',
            description: 'Cashew granola with dark chocolate, delicious and nutritious',
            category: 'Granola',
            ingredients: ['Oats', 'Cashews', 'Dark Chocolate', 'Honey']
        },
        'prod-014': {
            name: 'Cashew Protein Bar',
            description: 'Cashew protein bar, instant energy',
            category: 'Nutrition Bar',
            ingredients: ['Cashews', 'Whey Protein', 'Oats', 'Honey']
        },
        'prod-015': {
            name: 'Cashew Chocolate Bar',
            description: 'Cashew bar coated with 70% dark chocolate',
            category: 'Nutrition Bar',
            ingredients: ['Cashews', '70% Dark Chocolate', 'Oats', 'Honey']
        },
        'prod-016': {
            name: 'Cashew Cranberry Bar',
            description: 'Cashew bar with dried cranberries',
            category: 'Nutrition Bar',
            ingredients: ['Cashews', 'Cranberries', 'Oats', 'Honey']
        },
        'prod-017': {
            name: 'Cashew Banana Bar',
            description: 'Cashew bar with naturally dried bananas',
            category: 'Nutrition Bar',
            ingredients: ['Cashews', 'Dried Bananas', 'Oats', 'Honey']
        },
        'prod-018': {
            name: 'Mixed Nuts Cashew Granola',
            description: 'Premium granola with 5 types of nutritious nuts',
            category: 'Granola',
            ingredients: ['Oats', 'Cashews', 'Almonds', 'Walnuts', 'Chia Seeds', 'Honey']
        },
        'prod-019': {
            name: 'Cashew Coconut Bar',
            description: 'Cashew bar with aromatic dried shredded coconut',
            category: 'Nutrition Bar',
            ingredients: ['Cashews', 'Shredded Coconut', 'Oats', 'Honey']
        },
        'prod-020': {
            name: 'Cashew Quinoa Granola',
            description: 'Superfood granola with cashews and quinoa',
            category: 'Granola',
            ingredients: ['Quinoa', 'Oats', 'Cashews', 'Chia Seeds', 'Honey']
        }
    }
};

// Export translations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, productTranslations };
}
