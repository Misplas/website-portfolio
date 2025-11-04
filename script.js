/*
 * Simple scroll and hover interactions for the portfolio.  When a
 * section enters the viewport it fades into view.  Skills list
 * items grow slightly on hover to encourage exploration.  This
 * script runs after the DOM has been loaded.  Do not remove the
 * defer attribute on the script tag in index.html.
 */

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const skillItems = document.querySelectorAll('.skills li');

    // Determine if an element is visible within the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Add the fade‑in class once a section scrolls into view
    function checkSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }

    // Slightly enlarge skill items on hover
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.fontSize = '1.05em';
        });
        item.addEventListener('mouseout', function() {
            this.style.fontSize = '1em';
        });
    });

    // Run once on load and then on scroll
    checkSections();
    window.addEventListener('scroll', checkSections);
});