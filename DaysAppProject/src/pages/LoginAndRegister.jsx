import PropTypes from "prop-types"
import { Fragment, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalContext } from "../context/localContext"

import bakeryIMG from '/bakery.png'
import { FaGithub } from "react-icons/fa6";
import { PiChefHatLight } from "react-icons/pi"
import { RiErrorWarningLine } from "react-icons/ri"
import axios from "axios"

export default function LoginAndRegister(){


  const navigate = useNavigate()
  const {localLogin,serverUrl,setLocalName,setLoggedIn,setIsLoading,setLocalSettings} = useLocalContext()

  const [toRegister,setToRegister] = useState(false)
  const [succesMsg,setSuccesMsg] = useState('')
  const [errorMsg,setErrorMsg] = useState('')

  const formRef = useRef(null)




  function blankFormsWhenSwitch(){
    setToRegister(!toRegister)
    formRef.current?.reset()
  }


function handleLogin(e){
  e.preventDefault()
  
  const logInInpoutData = {
    username:e.target[0].value,
    password:e.target[1].value,
    
  }
  
  localLogin(serverUrl,logInInpoutData).then(res=>{
    
    if(res.status === 200){
      console.log(res)
      
      setLoggedIn(true)
      setIsLoading(false)
      setLocalName(res.data.username)
      setLocalSettings(res.data.userSettings)

      sessionStorage.setItem('auth','true')
      sessionStorage.setItem('username',res.data.username)
      sessionStorage.setItem('ID',res.data.id)
      sessionStorage.setItem('config',JSON.stringify(res.data?.userSettings))
  
          
      navigate('/')
    }
      
  })
  .catch(error=>{
    console.log(error.response.data.message)
    setErrorMsg(error.response.data.message)
  })   


} 
  

  function handleRegister(e){
    e.preventDefault()
    console.log(e)  

    const confirmedPasswordInput = e.target[2].value
    
    
    const registerDataInput = {
      username:e.target[0].value,
      password:e.target[1].value,
      confirmPassword: confirmedPasswordInput,
      email:e.target[3].value

    }
    

    if(registerDataInput.password ===  confirmedPasswordInput){

      axios.post(`${serverUrl}/register`,registerDataInput,{withCredentials:true})
      
      .then((res)=> {
        console.log(res)
        e.target.reset()
        blankFormsWhenSwitch()
        setSuccesMsg(res.data.message)
        
      })
      .catch(error=>setErrorMsg(error.response.data.message))




    }else{
      setErrorMsg('Las contraseñas no coinciden')

    }


}

  setTimeout(()=>{setErrorMsg('')},[6000])

    
  return (
      <Fragment>
        <div className="min-h-screen flex flex-col items-center justify-center  ">
          
          <div className="pb-14">
            <h1 className="text-3xl ">Bakery app</h1>
            <img src={bakeryIMG} className="w-36"></img>
          </div>

        {toRegister? (
        
        <div className="flex flex-col justify-center">

          <form autoComplete="off" ref={formRef} 
            className="w-80 border-4 rounded-3xl text-white border-orange-600  p-5 flex flex-col gap-y-5 " 
            onSubmit={(e)=>handleRegister(e)}>
          
            <input name="register-username" placeholder="username" type="text" className="text-black text-center rounded" />
            <input name="register-password" placeholder="password" type="password" className="text-black text-center rounded" />
            <input name="register-confirmedPassword" placeholder="confirmar password" type="password" className="text-black text-center rounded"/>
            <input name="register-email" placeholder="email" type="text" className="text-black text-center rounded"  />
  
  
            <button type="submit" className="bg-orange-600 p-2 rounded">Registrarse</button>
            

          {errorMsg && <div className="text-red-600 self-center flex flex-row items-center ">
                  
                  <RiErrorWarningLine />
                  <p>{errorMsg}</p>
                </div>
                }
          </form>
          <button type="submit" className="" onClick={()=>blankFormsWhenSwitch() }>Login</button>

        </div>
        
        ):(
            <div className="flex flex-col items-center justify-center">


              <form  ref={formRef} className="w-80 border-4 rounded-3xl text-white border-orange-600 p-5 pb-6 flex flex-col gap-y-5  " 
              onSubmit={(e)=>handleLogin(e)}>
    
                <input placeholder="username" type="text" className="text-black text-center rounded"  required/>
                <input placeholder="password" type="password" className="text-black text-center rounded"  required/>
    
                <button type="submit" className="bg-orange-600 p-2 rounded">Login</button>
                {succesMsg && <div className="text-emerald-500 w-full  text-center flex-grow flex flex-col justify-center items-center ">
                  <p>{succesMsg}</p>
                  <PiChefHatLight size={20}/>
                  </div>
                }


              </form>
                {errorMsg && <div className="text-red-600 self-center flex flex-row items-center ">
                  
                  <RiErrorWarningLine />
                  <p>{errorMsg}</p>
                </div>
                }
              
              <div className="flex flex-col pt-10">
                <button className="pt-3" onClick={()=>blankFormsWhenSwitch()}>Registrarse</button>
                <button className="pt-3">Cambiar contraseña</button>
              </div>
             

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