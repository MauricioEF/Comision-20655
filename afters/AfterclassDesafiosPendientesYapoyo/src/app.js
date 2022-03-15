import express from 'express';
import ContenedorMascotas from './services/ContenedorMascotas.js';
const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
const petService = new ContenedorMascotas();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/api/sumar/:num1/:num2',(req,res)=>{
    let {num1,num2} = req.params;
    res.send({result:parseInt(num1)+parseInt(num2)})
})
app.get('/api/sumar',(req,res)=>{
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    res.send({result:parseInt(num1)+parseInt(num2)})
})
app.get('/api/operacion/:operacion',(req,res)=>{
    let elements = req.params.operacion;
    let num1= parseInt(elements.split('+')[0]);
    let num2 = parseInt(elements.split('+')[1]);
    res.send({result:num1+num2})
})

app.get('/api/pets',(req,res)=>{
    petService.getAllPets()
    res.send(petService);
})
app.post('/api/pets',(req,res)=>{
    let {name,edad,specie} = req.body;
    let pet =  petService.savePet({name,edad,specie})
    res.send({message:"Added pet"})
})