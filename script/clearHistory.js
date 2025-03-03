function clearActivityLog() {
  const logParent = document.getElementById("activityLog"); // Get the activity log list
  logParent.innerHTML = ""; // Clear all the content in the log list (remove all list items)
}

document.getElementById("clearHistoryButton").addEventListener("click", () => {
  clearActivityLog();
});
