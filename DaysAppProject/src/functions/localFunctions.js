import axios from "axios"





export async function localLogin(serverUrl,logInData){
    
    return await axios.post(`${serverUrl}/login`, logInData ,{withCredentials:true})
         
    
    
}