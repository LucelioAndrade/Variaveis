let x = 10, y = 2;
let resultado = x + y;
let mensagem = "A soma de " + x + " e " + y + " é " + resultado
console.log(mensagem); //12

resultado = x - y;
mensagem = "A subtração de " + x + " e " + y + " é " + resultado
console.log(mensagem); //8

resultado = x * y;
mensagem = "A multiplicação de " + x + " e " + y + " é " + resultado
console.log(mensagem);//20

resultado = x / y;
mensagem = "A divisão de " + x + " e " + y + " é " + resultado
console.log(mensagem); //5

//Resolução do exercicio usando string template

console.log(`A soma de ${x} e ${y} é ${resultado}`); //a soma de 10 e 2 é 12

console.log(`A subtração de ${x} e ${y} é ${resultado}`); //A subtração de 10 e 2 é 8

console.log(`A multiplicação de ${x} e ${y} é ${resultado}`); //A multiplicação de 10 e 2 é 20

console.log(`A divisão de ${x} e ${y} é ${resultado}`); //A divisão de 10 e 2 é 5