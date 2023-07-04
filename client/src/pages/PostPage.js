import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { UserContext } from '../components/UserContext'


function PostPage() {
    const {id} = useParams()
    const [postInfo, setPostInfo] = useState(null)
    const {userInfo} = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                setPostInfo(postInfo)
            })
        })
    }, [])

    if (!postInfo) return '';

  return (
      <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center text-4xl my-3">{postInfo.title}</h1>
      {userInfo.id === postInfo.author._id && (
        <div className="w-[180px]  bg-lime-800 text-white p-4 rounded-md my-2 font-extrabold">
          <Link className="" to={`/edit/${postInfo._id}`}>Editar este post</Link>
        </div>
          )}
          <div className="">
              
          <div className="w-[600px] h-[600px]">
        <img className="object-cover" src={`http://localhost:4000/${postInfo.cover}`} alt="post pic" />      
          </div>
          </div>

          <div className="flex flex-col max-w-4xl">
        <div className="text-center font-bold py-2">By @{postInfo.author.username}</div>
          <div className=" text-lg" dangerouslySetInnerHTML={{__html:postInfo.content}} />
          </div>
    </div>
  )
}
export default PostPage