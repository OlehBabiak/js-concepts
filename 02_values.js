// let a = 42
// let b = a
// b++
// console.log('a = ', a)  //42
// console.log('b = ', b)  //43

// let a = [1, 2, 3]
// let b = a
// b.push(4)
// console.log('a', a)  // a [ 1, 2, 3, 4 ]
// console.log('b', b)  // b [ 1, 2, 3, 4 ]

// let a = [1, 2, 3]
// let b = a.concat()  // метод concat без параметрів повертає копію масива
// b.push(4)
// console.log('a', a)  // a [ 1, 2, 3]
// console.log('b', b)   // b [ 1, 2, 3, 4 ]

let a = [1, 2, 3]
let b = a
b.push(4)
let c = [1, 2, 3, 4]
console.log(a===b)  // true
console.log(a===c)   // false
console.log(b===c)   // false
console.log(a)
console.log(b)
console.log(c)