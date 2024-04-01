import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Post = (props) => {
  const { post, onClick } = props;

  // Check if the date has expired
  const isExpired = new Date(post.date) < new Date();

  const handleClick = () => {
    const clickedPost = {
      _id: post._id,
      nomconducteur: post.nomconducteur,
      idconducteur: post.idconducteur,
      depart: post.depart,
      arrivee: post.arrivee,
      date: post.date,
      desc: post.desc,
      price: post.price,
      place: post.place,
      firstline: post.desc.split("\n")[0],
      contact: post.contact,
    };

    sessionStorage.setItem("clickedPost", JSON.stringify(clickedPost));

    /* sessionStorage.setItem(
      "clickedPost",

      clickedPost
    );
    onClick(); // Call the onClick callback to handle any additional actions */
  };

  return (
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
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
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
          {isExpired ? (
            <button
              className="bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
              disabled
            >
              Expired
            </button>
          ) : (
            <Link
              to="/more-info"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleClick}
            >
              Savoir plus
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    depart: PropTypes.string,
    nomconducteur: PropTypes.string,
    idconducteur: PropTypes.string,
    arrivee: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
    contact: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.string,
    place: PropTypes.number,
  }),
  onClick: PropTypes.func.isRequired,
};

export default Post;
