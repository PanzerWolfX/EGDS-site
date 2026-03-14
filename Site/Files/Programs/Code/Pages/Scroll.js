document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL SECTIONS
       ========================= */

    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } 
            else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.25
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    /* =========================
       NAVBAR SCROLL EFFECT
       ========================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.style.background = "rgba(0,0,0,0.8)";
            } 
            else {
                navbar.style.background = "rgba(0,0,0,0.4)";
            }

        });

    }

});

