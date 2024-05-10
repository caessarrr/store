// Cek apakah sudah ada data dalam local storage
if (!localStorage.getItem('redirected')) {
    // Jika belum ada, set data redirect ke true
    localStorage.setItem('redirected', 'true');

    // set 1 detik sebelum alert
    setTimeout(function () {
    // Tampilkan alert
    alert('Lewati link iklan sebelum lanjut, klik OK ...');
    // Redirect ke halaman redirect
    window.location.href = 'assets/pages/ads.html';
    },1000);

} else {
    // Jika sudah ada data dalam local storage, hapus data tersebut
    localStorage.removeItem('redirected');
}