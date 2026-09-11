// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Scroll animation
const cards = document.querySelectorAll(
    ".project-card, .skill-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "0.6s ease";

    observer.observe(card);

});