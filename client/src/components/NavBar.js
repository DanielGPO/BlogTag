import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext, useEffect } from "react"

function NavBar() {

  const { setUserInfo, userInfo } = useContext(UserContext)
  const username = userInfo?.username;

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })
  })

  function loggout() {
    fetch('http://localhost:4000/loggout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  return (
    <header className="flex flex-row justify-around items-center p-4 bg-gray-100">
      <div>
        <Link to={'/'}>
            <h1 className="text-xl font-mono">BLOGTAg</h1>
        </Link>
        </div>

          
      <div className="items-center flex">
        {username ?
          <>
              <Link  className="mx-6 font-bold" to='/create'>Criar Post</Link>
              <button className="mx-6 font-bold"  onClick={loggout}>Sair</button>
          </>
        : 
        
        <>
            <Link className="mx-6 font-bold" to="/login">Login</Link>
           <Link className="mx-6 font-bold" to="/register">Register</Link>
          </>
        }
        </div>
    </header>
  )
}
export default NavBar