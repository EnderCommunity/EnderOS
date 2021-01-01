require('v8-compile-cache');
const { app } = require("./electron/request");

require("./shortcuts");

app.on("ready", function() {
    const mainWindow = require('./visuals/system-window/init');
    mainWindow.show();
});