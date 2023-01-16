const menuBtn = document.querySelector(".menubar");
const modal = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
    modal.style.display = "block";
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
})
