// assets/js/redirecttoads.js

// Cek apakah pengguna pernah mengunjungi halaman iklan sebelumnya
if (!sessionStorage.getItem('visitedAdPage')) {
    // Jika tidak, arahkan ke halaman iklan
    sessionStorage.setItem('visitedAdPage', 'true'); // Set data di session storage untuk menandai kunjungan pertama ke halaman iklan
    window.location.href = 'https://caessarrr.github.io/webstore/assets/pages/ads.html';
} else {
    // Jika iya, arahkan kembali ke halaman utama
    window.location.href = 'https://caessarrr.github.io/webstore/index.html';
}
