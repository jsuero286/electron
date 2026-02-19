const { app, BrowserWindow, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("path");

let mainWindow;

const platform = process.platform; // 'darwin' | 'win32' | 'linux'
const htpcBase = path.join(__dirname, "..", "HTPC");

function getScriptConfig(appName) {
  if (platform === "darwin") {
    return {
      cmd: "open",
      args: ["-n", path.join(htpcBase, "MACOS", `${appName}.command`)],
    };
  } else if (platform === "win32") {
    return {
      cmd: "cmd",
      args: ["/c", path.join(htpcBase, "WINDOWS", `${appName}.bat`)],
    };
  } else {
    return {
      cmd: "bash",
      args: [path.join(htpcBase, "LINUX", `${appName}.sh`)],
    };
  }
}

function getRetroConfig() {
  if (platform === "darwin") {
    return { cmd: "open", args: ["-a", "RetroBat"] };
  } else if (platform === "win32") {
    return { cmd: "cmd", args: ["/c", "start", "RetroBat"] };
  } else {
    return { cmd: "retroarch", args: [] };
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("http://localhost:4200");
}

app.whenReady().then(createWindow);

ipcMain.on("launch-retro", () => {
  mainWindow.hide();

  const { cmd, args } = getRetroConfig();
  const retro = spawn(cmd, args, { shell: platform === "win32" });

  retro.on("exit", () => {
    mainWindow.show();
  });
});

ipcMain.on("launch-app", (event, appName) => {
  mainWindow.hide();

  const { cmd, args } = getScriptConfig(appName);
  const appProcess = spawn(cmd, args, { shell: platform === "win32" });

  appProcess.on("exit", () => {
    mainWindow.show();
  });
});

