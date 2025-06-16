let my_obj = {
    name : 'Ayesha',
    age : 30,

    // getter
    get getAge(){
        return this.age
    },
    get getName(){
        return this.name
    },
    // setter
    set setAge(age){
        return this.age = age;
    },
    set setName(name){
        return this.name = name;
    }
}

// get
console.log(my_obj.getName);
console.log(my_obj.getAge);
// set
my_obj.setName = 'Fatima'
my_obj.setAge = 40
console.log(my_obj.getName);
console.log(my_obj.getAge);



