import {fileURLToPath} from 'url';
import { dirname } from 'path';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);



/*CONFIGURACIÓN DE MULTER */
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,__dirname+'/public/img')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
})

export const uploader = multer({storage:storage})

export default __dirname;