// assets/js/redirecttoindex.js

// Tunggu 2 detik sebelum redirect kembali ke halaman index
setTimeout(function () {
    // Cek apakah pengguna pernah mengunjungi halaman iklan
    if (!sessionStorage.getItem('visitedAdPage')) {
        // Jika tidak, arahkan kembali ke halaman index
        window.location.href = 'https://caessarrr.github.io/webstore/index.html';
    }
}, 2000);
