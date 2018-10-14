const h = document.getElementById("h");
const m = document.getElementById("m");

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
