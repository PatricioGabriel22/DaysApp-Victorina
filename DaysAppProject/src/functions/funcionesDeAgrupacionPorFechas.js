const productosDelCuaderno = [
    {
        productName:"Budín naranja",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"12/2/25",
        precio:3,
        sobro:false
    },
    {
        productName:"Pan",
        cantidad:10,
        unidades:"Kilos",
        fechaInicio:"12/2/25",
        precio:3,
        sobro:true
    },
    {
        productName:"Budín naranja",
        cantidad:1,
        precio:3,
        unidades:"unidades",
        fechaInicio:"12/2/25",
        sobro:false
    },
    {
        productName:"Pan",
        cantidad:2,
        fechaInicio:"1/2/25",
        unidades:"Kilos",
        precio:3,
        sobro:false
    },
    {
        productName:"Pan 2",
        cantidad:0.45,
       
        fechaInicio:"1/5/25"
    },
    {
        productName:"salvado",
        cantidad:9,
        unidades:"kilos",
        fechaInicio:"14/2/25"
    },
    {
        productName:"salvado",
        cantidad:10,
        unidades:"kilos",
        fechaInicio:"18/2/25"
    },
    {
        productName:"Brownie Grande",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"14/2/25"
    },
    {
        productName:"Brownie Frutos rojos",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"12/5/25"
    },
    {
        productName:"Bizcochos",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"19/1/25"
    },
    {
        productName:"Minion",
        cantidad:7,
       
        fechaInicio:"19/1/25"
    },
    {
        productName:"Minion",
        cantidad:3,
       
        fechaInicio:"19/1/25"
    },    {
        productName:"Figasas",
        cantidad:3,
       
        fechaInicio:"19/1/25"
    },

    {
        productName:"Minion",
        cantidad:777,
        unidades:"kilos",
        fechaInicio:"19/1/25"
    },
]



// function convertirGramosAKilos(pesoEnGramos){

//     const equivalenciaEnKilos = 0.001

//     return pesoEnGramos * equivalenciaEnKilos
// }


export function buscarPorFechaDeProduccion(fechaDeProduccion,listaProductos){
    let producido = []
    
    listaProductos.forEach((producto)=> {
        if(producto.fechaInicio === fechaDeProduccion){

            console.log(producto.productName)
            producido.push(producto)
        }
    })
    return producido
}



function splitFecha(fecha){

    let formatedDate = ''
    const splitedDate = fecha.includes('-') ? fecha.split('-') : fecha.split('/')

    console.log(splitedDate)

    if(splitedDate.length === 3){
        
        const [year, month, day] = splitedDate
       
        formatedDate = `${day}/${month}/${year}`

    }else if(splitedDate.length === 2){

        const [year, month] = splitedDate

        formatedDate = `${month}/${year}`

    }else{
        throw new Error("Fecha no especificada")
    }
    console.log(formatedDate)
    return formatedDate
}






export function agruparProdcutos(fechaBuscada,productos) {
    const listaProduccionMensual = {}
    
   

    productos.forEach((producto) => {

        // Inicializa la entrada para el mes si no existe
        if (!listaProduccionMensual[fechaBuscada]) {
            listaProduccionMensual[fechaBuscada] = {
                productos: [],
                sobras: [],
            };
        }

   
        if (producto.fechaInicio.includes(fechaBuscada)) {
            let cantidadPaseada = Math.round(producto.cantidad * 100) / 100
            let precioParseado = Math.round(producto.precio * 100) / 100
            let montoParseado = Math.round(cantidadPaseada * precioParseado * 100) / 100
        
            let dataProductoDelDia = {
                nombre: producto.productName,
                cantidad: cantidadPaseada,
                unidades: producto.unidades,
                precio: precioParseado,
                montoProducido: montoParseado,
                sobro: producto.sobro
            };
        
            let listaObjetivo = producto.sobro 
                ? listaProduccionMensual[fechaBuscada].sobras 
                : listaProduccionMensual[fechaBuscada].productos;
        
            let acumulador = listaObjetivo.find(prodcutoListaObjetivo => prodcutoListaObjetivo.nombre === producto.productName);
        
            if (acumulador) {
                acumulador.cantidad += cantidadPaseada;
                acumulador.montoProducido += montoParseado;
            } else {
                listaObjetivo.push(dataProductoDelDia);
            }
        }
    })

    return listaProduccionMensual
}





export function logicaFiltros(dateInput,listData,filtros){
    let nuevoRender = []

    const auxDate = splitFecha(dateInput)

    const produccionMensual = agruparProdcutos(auxDate,listData)[auxDate]?.productos || []
    const sobrasMensuales = agruparProdcutos(auxDate,listData)[auxDate]?.sobras || []

    
    
    
    
    if (dateInput) {
        

        nuevoRender = produccionMensual

    

        if (filtros.sobras) {

            nuevoRender = sobrasMensuales
            console.log(sobrasMensuales)


        } else if (filtros.final) {

            // const nuevoRender = {
            //     totalProducido:[],
            //     totalSobrante:[]
            // }
            const acumuladorDePlataProducida = produccionMensual.reduce((total,currentValue)=>total + currentValue.montoProducido,0)
            const acumuladorDeSobras = sobrasMensuales.reduce((total,currentValue)=>total + currentValue.montoProducido,0)
            console.log(acumuladorDePlataProducida, acumuladorDeSobras)
            console.log(acumuladorDePlataProducida - acumuladorDeSobras)
        } else {
            nuevoRender = produccionMensual
        }
    }



    return nuevoRender

}




