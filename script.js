// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
alert("! Welcome to our website !");
console.log("Executing");
var num = prompt("Enter your Number");
var isTrue = confirm("Is your Number " + num);

if (isTrue) {
  alert("Your Number is " + num);
  console.log("Your Number is " + num);
}
else {
  alert("Your Number is not " + num);
  console.log("Your Number is not " + num);
}
