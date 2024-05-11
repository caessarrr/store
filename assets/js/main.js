document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggle-mode');
    const body = document.body;
    const header = document.querySelector('.header');
    const cardContainers = document.querySelectorAll('.container .card');
    const buttons = document.querySelectorAll('.btn');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.getElementById('search-input');

    toggleModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        cardContainers.forEach(card => card.classList.toggle('dark-mode'));
        buttons.forEach(button => button.classList.toggle('dark-mode'));
        searchBar.classList.toggle('dark-mode');
        searchInput.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            toggleModeButton.innerHTML = '<i class="uil uil-moon"></i>';
            localStorage.setItem('mode', 'dark');
        } else {
            toggleModeButton.innerHTML = '<i class="uil uil-sun"></i>';
            localStorage.setItem('mode', 'light');
        }
    });

    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        cardContainers.forEach(card => card.classList.add('dark-mode'));
        buttons.forEach(button => button.classList.add('dark-mode'));
        searchBar.classList.add('dark-mode');
        searchInput.classList.add('dark-mode');
        toggleModeButton.innerHTML = '<i class="uil uil-moon"></i>';
    }
});
