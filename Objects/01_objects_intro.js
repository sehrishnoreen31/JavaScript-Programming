let my_obj  = {
    name : 'Sehrish',
    age : 23,
    email : 'sehrishnoreen@gmail.com'
};

// access values
console.log(my_obj.name);
console.log(my_obj.age);
console.log(my_obj['email'], '\n');

// update values
my_obj.name = 'Sehrish Noreen';
my_obj.email = 'sehrishnoreen31@gmail.com';
console.log(my_obj.name);
console.log(my_obj.age);
console.log(my_obj.email);

// iterate over key, values in js objects
for (const key in my_obj){
    console.log(key, ':', my_obj[key])
}
// or use built in methods
console.log('\nKeys: ',Object.keys(my_obj));
console.log('\nValues: ',Object.values(my_obj));
console.log('\nEnteries: ',Object.entries(my_obj));

// delete keys
delete my_obj.name
delete my_obj.age
console.log('\n',my_obj);


// symbols inside objects
my_symbol = Symbol()
let my_obj2 = {
    [my_symbol] : 'Sym1',
    name : 'Symbol'
}

console.log('Symbol: ',my_obj2, '\n');

// functions inside objects
my_obj3 = {
    my_func : function (){ console.log('Hello, this is a function!')}
}
my_obj3.my_func(); //function call
