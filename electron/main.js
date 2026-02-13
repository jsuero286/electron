const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: require("path").join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("http://localhost:4200");
}

app.whenReady().then(createWindow);

ipcMain.on("launch-retro", () => {
  mainWindow.hide();

  const retro = spawn("open", ["-a", "RetroArch"]);

  retro.on("exit", () => {
    mainWindow.show();
  });
});

ipcMain.on("launch-app", (event, appName) => {
  mainWindow.hide();

  const scriptPath = `/Users/jesus/HTPC/${appName}.command`;

  const appProcess = spawn("open", ["-n", scriptPath]);

  appProcess.on("exit", () => {
    mainWindow.show();
  });
});

