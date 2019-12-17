function addLogMessage(message) {
  let line = document.createElement("div");
  line.className = "content";
  line.innerText = message;
  document.body.append(line);
}

function requestNotificationPermission() {
  addLogMessage("Notification.requestPermission...");
  Notification.requestPermission()
      .then(r => addLogMessage("Resolved: " + r))
      .catch(e => addLogMessage("Rejected: " + e));
}

window.addEventListener("load", _ => {
  let notificationsButton = document.getElementById("notifications");
  notificationsButton.addEventListener("click", _ => requestNotificationPermission());
});
