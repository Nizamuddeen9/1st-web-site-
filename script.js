document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();  

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    

    if (email === "" || password === "") {

        alert("Please fill all fields");

    } else {

        alert("Login Successful! (Add backend for real login)");

    }

});

function appendToDisplay(value) {

    document.getElementById("calc-display").value += value;

}

function clearDisplay() {

    document.getElementById("calc-display").value = "";

}

function calculateResult() {

    let expression = document.getElementById("calc-display").value;

    

    try {

        let result = eval(expression);

        document.getElementById("calc-display").value = result;

    } catch (error) {

        alert("Invalid Expression");

    }

}
let maxItemsPerList = 10;  // Ek list me max 10 items honge, badhaya bhi ja sakta hai

let maxLists = 1000;  // Maximum 1000 lists tak ja sakta hai

// Save custom column name

function saveCustomColumn() {

    let customCol = document.getElementById("customColName").value || "Custom";

    localStorage.setItem("customColumnName", customCol);

    updateLists();

}

// Add new item to the list

function addItem() {

    let name = document.getElementById("name").value;

    let rs = document.getElementById("rs").value;

    let kg = document.getElementById("kg").value;

    let company = document.getElementById("company").value;

    let custom = document.getElementById("custom").value;

    if (!name || !rs || !kg || !company || !custom) {

        alert("Please fill all fields!");

        return;

    }

    let lists = JSON.parse(localStorage.getItem("lists")) || [[]];

    let lastList = lists[lists.length - 1];

    // Check if current list is full

    if (lastList.length >= maxItemsPerList) {

        if (lists.length < maxLists) {

            lists.push([]);

        } else {

            alert("Maximum list limit reached (1000 lists)");

            return;

        }

    }

    // Add item to the latest list

    lists[lists.length - 1].push({ name, rs, kg, company, custom });

    localStorage.setItem("lists", JSON.stringify(lists));

    // Clear input fields

    document.getElementById("name").value = "";

    document.getElementById("rs").value = "";

    document.getElementById("kg").value = "";

    document.getElementById("company").value = "";

    document.getElementById("custom").value = "";

    updateLists();

}

// Update list UI

function updateLists() {

    let lists = JSON.parse(localStorage.getItem("lists")) || [[]];

    let customColName = localStorage.getItem("customColumnName") || "Custom";

    let container = document.getElementById("listsContainer");

    container.innerHTML = "";

    lists.forEach((list, index) => {

        let table = document.createElement("table");

        table.innerHTML = `

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Rs</th>

                    <th>Kg</th>

                    <th>Company</th>

                    <th>${customColName}</th>

                </tr>

            </thead>

            <tbody id="list${index}"></tbody>

        `;

        container.appendChild(table);

        let tbody = document.getElementById(`list${index}`);

        list.forEach(item => {

            let row = document.createElement("tr");

            row.innerHTML = `<td>${item.name}</td><td>${item.rs}</td><td>${item.kg}</td><td>${item.company}</td><td>${item.custom}</td>`;

            tbody.appendChild(row);

        });
    function toggleTheme() {

    document.body.classList.toggle("dark-mode");

}
      function login() {

    let user = document.getElementById("username").value;

    localStorage.setItem("currentUser", user);

    alert("Welcome, " + user + "!");

}
      let ctx = document.getElementById("myChart").getContext("2d");

let myChart = new Chart(ctx, {

    type: "bar",

    data: {

        labels: ["Apple", "Samsung", "Sony"],

        datasets: [{ label: "Rs (Price)", data: [5000, 8000, 6000], backgroundColor: ["red", "blue", "green"] }]

    }

});
      function shareWhatsApp() {

    let text = "My Shopping List:\n" + document.querySelector("table").innerText;

    window.open("https://wa.me/?text=" + encodeURIComponent(text));

}
      const db = firebase.firestore();

function saveToCloud(data) {

    db.collection("lists").add(data).then(() => alert("Saved!"));

}
      if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/sw.js').then(() => console.log("PWA Ready"));

}
      fetch("https://api.example.com/price?item=Apple").then(res => res.json())

    .then(data => console.log("Price on Amazon:", data.price));
      const socket = io();

socket.on("updateList", data => updateTable(data));
      let history = JSON.parse(localStorage.getItem("history")) || [];

function saveHistory(item) { history.push(item); localStorage.setItem("history", JSON.stringify(history)); }
      function calculateTotal() {

    let total = [...document.querySelectorAll(".price")].reduce((sum, el) => sum + Number(el.innerText), 0);

    document.getElementById("total-spent").innerText = "Total Spent: Rs " + total;

}
      function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");

}
      firebase.database().ref("messages").push({ name: "User", message: "Hello!" });
      
      <img loading="lazy" src="image.jpg" alt="Fast Image">
        
        let history = JSON.parse(localStorage.getItem("history")) || [];

function suggestItems() {

    let commonItems = ["Milk", "Sugar", "Bread"];

    alert("You may need: " + commonItems.join(", "));

}
      let previousEntries = ["Milk", "Sugar", "Bread"];

document.getElementById("nameInput").addEventListener("input", function() {

    let matches = previousEntries.filter(item => item.startsWith(this.value));

    showSuggestions(matches);

});
      fetch("https://api.openai.com/v1/chat", { method: "POST", body: JSON.stringify({ prompt: "How can I help?" }) })
      let encrypted = CryptoJS.AES.encrypt("Hello World", "secret-key").toString();
      // Step 1: Include CryptoJS Library (if not already included)

// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

// Step 2: Encrypt Data

let secretKey = "my-very-strong-secret-key"; // Change this to a secure key

let encrypted = CryptoJS.AES.encrypt("Hello World", secretKey).toString();

console.log("🔒 Encrypted:", encrypted);

// Step 3: Decrypt Data

let decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(CryptoJS.enc.Utf8);

console.log("🔓 Decrypted:", decrypted);

      // 🔄 Dark Mode Toggle

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

}

// 🔍 Search Function

function filterList() {

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#customerTable tr");

    rows.forEach((row, index) => {

        if (index === 0) return;

        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";

    });

}

// 🎤 Voice Input (Speech to Text)

let recognition = new webkitSpeechRecognition();

recognition.lang = "en-US"; 

recognition.onresult = function(event) {

    document.getElementById("name").value = event.results[0][0].transcript;

};

function startListening() {

    recognition.start();

}

// 📊 Total Price & Weight Calculation

function updateTotal() {

    let totalRs = 0, totalKg = 0;

    document.querySelectorAll(".rs").forEach(td => totalRs += parseFloat(td.innerText || 0));

    document.querySelectorAll(".kg").forEach(td => totalKg += parseFloat(td.innerText || 0));

    document.getElementById("totalRs").innerText = totalRs;

    document.getElementById("totalKg").innerText = totalKg;

}

// 📥 Export Table Data to CSV

function exportToCSV() {

    let data = [...document.querySelectorAll("table tr")].map(row => 

        [...row.children].map(td => td.innerText).join(",")

    ).join("\n");

    let blob = new Blob([data], { type: 'text/csv' });

    let a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "customer_list.csv";

    a.click();

}
      document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();  

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    

    if (email === "" || password === "") {

        alert("Please fill all fields");

    } else {

        alert("Login Successful! (Add backend for real login)");

    }

});
      let maxItemsPerList = 10;  // Ek list me max 10 items honge, badhaya bhi ja sakta hai

let maxLists = 1000;  // Maximum 1000 lists tak ja sakta hai

// Save custom column name

function saveCustomColumn() {

    let customCol = document.getElementById("customColName").value || "Custom";

    localStorage.setItem("customColumnName", customCol);

    updateLists();

}

// Add new item to the list

function addItem() {

    let name = document.getElementById("name").value;

    let rs = document.getElementById("rs").value;

    let kg = document.getElementById("kg").value;

    let company = document.getElementById("company").value;

    let custom = document.getElementById("custom").value;

    if (!name || !rs || !kg || !company || !custom) {

        alert("Please fill all fields!");

        return;

    }

    let lists = JSON.parse(localStorage.getItem("lists")) || [[]];

    let lastList = lists[lists.length - 1];

    // Check if current list is full

    if (lastList.length >= maxItemsPerList) {

        if (lists.length < maxLists) {

            lists.push([]);

        } else {

            alert("Maximum list limit reached (1000 lists)");

            return;

        }

    }

    // Add item to the latest list

    lists[lists.length - 1].push({ name, rs, kg, company, custom });

    localStorage.setItem("lists", JSON.stringify(lists));

    // Clear input fields

    document.getElementById("name").value = "";

    document.getElementById("rs").value = "";

    document.getElementById("kg").value = "";

    document.getElementById("company").value = "";

    document.getElementById("custom").value = "";

    updateLists();

}

// Update list UI

function updateLists() {

    let lists = JSON.parse(localStorage.getItem("lists")) || [[]];

    let customColName = localStorage.getItem("customColumnName") || "Custom";

    let container = document.getElementById("listsContainer");

    container.innerHTML = "";

    lists.forEach((list, index) => {

        let table = document.createElement("table");

        table.innerHTML = `

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Rs</th>

                    <th>Kg</th>

                    <th>Company</th>

                    <th>${customColName}</th>

                </tr>

            </thead>

            <tbody id="list${index}"></tbody>

        `;

        container.appendChild(table);

        let tbody = document.getElementById(`list${index}`);

        list.forEach(item => {

            let row = document.createElement("tr");

            row.innerHTML = `<td>${item.name}</td><td>${item.rs}</td><td>${item.kg}</td><td>${item.company}</td><td>${item.custom}</td>`;

            tbody.appendChild(row);

        });

    });

}

// Load data on page load

document.addEventListener("DOMContentLoaded", updateLists);
      // Login Function

function login() {

    let username = document.getElementById("username").value;

    if (username.trim() === "") {

        alert("Please enter a valid name");

        return;

    }

    localStorage.setItem("customerName", username); // Save to local storage

    showApp();

}

// Logout Function

function logout() {

    localStorage.removeItem("customerName"); // Remove saved data

    location.reload(); // Page reload karein taake login screen wapas aaye

}

// Check if user is already logged in

function showApp() {

    let savedUser = localStorage.getItem("customerName");

    if (savedUser) {

        document.getElementById("loginContainer").style.display = "none";

        document.getElementById("appContainer").style.display = "block";

        document.getElementById("userDisplayName").innerText = savedUser;

    }

}

// Page load hone par check karein user logged in hai ya nahi

window.onload = showApp;
      let orders = JSON.parse(localStorage.getItem("orders")) || [];

function placeOrder() {

    let orderId = "ORD-" + Math.floor(Math.random() * 10000);

    let customerName = prompt("Enter your name:");

    if (!customerName) return alert("Name is required!");

    let items = [...document.querySelectorAll("#customerTable tr")].slice(1)

        .map(row => row.innerText).join("; ");

    let order = {

        id: orderId,

        name: customerName,

        items: items,

        status: "Pending"

    };

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    displayOrders();

}

function displayOrders() {

    let table = document.getElementById("orderTable");

    table.innerHTML = `<tr>

        <th>Order ID</th>

        <th>Customer Name</th>

        <th>Items</th>

        <th>Status</th>

        <th>Action</th>

    </tr>`;

    orders.forEach((order, index) => {

        let row = table.insertRow();

        row.innerHTML = `<td>${order.id}</td><td>${order.name}</td><td>${order.items}</td>

            <td>${order.status}</td>

            <td>

                <button onclick="updateStatus(${index}, 'Shipped')">🚚 Ship</button>

                <button onclick="updateStatus(${index}, 'Delivered')">✅ Deliver</button>

            </td>`;

    });

}

function updateStatus(index, status) {

    orders[index].status = status;

    localStorage.setItem("orders", JSON.stringify(orders));

    displayOrders();

}

// Page Load Hone Par Orders Show Karein

window.onload = displayOrders;
      let products = JSON.parse(localStorage.getItem("products")) || [];

function addProduct() {

    let name = document.getElementById("productName").value;

    let price = document.getElementById("productPrice").value;

    let desc = document.getElementById("productDesc").value;

    let files = document.getElementById("productImages").files;

    if (!name || !price || files.length === 0) {

        alert("All fields are required!");

        return;

    }

    let images = [];

    for (let i = 0; i < Math.min(3, files.length); i++) {

        let reader = new FileReader();

        reader.readAsDataURL(files[i]);

        reader.onload = function () {

            images.push(reader.result);

            if (images.length === Math.min(3, files.length)) {

                saveProduct(name, price, desc, images);

            }

        };

    }

}

function saveProduct(name, price, desc, images) {

    let product = { name, price, desc, images };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

}

function displayProducts() {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach((product, index) => {

        let productDiv = document.createElement("div");

        productDiv.classList.add("product");

        let imagesHtml = product.images.map(img => `<img src="${img}" class="product-img">`).join("");

        productDiv.innerHTML = `

            <h3>${product.name}</h3>

            <div class="image-container">${imagesHtml}</div>

            <p><strong>Price:</strong> Rs ${product.price}</p>

            <p>${product.desc}</p>

            <button onclick="buyProduct('${product.name}', '${product.price}')">🛒 Buy Now</button>

        `;

        productList.appendChild(productDiv);

    });

}

function buyProduct(name, price) {

    alert(`You have bought ${name} for Rs ${price}!`);

}

// Page Load Hone Par Products Show Karein

window.onload = displayProducts;
      let products = JSON.parse(localStorage.getItem("products")) || [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach((product, index) => {

        let productDiv = document.createElement("div");

        productDiv.classList.add("product");

        let imagesHtml = product.images.map(img => `<img src="${img}" class="product-img">`).join("");

        productDiv.innerHTML = `

            <h3>${product.name}</h3>

            <div class="image-container">${imagesHtml}</div>

            <p><strong>Price:</strong> Rs ${product.price}</p>

            <p>${product.desc}</p>

            <button onclick="addToCart(${index})">🛒 Add to Cart</button>

        `;

        productList.appendChild(productDiv);

    });

}

function addToCart(index) {

    let product = products[index];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function displayCart() {

    let cartList = document.getElementById("cartList");

    let totalPrice = 0;

    cartList.innerHTML = "";

    cart.forEach((item, index) => {

        totalPrice += parseFloat(item.price);

        let cartItem = document.createElement("div");

        cartItem.innerHTML = `

            <p>${item.name} - Rs ${item.price} 

            <button onclick="removeFromCart(${index})">❌ Remove</button></p>

        `;

        cartList.appendChild(cartItem);

    });

    document.getElementById("totalPrice").innerText = totalPrice;

}

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function clearCart() {

    cart = [];

    localStorage.removeItem("cart");

    displayCart();

}

// Page Load Hone Par Products & Cart Show Karein

window.onload = function() {

    displayProducts();

    displayCart();

};
      let products = [

    { name: "Product 1", price: 100, desc: "Sample Item", images: ["https://via.placeholder.com/80"] },

    { name: "Product 2", price: 200, desc: "Another Sample", images: ["https://via.placeholder.com/80"] }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach((product, index) => {

        let productDiv = document.createElement("div");

        let imagesHtml = product.images.map(img => `<img src="${img}" class="product-img">`).join("");

        productDiv.innerHTML = `

            <h3>${product.name}</h3>

            <div class="image-container">${imagesHtml}</div>

            <p><strong>Price:</strong> Rs ${product.price}</p>

            <p>${product.desc}</p>

            <button onclick="addToCart(${index})">🛒 Add to Cart</button>

        `;

        productList.appendChild(productDiv);

    });

}

function addToCart(index) {

    let product = products[index];

    let existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({ ...product, quantity: 1 });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function displayCart() {

    let cartList = document.getElementById("cartList");

    let totalPrice = 0;

    cartList.innerHTML = "";

    cart.forEach((item, index) => {

        totalPrice += item.price * item.quantity;

        let cartItem = document.createElement("div");

        cartItem.innerHTML = `

            <p>${item.name} - Rs ${item.price} x 

            <button onclick="changeQuantity(${index}, -1)">➖</button> 

            ${item.quantity} 

            <button onclick="changeQuantity(${index}, 1)">➕</button>

            <button onclick="removeFromCart(${index})">❌ Remove</button></p>

        `;

        cartList.appendChild(cartItem);

    });

    document.getElementById("totalPrice").innerText = totalPrice;

}

function changeQuantity(index, change) {

    if (cart[index].quantity + change > 0) {

        cart[index].quantity += change;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function clearCart() {

    cart = [];

    localStorage.removeItem("cart");

    displayCart();

}

window.onload = function() {

    displayProducts();

    displayCart();

};