let darkButton = document.getElementById("switch");
let body = document.getElementsByTagName("body");
darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
