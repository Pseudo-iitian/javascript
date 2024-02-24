const sentence = "The quickest dog is whity";
const word = "dog";
console.log(`The ${word} ${sentence.includes(word)? "is":"is not"} is present in the sentence "${sentence}"`);