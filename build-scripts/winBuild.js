var electronInstaller = require('electron-winstaller');
var path = require("path");
var fs = require("fs");

const appDir = path.join(__dirname, "..", "dist", "win-unpacked");
const outDir = path.join(__dirname, "..", "win_build");
const gifPath = path.join("build-scripts","load.gif");

fs.writeFileSync(path.join(appDir,"LICENSE"),"TEST LICENSE");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: appDir.toString(),
    outputDirectory: outDir.toString(),
    authors: 'My App Inc.',
    exe: 'electron-updater-example.exe',
    loadingGif : gifPath.toString()
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));