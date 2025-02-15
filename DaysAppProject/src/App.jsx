import { Fragment, useCallback, useEffect, useState } from 'react'

import axios from 'axios'
import FormDataProducto from './components/FormDataProducto'
import BarraProgresoDiario from './components/BarraProgresoDiario'
import SearchingBar from './components/SearchingBar.jsx'


import { randomUtils } from './functions/random.js'
import { removeAccents } from './functions/removeAccents.js'

import Swal from 'sweetalert2'
import {ClockLoader} from 'react-spinners'
import days from 'dayjs'


const loadingMsgs = ["Ostia che","Abriendo el local","Despertando a los panaderos","Sacando las cosas", "Secando el pan", "Pintando las facturas", "Poniendo agua a la cafetera"]

function App() {
  const serverUrl = import.meta.env.DEV ? import.meta.env.VITE_LOCAL : import.meta.env.VITE_RENDER
  
  const [diaActual,setDiaActual] = useState(days().format('DD/MM/YYYY'))
  const [horaActual, setHoraActual] = useState(days().format('HH:mm:ss'))
  
  const diaValue = days().format('YYYY-MM-DD')
  
  const [BTNProdcuto,setBTNProducto] = useState(false)

  const [allData,setAllData] = useState([])
  const [allDataCopy,setAllDataCopy] = useState([])

  
  const [flagUpdate, setFlagUpdate] = useState(false)
  const [flagRes, setFalgRes] = useState(null)
  const [isLoading,setIsLoading] = useState(null)

  const [searched,SetSearched] = useState(null)

  
 
  
  const getProducts = useCallback(async ()=>{
    try {
      
      if(!searched){

        setIsLoading(true)
        
        const res = await axios.get(`${serverUrl}/allProducts`)
        
        // res = await axios.get(`${serverUrl}/find/${searched}`)
        
        setAllData(res.data)
        if(!res) throw new Error("Error al buscar los datos")
      }

      //mejorar
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false)
    }
    
  },[serverUrl,setIsLoading,searched])
  
  // isLoading ? console.log("buscando data") : console.log("operacion terminada")

  useEffect(()=>{
    try {
      getProducts()
      
    } catch (error) {
      console.log(error)
    }
    
  },[getProducts,flagUpdate,searched])
  
  
  //creo una cipia exaacta de la info de la db y la copio para evitar volver a hacer consultas
  //la transformo un JSON y despues la parseo
  useEffect(()=>{
    setAllDataCopy(JSON.parse(JSON.stringify(allData)))
  },[allData])

 
  //filtro sobre la data original de la db y la aplico a la copia par alaterar su estado
  useEffect(()=>{
    if(searched){

      const target = removeAccents(searched.toLowerCase())
      const filter = allData.filter(item => removeAccents(item.productName).toLowerCase().includes(target))
      setAllDataCopy(filter)

    }else{
      setAllDataCopy(allData)
    }
  },[searched,allData])

  const productData = async (e)=>{
    e.preventDefault()
    // console.log(e.target[0].value.toLowerCase())

    console.log(e.target[4].value)
  
    const nombreDelProducto = e.target[0].value !== ""? e.target[0].value: e.target[1].value
    const [anio,mes,dia] = e.target[4].value.split('-')
    // console.log(dia,mes,anio)


    await axios.post(`${serverUrl}/new`,{
      "productName":nombreDelProducto.toLowerCase(),
      "fechaInicio":`${dia}/${mes}/${anio}`,
      "cantidad":e.target[2].value,
      "unidades":e.target[3].value
    }).then(res=>{
      console.log(res)
      setFlagUpdate((prev) => !prev)
      setFalgRes(res.data.mensaje)

      setTimeout(() => {
        setFalgRes(null)
      }, 1000);


      e.target.reset()
      }).catch(e=>console.log(e))

      Swal.fire({
        title: "Producto agregado",
        text: "",
        icon: "success"
      });
    
  }


  setInterval(()=>{
    setDiaActual(days().format('DD/MM/YYYY'))
    setHoraActual(days().format('HH:mm:ss'))
      
  },1000)




  
  

  return (
    <Fragment>
    
      <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>
        {isLoading ? (
          <div className='flex flex-col gap-2 items-center justify-center min-h-screen'>
              <ClockLoader color="#FFD700" size={100}/>
              <p>{randomUtils.choice(loadingMsgs)}...</p>
          </div>
        
        )
        :(

          <div className='bg-black flex flex-col items-center '>

            <h1 className='text-white text-4xl pt-5'>DaysApp</h1>

            <span className='text-white'>Hoy es {diaActual}, {horaActual}</span>

            <button className='rounded-lg bg-green-500 w-30 p-2 text-center' 
              onClick={()=>{setBTNProducto(true); if(BTNProdcuto) setBTNProducto(false)}}>Nuevo producto</button>

            {BTNProdcuto ? (
              <div className='flex flex-col items-center'>

                <FormDataProducto 
                  productData={productData} diaValue={diaValue} 
                />
                {flagRes ? <p className="text-white">Producto agregado!</p> : null}
                
                
                
              </div>

            ):""} 

            {/* Barra de busqueda */}
            <SearchingBar 
            searched={searched} 
            SetSearched={SetSearched}
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

export default App
