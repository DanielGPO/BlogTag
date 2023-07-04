import { useState } from "react"


function Register() {
    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    async function registration(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' }
        });
        if (response.status === 200) {
            alert('Registro bem sucedido')
        } else {
            alert('Registro Falhou, usuário ou senha já existem')
        }

    }
    
  return (
      <div className="flex items-center justify-center">
          
          <form className="flex flex-col my-10 rounded-lg h-[300px] w-[400px] items-center p-2 bg-slate-800 text-white"
              onSubmit={registration}>
              
              <h1 className="text-3xl font-bold text-center ">Registrar</h1>
              
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
              <button className=" bg-gradient-to-r from-indigo-700 to-fuchsia-700 rounded-lg py-2 font-2xl w-[160px]">Registrar</button>
          </form>
          
    </div>
  )
}
export default Register