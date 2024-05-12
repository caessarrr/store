document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggle-mode');

    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggleModeButton.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleModeButton.innerHTML = '<i class="uil uil-moon"></i>';
            localStorage.setItem('mode', 'dark');
        } else {
            toggleModeButton.innerHTML = '<i class="uil uil-sun"></i>';
            localStorage.setItem('mode', 'light');
        }
    });

    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.innerHTML = '<i class="uil uil-moon"></i>';
    }
});
