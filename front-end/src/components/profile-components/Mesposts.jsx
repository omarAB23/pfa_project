import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../search-component/Post";

const Mesposts = () => {
  const [dataa, setData] = useState([]);
  const [error, setError] = useState(null);
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/gettoken")
      .then((response) => {
        setNameFromToken(response.data.token.name);
        console.log(response);
        console.log(nameFromToken);
        return axios.post("http://localhost:3001/auth/getuser", {
          nameFromToken: response.data.token.name,
        });
      })
      .then((response) => {
        console.log(response, "hahaha");
        const currentUser = response.data.currentUser;
        console.log(currentUser);
        console.log(currentUser._id);
        if (currentUser && currentUser._id) {
          setIdFromToken(currentUser._id);
          console.log(idFromToken);

          // Move the axios.post inside this block
          axios
            .get("http://localhost:3001/post/getUserPost", {
              id: currentUser._id,
            })
            .then((response) => {
              console.log(response);
              setData(response.data.data);
              console.log(dataa);
            })
            .catch((error) => {
              setError(error);
            });
        } else {
          throw new Error("User ID not found in response data");
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error:2 {error.message}</div>;
  }

  return (
    <div>
      {dataa.map((post, index) => (
        <div key={index}>
          <div className="h-60 flex my-11 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-full w-1/3 object-cover object-center transform scale-95"
              src="assets/wayp1.png"
              alt="Product Image"
            />
            <div className="p-4 w-2/3">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                {post.nomconducteur}
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                {post.depart}-{post.arrivee}, {post.date.substring(11, 16)} ,{" "}
                {post.place} personnes{" "}
              </p>
              <p className="mb-2 hidden sm:block text-base dark:text-gray-300 text-gray-700">
                Description : {post.desc.split(".")[0]}
              </p>
              <div className="flex pt-5 sm:pt-3 items-center">
                <p className="mr-2 text-base dark:text-gray-300 text-gray-700">
                  Review :
                </p>
                <img
                  className="w-5 text-yellow-500"
                  src="/assets/star.svg"
                  alt=""
                />
                <img
                  className="w-5 text-yellow-500"
                  src="/assets/star.svg"
                  alt=""
                />
                <img
                  className="w-5 text-yellow-500"
                  src="/assets/star.svg"
                  alt=""
                />
                <img
                  className="w-5 text-yellow-500"
                  src="/assets/star.svg"
                  alt=""
                />
                <img
                  className="w-5 text-yellow-500"
                  src="/assets/star.svg"
                  alt=""
                />
              </div>

              <div className="flex mt-9 sm:mt-3 items-center justify-between w-full">
                <div className="flex items-center">
                  <p className="mr-2 my-2 text-lg font-semibold text-gray-900 dark:text-white">
                    prix :
                  </p>
                  <p className="text-base my-2 font-medium text-gray-500 dark:text-gray-300">
                    {post.price}dt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mesposts;
