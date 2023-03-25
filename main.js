const { app, BrowserWindow, Menu } = require("electron");
const Update = require("./main/update");
global.Win = null;
function createWindow() {
	// 创建浏览器窗口
	let win = new BrowserWindow({
		width: 400,
		height: 300,
		resizable: false,
		acceptFirstMouse: true,
		webPreferences: {
			nodeIntegration: true,
		},
		show: false,
		backgroundColor: "#24292e",
	});
	win.once("ready-to-show", function () {
		win.show();
		Update.check();
	});
	// 加载index.html文件
	win.loadFile("renderer/index.html");
	global.Win = win;
}

app.on("ready", createWindow);

Menu.setApplicationMenu(null);
