import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { agruparPorMes, buscarPorFechaDeProduccion} from "../functions/test.js";




export default function ProduccionDiaria({allData,isLoading}){

    const [fechaDelInput,setFechaDelInput] = useState('') 
    // const [produMensual,setProduMensual] = useState() 
    const [produDiaria,setproduDiaria] = useState() 



    function handleDate(e){
        const formDate = e.target.value

        const [year,mes,dia] = formDate.split('-')

        

        return  `${dia}/${mes}/${year}`
        
    }



    useEffect(()=>{
        
        // setProduMensual(agruparPorMes(allData))
        
        setproduDiaria(buscarPorFechaDeProduccion(fechaDelInput,allData))


    },[allData,fechaDelInput])

    useEffect(()=>{console.log(produDiaria)},[produDiaria])

    return(
        <Fragment>
            <h2>Produccion diaria</h2>


            <label htmlFor="fechaBuscada" className="text-white mt-4">
                        Fecha de Elaboración
            </label>
            <input
                type="date"
                id="fechaBuscada"
                className="border border-gray-300 rounded p-2 text-black "
                required
                onChange={(e)=>setFechaDelInput(handleDate(e))}  
            />


            <div className="bg-white  md:w-[600px] rounded-sm text-black m-5">
            
            {/* Cabecera de la "tabla" */}
            <div className="flex justify-between items-center mb-4 border-b-[4px] pt-2 border-orange-600 bg-orange-300 px-4 py-2 font-bold">
                <p className="w-1/3 text-center">Producto</p>
                <p className="w-1/3 text-center">Cantidad</p>
                <p className="w-1/3 text-center">Unidades</p>
            </div>

            {/* Filas de productos */}
            {produDiaria?.map((item, index) => (
                <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 px-4 py-2">
                
                <p className="w-1/3 text-center">{item.productName}</p>
                <p className="w-1/3 text-center">{item.cantidad}</p>
                <p className="w-1/3 text-center">{item.unidades}</p>

                </div>
            ))}

            </div>


        </Fragment>
    )
}



ProduccionDiaria.propTypes = {
    allData: PropTypes.array,
    isLoading: PropTypes.bool,
    
    
  };