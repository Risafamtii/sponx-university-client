// This is a simple localStorage-based notification persistence utility

const NOTIF_KEY = "company_notifications";

export function getStoredNotifications() {
  try {
    return JSON.parse(localStorage.getItem(NOTIF_KEY)) || [];
  } catch {
    return [];
  }
}

export function storeNotifications(notifications) {
  localStorage.setItem(NOTIF_KEY, JSON.stringify(notifications));
}

export function removeNotificationById(id) {
  const notifs = getStoredNotifications().filter((n) => n.id !== id);
  storeNotifications(notifs);
  return notifs;
}

export function addNotification(notification) {
  const notifs = getStoredNotifications();
  // Prevent duplicate notifications by eventId or id
  if (notifs.some((n) => n.id === notification.id)) {
    return notifs;
  }
  const updated = [notification, ...notifs];
  storeNotifications(updated);
  return updated;
}
