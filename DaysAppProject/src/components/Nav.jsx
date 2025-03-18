import { Fragment, useState } from "react";
import axios from "axios";



import { AiOutlineMenu } from "react-icons/ai";
import { CiClock1 } from "react-icons/ci";
import { GiCook } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import bakeryIMG from '/bakery.png'
import { IoSettingsSharp } from "react-icons/io5";


import PropTypes from "prop-types";
import { useLocalContext } from "../context/localContext";




export default function Nav(){

    const [menu,setMenu] = useState(false)

    const {serverUrl,localName,setLoggedIn,setIsLoading,setLocalName} = useLocalContext()

    function handleLogout(){
        axios.post(`${serverUrl}/logout`,{},{withCredentials:true})
        sessionStorage.clear()
        setMenu(false)
        setLocalName(false)
        setLoggedIn(false)
        setIsLoading(false)
    }

    
    return(
        <Fragment>
            <nav className="self-start absolute flex flex-col z-50">

                {menu ? (
                <div className="h-screen fixed bg-orange-600 ">

                    <div className="flex flex-col justify-between items-center flex-grow w-full gap-10">

                        <RxCross1 size={20} className="mt-8 w-full" onClick={()=>(setMenu(!menu))}/>

                        <span className="flex flex-col items-center">
                            <img src={bakeryIMG}  className="w-16 h-16"/>
                            <p className=" text-pretty text-black italic ">{localName}</p>
                        </span>


                        <Link to="/" className=" flex  w-full items-center p-4 hover:bg-black mt-7" onClick={()=>(setMenu(!menu))}>
                            <CiClock1 size={50}/>Control de dias
                        </Link>

                        <Link to="/produccion-diaria" className=" flex w-full items-center p-4 hover:bg-black " onClick={()=>(setMenu(!menu))}>
                            <GiCook size={50} />Produccion
                        </Link>

                        
                        <Link to="/ajustes" className=" flex w-full items-center p-4 hover:bg-black " onClick={()=>(setMenu(!menu))}>
                            <IoSettingsSharp size={50} />Ajustes
                        </Link>

                        <Link to='/login' className="flex flex-grow gap-2 items-center text-black hover:text-red-900 m-auto"
                            onClick={()=>handleLogout()}>
                            <TbLogout2 size={20}/> Logout
                        </Link>

                    </div>
                </div>):
                    (<AiOutlineMenu size={50}  className="m-4" onClick={()=>(setMenu(!menu))}/>)}

            </nav>
        </Fragment>
    )
}


Nav.propTypes = {
  setLoggedIn: PropTypes.func,
  setLocalName:PropTypes.func,
  serverUrl: PropTypes.string,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  localName: PropTypes.string
    
    
  };