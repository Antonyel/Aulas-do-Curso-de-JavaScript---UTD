//ESTRUTURAS DE REPETIÇÃO

const painel = document.getElementById('painel');
let texto = '';

let flag = true;
let contador = 0;

//WHILE
/*
while(flag){ //REPRESENTA O VALOR TRUE

	if(contador < 10){
		console.log("TRABALHANDOOOO...")
		contador++; //OPERADOR DE INCREMENTO

		texto = "trabalhando";

		let resultado = document.createTextNode(texto+" ");

		painel.appendChild(resultado);
	}
	else{
		flag = false;
	}
}
*/

//FOR
for(let x =0 ; x<20 ; x+=2){
	let resultado = document.createTextNode(x+" ");
	painel.appendChild(resultado);
}