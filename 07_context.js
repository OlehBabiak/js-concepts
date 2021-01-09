// const person = {
// 	surname: 'Babiak',
// 	does: function (what, name) {
// 		console.log(`You ${what} very well, ${name} ${this.surname}`)
// 	}
// }
// person.does('dancing', 'Oleh')
//
// const nastya = {surname: 'Surkova'}
// person.does.call(nastya, 'sings', 'Nastja')  // метод call викликаєм метод does, де першим параметром є контекст (контекст в JS є обєктом) далі параметри які є в методі
// person.does.apply(nastya, ['sings', 'Nastja'])  // метод apply те саме, тільки другим параметром приймає масив параметрів метода
// person.does.call(nastya, ...['sings', 'Nastja'])  // метод call в даному випадку може приймати обєкт через спред оператор ...
// person.does.bind(nastya, 'sings', 'Nastja')()  // метод bind не викликає ф-цію а повертає нову, яку ми потім викликаємо
// let bound = person.does.bind(nastya, 'sings', 'Nastja')
// bound()
//==================  не явний метод
const animal = {
	legs: 4,
	logThis: function () {
		console.log(this)
	}
}
animal.logThis()
//=============  явний метод
function logThis() {
	console.log(this)
}
const obj = {num:42}
logThis.call(obj)
logThis.apply(obj)
logThis.bind(obj)()
//========================
function Cat(color) {
	this.color = color
	console.log('This', this)
	;(() =>console.log('Arrow this', this))()
}
new Cat('black')