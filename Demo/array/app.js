let arr = [2,3, 4,5];
// 223 224 233 244 334 344

for (let i = 0; i < arr.length; i++) {
	for (let x = 0; x < arr.length; x++) {
		for (let y = 0; y < arr.length; y++) {
			let a = arr[i]
			let b = arr[x]
			let c = arr[y]
			
			if (a == b && a == c) {

			} else {

				if ( a <= c & a <= b & b <= c) {
					if (a == b || a == c || c == b)
						console.log(a, b, c)
				}
			}
		}
	}
}
