import { Fragment, useEffect, useState } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2'
import days from 'dayjs'

import {ClockLoader} from 'react-spinners'


import FormDataProducto from '../components/FormDataProducto.jsx'
import BarraProgresoDiario from '../components/BarraProgresoDiario.jsx'
import SearchingBar from '../components/SearchingBar.jsx'

import { randomUtils } from '../functions/random.js'
import { browserAction } from '../functions/searchUtils.js'
import PropTypes from 'prop-types'





const loadingMsgs = ["Ostia che","Abriendo el local","Despertando a los panaderos","Armando las mesas", "Reponiendo el pan", "Pintando las facturas", "Poniendo agua a la cafetera"]





export default function DaysAppMainPage({allData,isLoading,flagUpdate,setFlagUpdate,serverUrl}){
  

  const [diaActual,setDiaActual] = useState(days().format('DD/MM/YYYY'))
  const [horaActual, setHoraActual] = useState(days().format('HH:mm:ss'))

  // const diaValue = days().format('YYYY-MM-DD')

  const [BTNProdcuto,setBTNProducto] = useState(false)

  const [allDataCopy,setAllDataCopy] = useState([])


  const [flagRes, setFalgRes] = useState(null)
 

  

  const [searched,setSearched] = useState(null)
  



  // isLoading ? console.log("buscando data") : console.log("operacion terminada")

  useEffect(()=>{

    try {
      //Cargo el array original y creo una copia para realizar busqueda y no alterar el original
      setAllDataCopy(allData)
     

    } catch (error) {
      console.log(error)
    }

  },[allData,flagUpdate])


  
  //filtro sobre la data original de la db y la aplico a la copia par alaterar su estado
  useEffect(()=>{
    searched  ? setAllDataCopy(browserAction(searched,allData)) : setAllDataCopy(allData)


  },[searched,allData])

  const productData = async (data)=>{
    

    await axios.post(`${serverUrl}/new`,data)
    .then(res=>{
     
      setFlagUpdate(!flagUpdate)
      setFalgRes(res.data.mensaje)

      setTimeout(() => {
        setFalgRes(null)
      }, 1000);


        Swal.fire({
          title: `${res.data.message}`,
          text: "",
          icon: `${res.data.found? "warning" :"success"}`
      })
      }).catch((e)=>{
        console.log(e)

        Swal.fire({
          title: `Algo salio mal, ${e.response.data.message.toLowerCase()} `,
          text: "",
          icon: "error"
      })


      })

  }


  setInterval(()=>{
    setDiaActual(days().format('DD/MM/YYYY'))
    setHoraActual(days().format('HH:mm:ss'))

  },1000)




  return (
    <Fragment>

      <div>

        {isLoading ? (
          <div className='flex flex-col gap-2 items-center justify-center min-h-screen'>
              <ClockLoader color="#FFD700" size={100}/>
              <p>{randomUtils.choice(loadingMsgs)}...</p>
          </div>

        )
        :(

          <div className='flex flex-col items-center '>

            <h1 className='text-white text-4xl'>Control de dias</h1>


            <span className='text-white'>Hoy es {diaActual}, {horaActual}</span>

            <button className='rounded-lg bg-green-500 w-30 p-2 text-center'
              onClick={()=>{setBTNProducto(true); if(BTNProdcuto) setBTNProducto(false)}}>Nuevo producto</button>

            {BTNProdcuto ? (
              <div className='flex flex-col items-center'>

                <FormDataProducto
                  productData={productData}
                 
                />
                {flagRes ? <p className="text-white">Producto agregado!</p> : null}



              </div>

            ):""}

            {/* Barra de busqueda */}
            <SearchingBar
            searched={searched}
            SetSearched={setSearched}
            serverUrl={serverUrl}
            />





            {allDataCopy.map((item,index)=>{return(


              <BarraProgresoDiario key={index} allDataCopy={item} flagUpdate={flagUpdate} setFlagUpdate={setFlagUpdate} serverUrl={serverUrl} />


            )})}

          </div>



        )}


      </div>

    </Fragment>
  )




}


DaysAppMainPage.propTypes = {
    allData: PropTypes.array,
    isLoading: PropTypes.bool,
    flagUpdate:PropTypes.bool,
    setFlagUpdate:PropTypes.func,
    serverUrl: PropTypes.string
    
    
  };







