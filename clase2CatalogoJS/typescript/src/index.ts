const operacion = async(num1:number,num2:number) =>{
    let operaciones = await import('./operacion.js');
    let result = operaciones.sumar(num1,num2);
    return result;
}

const ejecucion = async(num1:number,num2:number) =>{
    let resultado = await operacion(num1,num2);
    console.log(resultado);
}

ejecucion(2,4);