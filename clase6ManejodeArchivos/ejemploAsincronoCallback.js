import fs from 'fs';
/*POR CALLBACKS */

//EXISTS SÓLO TIENE SYNC
// if(fs.existsSync)
console.log("Leyendo archivo asíncrono...")
// fs.writeFile('./files/segundoArchivo.txt','Soy un archivo bien asíncrono, témanme',(error)=>{
//     if(error) return console.log("Ocurrió un error al escribir el archivo");
//     console.log("Creado");
// })
// fs.readFile('./files/segundoArchivo.txt','utf-8',(err,content)=>{
//     if(err) return console.log("Error al leer el archivo");
    
//     console.log(content);
// })
// fs.appendFile('segundoArchivo.txt','contenido adicional',(err)=>{
//     if(err) return console.log('Error al Actualizar el archivo')
// })
// fs.unlink('segundoArchivo.txt',(err)=>{
//     if(err) return console.log('Error al eliminar archivo');
//     console.log('Archivo eliminado');
// })
console.log("Archivo leído con éxito");