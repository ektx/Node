const robot = require('robotjs');

// 设置鼠标移动速度
robot.setMouseDelay(5);

let twoPI = Math.PI * 2.0;
let screenSize = robot.getScreenSize();
let height = (screenSize.height / 2) - 10;
let width = screenSize.width;

for (let x = 0; x < width; x++) {
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}