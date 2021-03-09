/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let myName = new String("Luis Fernando");
let myAge = new Number(45);
let myDate = new Date();
let myOldDate = new Date("1976-12-23 23:11:06");

myName.surName = "Machado";
myName.surAge = 50;

console.log(myName, myAge);
console.log(myName.surName, myName.surAge);
console.log(myDate);
console.log("Minha data de nascimento: " + myOldDate)
console.log(myOldDate.__proto__);