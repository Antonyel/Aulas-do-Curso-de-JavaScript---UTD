var num1= 10;
var num2= 2;
/*
(+) Soma ; (-) Subtração ;
(*) Multiplicação ; (/) Divisão

console.log("Soma = "+(num1+num2));
console.log("Subtração = "+(num1-num2));
console.log("Divisão = "+(num1/num2));
console.log("Multiplicação = "+(num1*num2));

console.log(num1>num2);
console.log(num1>=num2);
console.log(num1==num2);
console.log(num1!=num2);
*/

/*
letra = "10";

console.log(num1 === letra); //COMPARANDO VALOR E TIPO
console.log(num1 == letra); //COMPARANDO O VALOR

//ESTRUTURAS DE DECISÃO IF / ELSE IF / ELSE

 if(letra === num1){
 	console.log("OS DOIS SÃO IDÊNTICOS - MESMO VALOR E MESMO TIPO");
 }else if(letra == num1){
 	console.log("OS DOIS SÃO IGUAIS - MESMO VALOR");
 }else{
 	console.log("OS DOIS NÃO SÃO DO MESMO TIPO E NEM POSSUEM O MESMO VALOR");
 }

 */

 //ESTRUTURA DE DECISÃO SWITCH/CASE
let opcao = 3;
switch(opcao){
	case 1: console.log("ENSINO MÉDIO");break;
	case 2: console.log("GRADUAÇÃO");break;
	case 3: console.log("MESTRADO");break;
	case 4: console.log("DOUTORADO");break;
	default: console.log("OPCÃO INVÁLIDA");break;
}