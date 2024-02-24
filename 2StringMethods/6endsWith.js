const str1 = 'Cats are the best!';
console.log(str1.length)
console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false

// endsWith(searchString)
// endsWith(searchString, endPosition)


// String.fromCharCode - will convert it to string from charachter
let s = "Abhishek";
let charCode = s.charCodeAt(0);
str = String.fromCharCode(charCode);
console.log(str);


