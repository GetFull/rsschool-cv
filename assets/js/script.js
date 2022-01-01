const mouseTarget = document.querySelectorAll(".contacts-list__link");
const message = document.querySelector(".contacts__description");

mouseTarget.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    message.style.opacity = "1";
    message.textContent = item.dataset.contact;
  });
});

const themeButton = document.querySelector(".aboute-me__photo");

themeButton.addEventListener("click", (evenet) => {
  document.body.classList.toggle("dark");
});

const menuButton = document.querySelector(".js-nav-togl");

menuButton.addEventListener("click", (evenet) => {
  document.querySelector(".nav--header").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("active");
});
