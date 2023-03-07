let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToogle = document.querySelector(".menu-toggle")

menuToogle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})