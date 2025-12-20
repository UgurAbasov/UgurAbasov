/**
 * Theme toggle functionality
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;

    if (!themeToggle || !icon) return;

    // Sync icon with current theme (set by head script)
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        themeToggle.classList.add('animate');
        setTimeout(() => themeToggle.classList.remove('animate'), 500);

        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update icon based on logic: if new is dark, show sun (to switch to light)
        if (newTheme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}
