document.querySelectorAll(".complete-btn").forEach((i) => {
  i.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board upgrade successfully");
    event.target.disabled = true;
  });
});
let counter = 23;

function plus() {
  counter += 1;
  document.getElementById("incremental").innerHTML = counter;
}

let minusCounter = 6;
function minus() {
  if (minusCounter > 0) {
    minusCounter -= 1;
  }
  document.getElementById("decremental").innerHTML = minusCounter;
  if (minusCounter == 0) {
    setTimeout(function () {
      alert("congratulations!! You have compeleted All the tasks");
    }, 1000);
  }
}

document.getElementById("task1Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle1").innerText;
  addToActivityLog(itemTitle);
});
document.getElementById("task2Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle2").innerText;
  addToActivityLog(itemTitle);
});
document.getElementById("task3Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle3").innerText;
  addToActivityLog(itemTitle);
});
document.getElementById("task4Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle4").innerText;
  addToActivityLog(itemTitle);
});
document.getElementById("task5Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle5").innerText;
  addToActivityLog(itemTitle);
});
document.getElementById("task6Button").addEventListener("click", function () {
  let itemTitle = document.getElementById("cardTitle6").innerText;
  addToActivityLog(itemTitle);
});
let currentTime = () => {
  return new Date().toLocaleTimeString();
};

function addToActivityLog(taskTitle) {
  const logParent = document.getElementById("activityLog");
  const logItem = document.createElement("p");

  logItem.textContent = `You have Complete The Task ${taskTitle} at ${currentTime()}`;
  logParent.appendChild(logItem);
}
