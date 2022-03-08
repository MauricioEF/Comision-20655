import fs from 'fs';

try{
    fs.writeFileSync('./files/archivoDesafio.txt',new Date().toLocaleString())
    let content = fs.readFileSync('./files/archivoDesafio.txt','utf-8');
    console.log(content);
}catch(err){
    console.log("Can't write file")
}