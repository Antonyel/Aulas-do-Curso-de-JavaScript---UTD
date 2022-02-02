//FUNÇÕES COM JAVASCRIPT

const painel = document.getElementById('painel');
let texto = '';

let num1=30 , num2=10;

//FUNÇÃO COM PARAMETROS E COM RETORNO
function soma(num1,num2){
	return num1+num2;
}

//FUNÇÃO SEM PARAMETRO E COM RETORNO
function endereco(){
	return "Av Beira Mar 212";
}

//FUNÇÃO SEM PARAMETRO E SEM RETORNO
function olaMundo() {
	console.log("Olá mundo");
}

olaMundo();

texto = endereco();

const resultado = document.createTextNode(texto);

painel.appendChild(resultado);