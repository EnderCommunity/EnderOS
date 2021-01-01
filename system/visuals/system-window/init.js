const { BrowserWindow } = require("./../../electron/request"), mainWindow = new BrowserWindow({
    title: "EnderOS",
    frame: false,
    show: false,
    icon: "./main.ico",
    webPreferences: {
        devTools: true,
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        nodeIntegrationInSubFrames: true,
        preload: "./../../../",
        sandbox: false,
        enableRemoteModule: true,
        javascript: true,
        webSecurity: true,
        allowRunningInsecureContent: false,
        images: true,
        textAreasAreResizable: false,
        webgl: true,
        plugins: false,
        experimentalFeatures: false,
        offscreen: false,
        contextIsolation: false,
        nativeWindowOpen: false,
        autoplayPolicy: "no-user-gesture-required",
        spellcheck: true,
        webviewTag: true
    },
    resizable: false,
    maximizable: false,
    minimizable: false,
    closable: false,
    fullscreenable: true,
    paintWhenInitiallyHidden: true,
    transparent: false,
    titleBarStyle: "custom",
    skipTaskbar: true,
    fullscreen: true,
    kiosk: true
});

//mainWindow.webContents.openDevTools({ mode: 'docked' });
mainWindow.setAlwaysOnTop(true, 'screen');
mainWindow.setBackgroundColor('#000000');
//mainWindow.webContents.openDevTools({ mode: 'docked' });
mainWindow.setMenu(null);
mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({ responseHeaders: Object.fromEntries(Object.entries(details.responseHeaders).filter(header => !/x-frame-options/i.test(header[0]))) });
});
mainWindow.loadURL(require("./../../URL").format({
    pathname: require("./../../path").join(__dirname, "content.html"),
    protocol: "file",
    slashes: true
}));
mainWindow.on('closed', () => {
    win = null;
});
mainWindow.on('unresponsive', () => {
    console.log("System Unresponsive");
    app.quit();
});
module.exports = mainWindow;