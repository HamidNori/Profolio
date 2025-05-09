const openBnt = document.getElementById("Open-navbar");
const closeBnt = document.getElementById("Close-navbar");
const navbar = document.getElementById("navbar");

openBnt.addEventListener("click", () => {
  navbar.classList.add("open");
});

closeBnt.addEventListener("click", () =>{
  navbar.classList.remove("open");
});
