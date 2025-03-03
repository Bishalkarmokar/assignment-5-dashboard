function getRandomColor() {
  let color1 = Math.ceil(0 + Math.random() * 255);
  let color2 = Math.ceil(0 + Math.random() * 255);
  let color3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${color1}, ${color2}, ${color3})`;
}

document.getElementById("randomBtn").addEventListener("click", function () {
  document.getElementById("main-page").style.backgroundColor = getRandomColor();
});
