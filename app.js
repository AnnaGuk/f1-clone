const hmbg = document.getElementById("hamburger");
const mob = document.getElementById("mobile");
const slides = document.querySelectorAll("#sliderView .slide");
const navs = document.querySelectorAll("#sliderNav .nav-bttn");

const sliderView = document.querySelector("#sliderView");

hmbg.addEventListener("click", function() {
  if (mob.style.display === "block") {
    mob.style.display = "none";
  } else {
    mob.style.display = "block";
  }
});

const viewPortWidth = sliderView.offsetWidth;
const viewPortHeight = sliderView.offsetHeight;
sliderView.style.height = viewPortHeight + "px";

let currentSlide = 0;

slides.forEach((element, index) => {
  element.style.display = "block";
  element.style.position = "absolute";
  element.style.left = index * viewPortWidth + "px";
});

navs.forEach(element => {
  element.addEventListener("click", function(e) {
    slide(this.innerText);
  });
});
function slide(direction) {
  if (direction === "Previous" && currentSlide === 0) {
    return false;
  } else {
    if (direction === "Next" && currentSlide === slides.length - 1) {
      return false;
    } else {
      let diff = 1;
      if (direction === "Next") {
        diff = -1;
      } else {
        diff = 1;
      }
      currentSlide -= diff;
      slides.forEach(element => {
        element.style.left =
          parseInt(element.style.left, 10) + viewPortWidth * diff + "px";
      });
    }
  }
}
