const promise = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("HOLA"),5000)
    })
}
// console.log("Hola")
// promise()
// .then(papasconqueso=>console.log(papasconqueso))
// .catch(error=>console.log("No se cumplió :("))
// console.log("Adiós");

const executePromise = async()=>{
    console.log("Hola");
    let a = await promise();
    console.log(a);
    console.log("Adiós");
}
executePromise();