// Main JavaScript file for the portfolio website
'use strict';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');

    // Initialize scroll animations
    initScrollAnimations();
});

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    // Select all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('[data-animate]');

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback: show all elements immediately
        animatedElements.forEach(el => el.classList.add('animate-visible'));
        return;
    }

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animation
                entry.target.classList.add('animate-visible');

                // Animate children with stagger effect if specified
                const staggerChildren = entry.target.querySelectorAll('[data-animate-child]');
                staggerChildren.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('animate-visible');
                });

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px 0px -50px 0px', // trigger slightly before element enters
        threshold: 0.1 // trigger when 10% visible
    });

    // Observe all animated elements
    animatedElements.forEach(el => observer.observe(el));
}
