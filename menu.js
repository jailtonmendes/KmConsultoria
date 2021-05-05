
const menu = document.querySelector(".menu-mobile")
const mob = document.querySelector(".menu-mob")

menu.addEventListener("click", () => {
    mob.classList.toggle("active")
})