import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import DaysAppMainPage from "./pages/DaysAppMainPage.jsx";
import ProduccionDiaria from "./pages/ProduccionDiaria.jsx";
import Nav from "./components/Nav.jsx";
import {  useState } from "react";







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

  const [showBar,setShowBar] = useState(true)


  console.log(showBar)
  return(
    <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>




    <Router>  
      
      {showBar? <Nav />:""}
    

      {/* <SwitchModes/> */}

      <Routes>
        <Route path="/" element={<DaysAppMainPage  />} />
        <Route path="/produccion-diaria" element={<ProduccionDiaria onClick={()=>setShowBar(!showBar)}/>}/>
      </Routes>

    </Router>

    </div>
    
  )
}


export default App