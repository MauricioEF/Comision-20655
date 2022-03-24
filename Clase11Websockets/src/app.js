import express from 'express';
import {Server} from 'socket.io';
const app = express();
const server = app.listen(8080,()=>console.log(`Listening on 8080`))
const io = new Server(server);


app.use(express.static('src/public'))
let messagelog = [];
io.on('connection',socket=>{
    socket.broadcast.emit('notification',socket.id)
    socket.emit("log",messagelog);
    socket.on('keyboard',data=>{
        messagelog.push({client:socket.id,message:data})
        io.emit('log',messagelog)
    })
})