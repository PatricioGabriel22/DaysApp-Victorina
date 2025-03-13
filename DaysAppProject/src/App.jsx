import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import DaysAppMainPage from "./pages/DaysAppMainPage.jsx";
import ProduccionDiaria from "./pages/ProduccionDiaria.jsx";
import {  useCallback, useEffect, useState } from "react";
import axios from "axios";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Nav from "./components/Nav.jsx";










function App(){


  const serverUrl = import.meta.env.DEV ? import.meta.env.VITE_LOCAL : import.meta.env.VITE_RENDER

  const [isLoading,setIsLoading] = useState(false)
  const [flagUpdate, setFlagUpdate] = useState(false)


  const [loggedIn,setLoggedIn] = useState(false)

  const [allData,setAllData] = useState([])

  const [localName,setLocalName] = useState('')
    



  
  const getProducts = useCallback(async ()=>{
    

    setIsLoading(true)


    const res = await axios.get(`${serverUrl}/${localName}/allProducts`,{withCredentials:true})
    if(!res) throw new Error("Error al buscar los datos")

    // res = await axios.get(`${serverUrl}/find/${searched}`)

    setIsLoading(false)
    
    return  res.data 
    



  },[serverUrl,setIsLoading,localName])


  useEffect(()=>{
    try {
      //Cargo el array original y creo una copia para realizar busqueda y no alterar el original
      setLocalName(sessionStorage.getItem('username'))
      console.log(localName)

      getProducts().then(responseFromDB => {
        setAllData(responseFromDB);
       
        
      })



    } catch (error) {
      console.log(error)
    }

  },[getProducts,flagUpdate,localName])

  


  return(
    <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>
      

    <Router>  
      {loggedIn || sessionStorage.getItem('auth')? <Nav serverUrl={serverUrl} localName={localName} setLoggedIn={setLoggedIn}/> : ""}
    

      <Routes>



        <Route path="/login" element={<Login serverUrl={serverUrl}  setLoggedIn={setLoggedIn} setLocalName={setLocalName} />}  /> 


        <Route path="/" element={
          <PrivateRoute>
            <DaysAppMainPage 
              allData={allData} 
              isLoading={isLoading}
              flagUpdate={flagUpdate}
              setFlagUpdate={setFlagUpdate}
              serverUrl={serverUrl} 
            />
            </PrivateRoute>
          } 
        />

        <Route path="/produccion-diaria" element={<ProduccionDiaria 
          allData={allData}
          isLoading={isLoading}
          serverUrl={serverUrl}
          />}
        />

      </Routes>

    </Router>

    </div>
    
  )
}


export default App