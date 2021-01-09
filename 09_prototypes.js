 function Cat(name, color) {
	this.name = name
	 this.color = color
 }
 
 Cat.prototype.voice = function () {
	 console.log(`Cat ${this.name} says miau`)
 }
 const cat = new Cat('Phil', 'grey')
 // cat.voice()
 // console.log(Cat.prototype)
 // console.log(cat)
 // console.log(cat.__proto__ === Cat.prototype)
 //
 //=======
 function Person() {}
 Person.prototype.legs = 2
 Person.prototype.skin = 'white'
 
 const person = new Person()
 person.name = 'Oleh'
 person.eyes = 'blue'

 // console.log('skin' in person)
 // console.log(person.legs)
 // console.log(person.eyes)
 // console.log(person.name)
 // console.log(person.skin)
 //
 // console.log(person.hasOwnProperty('name')) //чи це власна властивість
 // console.log(person.hasOwnProperty('skin'))
 
 // Object.create
 let proto = {year: 2019}
 

 // console.log(myYear.year)
 // proto.year = 2020
 // console.log(myYear.year)
 proto = {year: 1981}
 const myYear = Object.create(proto)
 console.log(myYear.year)
 // console.log(myYear.hasOwnProperty('year'))
 // console.log(myYear.__proto__ === proto)
 