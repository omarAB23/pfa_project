import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "@/components/search-component/Post";

const SearchWithFilter = () => {
  const [data, setData] = useState([]);
  //retrieve state data from localStorage
  const searchData = JSON.parse(localStorage.getItem("searchData")) || {};

  const { Pdepart, Parrivee, Pdate, Pguests } = searchData;

  console.log("Departure:", Pdepart);
  console.log("Arrival:", Parrivee);
  console.log("Date:", Pdate);
  console.log("Guests:", Pguests);

  useEffect(() => {
    axios
      .get("http://localhost:3001/post/getAllPosts")
      .then((response) => setData(response.data.data))
      //.then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  const date1 = new Date(Pdate);

  const filteredData = data.filter((post) => {
    const postDate = new Date(post.date);
    return (
      post.depart.toLowerCase().includes(Pdepart.toLowerCase()) &&
      post.arrivee.toLowerCase().includes(Parrivee.toLowerCase()) &&
      post.place == Pguests &&
      postDate.toISOString().substring(0, 10) ==
        date1.toISOString().substring(0, 10)
    );
  });

  console.log(filteredData);
  return (
    <div>
      {filteredData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default SearchWithFilter;
