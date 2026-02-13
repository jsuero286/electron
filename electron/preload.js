const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  launchRetro: () => ipcRenderer.send("launch-retro"),
  launchApp: (name) => ipcRenderer.send("launch-app", name),
  shutdown: () => ipcRenderer.send("shutdown"),
});

