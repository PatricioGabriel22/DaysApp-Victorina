const productosDelCuaderno = [
    {
        productName:"Budín naranja",
        cantidad:7,
        unidades:"unidades",
        fechaInicio:"12/2/25"
    },
    {
        productName:"Budín naranja",
        cantidad:1,
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
        unidades:"sobro",
        fechaInicio:"19/1/25"
    },
    {
        productName:"Minion",
        cantidad:3,
        unidades:"sobro",
        fechaInicio:"19/1/25"
    },    {
        productName:"Figasas",
        cantidad:3,
        unidades:"sobro",
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



export function agruparPorMes(productos) {
    const listaProduccionMensual = {}

    productos.forEach((producto) => {
        const [, month, year] = producto.fechaInicio.split('/');
        const keyMonth = `${month}/${year}`;

        // Inicializa la entrada para el mes si no existe
        if (!listaProduccionMensual[keyMonth]) {
            listaProduccionMensual[keyMonth] = {
                productos: [],
                sobros: [],
            };
        }

        if (producto.unidades !== 'sobro') {
            // Busca el producto existente en el array de productos
            const existingProduct = listaProduccionMensual[keyMonth].productos.find(p => p.nombre === producto.productName)

            if (!existingProduct) {
                // Si no existe, lo agrega
                listaProduccionMensual[keyMonth].productos.push({
                    nombre: producto.productName,
                    cantidad: Number(producto.cantidad),
                    unidades: producto.unidades,
                    precio: Number(producto.precio),
                });
            } else {
                // Sumar cantidades y precioes si el producto ya existe
                existingProduct.cantidad += Number(producto.cantidad);
                existingProduct.precio += Number(producto.precio);
            }
        } else {
            // Agrega el producto al array de sobros
            const existingSobro = listaProduccionMensual[keyMonth].sobros.find(s => s.nombre === producto.productName);
            if (!existingSobro) {
                listaProduccionMensual[keyMonth].sobros.push({
                    nombre: producto.productName,
                    cantidad: Number(producto.cantidad),
                    unidades: producto.unidades,
                    precio: Number(producto.precio),
                });
            } else {
                // Sumar cantidades y precioes si el sobro ya existe
                existingSobro.cantidad += Number(producto.cantidad);
                existingSobro.precio += Number(producto.precio);
            }
        }
    });

    return listaProduccionMensual;
}







console.log(agruparPorMes(productosDelCuaderno)['2/25'].productos)



