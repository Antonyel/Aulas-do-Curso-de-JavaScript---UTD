contador = 0;
somador = 0;

//USANDO IF
while(contador <= 100){
if(contador %2==0){

	somador +=contador;
	contador++;
}
}
console.log(contador)

//SEM IF, SOMANDO DE 2 EM 2
while(contador <=100){
	somador += contador;

	contador+=2;
}
console.log(somador);