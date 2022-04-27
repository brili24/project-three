var active = 0;
var previousButton = document.querySelector("#previous");
var nextButton = document.querySelector("#next");
var slideshow = document.querySelectorAll(".slideshow > div");

function setUp() {
  slideshow.forEach((slide, i) => {
    slide.dataset["index"] = i + 1;
  });
}
function toggleSlide(from, to) {
  slideshow[from].classList.remove("active");
  slideshow[to].classList.add("active");
}
function previousSlide() {
  var from = active;
  if (active <= 0) {
    active = slideshow.length - 1;
  } else {
    active--;
  }
  toggleSlide(from, active);
}
function nextSlide() {
  var from = active;
  if (active >= slideshow.length - 1) {
    active = 0;
  } else {
    active++;
  }
  toggleSlide(from, active);
}
setUp();
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

var current = 0;
var beforeImage = document.querySelector(".before");
var afterImage = document.querySelector(".after");
