import productoSchema from "../model/producto.schema.js";


function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1,word.length)
}


export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


export const getAllProducts = async(req,res)=>{

    const dataDB = await productoSchema.find({})

    dataDB ? res.json(dataDB) : res.json({"mensaje":"No se pudo traer la info de la db"})


}

export const findSearchedProducts = async(req,res)=>{

    const {searched} = req.params

    try {
        const finder = await productoSchema.find(
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
    
    const {productName,fechaInicio,cantidad,unidades} = req.body

    if(!productName || !cantidad || !unidades){
        return res.status(404).json({message:`Falta informacion`})
    }

    const flagAgregarLista = await productoSchema.find(
        { productName: { $regex: removeAccents(productName), $options: "i" } }
    ).collation({ locale: "es", strength: 1 })
    console.log(flagAgregarLista)

    try{

        if(flagAgregarLista.length >=1){
            return res.status(200).json({message: "El producto ya se encuentra en la lista",found:true})
        } else{


    
            const newProduct = new productoSchema({
                productName: removeAccents(capitalize(productName)),
                fechaInicio: fechaInicio,
                cantidad,
                unidades
                
            })
    
            
    
            await newProduct.save().then(()=>flagRes = true)
    
            if (flagRes) res.json({message:"Producto agregado",found:false})
        }
    
    
        

    }catch(e){
        console.log(e._message) 
    }

    
    

}

export const sumarDia = async(req,res)=>{
    const {productName,fechaInicio,dias,revisado} = req.body
    console.log(req.body)
    try{

        const finder = await productoSchema.findOneAndUpdate({productName:productName, fechaInicio:fechaInicio},{$push:{dias:dias},revisado:revisado},{upsert:true})
        res.json(finder)
    
        
    } catch(e){
        console.log(e)
    }

    

}

export const revisado = async(req,res)=>{
    const {productName,fechaInicio,dias,revisado} = req.body

    const diaRevision = days().format('DD/MM/YYYY')

    const finder = await productoSchema.findOneAndUpdate({productName:productName, fechaInicio:fechaInicio},{fechaRevision:diaRevision, revisado:revisado},{new:true})

    res.json({"msg":"Revisado"})

    

}

export const eliminarProducto = async(req,res)=>{
    const {productName,fechaInicio} = req.body
    console.log(req.body)
    try{

        const finder = await productoSchema.deleteOne({productName:productName, fechaInicio:fechaInicio})
        res.json({"message":"Producto Eliminado"})
    
        
    } catch(e){
        console.log(e)
    }

    

}

export const editarProducto = async(req,res)=>{
    const {nombreAnterior,nuevoNombre,fechaInicio} = req.body
    console.log(req.body)
    try{

        const finder = await productoSchema.findOneAndUpdate({productName:nombreAnterior, fechaInicio:fechaInicio},{productName:capitalize(nuevoNombre)})
        res.json({"message":"Producto Editado"})
    
        
    } catch(e){
        console.log(e)
    }

    

}