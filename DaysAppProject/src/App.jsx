import { Route, Routes, BrowserRouter} from "react-router-dom";
import {  useCallback, useEffect, useState } from "react";

import { useLocalContext } from "./context/localContext.jsx";

import DaysAppMainPage from "./pages/DaysAppMainPage.jsx";
import ProduccionDiaria from "./pages/ProduccionDiaria.jsx";
import Nav from "./components/Nav.jsx";
import Loader from './components/loaders/Loader.jsx'
import PrivateRoute from "./components/PrivateRoute.jsx";
import LoginAndRegister from "./pages/LoginAndRegister.jsx";

import axios from "axios";
import Settings from "./pages/Settings.jsx";









function App(){



  const {isLoading,serverUrl,localName,setLocalName} = useLocalContext()
  const [flagUpdate, setFlagUpdate] = useState(false)

  


  const [allData,setAllData] = useState([])

    



  
  const getProducts = useCallback(async ()=>{

    const res = await axios.get(`${serverUrl}/${localName}/allProducts`,{withCredentials:true})
    if(!res) throw new Error("Error al buscar los datos")

    // res = await axios.get(`${serverUrl}/find/${searched}`)

    
    
    return  res.data 
    



  },[serverUrl,localName])


  useEffect(()=>{
    try {
      //Cargo el array original y creo una copia para realizar busqueda y no alterar el original
      setLocalName(sessionStorage.getItem('username'))
      console.log(localName)

      getProducts().then(responseFromDB => {
        setAllData(responseFromDB)
      
       
        
      })



    } catch (error) {
      console.log(error)
    }

  },[getProducts,flagUpdate,setLocalName,localName])

  
  console.log(isLoading)



  return(
    <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>
    
      <BrowserRouter>
        
        {localName? 
          <Nav 
            serverUrl={serverUrl} 
            localName={localName} 
            

            
            /> : ""}
      

        <Routes>



          <Route 
            path="/login" 
            element={isLoading ? <Loader /> : <LoginAndRegister />} 
          />
            
            

          <Route element={<PrivateRoute/>}>
          
          
            <Route path="/" element={
                <DaysAppMainPage 
                  allData={allData} 
                  isLoading={isLoading}
                  flagUpdate={flagUpdate}
                  setFlagUpdate={setFlagUpdate}
                  serverUrl={serverUrl} 
                />
              } 
            />

            <Route path="/produccion-diaria" element={<ProduccionDiaria 
              allData={allData}
              serverUrl={serverUrl}
              localName={localName}
              />}
            />

            <Route path="/ajustes" element={<Settings/>}/>
          
          </Route>



        </Routes>

        
      </BrowserRouter>
     
    

    </div>
    
  )
}


export default App