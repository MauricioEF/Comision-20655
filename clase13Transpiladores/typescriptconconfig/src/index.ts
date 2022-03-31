import * as operaciones from './utils/operaciones'

let number1:number = 10;
let number2:number = 2;

console.log(`La suma de ${number1} y ${number2} es ${operaciones.sumar(number1,number2)}`)
console.log(`La resta de ${number1} y ${number2} es ${operaciones.restar(number1,number2)}`)
console.log(`La multiplicación de ${number1} y ${number2} es ${operaciones.multiplicar(number1,number2)}`)
console.log(`La división de ${number1} y ${number2} es ${operaciones.dividir(number1,number2)}`)
console.log(`El módulo de ${number1} y ${number2} es ${operaciones.modulo(number1,number2)}`)
