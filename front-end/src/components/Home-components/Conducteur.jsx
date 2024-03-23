import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Conducteur = (props) => {
<<<<<<< Updated upstream
  const { isLoggedIn } = props;

=======
  const isLoggedIn = props.iisLoggedIn;
>>>>>>> Stashed changes
  const checkUser = () => {
    if (!isLoggedIn) {
      alert("you need to sign-in");
    }
  };
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  return (
    <section className="conducteur h-80 flex flex-col items-center pt-16 bg-gray-800 text-white py-10 h-422">
      <div className="conducteur-wrapper flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-0">Vous avez une voiture ?</h1>
        <p className="text-lg text-center font-normal mt-4">
          Faites des économies sur vos déplacements, publiez une annonce de
          covoiturage !
        </p>
        <div className="button-wrapper flex items-center justify-center mt-6">
          {!isLoggedIn ? (
            <Link
              onClick={checkUser}
              className="bg-blue-500 text-white font-bold pl-5 pr-3 py-3 h-12"
            >
              Proposer des places
            </Link>
          ) : (
            <Link
              to="publish-route"
              className="bg-blue-500 text-white font-bold pl-5 pr-3 py-3 h-12"
            >
              Proposer des places
            </Link>
          )}
          <button className="plus bg-blue-600 px-3 h-12	 py-3.5 ">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
              >
                <path
                  d="M22.2917 11.9554H13.0417V20.7054H9.95834V11.9554H0.708336V9.0387H9.95834V0.288696H13.0417V9.0387H22.2917V11.9554Z"
                  fill="white"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

Conducteur.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Conducteur;
