// const iterador = (array,keys) =>{
//     let index = 0;
//     return{
//         next:()=>{
//             return index<array.length?
//             {
//                 value:Object.fromEntries(Object.entries(array[index++]).filter(par=>keys.includes(par[0])))
//             }
//             :"Finish"
//         },
//         done:()=>{
//             return !(index<array.length);
//         }
//     }
// }
// [[nombre,"Mauricio"],[last_name,"Mauricio"],[nombre,"Mauricio"]]

//     // PREGUNTA ? CONDICION VERDADERA : CONDICION FALSA

// const iteradorPropio = iterador([
//     {name:"Mauricio",last_name:"Espinosa",age:25,gender:"male"},
//     {name:"Esteban",last_name:"Hirzfeld",age:20,gender:"male"},
//     {name:"María",last_name:"Guzmán",age:22,gender:"female"},
// ],["name","age"])
// while(!iteradorPropio.done()){
//     console.log(iteradorPropio.next().value)
// }