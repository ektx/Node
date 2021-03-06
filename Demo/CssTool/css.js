var fs = require('fs');

fs.readFile('css/layout.css', 'utf-8', function(err, data) {
	if (err) throw err;

	// console.log('Css 内容:' + data);
	var outputCss = '@charset "utf-8";\n';
	var RegImport = new RegExp("(\\w+\\/?)*.css(?=')", "gi");
	var importCss = data.match(RegImport) || [];

	console.log('@import 引用样式有:' + importCss + '\n个数有:'+importCss.length);

	for (var i =0; i < importCss.length; i++) {
		(function(i) {

			var cssPath = 'css/'+importCss[i];
			console.log(cssPath);

			fs.stat(cssPath, function(err, css) {
				var css = '';

				if (err) { 
					console.log(cssPath+' 不存在文件');
				} else {
					css = fs.readFileSync(cssPath, 'utf-8');

					css = css.replace(/@charset\s('|")utf-8('|");/i, '');
					
					outputCss += css;
				}
	
				// console.log(css);
				console.log(i);
				
				if (i == importCss.length - 1) {

					// 输出整合样式
					// console.log('整合样式:' + outputCss);

					// 压缩css
					// \t 去换行
					// \s{2,} 去出现2次以上的空格
					// \/\*(.|\r\n|\n)*?\*\/ 去注释
					/*
						\;(?=(\n|\r\n)*?\}) 去样式中最后一个 ;

						.hummer-app {
							position: relative;
							overflow: hidden;
						}

					*/
					/* 
						\s(?=\{) 去 .classname { .. }中的{前空格或是
								 去 @keyframes animate { to { }} {前的空格

						\s(?=\() 去除(前的空格
					*/
					var minOutputCss = css.replace(/(\t|\s{2,}|\/\*(.|\r\n|\n)*?\*\/|\;(?=(\n|\r\n)*?\})|\s(?=\{)|\s(?=\())/g, '');

					// 去 : 后的空格
					minOutputCss = minOutputCss.replace(/:\s/g, ':');
					// console.log('整合样式:' + outputCss);


					fs.writeFile('css/layout-com.css', outputCss, 'utf8', function(err){
						if (err) throw err;
						console.log('OK!')
					});

					fs.writeFile('css/layout-min.css', minOutputCss, 'utf8', function(err){
						if (err) throw err;
						console.log('OK!')
					});

				}
			})
		})(i)
	} else {
		
	}


})


// function readFile(file)