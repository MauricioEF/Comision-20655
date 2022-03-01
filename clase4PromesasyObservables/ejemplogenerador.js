function* idGenerator(){
    let counter = 0;
    while(true){
        yield counter++;
    }
}

let idGen = idGenerator();
console.log(idGen.next().value);
console.log(idGen.next().value);