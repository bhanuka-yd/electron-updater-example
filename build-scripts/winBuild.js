var electronInstaller = require('electron-winstaller');
var path = require("path");

const appDir = (path.join(__dirname,"..","dist","win-unpacked"));
const outDir = (path.join(__dirname,"..","win_build"));

// console.log(appDir);

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: appDir.toString(),
    outputDirectory: outDir.toString(),
    authors: 'My App Inc.',
    exe: 'myapp.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));