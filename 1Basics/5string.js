const repo = 43;
const name = "Abhishek";

console.log(`hello my name is ${name} and i have ${repo} repository on github`);

const newname = new String('Abhishek'); // it is an object and if u paste it on console google chrome, 
// you will come to know that it is an object with key value pair as 0 A, 1 b, 2 h, 3 i, etc.

// it did not change the value of original string because primitive or stack, pass by value or copy pass hoti hai
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.charAt(0));
console.log(newname.indexOf('A'));