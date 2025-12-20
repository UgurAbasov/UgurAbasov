/**
 * Main entry point for the portfolio
 */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize modular components
    if (typeof initMobileNav === 'function') initMobileNav();
    if (typeof initThemeToggle === 'function') initThemeToggle();
    if (typeof initScrollAnimations === 'function') initScrollAnimations();
    if (typeof initCarousels === 'function') initCarousels();
});
