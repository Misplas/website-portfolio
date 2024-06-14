document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const skillItems = document.querySelectorAll('.skills li');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // 'fade-in' class when the section is in the viewport
    function checkSections() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('fade-in');
            }
        });
    }

    // Adjust font size on hover
    skillItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.fontSize = '1em';
        });

        item.addEventListener('mouseout', function() {
            this.style.fontSize = '1.01em';
        });
    });

    // Initial check immediately after DOM content is loaded
    checkSections(100);

    // Check the sections on scroll
    window.addEventListener('scroll', checkSections);
});
