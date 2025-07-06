import { io } from "socket.io-client";

let socket;
export function connectCompanySocket(userId) {
  if (!socket) {
    socket = io("http://localhost:8080", {
      withCredentials: true,
    });
    socket.on("connect", () => {
      socket.emit("join_company", userId);
    });
  }
  return socket;
}

export function subscribeToNotifications(callback) {
  if (!socket) return;
  socket.on("new_notification", callback);
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
