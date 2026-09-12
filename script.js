document.addEventListener("DOMContentLoaded", () => {

    /* ================= SECTION REVEAL ANIMATION ================= */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        },
        {
            threshold: 0.1
        }
    );

    sections.forEach((section) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(section);

    });


    /* ================= NAVBAR SCROLL EFFECT ================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ================= ACTIVE NAVIGATION ================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    });


    /* ================= SMOOTH NAVIGATION ================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });

});
