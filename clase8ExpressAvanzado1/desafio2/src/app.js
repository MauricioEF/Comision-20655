import express from 'express';

const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

let sentence = 'Frase inicial';
const productos = [];


app.get('/api/sentence',(req,res)=>{
    res.send(sentence);
})

app.get('/api/words/:num',(req,res)=>{
    let num  = parseInt(req.params.num);
    let words = sentence.split(' ');
    if(num<1||num>words.length) return res.status(400).send({error:"Index Out of bounds"})
    res.send(words[num-1]);
})
app.post('/api/sentence',(req,res)=>{
    let word = req.body.word;
    sentence = sentence.concat(` ${word}`)
    res.send("Added a word");
})
app.put('/api/sentence/:pos',(req,res)=>{
    let position = parseInt(req.params.pos);
    const {word} = req.body;
    let newSentence = sentence.split(' ');
    newSentence[position-1] = word;
    sentence = newSentence.join(" ");
    res.send({message:"Frase cambiada"})
})
app.delete('/api/sentence/:pos',(req,res)=>{
    let position = parseInt(req.params.pos);
    let newSentence = sentence.split(' ');
    newSentence.splice(position-1,1);
    sentence = newSentence.join(" ");
    res.send("Palabra eliminada de la frase");
})