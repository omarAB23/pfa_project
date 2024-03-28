import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../search-component/Post";

const Mesposts = () => {
  const [nameFromToken , setNameFromToken] = useState('')
  const [idFromToken , setIdFromToken] = useState('')

  const [myPosts, setMyPosts]= useState([])

    

  axios.get('http://localhost:3001/auth/gettoken')
  .then(respose=>setNameFromToken(respose.data.token.name))
  .catch(error=>console.log(error))

  axios.post('http://localhost:3001/auth/getuser',{nameFromToken})
  .then(response=>setIdFromToken(response.data.currentUser._id))
  .catch(error=>console.log(error))

  useEffect(()=>{
    axios.get('http://localhost:3001/post/getUserPost' , {idFromToken} )
    .then(response => setMyPosts(response.data.data))
    .catch(error=>console.log(error))


  },[idFromToken])



  

  return (
    <div>
      {myPosts.map((post , i)=>{
        return <Post key={i} post={post} />
      } )}
    </div>
  )
}

export default Mesposts