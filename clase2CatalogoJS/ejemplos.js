/*ES7 */
// let arreglo = [1,2,3,4,5,6,7,8,9]
// let arreglo2 = ["MAURICIO","JONATHAN","MARCE","SOFÍA",1]
// console.log(arreglo2.includes("1"))

// let num1 = 2;
// let num2 = 3;

// console.log(num1**num2);


/*ES8 */
// let objeto1 = {
//     nombre:"Gabriel",
//     apellido:"López",
//     edad:28
// }
// console.log(Object.keys(objeto1))
// console.log(Object.values(objeto1));
// console.log(Object.entries(objeto1));

// let cadena = "abc"

// console.log(cadena.padEnd(15,"0"))

// let obj = {
//     nombre:"a",
//     apellido:"b",
//     edad:"c",
//     asdasdasd:"asdas",
// }
// let array = [1,2,43,5,76,]

// let saludar= async() =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("hola");
//         },1000)
//     })
// }

// let generarSaludo = async() =>{
//     let saludo = await saludar();
//     console.log(saludo);
// }

// generarSaludo();

// let obj = {
//     a : 1,
//     b: 2,
//     c: 3,
//     x: "a",
//     y: true,
// }

// let {a,b,c,...resto} = obj;
// console.log(resto);

// const operacion = async(num1,num2)=>{
//     let operaciones = await import('./operaciones.js')
//     console.log(operaciones.sumar(num1,num2));
// }

// operacion(1,2)

// const decirNombre = (nombre)=>{
//     console.log(`Hola ${undefined??"amigo"}`)
// }

// decirNombre();

let object ={
    name:"Augusto",
    gato:{
        name:"malvavisco",
        age:3
    },
    perro:{
        name:"Patotas",
        age:2
    }
}

const nombrePerruno = object?.perro?.name;
console.log(nombrePerruno);

