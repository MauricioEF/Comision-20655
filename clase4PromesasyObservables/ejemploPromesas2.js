new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000)
})
.then(result=>{
    console.log(result)
    return result+9
})
.then(result=>{
    console.log(result);
    return result*2;
})
.then(result=>console.log(result))
.catch(error=>console.log("error"))