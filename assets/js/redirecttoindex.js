// assets/js/redirecttoindex.js

// Hapus data redirect dari local storage
localStorage.removeItem('redirected');
// Tunggu 3 detik sebelum redirect kembali ke halaman index
setTimeout(function () {
    // Redirect kembali ke halaman index
    window.location.href = 'https://caessarrr.github.io/webstore/index.html';
}, 100);