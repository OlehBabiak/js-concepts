function funkA() {
	let a = 1
	function funkB() {
		let b = 2
		function funkC() {
			let c = 3
			console.log('funcC:', a, b, c)
		}
		funkC()
		console.log('funkB:', a,b)
	}
	funkB()
	console.log('funkA:', a)
}
funkA()