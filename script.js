// Date - 25-04-2024 Time - 02:30 AM
//we link the script.js file to the index.html file using the <script src> tag.
console.log("Executing");
console.log("Learning Strings in JavaScript");

let name1 = "John";
console.log(name1[0]); // Indes is 0 based so the first character is at index 0
console.log(name1[1]); //o
console.log(name1[2]); // h
// console.log(name1[4]); // undefined as there is no 4th index in the string
console.log(name1.length); // 4 as the length of the string is 4

let name2 = "rohan";
let friend = "Vishesh";
console.log("His name is: ", name2, " and his friend is: ", friend); // Concatenation using , operator
console.log("His name is: "+ name2 + " and his friend is: "+ friend); // Concatenation using + operator
console.log(`His name is ${name2} and his friend is ${friend}`); // String interpolation we use backticks(`) to interpolate the string interpolate meaning is to insert (something) between fixed points.

// escape sequence characters in JavaScript strings are used to insert characters that are illegal in a string.
// example of escape sequence characters are: \n, \t, \', \", \\ etc. these are used for new line, tab, single quote, double quote, backslash respectively.


let myString = "This is a string"

console.log(myString.toUpperCase()) // THIS IS A STRING 
console.log(myString.toLowerCase()) // this is a string ToLowerCase is a function that converts the string to lowercase
console.log(myString.length) // 16 length is a "property" that returns the length of the string
console.log(myString.slice(4, 10)) // This slice is a function that returns a part of the string from the start index to the end index
console.log(myString.slice(4)) // is a string This slice is a function that returns a part of the string from the start index to the end of the string

console.log(myString.replace("is", "at")) // That is a string This replace is a function that replaces the first argument with the second argument in the string

console.log(myString.concat(" and this is a concatenated string")) // This is a string and this is a concatenated string This concat is a function that concatenates the string with the argument passed to it

console.log(myString.trim()) // This is a string This trim is a function that removes the extra spaces from the start and end of the string

console.log("Character at leng 3 is ",myString.charAt(3)) // s This charAt is a function that returns the character at the index passed to it

console.log(myString.indexOf("st")) // 10 This indexOf is a function that returns the index of the first occurrence of the argument passed to it

console.log(myString.indexOf("zz")) // -1 This indexOf is a function that returns -1 if the argument passed to it is not found in the string

console.log(myString.startsWith("Th")) // true This startsWith is a function that returns true if the string starts with the argument passed to it

console.log(myString.endsWith("ing")) // true This endsWith is a function that returns true if the string ends with the argument passed to it

console.log(myString.split(" ")) // [ 'This', 'is', 'a', 'string' ] This split is a function that splits the string into an array based on the argument passed to it

console.log(myString.split("i")) // [ 'Th', 's ', 's a str', 'ng' ] This split is a function that splits the string into an array based on the argument passed to it

console.log(myString.includes("is")) // true This includes is a function that returns true if the string includes the argument passed to it

console.log(myString.includes("zz")) // false This includes is a function that returns false if the string does not include the argument passed to it

console.log(myString.repeat(2)) // This is a stringThis is a string This repeat is a function that repeats the string the number of times passed to it

console.log(myString.search("is")) // 2 This search is a function that returns the index of the first occurrence of the argument passed to it
