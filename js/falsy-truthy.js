/*
 Para entender sobre Falsy e Truthy, precisamos lembrar de
 Type conversion (typecasting) vs Type Coersion
*/

/*
    --------------------- Type Coersion  -----------------------------

    Quando o JS está realizando um casting implícito da expressão
*/
console.log("9" + 5);
console.log(9 + "5");
console.log(9 + 5);     // Sem casting


/*
    --------------------- Type typecasting  -----------------------------
    
    Quando realizamos explicitamente um casting...
*/
console.log("9" + String(5));
console.log(String(9) + "5");


/*
    FALSY
    -------------------------------------------------------------------------------
    Quando um valor é considerado false em contextos onde um booleano é obrigatório.
*/

let iAge;
let sMessage;

// iAge não foi atribuida, portanto está sendo interpretada como nulo, ou 0 (Zero)
sMessage = iAge ? "Congratulations, You is old " + iAge + " years." : "Your Age is requered!";
console.log(sMessage);

sMessage = 0 ? "Congratulations, You is old " + iAge + " years." : "Your Age is requered!";
console.log(sMessage);

sMessage = "" ? "Congratulations, You is old " + iAge + " years." : "Your Age is requered!";
console.log(sMessage);

sMessage = false ? "Congratulations, You is old " + iAge + " years." : "Your Age is requered!";
console.log(sMessage);

sMessage = undefined ? "Congratulations, You is old " + iAge + " years." : "Your Age is requered!";
console.log(sMessage);

/*
    TRUTHY
    -------------------------------------------------------------------------------
    Quando um valor é considerado true em contextos onde um booleano é obrigatório.

    Basicamente, é o oposto de FALSY

    true
    {}
    []
    1
    3.23
    "0"
    -1
    Infinity
    -Infinity
*/

// Perceba que a condicional desta expressão é True
sMessage = 0 == false ? "Congratulations, TRUTHY is true." : "Oh, This i'not possible!";
console.log(sMessage);

sMessage = [] ? "Verdadeiro" : "Falso";
console.log(sMessage);

// trata-se de uma string inicializada, ou seja diferente de nulo ou vazia...
sMessage = "0" ? "Verdadeiro 1" : "Falso 1";
console.log(sMessage);

// trata-se de um valor diferente de Zero...
sMessage = -1 ? "Verdadeiro 2" : "Falso 2";
console.log(sMessage);