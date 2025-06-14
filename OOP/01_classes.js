// Declaration
// declaration of the class is not hoisted at the top of the code
// classes have strict mode
class Person{}
const Animal = class {}

// type of classes
console.log(typeof Person);
console.log(typeof Animal);

// constructor method
class Person2{
    constructor(name){
        this.name = name
    }
}
const Animal2 = class {
    constructor(legs){
        this.legs = legs
    }
}

// creating objects
const p1 = new Person2('Ayesha');
console.log(p1.name);
const p2 = new Person2();
console.log(p2);
const a1 = new Animal2('4');
console.log(a1.legs);

// class methods
Person2.prototype.updateName = function(newName){
    this.name = newName
}
p1.updateName('Saira')
console.log(p1.name);


