// function funA(){
//     console.log(1);
//     funB() //PROCESO BLOQUEANTE
//     console.log(2);
//     console.log("HOLA");
// }
// function funB(){
//     console.log(3);
//     funC()
//     console.log(4);
// }
// function funC(){
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
//     console.log(5)
// }


// funA();
// console.log("INICIANDO");
let contador = 0;
const saludar = async() => {
    if(contador<15){
        console.log("HOLA")
        contador++;
    }else{
        clearInterval(timer);
    }
};
const despedirse = () =>{
    if(contador<5){
        console.log(`Hola ${contador}`)
        contador++;
    }else{
        clearInterval(timer);
    }
}
// setTimeout(saludar,5000);
console.log("Haciendo otro proceso");

const timer = setInterval(despedirse,1000);
// setTimeout(saludar,2000)


