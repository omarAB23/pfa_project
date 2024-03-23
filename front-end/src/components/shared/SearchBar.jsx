import { useState } from "react";
import "./searchForm.css";
import searchImage from "../../../public/assets/211817_search_strong_icon.png";
const SearchForm = (props) => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const isLoggedIn = props.isLoggedIn;

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("you need to sign-in");
    }
    // Here you can perform the search or any other action with the form data
    console.log("Location:", location);
    console.log("Check In:", checkIn);
    console.log("Check Out:", checkOut);
    console.log("Guests:", guests);
  };

  return (
    <form className="bar font-mono text-xs" onSubmit={handleSubmit}>
      <div className="location">
        <p>Location</p>
        <input
          type="text"
          placeholder="ville de depart"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="check-in">
        <p>Location</p>
        <input
          type="text"
          placeholder="ville d'arrive"
          value={checkIn}
          onChange={handleCheckInChange}
        />
      </div>
      <div className="check-out">
        <p>Dates</p>
        <input
          type="text"
          placeholder="ajouter dates"
          value={checkOut}
          onChange={handleCheckOutChange}
        />
      </div>
      <div className="guests">
        <p>Passager</p>
        <input
          type="text"
          placeholder="nombre de passager"
          value={guests}
          onChange={handleGuestsChange}
        />
      </div>
      <button className="px-2  rounded-full  " type="submit">
        <img className="search-icon 	" src={searchImage} alt="" />
      </button>
    </form>
  );
};

export default SearchForm;
