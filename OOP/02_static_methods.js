
// You can execute the static method by taking the class name as a reference 
// rather than an instance of the class
class Person{
    static staticMthod1(){
        return 'A static method'
    }

    notStaticMethod(){
        return 'This is not a static method'
    }
}

p1 = new Person()
console.log(Person.staticMthod1());
console.log(p1.notStaticMethod());

// multiple static methods
class Bank{
    static staticBankMethod1(){
        return 'First static method of bank'
    }
    static staticBankMethod2(){
        return '2nd static method of bank'
    }
} 
console.log(Bank.staticBankMethod1());
console.log(Bank.staticBankMethod2());

// static methods with same name, gets only last one with that name
class Inventory{
    static staticInventoryMethod(){
        return 'First static method of Inventory'
    }
    static staticInventoryMethod(){
        return '2nd static method of Inventory'
    }
    static staticInventoryMethod(){
        return '3rd static method of Inventory'
    }
}
console.log(Inventory.staticInventoryMethod());
console.log(Inventory.staticInventoryMethod());

// static method execution inside constructor
class Addition{
    constructor(num1, num2){
        this.sum = this.constructor.sum(num1,num2);
    }
    static sum(a,b){
        return a+b;
    }
}
numbers = new Addition(2,5);
console.log(numbers.sum);