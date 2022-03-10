import express from 'express';
import moment from 'moment';

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})

let visits = 0;
app.get('/',(req,res)=>{
    res.send("<h1 style='color:blue'>HOLA, BIENVENIDOS</h1>")
})
app.get('/visitas',(req,res)=>{
    res.send(`Has visitado este endpoint ${++visits} veces`)
})

app.get('/fyh',(req,res)=>{
    let dateTime = moment();
    res.send({fyh:dateTime.format('DD/MM/YYYY hh:mm:ss')})
})