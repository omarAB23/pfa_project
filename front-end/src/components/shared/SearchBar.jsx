import React, { useState } from "react";
import "./searchForm.css";
import searchImage from "../../../public/assets/211817_search_strong_icon.png";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = (props) => {
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const { isLoggedIn } = props;

  const handledepartChange = (e) => {
    setDepart(e.target.value);
  };

  const handlearriveeChange = (e) => {
    setArrivee(e.target.value);
  };

  const handledateChange = (e) => {
    setDate(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };
  const handleNoDate = () => {
    // Check if any of the form fields are empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast.error("You have to log in", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (!depart || !arrivee || !date || !guests) {
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Save state data to localStorage
    localStorage.setItem(
      "searchData",
      JSON.stringify({
        Pdepart: depart,
        Parrivee: arrivee,
        Pdate: date,
        Pguests: guests,
      })
    );

    // Navigate to SearchWithFilter component
    window.location.href = "/searchWithFilter";
  };

  return (
    <form className="bar" onSubmit={handleSubmit}>
      <div className="depart">
        <p>Depart</p>
        <input
          type="text"
          placeholder="Ville de départ"
          value={depart}
          onChange={handledepartChange}
        />
      </div>
      <div className="check-in">
        <p>Arrivée</p>
        <input
          type="text"
          placeholder="Ville d'arrivée"
          value={arrivee}
          onChange={handlearriveeChange}
        />
      </div>
      <div className="check-out">
        <p>Dates</p>
        <input
          type="datetime-local"
          placeholder="Ajouter des dates"
          value={date}
          onChange={handledateChange}
        />
      </div>
      <div className="guests">
        <p>Passagers</p>
        <input
          type="text"
          placeholder="Nombre de passagers"
          value={guests}
          onChange={handleGuestsChange}
        />
      </div>

      <button
        className="px-2 py-3 rounded-full"
        onClick={handleNoDate}
        type="submit"
      >
        <img
          className="search-icon"
          onClick={handleNoDate}
          src={searchImage}
          alt=""
        />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default SearchBar;
