import { useState, useEffect } from "react";
import axios from "axios";
import FilterForm from "@/components/search-component/FilterForm";
import Post from "@/components/search-component/Post";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({}); // State to store filters
  const [filteredData, setFilteredData] = useState([]); // State to store filtered data
  const [applyFilters, setApplyFilters] = useState(false); // State to trigger filter application

  useEffect(() => {
    axios
      .get("http://localhost:3001/post/getAllPosts")
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data); // Initialize filteredData with all data
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  useEffect(() => {
    // Apply filters when applyFilters state is true
    if (applyFilters) {
      const filteredPosts = data.filter((post) => {
        const price = Number(filters.price);
        return (
          post.depart.includes(filters.departure) &&
          post.arrivee.includes(filters.arrival) &&
          post.place >= filters.Nombre_de_place &&
          post.price <= price
        );
      });

      setFilteredData(filteredPosts);
      setApplyFilters(false); // Reset applyFilters state after applying filters
    }
  }, [applyFilters, filters, data]);
  console.log(filters);

  return (
    <div className="flex xl:items-start items-center flex-col xl:flex-row position: absolute; ">
      <FilterForm
        filters={filters}
        setFilters={setFilters}
        setApplyFilters={setApplyFilters}
      />
      <div className="flex-1 mx-10">
        {Object.keys(filters).length === 0
          ? // Display all data if no filters are applied
            data.map((post, index) => <Post key={index} post={post} />)
          : // Display filtered data if filters are applied
            filteredData.map((post, index) => <Post key={index} post={post} />)}
      </div>
    </div>
  );
};

export default SearchResults;
