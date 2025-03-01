import PropTypes from "prop-types"
import { Fragment, useCallback, useEffect, useState } from "react"
import { agruparPorMes, buscarPorFechaDeProduccion } from "../functions/funcionesDeAgrupacionPorFechas.js"
import axios from "axios"

export default function ProduccionDiaria({ serverUrl }) {
    const [fechaDelInput, setFechaDelInput] = useState('')
    const [mesSeleccionado, setMesSeleccionado] = useState('')
    const [produMensual, setProduMensual] = useState([])
    const [produDiaria, setProduDiaria] = useState([])
    const [stockData, setStockData] = useState([])
    const [render, setRender] = useState([])

    const [filtros, setFiltros] = useState({
        sobras: false,
        final: false
    })

    // Obtiene los productos desde el servidor
    const getStockContent = useCallback(async () => {
        try {
            const res = await axios.get(`${serverUrl}/allProducts/produccion-diaria`)
            setStockData(res.data)
        } catch (error) {
            console.error("Error al obtener datos:", error)
        }
    }, [serverUrl])

    // Maneja el cambio en el input de fecha diaria
    function handleDate(e) {
        setMesSeleccionado('') // Limpiar selección mensual
        const formDate = e.target.value
        const [year, mes, dia] = formDate.split('-')
        setFechaDelInput(`${dia}/${mes}/${year}`)
    }

    // Maneja el cambio en el input de mes
    function handleMonthofProduction(e) {
        setFechaDelInput('') // Limpiar selección diaria
        const [year, month] = e.target.value.split('-')
        setMesSeleccionado(`${month}/${year}`)
    }

    // Obtiene datos del servidor al montar el componente
    useEffect(() => {
        getStockContent()
    }, [getStockContent])

    // Filtra los datos según la fecha seleccionada
    useEffect(() => {
        if (stockData.length > 0) {
            setProduDiaria(buscarPorFechaDeProduccion(fechaDelInput, stockData))
            setProduMensual(agruparPorMes(stockData, fechaDelInput))
        }
    }, [stockData, fechaDelInput])

    // Manejo de la renderización según filtros y fechas
    useEffect(() => {

        let nuevoRender = []

        const produccionMensual = produMensual[mesSeleccionado]?.productos || []

        const sobrasMensuales = produMensual[mesSeleccionado]?.sobros || []
        console.log(produMensual)

        if (produDiaria.length > 0) {

            nuevoRender = produDiaria

        } else if (mesSeleccionado && produccionMensual.length > 0) {

            if (filtros.sobras) {

                nuevoRender = sobrasMensuales

            } else if (filtros.final) {

                nuevoRender = produccionMensual.map((producto) => {

                    const targetParaDescontar = sobrasMensuales.find(item => item.nombre === producto.nombre)

                    return targetParaDescontar

                        ? { ...producto, cantidad: producto.cantidad - targetParaDescontar.cantidad }

                        : producto
                })
            } else {
                nuevoRender = produccionMensual
            }
        }


        setRender(prevRender => (JSON.stringify(prevRender) === JSON.stringify(nuevoRender) ? prevRender : nuevoRender))


    }, [produDiaria, produMensual, mesSeleccionado, filtros])

    return (
        <Fragment>
            <div className="flex flex-row gap-5 items-center">

                <div className="flex flex-col items-center">
                    <label htmlFor="fechaBuscada" className="text-white mt-4">Ver por día</label>
                    <input
                        type="date"
                        id="fechaBuscada"
                        className="border border-gray-300 rounded p-2 text-black"
                        required
                        onChange={handleDate}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <label htmlFor="mesSeleccionado" className="text-white mt-4">Ver por mes</label>
                    <input
                        type="month"
                        id="mesSeleccionado"
                        className="border border-gray-300 rounded p-2 text-black"
                        onChange={handleMonthofProduction}
                    />
                </div>

            </div>
                <div className="flex flex-col pt-4 gap-6">
                    <label>
                        <input type="checkbox" checked={filtros.sobras} onChange={() => setFiltros(prev => ({ ...prev, sobras: !prev.sobras }))} />
                        Sobras
                    </label>
                    {/* <label>
                        <input type="checkbox" checked={filtros.final} onChange={() => setFiltros(prev => ({ ...prev, final: !prev.final }))} />
                        Final
                    </label> */}
                </div>

            <div className="flex flex-row gap-4 sm:flex-col">
                {produDiaria.length > 0 && (
                    <div className="bg-orange-600 w-[200px] rounded-full text-center text-white p-2 mt-4">
                        Producción total del día ${produDiaria.reduce((total, producto) => {
                            const sobra = producto.unidades === 'sobro' ? producto.cantidad : 0
                            return total + ((producto.cantidad - sobra) * producto.precio)
                        }, 0)}
                    </div>
                )}

                {produMensual[mesSeleccionado]?.productos && (
                    <div className="bg-orange-600 w-[200px] rounded-full text-center text-white p-2 mt-4">
                        Producción total del mes ${produMensual[mesSeleccionado]?.productos?.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)}
                    </div>
                )}
            </div>

            <div className="bg-white w-screen md:w-[600px] p-1 rounded text-black m-5">
                <div className="flex justify-between items-center border-b-[4px] pt-2 border-orange-600 bg-orange-300 px-4 py-2 font-bold">
                    <p className="w-1/4 text-center">Producto</p>
                    <p className="w-1/4 text-center">Cantidad</p>
                    <p className="w-1/4 text-center">Unidades</p>
                    <p className="w-1/4 text-center">Valor</p>
                </div>

                {render.length > 0 && render.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border border-gray-300 px-4 py-2">
                        <p className="w-1/4 text-center">{item.nombre || item.productName}</p>
                        <p className="w-1/4 text-center">{item.sobro ? `${item.cantidad} ${item.unidades}`: item.cantidad}</p>
                        <p className="w-1/4 text-center">{item.sobro ? 'sobro': item.unidades}</p>
                        <p className="w-1/4 text-center">{item.precio ? `$${Math.round(item.precio * item.cantidad)}` : ""}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

ProduccionDiaria.propTypes = {
    serverUrl: PropTypes.string.isRequired,
}
