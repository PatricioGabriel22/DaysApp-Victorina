import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiClock1 } from "react-icons/ci";
import { GiCook } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";





export default function Nav(){

    const [menu,setMenu] = useState(false)


    
    return(
        <Fragment>
            <nav className="self-start flex flex-col md:fixed z-10 sm:min-w-screen ">

                {menu ? (
                <div className="h-screen flex flex-col justify-evenly bg-orange-600 ">
                    <RxCross1 size={20} className="m-4 w-full" onClick={()=>(setMenu(!menu))}/>

                    <div className="flex flex-col items-center flex-grow gap-20">

                    <Link to="/" className=" flex items-center p-4 hover:bg-black w-full mt-7" onClick={()=>(setMenu(!menu))}>
                    <CiClock1 size={50}/>Days App</Link>

                    <Link to="/produccion-diaria" className=" flex items-center p-4 hover:bg-black " onClick={()=>(setMenu(!menu))}>
                    <GiCook size={50} />Produccion</Link>

                    </div>
                </div>):
                    (<AiOutlineMenu size={50}  className="m-4" onClick={()=>(setMenu(!menu))}/>)}

            </nav>
        </Fragment>
    )
}