import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../search-component/Post";

const Mesposts = () => {
  const [dataa, setData] = useState([]);
  const [error, setError] = useState(null);
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch token
    axios
      .get("http://localhost:3001/auth/gettoken")
      .then((response) => {
        setNameFromToken(response.data.token.name);
        return response.data.token.name;
      })
      .then((nameFromToken) => {
        // Fetch user data using token
        return axios.post("http://localhost:3001/auth/getuser", {
          nameFromToken: nameFromToken,
        });
      })
      .then((response) => {
        console.log(response);
        const currentUser = response.data.currentUser;
        setIdFromToken(currentUser._id);
        console.log(idFromToken === currentUser._id);
        console.log(idFromToken);
        console.log(currentUser._id);
        console.log(typeof currentUser._id);
        console.log(typeof idFromToken);

        // Fetch user posts using user ID
        return axios.post("http://localhost:3001/post/getUserPost", {
          idFromToken,
        });
      })
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [idFromToken]); // Since idFromToken is not used in the initial fetch, dependency array is empty

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full h-full">
      {dataa && dataa.map((post, i) => <Post key={i} post={post} />)}
    </div>
  );
};

export default Mesposts;
