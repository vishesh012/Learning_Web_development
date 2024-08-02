let arr = [1,2,3,4,5,6,7,8,9,10];
// Index : 0,1,2,3,4,5,6,7,8,9

arr[0] = 342;
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[5]);

console.log("Array in String Format " + arr.toString());
console.log("Array in String Format " + arr.join(" - "));
console.log(arr.pop());
console.log(arr.push(100));
console.log(arr);
console.log(arr.shift());
console.log(arr.unshift());

let a = "Hello";
console.log(a);
a[0] = "J";
// a[0] = "J" is not working because string is immutable
console.log(a);

document.title = "I am Robot";
console.log(document.title);
console.log(document.body);