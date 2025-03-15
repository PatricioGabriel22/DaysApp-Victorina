import PropTypes from "prop-types"
import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalContext } from "../context/localContext"

import bakeryIMG from '/bakery.png'
import { FaGithub } from "react-icons/fa6";
import axios from "axios"

export default function LoginAndRegister(){


  const navigate = useNavigate()
  const {localLogin,serverUrl,setLocalName,setLoggedIn,setIsLoading} = useLocalContext()

  const [toRegister,setToRegister] = useState(false)

  function handleLogin(e){
    e.preventDefault()
    setIsLoading(true)

    const logInInpoutData = {
      username:e.target[0].value,
      password:e.target[1].value,
  
    }

      localLogin(serverUrl,logInInpoutData).then(res=>{
   
        console.log(res)
        if(res.status === 200){
            console.log(res.data)
            
            setLoggedIn(false)
            setLocalName(res.data.username)
            sessionStorage.setItem('auth','true')
            sessionStorage.setItem('username',res.data.username)
            sessionStorage.setItem('ID',res.data.id)
    
    
            
            navigate('/')
        }
       
       }).catch(error=>console.log(error))   


} 
  

  function handleRegister(e){
    e.preventDefault()
    console.log(e)  

    const confirmedPasswordInput = e.target[3].value
    
    
    const registerDataInput = {
      username:e.target[0].value,
      email:e.target[1].value,
      password:e.target[2].value,
      confirmPassword: confirmedPasswordInput

    }
    

    if(registerDataInput.password ===  confirmedPasswordInput){
      console.log("las contraseñas coinciden")

      axios.post(`${serverUrl}/register`,registerDataInput,{withCredentials:true})
      
      .then(res=>console.log(res)).then(()=> {
        e.target.reset()
        setToRegister(false)
        
      })
      .catch(error=>console.log(error))




    }else{
      console.log("las contraseñas no coinciden")

    }


  }


    console.log(toRegister)
    return (
      <Fragment>
        <div className="min-h-screen flex flex-col items-center justify-center pt-7">
          <h1 className=" text-3xl absolute top-5">Bakery app</h1>
          <img src={bakeryIMG} className="w-36  fixed top-20"></img>

        {toRegister? (
        
        <div className="flex flex-col items-center justify-center">
            <form className=" w-80 border-4 rounded-3xl text-white border-orange-600 p-5 flex flex-col gap-y-5" 
              onSubmit={(e)=>handleRegister(e)}>
            
              <input placeholder="username" type="text" className="text-black text-center rounded"/>
              <input placeholder="email" type="text" className="text-black text-center rounded"/>
              <input placeholder="password" type="password" className="text-black text-center rounded"/>
              <input placeholder="confirmar password" type="password" className="text-black text-center rounded"/>
    
    
              <button type="submit" className="bg-orange-600 p-2 rounded">Registrarse</button>
    
    
            </form>
            <button type="submit" onClick={()=>setToRegister(false)}>Login</button>

        </div>
        
        ):(
            <div className="flex flex-col items-center justify-center">


              <form className=" w-80 border-4 rounded-3xl text-white border-orange-600 p-5 flex flex-col gap-y-5" 
              onSubmit={(e)=>handleLogin(e)}>
    
                <input placeholder="username" type="text" className="text-black text-center rounded"/>
                <input placeholder="password" type="password" className="text-black text-center rounded"/>
    
                <button type="submit" className="bg-orange-600 p-2 rounded">Login</button>

              </form>
              

              <button className="pt-3" onClick={()=>setToRegister(true)}>Registrarse</button>


              <button className="pt-3">Cambiar contraseña</button>
             

            </div>
        
                
        
            )}
        
            <div className="absolute bottom-2 right-2 flex flex-row items-center gap-2">
              <FaGithub />
              
                <a href="https://github.com/PatricioGabriel22">Dev: PatricioGabriel22</a>
              
              </div>

        </div>
        




      </Fragment>
    )
  
}



LoginAndRegister.propTypes = {
  setLoggedIn: PropTypes.array,
  setLocalName:PropTypes.func,
  serverUrl: PropTypes.string,

    
    
  };