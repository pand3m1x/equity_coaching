
// TOP NAV BAR SCROLL

window.addEventListener("scroll", () => {
    const nav = document.getElementById("top-navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function () {
    setTimeout(() => {
        successMessage.style.display = "block";
    }, 500);
});