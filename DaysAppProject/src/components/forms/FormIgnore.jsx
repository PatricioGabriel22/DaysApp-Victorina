import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import axios from "axios";




export default function FormIgnore({setIgnore}){
    
    const [targetignore,setTargetIgnore] = useState()

    const [add,setAdd] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()


        const ignoredProductsPayload = []

        for(let i = 0; i<add.length; i++){
            ignoredProductsPayload.push(e.target[i].value.toLowerCase())
        }

        console.log(ignoredProductsPayload)


        axios.post('http://localhost:4000/settings',{
            ignoredProducts: ignoredProductsPayload
        },{withCredentials:true})



    }

    

    return(
        <Fragment>

            <form className='flex flex-col w-60 text-black pt-5 text-center gap-1' onSubmit={handleSubmit}>


                <label htmlFor="productoIgnorado" className="text-white flex  flex-col items-center gap-4">
                    Ocultar productos de la lista
                    <FaPlus 
                    color="gray"
                    size={35}
                    onClick={()=>setAdd((prev)=>[...prev,""])}/>
                </label>

                

               

                {
                    add.map((plusItem,index)=>(
                        <input 
                        key={index}
                        type="text" 
                        id={`nombreProducto ${index}`}
                        placeholder="Ocultar del control de dias"
                    className=" border-gray-300 rounded p-2 w-full"/>
                    ))
                }

                <button type="submit" className="text-white m-5 bg-gray-400 rounded-2xl p-3">Ocultar</button>
            </form>
        </Fragment>
    )
}



FormIgnore.propTypes = {
    productData: PropTypes.func,

  };