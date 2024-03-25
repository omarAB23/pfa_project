import FilterForm from "@/components/search-component/Filter";
import Post from "@/components/search-component/Post";
import axios from "axios";
import { useState, useEffect } from "react";
const SearchResults = () => {
   const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/post/getAllPosts')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error));
  }, []); // Empty dependency array to ensure the effect runs only once


  return (
    <div className="flex xl:items-start items-center flex-col xl:flex-row position: absolute; ">
      <FilterForm className="position: fixed;" />
      <div className="flex-1 mx-10">
        {data.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
