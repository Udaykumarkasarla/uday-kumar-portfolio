
// JavaScript for toggling dark mode
const toggleSwitch = document.getElementById('dark-mode-toggle');

// Check if the user has a saved preference for dark mode in localStorage
const currentMode = localStorage.getItem('theme');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        // Activate dark mode
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Activate light mode
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
