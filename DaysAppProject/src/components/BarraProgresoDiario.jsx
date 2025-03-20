import { Fragment, useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types";
import Square from "./Square.jsx";
import axios from "axios";


import { RiDeleteBinLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";

import Swal from 'sweetalert2'
import { PuffLoader } from "react-spinners";

export default function BarraProgresoDiario({allDataCopy,flagUpdate,setFlagUpdate,serverUrl}){

  const [color,setColor] = useState('green')
  
  const [flagRevisar,setFlagRevisar] = useState(false)
  const [flagPlus,setFlagPlus] = useState(false)


   

    

  const updateDay = useCallback(async ()=>{

    setFlagPlus(true)
    await axios.put(`${serverUrl}/sumarDia`,{
      "productName":allDataCopy.productName,
      "fechaInicio":allDataCopy.fechaInicio,
      "dias":allDataCopy.dias.length+ 1,

      },{withCredentials:true}).then(res=>{
      console.log(res)
      setFlagUpdate((prev) => !prev)
      setFlagPlus(false)

        

      }).catch(e=>console.log(e))
      


  },[allDataCopy,setFlagUpdate,serverUrl])

  const revisarProducto = useCallback(async ()=>{

    setFlagRevisar(true)

    await axios.put(`${serverUrl}/revisado`,{
      "productName":allDataCopy.productName,
      "fechaInicio":allDataCopy.fechaInicio,
      "dias":allDataCopy.dias.length+ 1,
      "revisado": !allDataCopy.revisado
      },{withCredentials:true}).then(res=>{
      console.log(res)
      setFlagUpdate((prev) => !prev)
      setFlagRevisar(false)  
      }).catch(e=>console.log(e))
      
  },[allDataCopy,setFlagUpdate,serverUrl])

  
  const deleteProduct = useCallback(async ()=>{



    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esto no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: " #d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText:"Cancelar"
    }).then(async (result) => {

      if (result.isConfirmed) {
        
        await axios.put(`${serverUrl}/eliminarProducto`,{
          "productName":allDataCopy.productName,
          "fechaInicio":allDataCopy.fechaInicio,
          },{withCredentials:true}).then(res=>{
    
          console.log(res)
          setFlagUpdate(!flagUpdate)
    
        }).catch(e=>console.log(e))

        Swal.fire({
          title: "Eliminado!",
          text: "Producto eliminado.",
          icon: "success"
        });
      }
    });



      
  },[allDataCopy,setFlagUpdate,flagUpdate,serverUrl])


  
  const editProduct = useCallback(async ()=>{

    


    Swal.fire({
      title: "Ingrese el nuevo nombre del producto",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Editar",
      cancelButtonText:"Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: async (data) => {
        
        console.log(data)
        const nuevoNombre = data
    
        await axios.put(`${serverUrl}/editarProducto`,{
    
        "nombreAnterior":allDataCopy.productName, 
        "nuevoNombre": nuevoNombre,
        "fechaInicio":allDataCopy.fechaInicio
    
        },{withCredentials:true}).then(res=>{
    
          console.log(res)
          setFlagUpdate(!flagUpdate)
    
          }).catch(e=>console.log(e))
      }})
    







  },[serverUrl,flagUpdate,setFlagUpdate,allDataCopy])
  

  const aumentarDia = ()=>{
     updateDay()
  
  }
    

  useEffect(() => {

    if ( (allDataCopy.dias.length % 3 === 0 && allDataCopy.dias.length > 6) || (allDataCopy.dias.length > 6 && !allDataCopy.revisado)) {
        setColor('red');



      }else{
        setColor('green')
      }

      

      
    }, [allDataCopy.dias,allDataCopy.revisado]);


    return(
        <Fragment>

          <div className="flex flex-col w-fit justify-start items-center pt-10 gap-2">
            <div className='flex flex-col justify-center items-center border-2 '>

                  
                  

                <h2 className="pb-2">{allDataCopy.productName}</h2>

                  <div className='flex flex-row gap-5 w-[364px]'>
                      <p className='self-start'>Fecha elaboracion</p>
                      <span>{allDataCopy.fechaInicio}</span>

                     
                  </div>

                  <div className='flex flex-row  items-center bg-white w-[364px] h-10 overflow-hidden'>

                      {

                      allDataCopy.dias ? (
                        allDataCopy.dias.slice(0,7).map((dias, index) => {
                          return (<Square key={index} index={index} color={color}></Square>)
                          })
                      ) : ("")
                      
                      }

                  
                  </div>
                  <p>Dias: {allDataCopy.dias[allDataCopy.dias.length-1] || 0}</p>
                  <p>Ultima revision {allDataCopy.fechaRevision}</p>
                  
    
            </div> 

              <div className="flex flex-row gap-5 justify-center w-full">
                
                <RiDeleteBinLine size={50} className=" text-red-500" onClick={deleteProduct}/>
                
                <RiEditLine  size={50} className="text-sky-500 " onClick={editProduct}/>
                <button className="bg-white text-black rounded-full flex flex-row items-center justify-center w-20" 
                onClick={aumentarDia}>{flagPlus? <PuffLoader size={25} /> : "+1 dia"}</button>
                

                {
                  (!allDataCopy.revisado) ? (
                  
                    <button className=" bg-purple-600 text-black rounded-full flex flex-row items-center justify-center w-20" 
                    onClick={revisarProducto}>{flagRevisar? <PuffLoader size={25} /> : "Revisar"}</button>
                
                      
                  ) :""
                }
              </div>
              
              

          </div>

        </Fragment>
    )
}



BarraProgresoDiario.propTypes = {
    allDataCopy: PropTypes.object,
    flagUpdate: PropTypes.bool,
    setFlagUpdate: PropTypes.func,
    serverUrl:PropTypes.string
  };
