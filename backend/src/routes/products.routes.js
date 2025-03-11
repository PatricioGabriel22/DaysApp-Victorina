import { Router } from "express"

import {

    getAllProducts, 
    findSearchedProducts, 
    crearNuevo,
    sumarDia,
    revisado,
    eliminarProducto,
    editarProducto

} from "../controllers/products.controller.js"



export const productsRouter = Router()




productsRouter.get('/allProducts/:db?',getAllProducts)
productsRouter.get('/find/:searched',findSearchedProducts)

// productsRouter.get('/allProducts',getAllProducts)


productsRouter.post("/new",crearNuevo)

productsRouter.put('/sumarDia',sumarDia)
productsRouter.put('/revisado',revisado)
productsRouter.put('/eliminarProducto/:erease?/',eliminarProducto)


productsRouter.put('/editarProducto',editarProducto)

