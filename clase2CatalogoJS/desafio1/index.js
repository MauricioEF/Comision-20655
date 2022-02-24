let operations = ['6**2','**','3**3','4**','4**5','8**2','4*=5',"3*_a"]

const resolverPotenciacion = array =>{
    return array.map(operando=>{
        if(!operando.includes("**")) return null;
        if(isNaN(operando.at(0))||isNaN(operando.at(operando.length-1))) return null
        return parseInt(operando.at(0))**parseInt(operando.at(operando.length-1))
    })
}

console.log(resolverPotenciacion(operations));