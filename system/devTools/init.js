var remote = require("electron").remote,
    devTools_Process = [document.getElementById("devTools--process-system")];
devTools_Process[0].addEventListener('dom-ready', () => {
    remote.getCurrentWindow().webContents.setDevToolsWebContents(remote.webContents.fromId(devTools_Process[0].getWebContentsId()));
});