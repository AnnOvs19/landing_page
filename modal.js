let btn = document.querySelector(".header-box__login");
let modal = document.querySelector(".modal");

btn.addEventListener("click", (e) => {
    modal.classList.add("open")
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.classList.remove("open")
    }
})

