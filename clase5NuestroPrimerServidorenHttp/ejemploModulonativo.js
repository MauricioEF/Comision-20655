const http = require('http');

const server = http.createServer((peticion,respuesta)=>{
    let hora  = new Date().getHours();
    if(hora>=6&&hora<=12) respuesta.end({});
    if(hora>=13&&hora<=19) respuesta.end("<h1>Buenas tardes</h1>");
    if(hora<=5||hora>=20) respuesta.end("Buenas noches");
})
server.listen(8080,()=>{
    console.log("Listening on port 8080")
})