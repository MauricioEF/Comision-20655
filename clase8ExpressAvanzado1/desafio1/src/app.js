import express from 'express';

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

const sentence = "Hola mundo cómo están";
app.get('/api/sentence',(req,res)=>{
    res.send(sentence);
})

app.get('/api/letter/:num',(req,res)=>{
    let {num} = req.params;
    if(isNaN(num)) return res.status(400).send({error:"Param is not a number"})
    let parsedNumber = parseInt(num);
    if(parsedNumber<0||parsedNumber>sentence.length) return res.status(400).send({error:"Index Out of bounds"})
    res.send(sentence[parsedNumber]);
})

app.get('/api/words/:num',(req,res)=>{
    let num  = parseInt(req.params.num);
    let words = sentence.split(' ');
    if(num<1||num>words.length) return res.status(400).send({error:"Index Out of bounds"})
    res.send(words[num-1]);
})