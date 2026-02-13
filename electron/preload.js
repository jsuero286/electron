const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  launchRetro: () => ipcRenderer.send("launch-retro"),
  launchApp: (name) => ipcRenderer.send("launch-app", name),
  exitApp: () => ipcRenderer.send("exit-app")
});


