// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
console.log("Executing");
console.log("Learning Functions in JavaScript");

// Function Declaration
function nice(name) {
  console.log("Hello, World! " + name);
  console.log("How are you " + name);

}

nice("vishesh");

function sum(a, b, c = 3) { //default value of c is 3
  console.log(a + b)
  return a + b + c;
}
result = sum(2, 3);
result2 = sum(4);//c is 3 by default a is 4 and b is undefined so b is 0 will produce NaN
result3 = sum(2, 7, 4); //c is 4

console.log("sum of these number is : ", result);
console.log("sum of these number is : ", result2);
console.log("sum of these number is : ", result3);


const func1= (x)=>{
  console.log("Hey I am an Arrow Function",x);
}
func1(32);
func1(34, 2); //it will ignore the extra arguments  
func1(84);
func1(); //it will produce undefined
//Arrow function does not have arguments object
//Arrow function does not have this keyword
//Arrow function does not have prototype property
//Arrow function does not have super property
//Arrow function does not have new.target property
//Arrow function does not have call, apply, bind method
//Arrow function does not have constructor
