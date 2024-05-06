// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
console.log("Executing");

{
  let age = 17;
  let grace = 2;

  age += grace;
  console.log(age + grace);
  console.log(age - grace);
  console.log(age * grace);
  console.log(age / grace);
  console.log(age ** grace);
  console.log(age % grace);

  if (age + grace >= 18) {
    console.log("You are eligible to Drive");
  } else {
    console.log("You are not eligible to Drive");
  }
}

{
  let num1 = 3;
  let num2 = "3";
  if (num1 === 3) {
    //also checks if the data type is same or not
    console.log("num1 is equal to 3");
  } else if (num1 == 3) {
    //checks if the value is same or not
    console.log("num1 is equal to 3 in value");
  } else {
    console.log("num1 is not equal to 3");
  }
}
/*
    This is a multi-line 
    comment
*/
