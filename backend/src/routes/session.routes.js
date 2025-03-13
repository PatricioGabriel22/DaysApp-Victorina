import { Router } from "express"

import { validateUserData } from "../functions/validationFunctions.js"
import { userZodSchema } from "../model/zod/zod.schema.js"

import localSchema from "../model/local.schema.js"

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


import {SALT_ROUNDS, SECRET_JWT_KEY } from "../config/envStuff.js"
import { capitalize, removeAccents } from "../controllers/products.controller.js"

export const sessionRouter = Router()

sessionRouter.use((req,res,next)=>{
    const token = req.cookies?.access_cookie
    
    let data = null 
    

    req.session = {user:null}

    
    if(token){

        try{


            data = jwt.verify(token,"secretkeyauroralana99calacodigoz99122")
            req.session.user = data
            console.log(data)

        }catch(error){
            console.log(error)
            
        }

    }
    next()

})




sessionRouter.post('/register',validateUserData(userZodSchema),async(req,res)=>{
    const {username,email,password} = req.validatedData
   

    try {
        

        const userDuplciated = await localSchema.findOne({username})
        const emailDuplciated = await localSchema.findOne({email})


        if(userDuplciated || emailDuplciated){

            const alerta = userDuplciated ? 
            `El usuario ${userDuplciated.username} ya esta registrado`:
            `El mail ${emailDuplciated.email} ya esta registrado`


            return res.status(400).json({message:alerta})
            
        } 

        

        const hashedPassword = await bcrypt.hash(password,Number(SALT_ROUNDS))

        new localSchema({
            username,
            email,
            password:hashedPassword
        }).save()
    
        res.json({message:`Local registrado, ${username}`})


    } catch (error) {
        console.log(error)
    }



})




sessionRouter.post('/login',async(req,res)=>{
    const {username,password} = req.body
    try {
        
        const loginUserTarget = await localSchema.findOne({username})
        
        const isValid = loginUserTarget? bcrypt.compareSync(password,loginUserTarget.password) : false
    
        if(!loginUserTarget || !isValid){
    
            const alerta = loginUserTarget ? 
            `La contraseña no es valida`:
            `El usuario no es valido`
    
    
            return res.status(400).json({message:alerta})
            
        } 
        
        const token = jwt.sign(
            {id:loginUserTarget._id,username:loginUserTarget.username},
            "secretkeyauroralana99calacodigoz99122",
            {
                expiresIn:'1h'
            }
        )



        res.status(200)
        .cookie('access_cookie',token,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:'strict'
        })
        .json({
            message:`Accedio como ${loginUserTarget.username}`,
            username:loginUserTarget.username,
            id:loginUserTarget._id,
            token:token
        })

    



    } catch (error) {
        console.log(error)
    }




   
})

sessionRouter.post('/logout', (req, res) => {
    res.clearCookie('access_cookie', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        expires: new Date(0) // Expira inmediatamente la cookie
    }).json({ message: "Logout successful" });
})


sessionRouter.post('/settings',async (req,res)=>{
    const {username,ignoredProducts} = req.body

    console.log(ignoredProducts.map(item=> removeAccents(capitalize(item))  ))


    try {
        
        await localSchema.updateOne(
            { username: username },
            { 
                $set: { 
                    "settings": { ignoredProducts: ignoredProducts.map(item => removeAccents(capitalize(item))) }
                }
            }
            //filtro por nombre de usuario y con $set me fijio de crear el campo o de sobreescribirlo si existe
        )
        res.status(200).json({message:"Configuracion actualizada"})

    } catch (error) {
        console.log(error)
    }



})