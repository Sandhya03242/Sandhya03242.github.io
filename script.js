/* =========================================================
   SANDHYA S — AI ENGINEER PORTFOLIO
   INTERACTION + ANIMATION
========================================================= */


/* =========================================================
   1. PAGE LOADER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});


/* =========================================================
   2. NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   3. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   4. STAGGERED REVEAL
========================================================= */

const revealGroups =
    document.querySelectorAll(
        ".project, .timeline-item, .stack-item"
    );

revealGroups.forEach((element, index) => {

    element.style.transitionDelay =
        `${(index % 5) * 0.08}s`;

});


/* =========================================================
   5. SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight =
            navbar
                ? navbar.offsetHeight
                : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   6. MOUSE FOLLOW GLOW
========================================================= */

const background =
    document.querySelector(".background");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


window.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function animateMouseGlow() {

    currentX +=
        (mouseX - currentX) * 0.08;

    currentY +=
        (mouseY - currentY) * 0.08;

    if (background) {

        background.style.setProperty(
            "--mouse-x",
            `${currentX}px`
        );

        background.style.setProperty(
            "--mouse-y",
            `${currentY}px`
        );

    }

    requestAnimationFrame(
        animateMouseGlow
    );

}

animateMouseGlow();


/* =========================================================
   7. HERO AI SYSTEM PARALLAX
========================================================= */

const aiSystem =
    document.querySelector(".ai-system");

if (aiSystem) {

    window.addEventListener("mousemove", (event) => {

        const rect =
            aiSystem.getBoundingClientRect();

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        const rotateX =
            (event.clientY - centerY) /
            35;

        const rotateY =
            (event.clientX - centerX) /
            -35;

        aiSystem.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    aiSystem.addEventListener(
        "mouseleave",
        () => {

            aiSystem.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }
    );

}


/* =========================================================
   8. AI NODE INTERACTION
========================================================= */

const aiNodes =
    document.querySelectorAll(".ai-node");

aiNodes.forEach((node) => {

    node.addEventListener(
        "mouseenter",
        () => {

            aiNodes.forEach((otherNode) => {

                if (otherNode !== node) {

                    otherNode.style.opacity =
                        "0.35";

                }

            });

        }
    );


    node.addEventListener(
        "mouseleave",
        () => {

            aiNodes.forEach((otherNode) => {

                otherNode.style.opacity =
                    "1";

            });

        }
    );

});


/* =========================================================
   9. TERMINAL TYPING EFFECT
========================================================= */

const terminal =
    document.querySelector(
        ".system-terminal"
    );

if (terminal) {

    const terminalLines =
        terminal.querySelectorAll("div");

    terminalLines.forEach(
        (line, index) => {

            line.style.opacity = "0";

            setTimeout(() => {

                line.style.opacity = "1";

            }, 700 + index * 700);

        }
    );

}


/* =========================================================
   10. PROJECT CARD 3D EFFECT
========================================================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach((project) => {

    const visual =
        project.querySelector(
            ".project-visual"
        );

    if (!visual) return;


    project.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                project.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;

            visual.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateZ(8px)`;

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            visual.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg)";

        }
    );

});


/* =========================================================
   11. STACK ITEM MAGNETIC EFFECT
========================================================= */

const stackItems =
    document.querySelectorAll(
        ".stack-item"
    );


stackItems.forEach((item) => {

    item.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                item.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.12;

            const moveY =
                (y - rect.height / 2) * 0.12;

            item.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    item.addEventListener(
        "mouseleave",
        () => {

            item.style.transform =
                "";

        }
    );

});


/* =========================================================
   12. SCROLL PROGRESS
========================================================= */

const progressBar =
    document.createElement("div");

progressBar.className =
    "scroll-progress";

document.body.appendChild(
    progressBar
);


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    progressBar.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();


/* =========================================================
   13. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const id =
                    entry.target.id;

                navLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   14. RANDOM PARTICLE MOTION
========================================================= */

const particles =
    document.querySelectorAll(
        ".particles span"
    );


particles.forEach((particle) => {

    const randomX =
        Math.random() * 100;

    const randomDelay =
        Math.random() * 6;

    const randomDuration =
        5 + Math.random() * 5;

    particle.style.left =
        `${randomX}%`;

    particle.style.animationDelay =
        `${randomDelay}s`;

    particle.style.animationDuration =
        `${randomDuration}s`;

});


/* =========================================================
   15. CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.className =
    "cursor-glow";

document.body.appendChild(
    cursorGlow
);


window.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   16. HERO TEXT ENTRY
========================================================= */

const heroContent =
    document.querySelector(
        ".hero-content"
    );


if (heroContent) {

    heroContent.style.opacity = "0";
    heroContent.style.transform =
        "translateY(30px)";


    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                heroContent.style.transition =
                    "opacity 1s ease, transform 1s cubic-bezier(.2,.7,.2,1)";

                heroContent.style.opacity =
                    "1";

                heroContent.style.transform =
                    "translateY(0)";

            }, 250);

        }
    );

}


/* =========================================================
   17. AI SYSTEM ENTRY
========================================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (heroVisual) {

    heroVisual.style.opacity = "0";
    heroVisual.style.transform =
        "translateY(40px) scale(.96)";


    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                heroVisual.style.transition =
                    "opacity 1.2s ease, transform 1.2s cubic-bezier(.2,.7,.2,1)";

                heroVisual.style.opacity =
                    "1";

                heroVisual.style.transform =
                    "translateY(0) scale(1)";

            }, 500);

        }
    );

}


/* =========================================================
   18. IMAGE PARALLAX
========================================================= */

const visualElements =
    document.querySelectorAll(
        ".project-visual"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollPosition =
            window.scrollY;

        visualElements.forEach(
            (visual, index) => {

                const rect =
                    visual.getBoundingClientRect();

                const center =
                    window.innerHeight / 2;

                const distance =
                    rect.top - center;

                if (
                    Math.abs(distance) < 500
                ) {

                    const movement =
                        distance * -0.025;

                    visual.style.setProperty(
                        "--scroll-move",
                        `${movement}px`
                    );

                }

            }
        );

    }
);


/* =========================================================
   19. KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            document.activeElement?.blur();

        }

    }
);


/* =========================================================
   20. CONSOLE BRANDING
========================================================= */

console.log(
`
%cSANDHYA S
%cAI ENGINEER

Building intelligent systems.

Python • GenAI • LLMs • RAG • AI Agents
Machine Learning • Computer Vision

GitHub:
https://github.com/Sandhya03242
`,
"font-size:22px;font-weight:bold;",
"font-size:12px;color:#b6ff00;"
);
