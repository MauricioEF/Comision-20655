let form = document.getElementById('userForm')

form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let data = new FormData(form)
    let obj = {}
    data.forEach((value,key)=>obj[key]=value);
    // fetch('/users',{
    //     method:'POST',
    //     body:JSON.stringify(obj),
    //     headers:{
    //         "Content-Type":"application/json"
    //     }
    // }).then(res=>res.json()).then(json=>console.log(json))
    fetch('/users',{
        method:'POST',
        body:data
    }).then(res=>res.json()).then(json=>console.log(json))
})