//ESTRUTURA DE REPETIÇÃO WHILE

var escolha;
var laco = true;

while(laco){
escolha = prompt("Escolha uma opção a, b, c, d ou 0 pra sair");

switch(escolha){
	case 'a': console.log("Novo documento");break;

	case 'b': console.log("Abrir documento");break;

	case 'c': console.log("Salvar documento");break;

	case 'd': console.log("Salvar como");break;

	case '0': laco=false;break;

	default: console.log("Opção Inválida");
}
}