// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
/*
Parameters
index
Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

Return value
An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.
*/

let str = "Abhi";
console.log(str.charCodeAt(0));

str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071