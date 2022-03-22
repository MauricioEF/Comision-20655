import express from 'express';
import usersRouter from './routes/users.js';
import petsRouter from './routes/pets.js';
import __dirname from './utils.js';
const app = express();

const server = app.listen(8080,()=>console.log(`Listening on 8080`))
// app.use((req,res,next)=>{
//     console.log(`PETICIÓN ${req.method} EN ${req.url}`);
//     if(true){
//         return res.status(400).send("NO PASASTE EL MIDDLEWARE")
//     }
//     next();
// })
app.use(express.json());
app.use(express.static(__dirname+'/public'))


app.use('/users',usersRouter)
app.use('/pets',petsRouter)