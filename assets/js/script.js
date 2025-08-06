document.addEventListener("DOMContentLoaded", function () {
    function init() {
        setupMobileMenu();
    }
    function setupMobileMenu() {
        const hamburger = document.getElementById("hamburger-menu");
        const navLinks = document.getElementById("nav-links-container");
        if (hamburger && navLinks) {
            hamburger.addEventListener("click", () => {
                navLinks.classList.toggle("active");
                hamburger.classList.toggle("open");
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('open');
                    }
                });
            });
        }
    }
    init();
});