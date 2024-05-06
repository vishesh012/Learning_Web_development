// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
console.log("Hello World!");

var num1 = 5;
let num2 = 10;
let sum = num1 + num2;
let name1 = "John";

console.log(sum);
console.log(typeof sum, typeof num1, typeof name1);

const a1 = 6;
// a1 = 10; can't change value because it is a constant

{
    let num1 = 13;
    console.log(num1);
}
console.log(num1);

let obj ={
    name: "John",
    "job code": 32325, //writing Job role in quotes because it has a space in between
    "Is Productive": true
}
console.log(obj);

obj.salary = "12cr";
console.log(obj);
obj.salary = "15cr";
console.log(obj);
