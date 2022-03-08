import fs from 'fs';

let content;
let deletefile = true;
if(fs.existsSync('primerArchivo.txt')){
    if(deletefile){
        console.log("Borrando archivo...");
        fs.unlinkSync('primerArchivo.txt');
        console.log("Archivo eliminado")
    }else{
        content= fs.readFileSync('primerArchivo.txt','utf-8');
        console.log('Alterando archivo...')
        fs.appendFileSync('primerArchivo.txt',' Soy un programador feliz :)')
        console.log('Archivo modificado')
    }
}else{
    console.log("No existe el archivo, creando archivo...");
    fs.writeFileSync('primerArchivo.txt','Otro contenido que no se me ocurre en este momento :)');
}