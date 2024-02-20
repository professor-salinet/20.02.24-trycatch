const variavel1 = "valor somente leitura";
var variavel2 = "valor editável";

try {
    variavel1 = "valor não permitido";
    console.log("A variavel1 foi alterada para: ", variavel1);
} catch (e) {
    console.error("Ops! Ocorreu o erro: ", e);
}

try {
    variavel2 = "valor permitido";
    console.log("A variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("Ops! Ocorreu o erro: ", e);
}
