import fs from 'fs';

const processFile = async() =>{
    try{
        let data = await fs.promises.readFile('info.json','utf-8')
        console.log(data);
        let content = JSON.parse(data);
        content['content_obj']['author'] = "CoderHouse";
        await fs.promises.writeFile('info2.json',JSON.stringify(content,null,'\t'))
        console.log('Cambios realizados');
    }catch(error){
        console.log("Can't process file: "+error)
    }
}

processFile();