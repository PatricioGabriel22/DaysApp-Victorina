import express from 'express'
import { connectDB } from './DB.js'
import productoSchema from './model/producto.schema.js'
import cors from 'cors'



import { sessionRouter } from './routes/session.routes.js'
import {productsRouter} from './routes/products.routes.js'



export const server = express()
const PORT = process.env.PORT || 4000

const serverURL = PORT === 4000? "http://localhost:5173" : "https://days-app-victorina.vercel.app"

server.use(express.json())
server.use(cors({ origin: serverURL , credentials: true })) //modificar para produccion

server.use(express.static('public'))


server.use(sessionRouter)
server.use(productsRouter)

try {
    connectDB()

    server.listen(PORT,()=>{
        console.log(`Server on port: ${PORT}`)
    })

} catch (error) {
    console.log(error)
}




// server.get('/qr',async (req,res)=>{
    
//         try {
//             if (!qrCodeData) return res.send('No fue posible generar el QR')
//             const qrImage = await qrcodefunc.toDataURL(qrCodeData)
//             res.send(`

//                 <!DOCTYPE html>
//                 <html lang="en">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta name="viewport" contenet="width=device-width, initial-scale=1.0">
//                         <title>Escanea el QR</title>
//                     </head>
                    
//                     <body>
//                         <h1>Escanea el código QR</h1>
//                         <img src="${qrImage}" alt="QR Code" />
//                     </body>
//                 </html>


//                 `)
//         } catch (error) {
//             console.log(error)
//         }
// })






// cron.schedule('0 0 * * *',async()=>{
    
//     try{
//         const productos = await productoSchema.find()
        
        
//         for(const item of productos){
 
//             const ahora = days()
//             console.log(ahora)
//             // const diaAntes = days().subtract(1,'day')
//             const diaCreacion = days(item.horaInicial).subtract(1,'days')
//             console.log(diaCreacion);
            
      
//             const tiempoTranscurrido = ahora.diff(diaCreacion,'days')
//             console.log(tiempoTranscurrido)
//             if(tiempoTranscurrido > 0) {

//                 await productoSchema.findOneAndUpdate({productName:item.productName, fechaInicio:item.fechaInicio},{$push:{dias:item.dias.length+1}},{upsert:true})
                    
//                 if(item.dias.length > 6 || item.dias.length % 3 === 0){
                        
    
//                     await productoSchema.findOneAndUpdate({productName:item.productName, fechaInicio:item.fechaInicio},{revisado: !item.revisado},{upsert:true})
//                 }
//             }
            
            
                
//         }
//         console.log('Cron job ejecutado correctamente');
//         const logMsg = `${new Date()} Cron job ejecutado correctamente\n`
//         fs.appendFileSync("cronJobLogs.txt",logMsg)
//     }catch (e){
//         console.log(e)
//     }
// })