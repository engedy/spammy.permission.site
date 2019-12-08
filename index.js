function requestNotificationPermission() {
  Notification.requestPermission();
}

window.addEventListener("load", _ => {
  let notificationsButton = document.getElementById("notifications");
  notificationsButton.addEventListener("click", _ => requestNotificationPermission());
});
