import { useEffect, useState } from "react"
import HomePost from "../components/HomePost"

function Home() {
   const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])
  
  return (
      <div>
      {posts.map(post => (
        <HomePost {...post} />
         ))}
    </div>
  )
}
export default Home