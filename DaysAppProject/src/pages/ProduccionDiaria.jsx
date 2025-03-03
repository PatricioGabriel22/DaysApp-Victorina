import PropTypes from "prop-types"
import { Fragment, useCallback, useEffect, useState } from "react"
import {logicaFiltros } from "../functions/funcionesDeAgrupacionPorFechas.js"
import axios from "axios"

export default function ProduccionDiaria({ serverUrl }) {
    const [fechaDelInput, setFechaDelInput] = useState('1/1/1')

    const [stockData, setStockData] = useState([])
    const [render, setRender] = useState([])

    const [msgTotales, setMsgTotales] = useState('')
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


    // Obtiene datos del servidor al montar el componente
    useEffect(() => {getStockContent()}, [getStockContent])



    // Manejo de la renderización según filtros y fechas
    useEffect(() => {

        

        if(fechaDelInput){
            console.log(fechaDelInput)
            const nextRender = logicaFiltros(fechaDelInput,stockData,filtros)  
            console.log(nextRender)
            // console.log(nextRender.reduce((total,currentValue)=>total + currentValue.montoProducido,0))
            setRender(nextRender)

            setMsgTotales(`${nextRender.reduce((total, currentValue) => total + currentValue.montoProducido, 0)}`)
        }





    }, [fechaDelInput, filtros,stockData])

    return (
        <Fragment>
            <div className="flex flex-row gap-5 items-center mt-14">

                <div className="flex flex-col items-center">
                    <label htmlFor="fechaBuscada" className="text-white mt-4">Ver por día</label>
                    <input
                        type="date"
                        id="fechaBuscada"
                        className="border border-gray-300 rounded p-2 text-black"
                        required
                        onChange={(e)=>setFechaDelInput(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <label htmlFor="mesSeleccionado" className="text-white mt-4">Ver por mes</label>
                    <input
                        type="month"
                        id="mesSeleccionado"
                        className="border border-gray-300 rounded p-2 text-black"
                        onChange={(e)=>setFechaDelInput(e.target.value)}
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
            {render.length > 0 && (
                
                <div className="bg-orange-600 w-[200px] rounded-full text-center text-white p-2 mt-4">
                    
                    {filtros.sobras ? 
                        `Sobras totales  $${Number(msgTotales).toLocaleString("es-AR")}` 
                        : 
                        `Producción total $${Number(msgTotales).toLocaleString("es-AR")}`
                    }
                    
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
                        <p className="w-1/4 text-center overflow-hidden">{item.sobro ? 'sobro': item.unidades}</p>
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
