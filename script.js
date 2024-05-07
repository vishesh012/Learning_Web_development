// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
console.log("Executing");
console.log("Learning Loop");

let num1;
for (num1 = 0; num1 <= 100; num1++) {
  console.log(num1);
}

let obj = {
  name: "Nikhil",
  role: "Developer",
  age: 21,
  company: "Google",
}
for (const key in obj) {
  // if (Object.hasOwnProperty.call(obj, key)) {
  const element = obj[key];
  console.log(key, element);
}

for (const iterator of "Vishesh") {
  console.log(iterator);

}


let i = 5;
while (i < 10) {
  console.log(i);
  i++;
}
let num2 = 10
do {
  num2++;
  console.log(num2);
} while (num2 < 0); //Do while loop will execute atleast once even if the condition is false.