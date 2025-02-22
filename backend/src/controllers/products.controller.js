import productoDaysAppSchema from "../model/producto.schema.js";
import stockSchema from "../model/stock.schema.js";

function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1,word.length)
}


export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


export const getAllProducts = async(req,res)=>{
    const {db} = req.params

   
    const schemaDB = db === "produccion-diaria" ?  stockSchema : productoDaysAppSchema
   
    const dataDB = await schemaDB.find({})

    dataDB ? res.json(dataDB) : res.json({"mensaje":"No se pudo traer la info de la db"})


}


export const getAllProductsForStockCounting = async(req,res)=>{

    const dataDB = await stockSchema.find({})

    dataDB ? res.json(dataDB) : res.json({"mensaje":"No se pudo traer la info de la db"})


}

export const findSearchedProducts = async(req,res)=>{

    const {searched} = req.params

    try {
        const finder = await productoDaysAppSchema.find(
            { productName: { $regex: removeAccents(searched), $options: "i" } }
        ).collation({ locale: "es", strength: 1 })

        res.json(finder)    
    console.log("Buscando:",searched)
    console.log(finder)

        
    } catch (error) {
    console.log(error)
        
    }
}



export const crearNuevo = async (req,res)=>{
    let flagRes = false
    
    const {productName,fechaInicio,cantidad,unidades,precio} = req.body

    console.log( productName,fechaInicio,cantidad,unidades)

    if(!productName || !cantidad || !unidades){
        return res.status(404).json({message:`Falta informacion`})
    }

    const dataDelBody = {
        productName: removeAccents(capitalize(productName)),
        fechaInicio,
        cantidad,
        unidades,
        precio
        
    }


    // const flagAgregarLista = await productoDaysAppSchema.find(
    //     { productName: { $regex: removeAccents(productName), $options: "i" } }
    // ).collation({ locale: "es", strength: 1 })
    // console.log(flagAgregarLista)

    try{

        const stockInfo = new stockSchema(dataDelBody)

        const newProduct = new productoDaysAppSchema(dataDelBody)

        await stockInfo.save()
        await newProduct.save().then(()=>flagRes = true)

        if (flagRes) res.json({message:"Producto agregado",found:false})
        
    
    
        

    }catch(e){
        console.log(e._message) 
    }

    
    

}

export const sumarDia = async(req,res)=>{
    const {productName,fechaInicio,dias,revisado} = req.body
    console.log(req.body)
    try{

        const finder = await productoDaysAppSchema.findOneAndUpdate({productName:productName, fechaInicio:fechaInicio},{$push:{dias:dias},revisado:revisado},{upsert:true})
        res.json(finder)
    
        
    } catch(e){
        console.log(e)
    }

    

}

export const revisado = async(req,res)=>{
    const {productName,fechaInicio,dias,revisado} = req.body

    const diaRevision = days().format('DD/MM/YYYY')

    const finder = await productoDaysAppSchema.findOneAndUpdate({productName:productName, fechaInicio:fechaInicio},{fechaRevision:diaRevision, revisado:revisado},{new:true})

    res.json({"msg":"Revisado"})

    

}

export const eliminarProducto = async(req,res)=>{
    const {productName,fechaInicio} = req.body
    console.log(req.body)
    try{

        const finder = await productoDaysAppSchema.deleteOne({productName:productName, fechaInicio:fechaInicio})
        res.json({"message":"Producto Eliminado"})
    
        
    } catch(e){
        console.log(e)
    }

    

}

export const editarProducto = async(req,res)=>{
    const {nombreAnterior,nuevoNombre,fechaInicio} = req.body
    console.log(req.body)
    try{

        await productoDaysAppSchema.findOneAndUpdate({productName:nombreAnterior, fechaInicio:fechaInicio},{productName:capitalize(nuevoNombre)})

        await stockSchema.findOneAndUpdate({productName:nombreAnterior, fechaInicio:fechaInicio},{productName:capitalize(nuevoNombre)})

        res.json({"message":"Producto Editado"})
    
        
    } catch(e){
        console.log(e)
    }

    

}