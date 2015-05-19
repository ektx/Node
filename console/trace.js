function a() {
	b(2,3);
}

function b(a, b) {
	// 显示调用方式
	console.trace();
	return a;
}



a()