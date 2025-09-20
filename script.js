// Render related products grid on products-details.html
function renderRelatedProducts() {
    if (!window.location.pathname.includes('products-details.html')) return;
    const products = JSON.parse(sessionStorage.getItem('allProducts')) || [];
    const grid = document.getElementById('related-products-grid');
    if (!grid || !products.length) return;
    grid.innerHTML = '';
    // Show up to 4 related products (excluding current)
    const params = new URLSearchParams(window.location.search);
    const currentId = params.get('id');
    const related = products.filter(p => String(p.id) !== String(currentId)).slice(0, 4);
    related.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-4';
        card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">
            <h4 style="cursor:pointer;color:#de005e;" onclick="window.location.href='products-details.html?id=${product.id}&product=${encodeURIComponent(product.name)}'">${product.name}</h4>
            <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
            </div>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name.replace(/'/g, "&#39;")}')">Add To cart</button>
        `;
        grid.appendChild(card);
    });
}

// Automatically render related products on products-details.html
if (window.location.pathname.includes('products-details.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        renderProductDetails();
        renderRelatedProducts();
    });
}
// Display product details from sessionStorage in products-details.html
function renderProductDetails() {
    var productData = sessionStorage.getItem('selectedProduct');
    var detailsContainer = document.getElementById('product-details-container');
    var infoContainer = document.getElementById('product-info');
    if (!productData) {
        if (infoContainer) {
            infoContainer.innerHTML = '<h2 style="color:red;">Product not found.</h2>';
        }
        if (detailsContainer) {
            detailsContainer.innerHTML = '<div style="color:red;">No images available.</div>';
        }
        return;
    }
    var product = JSON.parse(productData);
    var images = product.images || [];
    // Loading spinner
    if (detailsContainer) {
        detailsContainer.innerHTML = '<div id="loading-spinner" style="text-align:center;padding:24px;"><span>Loading...</span></div>';
    }
    setTimeout(function() {
        if (detailsContainer) {
            detailsContainer.innerHTML = '';
            var mainImg = document.createElement('img');
            mainImg.id = 'MainImg';
            mainImg.src = images.length ? images[0] : '';
            mainImg.alt = product.name || '';
            mainImg.style.width = '100%';
            detailsContainer.appendChild(mainImg);
            var thumbnailsRow = document.createElement('div');
            thumbnailsRow.className = 'small-img-row';
            thumbnailsRow.id = 'thumbnails';
            if (images.length) {
                images.forEach(function(img) {
                    var thumb = document.createElement('img');
                    thumb.src = img;
                    thumb.alt = product.name + ' thumbnail';
                    thumb.style.width = '48px';
                    thumb.style.height = '48px';
                    thumb.style.margin = '0 6px 12px 0';
                    thumb.style.cursor = 'pointer';
                    thumb.onclick = function() {
                        mainImg.src = img;
                    };
                    thumbnailsRow.appendChild(thumb);
                });
            } else {
                thumbnailsRow.innerHTML = '<span style="color:#888;">No images available.</span>';
            }
            detailsContainer.appendChild(thumbnailsRow);
        }
        // Product info
        if (infoContainer) {
            infoContainer.innerHTML = '';
            var categoryP = document.createElement('p');
            categoryP.id = 'product-category';
            categoryP.textContent = product.category || '';
            infoContainer.appendChild(categoryP);
            var nameH1 = document.createElement('h1');
            nameH1.id = 'product-name';
            nameH1.textContent = product.name || '';
            infoContainer.appendChild(nameH1);
            var priceH4 = document.createElement('h4');
            priceH4.id = 'product-price';
            priceH4.textContent = product.price ? ('$' + product.price.toFixed(2)) : '';
            infoContainer.appendChild(priceH4);
            // Description (if available)
            if (product.description) {
                var descP = document.createElement('p');
                descP.id = 'product-description';
                descP.textContent = product.description;
                descP.style.margin = '12px 0';
                infoContainer.appendChild(descP);
            }
            var sizesSelect = document.createElement('select');
            sizesSelect.id = 'product-sizes';
            if (product.sizes && product.sizes.length) {
                product.sizes.forEach(function(size) {
                    var opt = document.createElement('option');
                    opt.value = size;
                    opt.textContent = size;
                    sizesSelect.appendChild(opt);
                });
            } else {
                var opt = document.createElement('option');
                opt.value = '';
                opt.textContent = 'One Size';
                sizesSelect.appendChild(opt);
            }
            infoContainer.appendChild(sizesSelect);
            var quantityInput = document.createElement('input');
            quantityInput.type = 'number';
            quantityInput.id = 'product-quantity';
            quantityInput.value = 1;
            quantityInput.min = 1;
            infoContainer.appendChild(quantityInput);
            var addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'button';
            addToCartBtn.id = 'add-to-cart-btn';
            addToCartBtn.textContent = 'Add to cart';
            addToCartBtn.onclick = function() {
                if (typeof addToCart === 'function') {
                    addToCart(product.name, quantityInput.value, sizesSelect.value);
                }
            };
            infoContainer.appendChild(addToCartBtn);
        }
    }, 400); // Simulate loading
}
document.addEventListener('DOMContentLoaded', renderProductDetails);
// If on products-details.html, run the product details display
if (window.location.pathname.includes('products-details.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        renderProductDetails();
        renderRelatedProducts();
    });
}

// Toast message function
function showToast(message, type = 'info') {
    var toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '32px';
    toast.style.right = '32px';
    toast.style.background = type === 'error' ? '#ffdddd' : (type === 'success' ? '#d4edda' : '#e0e0e0');
    toast.style.color = type === 'error' ? '#a94442' : (type === 'success' ? '#155724' : '#333');
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '6px';
    toast.style.zIndex = '9999';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    toast.style.fontWeight = 'bold';
    document.body.appendChild(toast);
    setTimeout(function() { if (toast) toast.remove(); }, 3000);
}

// Enhance product selection feedback
if (window.location.pathname.includes('products-details.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        var productData = sessionStorage.getItem('selectedProduct');
        if (productData) {
            var product = JSON.parse(productData);
            showToast('Product selected: ' + (product.name || ''), 'success');
        } else {
            showToast('No product selected. Please choose a product from the shop.', 'error');
        }
    });
}

// Cart logic: add new items and increase quantity for existing items (using sessionStorage)
function addToCart(productName, quantity = 1, size = '') {
    // Get cart from localStorage or initialize
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    // Try to find existing item (by name and size)
    let item = cart.find(i => i.name === productName && i.size === size);
    if (item) {
        // Show message: item already in cart
        showToast('This item has already been added to the cart.', 'error');
        return;
    } else {
        cart.push({ name: productName, quantity: parseInt(quantity, 10), size });
        showToast(quantity + ' x ' + productName + (size ? ' (' + size + ')' : '') + ' added to cart!', 'success');
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Update cart count display if present
    const cartCountSpan = document.getElementById('cartCount');
    if (cartCountSpan) {
        let total = cart.reduce((sum, i) => sum + i.quantity, 0);
        cartCountSpan.textContent = total;
        // Animate cart icon
        const cartIcon = document.getElementById('cartIcon');
        if (cartIcon) {
            cartIcon.classList.add('cart-animate');
            setTimeout(() => cartIcon.classList.remove('cart-animate'), 600);
        }
    }
    // Also update cartCountPage if present (cart.html)
    const cartCountPage = document.getElementById('cartCountPage');
    if (cartCountPage) {
        let total = cart.reduce((sum, i) => sum + i.quantity, 0);
        cartCountPage.textContent = total;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
    
        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            
            // If so, prevent further dragging
            isDragging = false;
            return;
        }
    
        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
    
        // Return if window is smaller than 800
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards
        const totalCardWidth = carousel.scrollWidth;
        
        // Calculate the maximum scroll position
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
        
        // If the carousel is at the end, stop autoplay
        if (carousel.scrollLeft >= maxScrollLeft) return;
        
        // Autoplay the carousel after every 2500ms
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth;
        });
    });
});


// Add to cart functionality for single product page
document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.querySelector('.single-product .button');
    const quantityInput = document.querySelector('.single-product input[type="number"]');
    const sizeSelect = document.querySelector('.single-product select');
    const cartCountSpan = document.getElementById('cartCount');

    // Fallback if cartCountSpan is not found
    function updateCartCount() {
        if (cartCountSpan) {
            let count = parseInt(cartCountSpan.textContent, 10) || 0;
            cartCountSpan.textContent = count + parseInt(quantityInput.value, 10);
        }
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const productName = document.querySelector('.single-product h1').textContent;
            const size = sizeSelect.value;
            const quantity = quantityInput.value;

            // You can expand this to store cart items in localStorage or show a popup
            updateCartCount();

            // Optional: Show confirmation
            alert(`${quantity} x ${productName} (${size}) added to cart!`);
        });
    }
});



// Display cart contents in a container with id 'cart-items'
function displayCartContents() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-items');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    // Clear previous cart display
    container.innerHTML = '';
    let html = '';
    let itemSubtotal = 0;
    let tax = 0;
    let finalTotal = 0;
    if (cart.length === 0) {
        html += `<p>Your cart is empty.</p>`;
        html += `<table style='width:100%;border-collapse:collapse;'><tr><th>Image</th><th>Product</th><th>Size</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Remove</th></tr></table>`;
        container.innerHTML = html;
        var summaryDiv = document.getElementById('cart-summary');
        if (summaryDiv) summaryDiv.innerHTML = `<strong>Item Subtotal: $0.00<br>Tax: $0.00<br>Final Total: $0.00</strong>`;
        return;
    }
    html += '<table style="width:100%;border-collapse:collapse;"><tr><th>Image</th><th>Product</th><th>Size</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Remove</th></tr>';
    cart.forEach(item => {
        let imgSrc = '';
        let price = 0;
        let subtotal = 0;
        if (typeof products !== 'undefined') {
            let prod = products.find(p => p.name === item.name);
            if (prod) {
                if (prod.images && prod.images.length > 0) {
                    imgSrc = prod.images[0];
                }
                price = prod.price || 0;
            }
        }
        subtotal = price * item.quantity;
        itemSubtotal += subtotal;
        html += `<tr>
            <td>${imgSrc ? `<img src='${imgSrc}' alt='${item.name}' style='width:48px;height:48px;'>` : ''}</td>
            <td>${item.name}</td>
            <td>${item.size || '-'}</td>
            <td>$${price.toFixed(2)}</td>
            <td><input type='number' min='1' value='${item.quantity}' style='width:48px;text-align:center;' onchange="updateCartQuantity('${item.name.replace(/'/g, "&#39;")}', '${item.size.replace(/'/g, "&#39;")}', this.value)"></td>
            <td>$${subtotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name.replace(/'/g, "&#39;")}', '${item.size.replace(/'/g, "&#39;")}')">Remove</button></td>
        </tr>`;
    // Expose updateCartQuantity globally if not already
    if (typeof window.updateCartQuantity !== 'function') {
        window.updateCartQuantity = function(productName, size, newQuantity) {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            let item = cart.find(i => i.name === productName && i.size === size);
            if (item) {
                item.quantity = Math.max(1, parseInt(newQuantity, 10));
                sessionStorage.setItem('cart', JSON.stringify(cart));
                displayCartContents();
                // Update cart count display if present
                const cartCountSpan = document.getElementById('cartCount');
                if (cartCountSpan) {
                    let total = cart.reduce((sum, i) => sum + i.quantity, 0);
                    cartCountSpan.textContent = total;
                }
            }
        };
    }
    });
    tax = itemSubtotal * 0.07; // 7% tax
    finalTotal = itemSubtotal + tax;
    html += `</table>`;
    container.innerHTML = html;
    var summaryDiv = document.getElementById('cart-summary');
    if (summaryDiv) summaryDiv.innerHTML = `<strong>Item Subtotal: $${itemSubtotal.toFixed(2)}<br>Tax: $${tax.toFixed(2)}<br>Final Total: $${finalTotal.toFixed(2)}</strong>`;

    // Expose removeFromCart globally if not already
    if (typeof window.removeFromCart !== 'function') {
        window.removeFromCart = function(productName, size = '') {
            if (confirm('Are you sure you want to remove this item from the cart?')) {
                let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
                let removedItem = cart.find(i => i.name === productName && i.size === size);
                cart = cart.filter(i => !(i.name === productName && i.size === size));
                sessionStorage.setItem('cart', JSON.stringify(cart));
                displayCartContents();
                // Update cart count display if present
                const cartCountSpan = document.getElementById('cartCount');
                if (cartCountSpan) {
                    let total = cart.reduce((sum, i) => sum + i.quantity, 0);
                    cartCountSpan.textContent = total;
                }
                // Show undo message
                if (removedItem) {
                    let undoDiv = document.createElement('div');
                    undoDiv.id = 'undo-remove-msg';
                    undoDiv.style.position = 'fixed';
                    undoDiv.style.bottom = '32px';
                    undoDiv.style.right = '32px';
                    undoDiv.style.background = '#222';
                    undoDiv.style.color = '#fff';
                    undoDiv.style.padding = '12px 24px';
                    undoDiv.style.borderRadius = '6px';
                    undoDiv.style.zIndex = '9999';
                    undoDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                    undoDiv.innerHTML = `Item removed. <button style='margin-left:12px;background:#e67e22;color:#fff;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;' id='undo-remove-btn'>Undo</button>`;
                    document.body.appendChild(undoDiv);
                    let undoTimeout = setTimeout(() => {
                        if (undoDiv) undoDiv.remove();
                    }, 5000);
                    document.getElementById('undo-remove-btn').onclick = function() {
                        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
                        cart.push(removedItem);
                        sessionStorage.setItem('cart', JSON.stringify(cart));
                        displayCartContents();
                        if (undoDiv) undoDiv.remove();
                        clearTimeout(undoTimeout);
                    };
                }
            }
        };
    }

    // Clear cart button functionality
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.onclick = function() {
            if (confirm('Are you sure you want to clear the entire cart?')) {
                sessionStorage.setItem('cart', JSON.stringify([]));
                displayCartContents();
                const cartCountSpan = document.getElementById('cartCount');
                if (cartCountSpan) cartCountSpan.textContent = 0;
            }
        };
    }
}
// Automatically display cart contents on cart.html
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', displayCartContents);
}
// Quick View modal logic for index.html
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('quickViewModal');
    var closeBtn = document.getElementById('closeModal');
    if (closeBtn && modal) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    }
});
// Ratings functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.rating').forEach(function(ratingDiv) {
        var stars = ratingDiv.querySelectorAll('i');
        stars.forEach(function(star) {
            star.onclick = function() {
                var value = parseInt(star.getAttribute('data-value'));
                stars.forEach(function(s, idx) {
                    if (idx < value) {
                        s.classList.remove('fa-star-o');
                        s.classList.add('fa-star');
                    } else {
                        s.classList.remove('fa-star');
                        s.classList.add('fa-star-o');
                    }
                });
                ratingDiv.setAttribute('data-rating', value);
            };
        });
    });
});

// Newsletter subscription functionality
// Handles validation, error/success messages, and API integration

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletterForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var emailInput = document.getElementById('newsletterEmail');
        var errorDiv = document.getElementById('newsletterError');
        var successDiv = document.getElementById('newsletterSuccess');
        var email = emailInput.value.trim();
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
        // Simple email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorDiv.textContent = 'Please enter a valid email address.';
            errorDiv.style.display = 'block';
            return;
        }
        // Simulate API call
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
        .then(function(response) {
            if (response.ok) {
                successDiv.textContent = 'Thank you for subscribing!';
                successDiv.style.display = 'block';
                emailInput.value = '';
            } else {
                throw new Error('Subscription failed. Please try again.');
            }
        })
        .catch(function() {
            errorDiv.textContent = 'Subscription failed. Please try again.';
            errorDiv.style.display = 'block';
        });
    });
});

//-------script for registration & login form------

function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form=>  form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
    // Only run on product listing page
    if (window.location.pathname.includes('product.html')) {
        // Load all products from sessionStorage
        var allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
        document.querySelectorAll('.col-4').forEach(function(card) {
            card.style.cursor = 'pointer';
            card.onclick = function(e) {
                var name = card.querySelector('h4')?.textContent?.trim();
                if (name && allProducts) {
                    var productObj = allProducts.find(p => p.name === name);
                    if (productObj) {
                        sessionStorage.setItem('selectedProduct', JSON.stringify(productObj));
                        window.location.href = 'products-details.html?id=' + encodeURIComponent(productObj.id) + '&product=' + encodeURIComponent(name);
                    }
                }
            };
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Save all products to sessionStorage on product listing page
    if (window.location.pathname.includes('product.html')) {
        if (typeof products !== 'undefined' && Array.isArray(products)) {
            sessionStorage.setItem('allProducts', JSON.stringify(products));
        }
    }
});