const h = document.getElementById("h");
const m = document.getElementById("m");
const slides = document.querySelectorAll("#sliderView .slide");
const navs = document.querySelectorAll("#sliderNav .nav-bttn");

const sliderView = document.querySelector("#sliderView");

h.addEventListener("click", function() {
  if (m.style.display === "block") {
    m.style.display = "none";
  } else {
    m.style.display = "block";
  }
  //   if (m.classList.contains("active")) {
  //     m.classList.remove("active");
  //   } else {
  //     m.classList.add("active");
  //   }
});

// function myFunction() {
//     const x = document.getElementById("myLinks");

//   }

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
