// console.log(a)
// var a = 2+3
//
// console.log(b)
// let b = 2+3
console.log(sum(2, 8))   //function declaration, викликаємо ф-цію в будь-якому місці
function sum(a, b) {
	return a+b
}

console.log(sum1)                     // function expresion, викликаємо ф-цію тільки після оголошення
let sum1 = function (a, b) {
	return a*b
}
