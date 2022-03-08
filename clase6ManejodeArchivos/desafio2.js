import fs from 'fs';
fs.readFile('package.json','utf-8',(error,content)=>{
    if(error) return console.log("Cannot read package.json")
    let info ={
        content_string:content,
        content_obj: JSON.parse(content),
        size:new TextEncoder().encode(content).length
    }
    console.log(info);
    fs.writeFile('info.json',JSON.stringify(info,null,'\t'),(error)=>{
        if(error) return console.log("Cannot write file")
        console.log("File written");
    })
})