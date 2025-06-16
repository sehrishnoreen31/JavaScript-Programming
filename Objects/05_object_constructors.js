function Greet(){
    this.name = 'Ayesha',
    this.greeting = 'Hello'
}

let greet1 = new Greet()
console.log(greet1.name, greet1.greeting);


// with parameters
function GreetEmployee(name, greeting){
    this.name = name;
    this.greeting = greeting;
}
let greetEmp1 = new GreetEmployee('Fatima', 'Good Morning');
console.log(greetEmp1.greeting, greetEmp1.name);


