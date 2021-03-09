// Operadores lógicos (logical operators)

// - 2 valores boleanos, quando verificados,
// resultará em verdadeiro ou falso.

let lStudyNewContent = true;
let lHaveTime = true;

// AND &&
if (lStudyNewContent && lHaveTime)
    console.log("Posso estudar este novo conteúdo.");
else
    console.log("Não tenho tempo livre para estudar este novo conteúdo...");

lHaveTime = false;

if (lStudyNewContent && lHaveTime)
    console.log("Posso estudar este novo conteúdo.");
else
    console.log("Não tenho tempo livre para estudar este novo conteúdo...");



// OR ||
if (lStudyNewContent || lHaveTime)
    console.log("Uma janela de oportunidade foi aberta!");
else
    console.log("[FOMO - Alerta] Nenhuma disponibilidade no momento para novos conteúdos...");

lStudyNewContent = false;
lHaveTime = false;

if (lStudyNewContent || lHaveTime)
    console.log("Uma janela de oportunidade foi aberta!");
else
    console.log("[FOMO - Alerta] Nenhuma disponibilidade no momento para novos conteúdos...");



// NOT !
if (!lStudyNewContent || !lHaveTime)
    console.log("Sem disponibilidade no momento para novos conteúdos!");