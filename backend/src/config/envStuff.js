import dotenv from 'dotenv';
import path from 'path'


//usar en ruta absoluta garantiza que venga a buscar el .env siempre a este directorio
const absolutePath = path.resolve('src/config/.env')
console.log(absolutePath)
dotenv.config({path: absolutePath});

export const {MONGO_CLUSTER_URI,TEST,DB_PASSWORD,DB_NAME,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
    AWS_BUCKET_NAME
} = process.env
console.log(process.env.MONGO_CLUSTER_URI)




