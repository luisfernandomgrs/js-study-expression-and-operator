/*
    Operadores unários
    typeof
    delete
*/

const person = {
    Name: "Luis Fernando",
    Age: 45
}

// remove uma propriedade do objeto, desde que exista.
delete person.Age;
delete person.MyAge;

console.log(person);