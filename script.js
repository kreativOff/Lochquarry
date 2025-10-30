document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const originalColor = link.classList.contains("active") ? "#ffdd57" : "white";

        link.addEventListener("mouseenter", function () {
            if (!this.classList.contains("active")) {
                this.style.color = "#ffdd57";
                this.style.transition = "color 0.3s ease";
            }
        });

        link.addEventListener("mouseleave", function () {
            if (!this.classList.contains("active")) {
                this.style.color = originalColor;
            }
        });
    });

    document.getElementById('dt').innerHTML = new Date();
});