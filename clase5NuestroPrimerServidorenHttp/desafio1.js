// let obj = {}
// for(let i=0;i<10000;i++){
//     let random = Math.floor(Math.random()*20+1)
//     if(obj[random]){
//         obj[random]++
//     }else{
//         obj[random]=1;
//     }
// }
// console.log(obj);
// let sum = Object.values(obj).reduce((acumulador,actual)=>acumulador+actual);
// console.log(sum);

// let productos =[
//     {id:1,nombre:"Escuadra",precio:323.45},
//     {id:2,nombre:"Calculadora",precio:234.56},
//     {id:3,nombre:"Globo Terráqueo",precio:45.67},
//     {id:4,nombre:"Paleta Pintura",precio:456.78},
//     {id:5,nombre:"Agenda",precio:78.90},
// ];


// productos.forEach(producto=>string=string+`,${producto.nombre}`)
// let string = productos.map(producto => producto.nombre).join(",");
// let total = productos.reduce((acumulador,valorActual)=>acumulador+valorActual.precio,0).toFixed(2);
// let promedio = (total/productos.length).toFixed(2);
// let max= productos[0].precio;
// let min = productos[0].precio;
// productos.forEach(producto=>{
//     if(producto.precio<min) min=producto.precio;
//     if(producto.precio>max) max=producto.precio;
// })
// let sendObj ={
//     nombres:string,
//     total,
//     promedio,
//     max,
//     min
// }
// console.log(sendObj);