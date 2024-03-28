import axios from "axios"
import { useState } from "react"

const DeleteAccount = () => {
  const [nameFromToken , setNameFromToken] = useState('')
  const [idFromToken , setIdFromToken] = useState('')


    

  axios.get('http://localhost:3001/auth/gettoken')
  .then(respose=>setNameFromToken(respose.data.token.name))
  .catch(error=>console.log(error))

  axios.post('http://localhost:3001/auth/getuser',{nameFromToken})
  .then(response=>setIdFromToken(response.data.currentUser._id))
  .catch(error=>console.log(error))

  return (
    <div>DeleteAccount</div>
  )
}

export default DeleteAccount