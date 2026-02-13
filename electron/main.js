const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    backgroundColor: "#000000",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const isDev = !app.isPackaged;

  if (isDev) {
    mainWindow.loadURL("http://localhost:4200");
  } else {
    mainWindow.loadFile(
      path.join(__dirname, "../dist/htpc-hub/browser/index.html")
    );
  }
}

app.whenReady().then(() => {
  createWindow();

  // Opcional: ocultar dock en modo producción
  if (app.isPackaged) {
    app.dock.hide();
  }
});


// ----------------------
// RETROARCH
// ----------------------

ipcMain.on("launch-retro", () => {
  mainWindow.hide();

  const retro = spawn("open", ["-a", "RetroArch"]);

  retro.on("exit", () => {
    mainWindow.show();
  });
});


// ----------------------
// STREAMING APPS
// ----------------------

ipcMain.on("launch-app", (event, appName) => {
  mainWindow.hide();

  const scriptPath = `/Users/jesus/HTPC/${appName}.command`;

  const appProcess = spawn("open", ["-n", scriptPath]);

  appProcess.on("exit", () => {
    mainWindow.show();
  });
});

ipcMain.on("exit-app", () => {
  app.quit();
});

app.on("window-all-closed", () => {
  app.quit();
});

