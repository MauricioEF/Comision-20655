import express from 'express';

const router = express.Router();

let pets = [];

router.get('/',(req,res)=>{
    res.send("Hola, PEEEERO ahora desde el router de Pets")
})

export default router;