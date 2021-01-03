const { app, globalShortcut } = require("./electron/request");
app.whenReady().then(() => {
    const ret = globalShortcut.register('CommandOrControl+K', () => {
        console.warn("[SYSTEM]: The system has been forcefully closed!");
        console.warn("[INFO]: This means that all of your new data during this session got lost!");
        app.exit();
    });
    if (!ret) {
        app.exit();
    }
    // Check whether a shortcut is registered.
    if (!globalShortcut.isRegistered('CommandOrControl+K')) {
        app.exit();
    }
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

module.exports = null;