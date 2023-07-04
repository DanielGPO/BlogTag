import { Link } from "react-router-dom"
import {formatISO9075} from "date-fns";
function HomePost({title,_id, summary, cover, createdAt}) {
 
 
    return (
      <div>
          
          <div className="flex flex-col justify-center items-center">
               <div className="max-w-2xl">
                  <div className="flex flex-row py-10 min-w-full">
                      <div className=" w-[320px] h-[180px]">
                        <Link to={`/post/${_id}`}>
                              <img className="w-full h-full object-cover"
                                  src={'http://localhost:4000/'+cover}
                                  alt="" />
                          </Link>   
                        </div>
                        
                <div className="m-2 w-[400px]">
                         <Link to={`/post/${_id}`}>
                              <h1 className="font-bold py-1 hover:underline text-2xl ">
                                {title}
                              </h1>
                                  
                  <time className="text-sm py-1 flex flex-row"
                  >{formatISO9075(new Date(createdAt))}
                  </time>
                     
                              <p className="hover:underline">
                                {summary}
                                </p>
                          </Link>
                  </div>
              </div>

                  
              </div>
              
          </div>
          
    </div>
  )
}
export default HomePost