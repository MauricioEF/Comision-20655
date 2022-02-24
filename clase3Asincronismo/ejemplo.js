// const saludar = nombre => console.log(`Hola ${nombre}`)

// const nombre = "María";
// if(nombre==="María") console.log("Es María");

// saludar(nombre);

// //Return implícito
// const sumar = (num1,num2) => num1+num2;

// console.log(sumar(1,2));

// const saludar = () => console.log("HOLA");
// const despedirse = () =>console.log("ADIÓS");
// const btn = document.getElementById("ejemplo");

// btn.addEventListener('click',"Hola");


// const operador =(num1,num2,operacion) =>{
//     operacion(num1,num2);
// }


//CALLBACK HELL
// const copiarArchivo = (rutaArchivo,callback) =>{
//     buscarArchivo(rutaArchivo,(error,path)=>{
//         if(error) return callback(error);
//         leerArchivo(rutaArchivo,(error,textoFinal)=>{
//             if(error) return callback(error);
//             let ruta_adicional = "otro path";
//             escribirArchivo(ruta_adicional,textoFinal,(error)=>{
//                 if(error) return callback(error);
//                 callback(null);
//             })
//         })
//     })
// }
const operaciones = (num1,num2,operacion) =>{
    return operacion(num1,num2);
}

const suma = (num1,num2) => num1+num2;
const resta = (num1,num2) => num1-num2;
const multiplicacion = (num1,num2) => num1*num2;
const division = (num1,num2) => num1/num2;
const modulo = (num1,num2) => num1%num2;

console.log(operaciones(10,4,modulo));
console.log("HOLA");
