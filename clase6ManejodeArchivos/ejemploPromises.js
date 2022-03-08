import fs from 'fs';

const createFile = async() =>{
    try{
        await fs.promises.writeFile('archivoPromise.txt','Hola desde promesas');
        console.log("Archivo creado");
    }catch(error){
        console.log("Can't write file: "+error)
    }
}
const readFile = async() =>{
    try{
        let content = await fs.promises.readFile('archivoPromise.txt','utf-8')
        console.log(content);
    }catch(error){
        console.log("Can't read file: "+error)
    }
}
// const updateFile = async()=>{
//     try{
//         await fs.promises.appendFile
//     }catch(error){
//         console.log("Can't update file: "+error)
//     }
// }
// const deleteFile =()=>{
//     fs.promises.unlink('archivoPromise.txt').then().catch(error=>console.log(error))
// }
createFile();
readFile();
