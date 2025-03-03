document.getElementById("goToBlogPage").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
// Time script

let getTime = new Date();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let Day = weekday[getTime.getDay()];

document.getElementById("forDay").innerText = `${Day} ,`;

let fullDate = getTime.toLocaleDateString("default", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

document.getElementById("forDate").innerText = fullDate;
