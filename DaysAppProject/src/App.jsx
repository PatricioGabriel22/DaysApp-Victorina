import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import DaysAppMainPage from "./pages/DaysAppMainPage.jsx";
import ProduccionDiaria from "./pages/ProduccionDiaria.jsx";
import Nav from "./components/Nav.jsx";
import {  useCallback, useEffect, useState } from "react";
import axios from "axios";







// function SwitchModes(){
//   //como no puedo manejar  Link dentro del router lo implemento como una funcion que retorna un componente

//   
//   return(
//     <Fragment>

//       {showBar && location.pathname === '/' ? (
        
//         <Nav onClick={()=>setShowBar(!showBar)}
        
//       ):( 
//         <Nav onClick={()=>setShowBar(!showBar)}/>
        
  
//       )}
//     </Fragment>
    
//   )
// }



function App(){

  const serverUrl = import.meta.env.DEV ? import.meta.env.VITE_LOCAL : import.meta.env.VITE_RENDER

  const [showBar,setShowBar] = useState(true)
  const [isLoading,setIsLoading] = useState(null)
  const [flagUpdate, setFlagUpdate] = useState(false)



  const [allData,setAllData] = useState([])


  console.log(showBar)
    
  const getProducts = useCallback(async ()=>{
   
  
    setIsLoading(true)

    const res = await axios.get(`${serverUrl}/allProducts`)
    if(!res) throw new Error("Error al buscar los datos")

    // res = await axios.get(`${serverUrl}/find/${searched}`)

    setIsLoading(false)

    return res.data


  },[serverUrl,setIsLoading])



  useEffect(()=>{

    try {
      //Cargo el array original y creo una copia para realizar busqueda y no alterar el original
      getProducts().then(responseFromDB => {
      setAllData(responseFromDB);
      
      })

    } catch (error) {
      console.log(error)
    }

  },[getProducts,flagUpdate])



  return(
    <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>




    <Router>  
      
      {isLoading? "": (showBar ? <Nav />:"")}
    

      {/* <SwitchModes/> */}

      <Routes>

        <Route path="/" element={<DaysAppMainPage 
          allData={allData} 
          isLoading={isLoading}
          flagUpdate={flagUpdate}
          setFlagUpdate={setFlagUpdate}
          serverUrl={serverUrl} />} 
        />

        <Route path="/produccion-diaria" element={<ProduccionDiaria 
          allData={allData}
          isLoading={isLoading}
          serverUrl={serverUrl}
          onClick={()=>setShowBar(!showBar)}/>}
        />

      </Routes>

    </Router>

    </div>
    
  )
}


export default App