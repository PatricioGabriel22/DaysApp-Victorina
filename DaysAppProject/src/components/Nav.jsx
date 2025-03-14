import { Fragment, useState } from "react";
import axios from "axios";



import { AiOutlineMenu } from "react-icons/ai";
import { CiClock1 } from "react-icons/ci";
import { GiCook } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import bakeryIMG from '/bakery.png'
import PropTypes from "prop-types";




export default function Nav({serverUrl,localName,setLoggedIn,setIsLoading}){

    const [menu,setMenu] = useState(false)



    function handleLogout(){
        axios.post(`${serverUrl}/logout`,{},{withCredentials:true})
        sessionStorage.clear()
        setMenu(false)
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
                            <img src={bakeryIMG}  className="w-16 h-16 rounded-full"/>
                            <p>{localName}</p>
                        </span>


                        <Link to="/" className=" flex  items-center p-4 hover:bg-black mt-7" onClick={()=>(setMenu(!menu))}>
                            <CiClock1 size={50}/>Control de dias
                        </Link>

                        <Link to="/produccion-diaria" className=" flex w-full items-center p-4 hover:bg-black " onClick={()=>(setMenu(!menu))}>
                            <GiCook size={50} />Produccion
                        </Link>

                        <Link to='/login' className="flex flex-grow gap-2 items-center place-self-start text-red-700 hover:text-red-900 pt-52"
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