import PropTypes from "prop-types";
import SearchBar from "../shared/SearchBar";

function CarpoolSearch(props) {
  const { isLoggedIn } = props;

  return (
    <section
      className="search flex flex-col items-center bg-cover h-96  bg-no-repeat"
      style={{ backgroundImage: "url('assets/hero 1.png')" }}
    >
      <div className="tittle py-10 text-white font-bold flex flex-col items-center">
        <h2 className="text-2xl">TROUVEZ</h2>
        <h1 className="text-3xl">UN COVOITURAGE</h1>
        <p className="text-lg">
          Covoiturez sur tous vos types de trajets sans aucune commission.
        </p>
      </div>
      <SearchBar isLoggedIn={isLoggedIn} />
    </section>
  );
}

CarpoolSearch.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default CarpoolSearch;
