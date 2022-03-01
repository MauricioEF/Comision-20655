const {fromEvent,map} = rxjs;

/*Observable de clicks */
// const clicks = fromEvent(document,'click');
// const positions = clicks.pipe(
//     map(event=>event.clientX)
// )
// const positionY = clicks.pipe(
//     map(event=>event.clientY)
// )
// positions.subscribe({
//     next:(val)=>console.log(val)
// })

// positionY.subscribe({
//     next:(val)=>console.log(val)
// })

const textBox = document.getElementById('textBox')
let textObservable = fromEvent(textBox,'keyup').pipe(
    map(val=>{
       if(textBox.value==="error") throw new Error("OOOPS TRONÉ")
       return val.key;
    })
)

let observer = textObservable.subscribe({
    next:(val)=>console.log(val),
    error:(error)=>{
        textBox.value="";
    }
})
