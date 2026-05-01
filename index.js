
// TOP NAV BAR SCROLL

window.addEventListener("scroll", () => {
    const nav = document.getElementById("top-navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});