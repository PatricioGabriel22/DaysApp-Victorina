import productoSchema from './model/producto.schema.js';
import fs from 'fs';
import days from 'dayjs';
// import { BotWpp } from './BotWpp.js';
import { DB_PASSWORD, DB_NAME } from './config/envStuff.js';
import { connectDB } from './DB.js';

const LOG_FILE = "lastRunDate.txt";

async function CronBackgroundWorker() {
    try {
        console.log("Ejecutando NodeCronWorker.js...");
        connectDB()

        // 🔹 Leer la última fecha de ejecución guardada
        let lastRunDate = null;
        if (fs.existsSync(LOG_FILE)) {
            lastRunDate = fs.readFileSync(LOG_FILE, "utf-8").trim();
        }

        const hoy = days().format("YYYY-MM-DD"); // Obtener la fecha de hoy (sin hora)

        // ✅ Verificar si ya se ejecutó hoy
        if (lastRunDate === hoy) {
            console.log("El script ya se ejecutó hoy. No se hará nada.");
            return;
        }

        // 🔹 Guardar la nueva fecha de ejecución antes de continuar
        fs.writeFileSync(LOG_FILE, hoy, "utf-8");

        const productos = await productoSchema.find({});
       

        for (const item of productos) {

           
            await productoSchema.updateMany(
                { productName: item.productName, fechaInicio: item.fechaInicio },
                { $push: { dias: item.dias.length + 1 } },
                { upsert: true }
            )

            if (item.dias.length >= 6 || (item.dias.length % 3 === 0 && item.dias.length > 6)) {
                await productoSchema.updateMany(
                    { productName: item.productName, fechaInicio: item.fechaInicio },
                    { revisado: !item.revisado },
                    { upsert: true }
                );
            }
            
        }


        // BotWpp(productosArevisar);

        console.log("Ejecución completada correctamente.");
        
    } catch (error) {
        console.error("Error al ejecutar el worker:", error);
    }
}

// ✅ Ejecutar una sola vez al iniciar el script
CronBackgroundWorker();



// 🔥 ¿Cómo Funciona la Solución?
// Lee la última fecha de ejecución guardada en lastRunDate.txt.
// Si la fecha de hoy ya está registrada, no hace nada y se detiene.
// Si no, registra la nueva fecha y continúa con el proceso.
// Así, aunque la PC se reinicie varias veces en el mismo día, el script solo se ejecutará una vez por día.