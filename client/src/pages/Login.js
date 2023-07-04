import { useContext, useState } from "react"
import { UserContext } from "../components/UserContext"
import {Navigate} from 'react-router-dom'

function Login() {

        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [redirect, setRedirect] = useState('')        
        const { setUserInfo } = useContext(UserContext) 
   
   
    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' },
            credentials: 'include'
        })
           if (response.ok) {
           response.json().then(userInfo => {
          setUserInfo(userInfo)
          setRedirect(true)
          })
       } else {
       alert('senha ou usuário inválido')
      }
   }
 
     if (redirect) {
    return <Navigate to={'/'} />
  }
    return (
      <div className="flex items-center justify-center">
          
          <form className="flex flex-col my-10 rounded-lg h-[300px] w-[400px] items-center p-2 bg-slate-800 text-white"
              onSubmit={login}>
              
                <h1 className="text-3xl font-bold text-center "
                >Login</h1>
              
              <input type="text"
                  placeholder="nome"
                  className="bg-black p-2 font-bold w-full my-2"
                  value={username}
                  onChange={e => setUsername(e.target.value)} />
              
              <input type="password"
                  placeholder="senha"
                  className="bg-black p-2 font-bold w-full mb-2"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <button className=" bg-gradient-to-r from-indigo-700 to-fuchsia-700 rounded-lg py-2 font-2xl w-[160px]"
                >Entrar</button>
          </form>
          
    </div>
  )
}
export default Login