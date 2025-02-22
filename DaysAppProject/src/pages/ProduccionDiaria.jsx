import PropTypes from "prop-types";
import { Fragment, useCallback, useEffect, useState } from "react";
import { agruparPorMes, buscarPorFechaDeProduccion} from "../functions/funcionesDeAgrupacionPorFechas.js";
import axios from "axios";




export default function ProduccionDiaria({serverUrl}){

    const [fechaDelInput,setFechaDelInput] = useState('') 
    const [mesSeleccionado, setMesSeleccionado] = useState('')
    const [produMensual,setProduMensual] = useState([]) 
    const [produDiaria,setproduDiaria] = useState([]) 

    // const [loadStock,setLoadStock] = useState(true)

    const [stockData,setStockData] = useState([])

    const getStockContent = useCallback(async ()=>{
        // setLoadStock(false)

        const res = await axios.get(`${serverUrl}/allProducts/produccion-diaria`)
        return res.data

    },[serverUrl])



    function handleDate(e){
        const formDate = e.target.value

        const [year,mes,dia] = formDate.split('-')

        

        setFechaDelInput(`${dia}/${mes}/${year}`)
        setMesSeleccionado('')

        
    }


    function handleMonthofProduction(e){
        const monthSelected = e.target.value
        const [year,month] = monthSelected.split('-')
        setMesSeleccionado(`${month}/${year}`)
        setFechaDelInput('')
        
    }


    useEffect(()=>{
        
        getStockContent().then((res)=>{

            setStockData(res)

        })


    },[getStockContent])

    useEffect(()=>{

        if(stockData && stockData.length > 0){
            
            
            setproduDiaria(buscarPorFechaDeProduccion(fechaDelInput,stockData))

            setProduMensual(agruparPorMes(stockData,fechaDelInput))


        }
        



    },[stockData,fechaDelInput])


    useEffect(()=>{

        console.log(produDiaria)
        console.log(produMensual)

  

        console.log(mesSeleccionado)
    },[produDiaria,produMensual,mesSeleccionado])


    return(
        <Fragment>
            <div className="flex flex-row gap-5">

                <div className="flex flex-col items-center">
                    <label htmlFor="fechaBuscada" className="text-white mt-4">
                                Ver por dia
                    </label>
                    <input
                        type="date"
                        id="fechaBuscada"
                        className="border border-gray-300 rounded p-2 text-black "
                        required
                        onChange={handleDate}  
                    />
                </div>

                <div className="flex flex-col items-center">
                    <label htmlFor="fechaBuscada" className="text-white mt-4">
                                Ver por mes
                    </label>
                    <input
                        type="month"
                        id="mesSeleccionado"
                        className="border border-gray-300 rounded p-2 text-black"
                        onChange={handleMonthofProduction}
                        
                    />
                </div>
            </div>

            <div className="flex flex-row gap-4">

                {produDiaria.length>0 ? (
                        <div className="bg-orange-600 w-[200px] rounded-full text-center text-white p-2 mt-4">
                            Producción total del día ${produDiaria.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)}
                        </div>
                ):("")}
    

                
                {produMensual[mesSeleccionado]?.productos? (
                 <div className="bg-orange-600 w-[200px] rounded-full text-center text-white p-2 mt-4">

                    Producción total del mes ${produMensual[mesSeleccionado]?.productos?.reduce((total, producto) => total + producto.cantidad * producto.precio, 0)}
                </div>
                    ):("")}
                    
                    
            </div>


            <div className="bg-white  sm:min-w-screen md:w-[600px] p-1 rounded text-black m-5">
                
                {/* Cabecera de la "tabla" */}
                <div className="flex justify-between items-center  border-b-[4px] pt-2 border-orange-600 bg-orange-300 px-4 py-2 font-bold">
                    <p className="w-1/4 text-center">Producto</p>
                    <p className="w-1/4 text-center">Cantidad</p>
                    <p className="w-1/4 text-center">Unidades</p>
                    <p className="w-1/4 text-center">Valor</p>

                </div>

                {/* Filas de productos */}
                {produDiaria && fechaDelInput !== '' ? produDiaria.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border border-gray-300 px-4 py-2">
                        
                        <p className="w-1/4 text-center">{item.productName}</p>
                        <p className="w-1/4 text-center">{item.cantidad}</p>
                        <p className="w-1/4 text-center">{item.unidades}</p>
                        <p className="w-1/4 text-center">{item.precio ? `$${item.precio * item.cantidad}`:""}</p>


                        

                    </div>
                )):""}

                {produMensual[mesSeleccionado] && mesSeleccionado !== ''? produMensual[mesSeleccionado].productos.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border border-gray-300 px-4 py-2">
                            
                            <p className="w-1/4 text-center">{item.nombre}</p>
                            <p className="w-1/4 text-center">{item.cantidad}</p>
                            <p className="w-1/4 text-center">{item.unidades}</p>
                            <p className="w-1/4 text-center">{item.precio ? `$${item.precio * item.cantidad}`:""}</p>

                        </div>
                )):""}


            </div>
                
    


        </Fragment>
    )
}



ProduccionDiaria.propTypes = {
    allData: PropTypes.array,
    serverUrl: PropTypes.string,
    
    
  };