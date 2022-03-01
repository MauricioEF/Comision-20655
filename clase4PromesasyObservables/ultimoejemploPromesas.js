Promise.resolve(10)
.then(x=>x+1)//21
.then(x=>x*2)//42
.then(x=>{
    if(x===22) throw "ERROR"
    else return 80
})//80
.then(x=>30)//30
.then(x=>x/2)//15
.then(console.log)
.catch(console.log)