document.getElementById('calculate-button').onclick = function() {
// Mensagem de alerta ao apertar botão de "=";
alert('A magia do negócio!');
// Coletar números inseridos nas caixas de input;
let elem1 = document.getElementById("elem-1");
let elem2 = document.getElementById("elem-2");

let val1 = parseInt(elem1.value);
let val2 = parseInt(elem2.value);

console.log(val1);
console.log(val2);

// Comando para somar as variáveis 1 e 2
let sum = val1 + val2;

console.log(sum);

// Comando para identificar qual a operação selecionada
let choice = document.querySelector('input[name="operation"]:checked');
let operation = choice.value;

console.log(operation);

// Comando para que o resultado da operação dos campos de input apareçam no campo de texto/resultado
let resultElement = document.getElementById("result");

if (operation === '+') {
	resultElement.innerText = val1 + val2;
	} else if (operation === '-') {
	resultElement.innerText = val1 - val2;
	} else if (operation === '*') {
	resultElement.innerText = val1 * val2;
	} else {
	resultElement.innerText = val1 / val2;
	}
}
