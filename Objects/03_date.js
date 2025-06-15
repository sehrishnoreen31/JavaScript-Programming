// declaration
let today = new Date();
console.log(today);

// methods
today = today.toDateString();
console.log(today);

let this_day = new Date();
this_day = this_day.toISOString();
console.log(this_day);

let to_day = new Date();
to_day = to_day.toLocaleDateString();
console.log(to_day);

let to_day_2 = new Date();
to_day_2 = to_day_2.toLocaleString();
console.log(to_day_2);


