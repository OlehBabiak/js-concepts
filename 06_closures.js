// function helloTo(name) {
// 	let message = 'Hello ' + name
//
// 	return function () {
// 		console.log(message);
// 	}
// }
//
// helloTo('Lena')()

// function createFrameworkManager() {
// 	let fw = ['Angular', 'React']
//
// 	return {
// 		print: function () {
// 			console.log(fw.join(' '))
// 		},
// 		add: function (framework) {
// 			fw.push(framework)
// 		}
// 	}
// }
// const manager = createFrameworkManager()
// manager.print()
// manager.add('VueJS')
// manager.print()
//=====================
//setTimeout
// let fib = [1, 2, 3, 5, 8, 13]
// for (let i = 0; i < fib.length; i++) {
//
// 	setTimeout(function () {
// 		console.log(`fib[${i}] = ${fib[i]}`)
// 	}, 1500)
// }

// let fib1 = [1, 2, 3, 5, 8, 13]  // Замикання
//
// for (var i = 0; i < fib1.length; i++) {
// 	(function (j) {
// 		setTimeout(function () {
// 			console.log(`fib1[${j}] = ${fib1[j]}`)
// 		}, 1500)
// 	})(i)
// }

function bind(context, fn) {
	
	return function (...args) {
	fn.apply(context, args)
	}
}

function logPerson() {
	console.log(`Peson: name - ${this.name}, age - ${this.age}, job - ${this.job}`)
}
const person1 = {name: 'Nastja', age: 28, job: 'bank'}
const person2 = {name: 'Oleh', age: 39, job: 'developer'}
bind(person1, logPerson)()
bind(person2, logPerson)()
//==========================
function urlGenerator(domain) {
	return function (url) {
		return `https://${url}.${domain}`
	}
}

let urlCom = urlGenerator('com')
console.log(urlCom('google'))
console.log(urlCom('netflix'))

let urlComUa = urlGenerator('com.ua')
console.log(urlComUa('lider-shyna'))