import {Observable} from 'rxjs';
function contarMultiple(tiempo){
    let timer;
    let contador = 0;
    return new Observable(observer=>{
        observer.next(contador++);
        timer = setInterval(() => {
            observer.next(contador);
            // if(contador===5){
            //     observer.error("Llegué a 5")
            // }
            contador++;
        },tiempo);
    })
}

let observer = contarMultiple(1000).subscribe({
    next:(valor)=>console.log(valor),
    error:(error)=>console.log(error),
    completed:()=>console.log("Finish")
})

setTimeout(()=>{
    let observer2 = contarMultiple(1000).subscribe({
        next:(valor)=>console.log(valor),
        error:(error)=>console.log(error),
        completed:()=>console.log("Finish")
    })
},5000)