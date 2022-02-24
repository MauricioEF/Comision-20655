const mostrarLetras = (palabra,tiempode,cb) =>{
    let i = 0;
    const recorrerPalabra = ()=>{
        if(i<palabra.length){
            console.log(palabra[i]);
            i++;
        }else{
            clearInterval(timer);
            cb();
        }
    }
    const timer = setInterval(recorrerPalabra,1000);
    // const timer = setInterval(()=>{
    //     if(i<palabra.length){
    //         console.log(palabra[i]);
    //         i++;
    //     }else{
    //         clearInterval(timer);
    //         cb();
    //     }
    // },1000)

}

const funcionFinalizado = () => console.log("FINALIZADO EL PROCESO");

setTimeout(()=>{
    mostrarLetras('HEMOS',funcionFinalizado)
},0);
setTimeout(()=>{
    mostrarLetras('FINALIZADO',funcionFinalizado)
},250);
setTimeout(()=>{
    mostrarLetras('POR HOY',funcionFinalizado)
},500);