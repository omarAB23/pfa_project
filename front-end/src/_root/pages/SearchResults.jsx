import Post from "@/components/search-component/Post";
import axios from "axios";
import { useState, useEffect } from "react";
const SearchResults = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/post/getAllPosts")
      .then((response) => {
        setData(response.data.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
        {data.map((post, index) => (
          <Post key={index} post={post} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
