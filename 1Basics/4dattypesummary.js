// primitve (stack ) copy pass hota hai
// non primitive (reference type ) heap

let age = 21;
let newAge = age;
newAge = 43;
console.log(age,newAge); // both is different 

// non primitve datatypes - heap - array objects and functions

let obj1 = {
    name : "Abhishek"
}
let obj2 = obj1;
obj2.name = "Abhimanyu";
console.log(obj1.name); 
console.log(obj2.name); // both will be change as it pass by reference 
