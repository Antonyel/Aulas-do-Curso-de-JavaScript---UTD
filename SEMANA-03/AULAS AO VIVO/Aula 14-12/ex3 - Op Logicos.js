//OPERADORES LÓGICOS

/*

&& - And (E) - Para ser TRUE ambas as proposições devem ser TRUE
|| - Or (Ou) - Para ser TRUE basta que uma das proposições seja TRUE
& , | - Bit a bit e retorna 0-false 1-(true)
*/

// && (And)
console.log(false&&false) // FALSE
console.log(false&&true)  // FALSE
console.log(true&&false)  // FALSE
console.log(true&&true)   // TRUE

// &
console.log(false&&false) // 0
console.log(false&&true)  // 0
console.log(true&&false)  // 0
console.log(true&&true)   // 1

// || (Or)
console.log(false||false) // FALSE
console.log(false||true)  // TRUE
console.log(true||false)  // TRUE
console.log(true||true)   // TRUE

// |
console.log(false|false) // 0
console.log(false|true)  // 1
console.log(true|false)  // 1
console.log(true|true)   // 1