// assets/js/content.js

document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search-input");
 
    // Data produk dalam format JSON
    const products = [
        { id: 1, name: "Product 1 Product Product Product Product 1 Product Product Product", image: "assets/img/test.jpg", downloadLink: "#" },
        { id: 2, name: "Product 2", image: "assets/img/test.jpg", downloadLink: "#" },
        { id: 3, name: "Product 3", image: "assets/img/test.jpg", downloadLink: "#" },
        { id: 4, name: "Product 4", image: "assets/img/test.jpg", downloadLink: "#" },
        { id: 5, name: "Product 5", image: "assets/img/test.jpg", downloadLink: "#" },
        { id: 6, name: "Product 6", image: "assets/img/test.jpg", downloadLink: "#" },
        // Anda dapat menambahkan produk lainnya di sini
    ];

    // Fungsi untuk membuat card produk
    function createProductCard(product) {
        return `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h2 class="card-title">${product.name}</h2>
                <a href="${product.downloadLink}" class="btn">Download gratis</a>
            </div>
        </div>
        `;
    }

    // Menampilkan daftar produk
    function renderProductList(productsToRender) {
        const productListHTML = productsToRender.map(createProductCard).join("");
        productList.innerHTML = productListHTML;
    }

    // Panggil fungsi untuk menampilkan daftar produk setelah DOM selesai dimuat
    renderProductList(products);

    // Fungsi untuk melakukan pencarian produk
    function searchProducts(searchTerm) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderProductList(filteredProducts);
    }

    // Tangani perubahan pada input pencarian
    searchInput.addEventListener("input", function(event) {
        searchProducts(event.target.value);
    });
});
