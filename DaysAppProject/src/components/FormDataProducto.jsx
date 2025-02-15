import { Fragment } from "react";
import PropTypes from "prop-types";
import {ListaProductos} from '../functions/products.js'





export default function FormDataProducto({productData,diaValue,prevName}){
    


    return(
        <Fragment>

            <form className='flex flex-col w-60 text-black pt-5 text-center ' onSubmit={productData}>
                    
                <label htmlFor='nombreProducto' ></label>
                <input 
                    type="text" 
                    id="nombreProducto" 
                    placeholder="Nombre del nuevo producto"
                    className=" border-gray-300 rounded p-2 w-full"
                />

                <select className=" border-gray-300 rounded p-2 w-full mt-2" id="nombreProducto">
                        <option value="" defaultValue={'Buscar en lista'} 
                            className="text-center ">Buscar en lista</option>
                    {ListaProductos.map((producto,index)=>{
                        return(

                            <option key={producto+index} value={`${producto}`}>{producto}</option>
                        )
                    })}
    
                </select>


                <div className="flex flex-row border border-gray-300 rounded h-8 mt-2">

                    <label htmlFor='cantidad' ></label>
                    <input 
                        type="text" 
                        id="cantidad" 
                        placeholder={`${diaValue ? "Cantidad ": prevName }`}
                        className="text-center w-2/3"
                    />
                    <select className="w-1/2" id="unidades" >
                    
                        <option value="bagueteras">Bagueteras</option>
                        <option value="latas">Latas</option>
                        <option value="unidades">Unidades</option>
                        <option value="paquetes">Paquetes</option>
                        <option value="kilos">Kilos</option>
                        <option value="gramos">Gramos</option>
                        <option value="sobro">Sobró</option>

                    </select>
                </div>


   
                {diaValue ? (
                    <Fragment>
                        <label htmlFor="FechaElaboracion" className="text-white mt-4">
                            Fecha de Elaboración
                        </label>
                        <input
                            type="date"
                            id="FechaElaboracion"
                            className="border border-gray-300 rounded p-2"
                            required
                            
                        />
                    </Fragment>
                ) : (
                    ''
                )}



                <input type='submit' value="Guardar" className='text-white m-5 bg-sky-400 rounded-2xl p-3'></input>

            

            </form>
        </Fragment>
    )
}



FormDataProducto.propTypes = {
    productData: PropTypes.func,
    diaValue: PropTypes.string,
    prevName:PropTypes.string
  };