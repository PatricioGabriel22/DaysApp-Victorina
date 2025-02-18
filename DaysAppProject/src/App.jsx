import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState } from "react";

import DaysAppMainPage from "./pages/DaysAppMainPage.jsx";
import ProduccionDiaria from "./pages/ProduccionDiaria.jsx";


import { GiCook } from "react-icons/gi";
import { CiClock1 } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";





// function SwitchModes(){
//   //como no puedo manejar  Link dentro del router lo implemento como una funcion que retorna un componente
//   const location = useLocation()
//   return(
//     <Fragment>

//       {location.pathname === '/' ? (
  
//         <Link to="/produccion-diaria" className='fixed self-end'><GiCook size={50}/></Link>
//       ):(
//         <Link to="/" className='fixed self-start'><CiClock1 size={50}/></Link>
  
//       )}
//     </Fragment>
    
//   )
// }



function App(){

  const [menu,setMenu] = useState(false)

  return(
    <div className='bg-black min-h-screen min-w-screen  text-white flex flex-col items-center '>



    <Router>

      <nav className="self-start flex flex-col fixed  bg-orange-600 md:min-h-screen sm:min-w-screen">

        {menu ? (
          <div className="min-h-screen flex flex-col justify-evenly mt-7">
            <RxCross1 size={20} className="m-4 w-full" onClick={()=>(setMenu(!menu))}/>

            <div className="flex flex-col items-center flex-grow gap-20">
              <Link to="/" className="  flex items-center p-4 hover:bg-black w-full mt-7"><CiClock1 size={50}/>Days App</Link>
              <Link to="/produccion-diaria" className=" flex items-center p-4 hover:bg-black "><GiCook size={50}/>Produccion</Link>

            </div>
          </div>
            ):
            (<AiOutlineMenu size={50}   onClick={()=>(setMenu(!menu))}/>)}

        </nav>

      {/* <SwitchModes/> */}

      <Routes>
        <Route path="/" element={<DaysAppMainPage/>}/>
        <Route path="/produccion-diaria" element={<ProduccionDiaria/>}/>
      </Routes>

    </Router>

    </div>
    
  )
}


export default App