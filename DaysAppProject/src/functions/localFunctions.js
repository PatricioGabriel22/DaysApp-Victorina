/* eslint-disable no-undef */
import axios from "axios"





export async function localLogin(serverUrl,logInData){
    try {
        return await axios.post(`${serverUrl}/login`, logInData ,{withCredentials:true})
         
    } catch (error) {
        console.log(error)
    }
    
}