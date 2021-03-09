// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// condição então valor 1 se não valor 2
// condiction ? value1 : value2

// exemplos
let sMessage = "";
let lIsFemale = true;
let iYourAge = 21;

sMessage = lIsFemale ? "Hello Sr(a)" : "Hello Sr.";
console.log(sMessage);

sMessage = iYourAge > 18 ? "Your entrance is authorized." : "Entrance restricted | Only old more then 18.";
console.log(sMessage);


lIsFemale = false;
iYourAge = 15;

sMessage = lIsFemale ? "Hello Sr(a)" : "Hello Sr.";
console.log(sMessage);

sMessage = !lIsFemale && iYourAge > 21 ? "Your entrance is authorized." : "Entrance restricted | Man, Only after then 21.";
console.log(sMessage);