const socket = io();
const input = document.getElementById('prueba');


input.addEventListener('keyup',evt=>{
    if(evt.key==="Enter"){
        socket.emit('keyboard',input.value);
        input.value="";
    }
})


/*SOCKET EVENTS */

socket.on('log',data=>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(log=>{
        messages = messages + `${log.client} dice: ${log.message}</br>`
    })
    log.innerHTML = messages;
})
socket.on('notification',data=>{
    alert(data+" se conectó")
})