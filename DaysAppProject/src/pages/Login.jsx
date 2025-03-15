import PropTypes from "prop-types"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalContext } from "../context/localContext"



export default function Login(){


  const navigate = useNavigate()
  const {localLogin,serverUrl,setLocalName,setLoggedIn,setIsLoading} = useLocalContext()



  function handleLogin(e){
    e.preventDefault()
    console.log(e)

    const logInInpoutData = {
      username:e.target[0].value,
      password:e.target[1].value,
  
    }

      localLogin(serverUrl,logInInpoutData).then(res=>{
   
        console.log(res)
        if(res.status === 200){
            console.log(res.data)
            
            setLoggedIn(true)
            setLocalName(res.data.username)
            sessionStorage.setItem('auth','true')
            sessionStorage.setItem('username',res.data.username)
            sessionStorage.setItem('ID',res.data.id)
    
    
            
            navigate('/')
        }
       
       }).catch(error=>console.log(error))   


  } 
    





    return (
      <Fragment>



        
          <div className="min-h-screen text-black  flex flex-col items-center justify-center">

          <form className=" w-80 border-4 rounded-2xl text-white border-orange-600 p-5 flex flex-col" onSubmit={(e)=>handleLogin(e)}>

            <input placeholder="username" type="text" className="text-black"/>
            <input placeholder="password" type="password" className="text-black"/>

            <button type="submit" onClick={()=>setIsLoading(true)}>Login</button>

          </form>

        

        </div>
        




      </Fragment>
    )
  
}



Login.propTypes = {
  setLoggedIn: PropTypes.array,
  setLocalName:PropTypes.func,
  serverUrl: PropTypes.string,

    
    
  };