const rating = document.querySelectorAll(".starRating");
const rating1 = document.querySelector(".rating1");
const rating2 = document.querySelector(".rating2");
const btn = document.querySelector(".submit");
const btn2 = document.querySelector(".submit2");
let value = "";
const image = document.querySelector(".image");
const span = document.querySelector(".span");

rating.forEach((e) => {
  e.addEventListener("click", () => {
    rating.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    value = parseInt(e.innerHTML);
  });
});

btn.addEventListener("click", () => {
  if (value === "") {
    return;
  }
  rating1.style.display = "none";
  rating2.style.display = "flex";
  span.innerHTML = value;
  if (value === 1) {
    image.setAttribute("src", "images/1.png");
  } else if (value === 2) {
    image.setAttribute("src", "images/2.png");
  } else if (value === 3) {
    image.setAttribute("src", "images/3.png");
  } else if (value === 4) {
    image.setAttribute("src", "images/4.png");
  } else if (value === 5) {
    image.setAttribute("src", "images/5.png");
  }
});

btn2.addEventListener("click", () => {
  window.location.reload();
});
