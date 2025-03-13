import axios from "axios"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"



export default function Login({serverUrl,setLoggedIn, setLocalName}){


    const navigate = useNavigate()


    function handleLogin(e){
        e.preventDefault()
        console.log(e)


        axios.post(`${serverUrl}/login`, {
        username:e.target[0].value,
        password:e.target[1].value,

        },{withCredentials:true})
        .then(res=>{
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

        })



        .catch(e=>console.log(e))
    } 
    





    return (
      <Fragment>
        <div className="min-h-screen text-black  flex flex-col items-center justify-center">

          <form className=" w-80 border-4 rounded-2xl text-white border-cyan-500 p-5 flex flex-col" onSubmit={(e)=>handleLogin(e)}>

            <input placeholder="username" type="text" className="text-black"/>
            <input placeholder="password" type="password" className="text-black"/>

            <button type="submit">Login</button>

          </form>

        

        </div>

      </Fragment>
    )
  
}