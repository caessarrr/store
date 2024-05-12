// assets/js/content.js

document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category-btn");

    // Data produk dalam format JSON
    const products = [
        { id: 1, name: "Product 1", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 5.000", demoLink: "https://demo.product1.com", category: "component" },
        { id: 2, name: "Product 2", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 5.000", demoLink: "https://demo.product2.com", category: "section" },
        { id: 3, name: "Product 3", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 5.000", demoLink: "https://demo.product3.com", category: "page" },
        { id: 4, name: "Product 4", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 5.000", demoLink: "https://demo.product4.com", category: "complete-website" },
        { id: 5, name: "Product 5", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 5.000", demoLink: "https://demo.product5.com", category: "component" },
        { id: 6, name: "Product 6", image: "assets/img/test.jpg", downloadLink: "#", price: "Rp 15.000", demoLink: "https://demo.product6.com", category: "section" },
        // Anda dapat menambahkan produk lainnya di sini
    ];

    // Fungsi untuk membuat card produk
    function createProductCard(product) {
        return `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h2 class="card-title">${product.name}</h2>
                <div class="product-info">
                    <div class="price">${product.price}</div>
                    <a href="${product.demoLink}" class="demo-link"><i class="uil uil-youtube"></i> Demo</a>
                </div>
                <a href="${product.downloadLink}" class="btn">Download</a>
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
    function searchProducts(searchTerm, category) {
        let filteredProducts = products;

        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.category === category
            );
        }

        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        renderProductList(filteredProducts);
    }

    // Tangani perubahan pada input pencarian
    searchInput.addEventListener("input", function(event) {
        const searchTerm = event.target.value;
        const selectedCategory = document.querySelector('.category-btn.active').dataset.category;
        searchProducts(searchTerm, selectedCategory);
    });

    // Tangani pemilihan kategori
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus kelas active dari semua tombol kategori
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas active ke tombol yang dipilih
            button.classList.add('active');
            const searchTerm = searchInput.value;
            const selectedCategory = button.dataset.category;
            searchProducts(searchTerm, selectedCategory);
        });
    });
});
