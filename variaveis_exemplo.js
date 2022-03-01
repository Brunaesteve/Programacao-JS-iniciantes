//##################### ( TIPOS DE VARIAVEIS ) ##################### 

// ### Variavel de escopo "Global" (var).
var variavel10 = "texto1"; // ... Essa variavel tem o nome "variavel10" e está recebendo o valor "texto1" que é um texto (String).
var variavel11 = 10; // ......... Essa variavel tem o nome "variavel11" e está recebendo o valor 10 que é número (Number).
console.log(variavel10); // ..... Nesse exemplo mostramos o dado armazenado na variavel com o nome "variavel10".

// ### Variavel de escopo de bloco (let).
let variavel20 = "texto2"; // ... Essa variavel tem o nome "variavel20" e está recebendo o valor "texto2" que é um texto (String).
let variavel21 = 10; // ......... Essa variavel tem o nome "variavel21" e está recebendo o valor 10 que é número (Number).
console.log(variavel20); // ..... Nesse exemplo mostramos o dado armazenado na variavel com o nome "variavel20".

// ### Constante de escopo de bloco (const).
const constante10 = "texto3"; // ... Essa constante tem o nome "constante10" e está recebendo o valor "texto1" que é um texto (String) e esse valor nunca mudará.
const constante11 = 10; // ......... Essa constante tem o nome "constante21" e está recebendo o valor 10 que é número (Number) e esse valor nunca mudará.
console.log(constante10); // ....... Nesse exemplo mostramos o dado armazenado na constante com o nome "constante10".

// ### Uma lista de valores, essas listas podem ser var, let, const.
var listaDeNomes = ["Zezim", "Mariazinha", "Josué"]; // ............ Essa é uma lista de textos (Strings).
let listaDeNumeros = [10, 11, 13, 20]; // .......................... Essa é uma lista de números (Numbers).
const listaDeDadosPessoais = ["Kaleo", 23, "492.8923.168-3"]; // ... Essa é uma lista hibrida contendo textos e números, que nunca se alteram (const).
console.log(listaDeNomes[0]); // ................................... Nesse exemplo mostramos o dado armazenado no indice 0 dentro da lista com o nome "listaDeNomes".

// ### Objeto de valores, (Podemos interpretar como uma variavel com varias variaveis dentro).
var objetoDeDados = {
    valor1: "texto",
    valor2: 10,
    valor3: ["Olá", "mundo!"]
}; // Esse é um objeto com dados variados.
console.log(objetoDeDados.valor1); // Nesse exemplo mostramos o valor dentro do atributo "valor1" que está dentro da variavel "objetoDeDados".

//##################################################################