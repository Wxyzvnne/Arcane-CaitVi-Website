const images = document.querySelectorAll(".carousel-images img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImage(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});
