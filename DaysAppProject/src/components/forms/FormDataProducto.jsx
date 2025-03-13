import { Fragment, useEffect, useState } from "react";
import Select from 'react-select'
import PropTypes from "prop-types";
import {ListaProductos} from '../../functions/products.js'


const options = ListaProductos.map((producto)=>({
    value:producto,
    label:producto
}))




export default function FormDataProducto({productData}){
    
    const [targetLista,setTargetLista] = useState()
    const [ID,setID] = useState('')

    useEffect(()=>{

        setID(sessionStorage.getItem('ID'))


    },[])


    

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(e.target[0].value.toLowerCase())
    
        console.log(e)
    
        const nombreDelProducto = e.target[1].value !== ""? e.target[1].value: targetLista.value
        const [anio,mes,dia] = e.target[0].value.split('-')
        // console.log(dia,mes,anio)
        
        
       const collectedData = {
        "productName":nombreDelProducto.toLowerCase(),
        "fechaInicio":`${dia}/${mes}/${anio}`,
        "cantidad":e.target[3].value,
        "unidades":e.target[4].value,
        "sobro":e.target[5].checked,
        "precio":e.target[6].value,
        "localID":ID
        }

        console.log(collectedData)

        productData(collectedData)
        e.target.reset()


    }

    

    return(
        <Fragment>

            <form className='flex flex-col w-60 text-black pt-5 text-center gap-1' onSubmit={handleSubmit}>


                    <label htmlFor="FechaElaboracion" className="text-white ">
                        Fecha de Elaboración
                    </label>
                    <input
                        
                        type="date"
                        id="FechaElaboracion"
                        className="border border-gray-300 rounded w-full text-center"
                    required/>
                    
                <label htmlFor='nombreProducto' ></label>
                <input 
                    type="text" 
                    id="nombreProducto" 
                    placeholder="Nombre del nuevo producto"
                className=" border-gray-300 rounded p-2 w-full"/>

                <Select
                    className="pt-2"
                    options={options}
                    value={targetLista}
                    onChange={setTargetLista}
                    isSearchable
                    placeholder="Buscar en lista"
                />


                <div className="flex flex-row border border-gray-300 rounded h-8 mt-2">

                    <label htmlFor='cantidad' ></label>
                    <input 
                        type="text" 
                        id="cantidad" 
                    className="text-center w-1/3"/>


                    <select className="w-2/3" id="unidades" >
                    
                        <option value="bagueteras">Bagueteras</option>
                        <option value="latas">Latas</option>
                        <option value="unidades">Unidades</option>
                        <option value="paquetes">Paquetes</option>
                        <option value="kilos">Kilos</option>
                        <option value="gramos">Gramos</option>
                        

                    </select>
                    
                    <label className="w-3/3 bg-white flex items-center gap-1"> Sobro
                        <input type="checkbox"/>

                    </label>
      
                </div>


   
                
                <Fragment>

                    <label htmlFor='precio'></label>
                    
                    <input 
                        placeholder="Precio"
                        type="number" 
                        id="precio" 
                        className="border border-gray-300 rounded p-2 w-full text-center"
                        required={true}
                    />
                </Fragment>
               



                <input type='submit' value="Guardar" className='text-white m-5 bg-sky-400 rounded-2xl p-3'></input>

            

            </form>
        </Fragment>
    )
}



FormDataProducto.propTypes = {
    productData: PropTypes.func,

  };