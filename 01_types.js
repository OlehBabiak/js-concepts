// Types of data: Number, String, Null, Undefined, Boolean, symbol, Object
// node назва_файлу.js - запускає консоль
// ctrl+shift+P вибираєм: terminal: clear - очистить консоль

// console.log(typeof 0)
// console.log(typeof '0')
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof true)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof function () {})
// console.log(typeof NaN)
// console.log(undefined * 1)


// приведення типів

// let language = 'Java Script'
// if (language) {
//     console.log('The best language is:', language)
// }

// '', 0, null, undefined, NaN, false   коли приводяться до boolean, видають false
// console.log(Boolean(''))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(false))
//
// console.log(Boolean(' '))
// console.log(Boolean({}))
// console.log(Boolean([]))
// console.log(Boolean(function () {}))
// console.log(Boolean(125))

// Строки та числа
// console.log('1' + 2)  // string 12
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) // string 10
// console.log('5' - 1 + 0) // number 4  для строки не визначений оператор "-" тому строка читається як число
// console.log('8' * '5') // number 40  для строки не визначений оператор "*" тому строка читається як число
// console.log('8' * 'px') // NaN
// console.log(4 + 10 + 'px') // String 14px спочатку мат операція, потім перетворює в строку
// console.log('px' + 4 + 10) // String px410
// console.log(4 + 10 + 'px' + 5 + 8) // String 14px58
// console.log('42' - 40) //number
// console.log('42px' - 40) //NaN
// console.log(null + 2)  // null при приведенні до нуля = 0
// console.log(undefined + 42)  //NaN  undefined не можливо привести до числа

// == vs ===
// == порівнює з приведенням типів як на прикладах вище
// === порівнює по значенню без приведення типів

console.log('2' == 2)  // true
console.log('2' === 2)  //false
console.log(undefined == null)  // true
console.log(undefined === null)  //false
console.log('0' == false)  // true
    //=========================================
console.log(false == '')  // true
console.log(false == [])  // true
console.log(false == {})  //false
console.log('' == 0)  // true
console.log('' == [])  // true
console.log('' == {})  // false
console.log(0 == [])  // true
console.log(0 == {}) // false
console.log(0 == null) // false



