import { Fragment } from "react";
import { ClockLoader } from "react-spinners"
import { randomUtils } from "../functions/random.js";












export default function Loader(){
    const loadingMsgs = ["Ostia che","Abriendo el local","Despertando a los panaderos","Armando las mesas", "Reponiendo el pan", "Pintando las facturas", "Poniendo agua a la cafetera"]
    return(
        <Fragment>

            <div className='flex flex-col gap-2 items-center justify-center min-h-screen'>
                <ClockLoader color="#FFD700" size={100}/>
                <p>{randomUtils.choice(loadingMsgs)}...</p>
            </div>
        </Fragment>
    )
}
