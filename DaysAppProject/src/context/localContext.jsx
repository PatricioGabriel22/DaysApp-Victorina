/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import {createContext, useContext, useState} from 'react'
import { localLogin } from '../functions/localFunctions'


const localContext = createContext()


export const useLocalContext = ()=>{
    const contextHook = useContext(localContext)
    if (!contextHook){
        throw new Error("Este hook se usa dentro de un provider")
    }
    return contextHook


}



export function LocalProvider({children}){

    const serverUrl = import.meta.env.DEV ? import.meta.env.VITE_LOCAL : import.meta.env.VITE_RENDER

    const [loggedIn,setLoggedIn] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [miniLoader,setMiniLoader] = useState(false)

    
    const [localName,setLocalName] = useState('')


       





    return(
        <localContext.Provider value={
            //paso value como objeto para nop tener que pasar cosa por cosa como proprs
            {
            localLogin,
            serverUrl,
            localName,
            setLocalName,
            loggedIn,
            setLoggedIn,

            isLoading,
            setIsLoading,
            
            miniLoader,
            setMiniLoader
            
        }
            }>
            {children}
        </localContext.Provider>
    )


}


LocalProvider.propTypes = {
    children:PropTypes.node.isRequired

}