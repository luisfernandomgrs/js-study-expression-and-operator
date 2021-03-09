// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta
// à comparação.


let one = 1;
let two = 2;

console.log("O valor definido para, one é: " + String(one));
console.log("O valor definido para, two é: " + String(two));

// == igual
console.log("igual");
console.log(one == "1");        // TRUE -> Não compara o Tipo
console.log(one === "1");       // FALSO -> compara o Tipo
console.log(one == two);

// != diferente
console.log("diferente");
console.log(one != two);

// === estritamente igual
console.log("estritamente igual");
console.log(one === two);

// !== estritamente diferente
console.log("estritamente diferente");
console.log(one !== two);

// > Maior
console.log("Maior");
console.log(one > two);

// >= Maior igual
console.log("Maior igual");
console.log(one >= two);

// < Menor
console.log("Menor");
console.log(one < two);

// <= Menor igual
console.log("Menor igual");
console.log(one <= two);