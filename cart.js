 //Add java script for shopping cart
// Add to cart function: saves selected products into sessionStorage
function addToCart(productName, quantity = 1, size = '') {
	let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
	let item = cart.find(i => i.name === productName && i.size === size);
	if (item) {
		item.quantity += parseInt(quantity, 10);
	} else {
		cart.push({ name: productName, quantity: parseInt(quantity, 10), size });
	}
	sessionStorage.setItem('cart', JSON.stringify(cart));
	// Update cart count display if present
	const cartCountSpan = document.getElementById('cartCount');
	if (cartCountSpan) {
		let total = cart.reduce((sum, i) => sum + i.quantity, 0);
		cartCountSpan.textContent = total;
	}
}

// Remove item from cart
function removeFromCart(productName, size = '') {
	let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
	cart = cart.filter(i => !(i.name === productName && i.size === size));
	sessionStorage.setItem('cart', JSON.stringify(cart));
	displayCartContents();
	// Update cart count display if present
	const cartCountSpan = document.getElementById('cartCount');
	if (cartCountSpan) {
		let total = cart.reduce((sum, i) => sum + i.quantity, 0);
		cartCountSpan.textContent = total;
	}
}

// Update quantity for an item in cart
function updateCartQuantity(productName, size = '', newQuantity) {
	let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
	let item = cart.find(i => i.name === productName && i.size === size);
	if (item) {
		item.quantity = parseInt(newQuantity, 10);
		if (item.quantity <= 0) {
			cart = cart.filter(i => !(i.name === productName && i.size === size));
		}
		sessionStorage.setItem('cart', JSON.stringify(cart));
		displayCartContents();
		// Update cart count display if present
		const cartCountSpan = document.getElementById('cartCount');
		if (cartCountSpan) {
			let total = cart.reduce((sum, i) => sum + i.quantity, 0);
			cartCountSpan.textContent = total;
		}
	}
}

// Display cart contents in a container with id 'cart-items'
function displayCartContents() {
	const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
	const container = document.getElementById('cart-items');
	if (!container) return;
	if (cart.length === 0) {
		container.innerHTML = '<p>Your cart is empty.</p>';
		return;
	}
	let html = '<table style="width:100%;border-collapse:collapse;"><tr><th>Product</th><th>Size</th><th>Quantity</th><th>Actions</th></tr>';
	cart.forEach(item => {
		html += `<tr>
			<td>${item.name}</td>
			<td>${item.size || '-'}</td>
			<td><input type="number" min="1" value="${item.quantity}" style="width:50px" onchange="updateCartQuantity('${item.name.replace(/'/g, "&#39;")}', '${item.size.replace(/'/g, "&#39;")}', this.value)"></td>
			<td><button onclick="removeFromCart('${item.name.replace(/'/g, "&#39;")}', '${item.size.replace(/'/g, "&#39;")}')">Remove</button></td>
		</tr>`;
	});
	html += '</table>';
	container.innerHTML = html;
}

// Automatically display cart contents on cart.html
if (window.location.pathname.includes('cart.html')) {
	document.addEventListener('DOMContentLoaded', displayCartContents);
}
