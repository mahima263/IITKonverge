document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector("#navbarNav");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});
