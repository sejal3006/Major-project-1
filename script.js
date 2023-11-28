const navbar = document.getElementById("nav");
const btn = document.getElementById("up-arrow-button");

window.addEventListener("scroll", function () {
  if (this.window.scrollY === 0) navbar.classList.add("heightAdd");
  else navbar.classList.remove("heightAdd");

  if (this.window.scrollY >= 400) {
    btn.style.opacity = 1;
  } else btn.style.opacity = 0;
});

const setHeading = document.getElementById("home-heading");
const headings = ["TEMPLATE", "SERVICES", "SOLUTIONS"];
let i = 0;
setInterval(() => {
  setHeading.innerText = headings[i++];
  if (i === 3) i = 0;
}, 1500);