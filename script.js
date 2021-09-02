let menuBtn = document.querySelector(".menuBtn"),
    closeBtn = document.querySelector(".close"),
    hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu");

menuBtn.onclick = () => {
    hamburger.classList.toggle("open");
    closeBtn.classList.toggle("open");
    menu.classList.toggle("open");
};

window.onscroll = () => {
    hamburger.classList.remove("open");
    closeBtn.classList.remove("open");
    menu.classList.remove("open");
};