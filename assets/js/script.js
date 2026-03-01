document.addEventListener("DOMContentLoaded", function () {

  // ── Mobile Menu ──────────────────────────────────────────
  function setupMobileMenu() {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks  = document.getElementById("nav-links-container");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
      document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ── Scroll-reveal (fade-up on scroll) ────────────────────
  function setupScrollReveal() {
    const targets = document.querySelectorAll(
      ".service-card, .pain-card, .step-card, .result-card, .grid-project-card, .case-study-card"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`;
      observer.observe(el);
    });
  }

  // ── Navbar scroll shadow ──────────────────────────────────
  function setupNavbarScroll() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }, { passive: true });
  }

  // ── Init ─────────────────────────────────────────────────
  setupMobileMenu();
  setupScrollReveal();
  setupNavbarScroll();

});
