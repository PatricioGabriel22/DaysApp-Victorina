


export function validateUserData(schema){
    return function (req,res,next){

        

        const result = schema.safeParse(req.body)

        if(!result.success){
            return res.status(400).json({message: "Datos invalidos"})
        }

        req.validatedData = result.data
        next()

    }
}