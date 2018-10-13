const h = document.getElementById("h");
const m = document.getElementById("m");

h.addEventListener("click", function() {
  if (m.classList.contains("active")) {
    m.classList.remove("active");
  } else {
    m.classList.add("active");
  }
});
