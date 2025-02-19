

const productosDelCuaderno = [
    {
        productName:"Budín naranja",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"12/2/25"
    },
    {
        productName:"Pan",
        cantidad:1.95,
        unidades:"sobro",
        fechaInicio:"1/2/25"
    },
    {
        productName:"Pan 2",
        cantidad:0.45,
        unidades:"sobro",
        fechaInicio:"1/5/25"
    },
    {
        productName:"salvado",
        cantidad:9,
        unidades:"kilos",
        fechaInicio:"14/2/25"
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


]


const fecha = "14/2/25"


function convertirGramosAKilos(pesoEnGramos){

    const equivalenciaEnKilos = 0.001

    return pesoEnGramos * equivalenciaEnKilos
}


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


// console.log(buscarPorFechaDeProduccion(fecha))

// console.log(fecha.includes('/2/'))


const collecionDeProduccionDiaria = [
    {
    diaDeProduccion:"9/9/9",
    mercaderiaProducida: [{},{},{}]
    }
]



export function agruparPorMes(productos){

    // listaProduccionMensual ={
    //     '2/25':[]
    // } crea objetos dinamicamente

    const listaProduccionMensual = {}


    productos.forEach((producto)=>{

        const [day,month,year] = producto.fechaInicio.split('/')
        const keyMonth = `${month}/${year}`

        if(!listaProduccionMensual[keyMonth]){
            listaProduccionMensual[keyMonth] = []
        }

        listaProduccionMensual[keyMonth].push(producto)


    })

    return listaProduccionMensual

}

const prodMensual = agruparPorMes(productosDelCuaderno)

console.log(prodMensual["1/25"])