import PropTypes from "prop-types"
import { Fragment, useCallback, useEffect, useState } from "react"
import {logicaFiltros, splitFecha } from "../functions/funcionesDeAgrupacionPorFechas.js"
import axios from "axios"

import { RiDeleteBinLine } from "react-icons/ri";




export default function ProduccionDiaria({ serverUrl,localName }) {
    const [fechaDelInput, setFechaDelInput] = useState('1/1/1')
    const [auxFecha, setAuxFecha] = useState('1/1/1')


    const [stockData, setStockData] = useState([])
    const [render, setRender] = useState([])

    const [msgTotales, setMsgTotales] = useState('')
    const [filtros, setFiltros] = useState({
        sobras: false,
        final: false
    })

    const [tick,setTick] = useState([])
    const [deleteTick,setDeleteTick] = useState(false)

    const [updateAfter,setUpdateAfter] = useState(true)


    // Obtiene los productos desde el servidor
    const getStockContent = useCallback(async () => {
        try {
            const res = await axios.get(`${serverUrl}/${localName}/allProducts/produccion-diaria`, {withCredentials:true})
            setStockData(res.data)
        } catch (error) {
            console.error("Error al obtener datos:", error)
        }
    }, [serverUrl,localName])


    const handleTick = useCallback(async(event,item)=>{

       

        if(event.target.checked){
            
            setTick([...tick,item])
            
            setDeleteTick(true)


        } else {
            setDeleteTick(false)
            

            setTick(tick.filter(tickedItem=> tickedItem.nombre !== item.nombre ))

        }

        

    },[tick])

    const handleFecha = useCallback((e)=>{

        setFechaDelInput(e.target.value || '1/1/1')
        setAuxFecha(splitFecha(e.target.value))


    },[])


    const deleteTickedItems = useCallback(async()=>{


        if(tick.length>0 && deleteTick){
        
            for(const thickedItem of tick){

                try {
                    await axios.put(`${serverUrl}/eliminarProducto/${thickedItem.nombre}`,{
                        dateToFilter: auxFecha
                    },{withCredentials:true})
                    
                } catch (error) {
                    console.log(error)
                }
            }

            getStockContent()
            setUpdateAfter(!updateAfter)
        }else{
            
            console.log("Nada para eliminar")
        }
        

    },[auxFecha,deleteTick,tick,serverUrl,getStockContent,updateAfter])



    // Obtiene datos del servidor al montar el componente
    useEffect(() => {getStockContent()}, [getStockContent])



    // Manejo de la renderización según filtros y fechas
    useEffect(() => {

        

        if(fechaDelInput){
            
            const nextRender = logicaFiltros(auxFecha,stockData,filtros)  
            
            // console.log(nextRender.reduce((total,currentValue)=>total + currentValue.montoProducido,0))
            setRender(nextRender)
            setMsgTotales(`${nextRender.reduce((total, currentValue) => total + currentValue.montoProducido, 0)}`)
        }


    }, [fechaDelInput,auxFecha, filtros,stockData,tick,deleteTick])


        
    

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
                        onChange={(e)=>handleFecha(e)}
                    />
                </div>

                <div className="flex flex-col items-center">
                    <label htmlFor="mesSeleccionado" className="text-white mt-4">Ver por mes</label>
                    <input
                        type="month"
                        id="mesSeleccionado"
                        className="border border-gray-300 rounded p-2 text-black"
                        onChange={(e)=>handleFecha(e)}
                    />
                </div>

            </div>
                <div className="flex flex-col pt-4 gap-6">
                    <label className="items-center p-2">
                        <input  type="checkbox" checked={filtros.sobras} 
                        onChange={() => {
                            setFiltros(prev => ({ ...prev, sobras: !prev.sobras }));
                            setDeleteTick(false);
                            setTick([]);
                        }}
                        
                        />
                        Ver sobras
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

            <div className="bg-white relative w-screen  md:w-[600px] p-1 rounded text-black m-5 overflow-hidden">
                <div className=" flex justify-between items-center border-b-[4px] pt-2 border-orange-600 bg-orange-300 px-4 py-2 font-bold">
                {deleteTick ? (
                        <RiDeleteBinLine color={'red'} size={30} onClick={deleteTickedItems}/>
                    ) : ("")}
                    
                    <p className="w-1/4 text-center">Producto</p>
                    <p className="w-1/4 text-center">Cantidad</p>
                    <p className="w-1/4 text-center">Unidades</p>
                    <p className="w-1/4 text-center">Valor</p>
                </div>

                {render.length > 0 && render.map((item, index) => (

                    <div key={index}  className="flex flex-col">
                        
                        
                        <div key={index} className={`flex justify-between items-center border border-gray-300 px-4 py-2 
                                ${tick.some(t => t.nombre === item.nombre) ? `bg-red-700`:""}`}>
                            {auxFecha.length === 10 ? (
                                 <input type='checkbox'  onChange={(e)=>handleTick(e,item)}/>
                            ):("")}
                           
                            <p className="w-1/4 text-center">{item.nombre}</p>
                            <p className="w-1/4 text-center ">{item.cantidad.toLocaleString("es-AR")}</p>
                            <p className="w-1/4 text-center">{item.unidades}</p>
                            <p className="w-1/4 text-center">{`$${item.montoProducido.toLocaleString("es-AR")}`}</p>



                        </div>


                        
                        
                    </div>

                ))}



            </div>
        </Fragment>
    )
}

ProduccionDiaria.propTypes = {
    serverUrl: PropTypes.string.isRequired,
    localName:PropTypes.string
}
