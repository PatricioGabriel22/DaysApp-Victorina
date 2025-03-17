import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useLocalContext } from "../../context/localContext";




export default function FormIgnore(){
    
    const {localName,serverUrl} = useLocalContext()
    const [add,setAdd] = useState([])
    
    
    useEffect(() => {
        const storedConfig = JSON.parse(sessionStorage.getItem("config")) 
        console.log(storedConfig)
        const isEmpty = Object.keys(storedConfig).length === 0


        if(!isEmpty){

            setAdd([...storedConfig.ignoredProducts]);
        }
    }, []);




    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(localName)

        const ignoredProductsPayload = []

        for(let i = 0; i<add.length; i++){
            ignoredProductsPayload.push(e.target[i].value.toLowerCase())
        }

        console.log(ignoredProductsPayload)


        axios.post(`${serverUrl}/${localName}/settings`,{
            ignoredProducts: ignoredProductsPayload
        },{withCredentials:true}).then((res) => {
            sessionStorage.setItem('config',JSON.stringify(res.data?.userSettings))

            console.log(res)
        })



    }

    const hadleInputChange = (e,index)=>{
        const newAddedItem = [...add]
        newAddedItem[index] = e.target.value //va a gregando letra por letra a medida que se escribe en el input
        setAdd(newAddedItem)
    }
    

    return(
        <Fragment>

            <form className='flex flex-col w-60 text-black pt-5 text-center gap-1 mt-14' onSubmit={handleSubmit}>


                <label htmlFor="productoIgnorado" className="text-white flex  flex-col items-center gap-4">
                    Ocultar productos del control de dias
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
                        placeholder={"Ocultar de la lista"}
                        value={plusItem|| ""} 
                        onChange={(e)=>hadleInputChange(e,index)}
                        
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