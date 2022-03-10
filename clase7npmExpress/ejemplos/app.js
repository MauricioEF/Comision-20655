import express from 'express';

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})
let contador = 0;
/*ENDPOINT */
app.get('/papa',(req,res)=>{
    res.send('Hola ruta papa')
})
app.get('/papaconqueso',(req,res)=>{
    res.status(200).send("Hola pero desde la ruta papa con queso")
})
app.get('/papacontadora',(req,res)=>{
    console.log(req.query.nombre);
    res.send(`Visitaste mi papa ruta ${++contador} veces`)
})