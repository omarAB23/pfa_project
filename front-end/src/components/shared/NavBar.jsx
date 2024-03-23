import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify").then((res) => {
      if (res.data.status) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogOut = () => {
    console.log("Logging out...");
    axios
      .get("http://localhost:3001/auth/logout")
      .then((res) => {
        if (res.data.status) {
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error("Logout error:", err);
      });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const checkUser = () => {
    if (!isLoggedIn) {
      alert("you need to sign-in");
    }
  };

  return (
    <header className="bg-gray-800 mb-0">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-white font-bold text-xl">
            <img src="/assets/logo.svg" alt="" />
            <a href="#">LinkRide</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {!isLoggedIn ? (
                <>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                  <Link onClick={checkUser} className="text-white">
                    Rechercher
                  </Link>
                  <Link onClick={checkUser} className="text-white">
                    Ajouter un trajet
                  </Link>
                  <Link className="text-white">Contact</Link>
                </>
              ) : (
                <>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                  <Link to="/search-result" className="text-white">
                    Rechercher
                  </Link>
                  <Link to="publish-route" className="text-white">
                    Ajouter un trajet
                  </Link>
                  <Link className="text-white">Contact</Link>
                </>
              )}

              {!isLoggedIn ? (
                <Link
                  className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800"
                  to="/sign-up"
                >
                  Get started
                </Link>
              ) : (
                <Link
                  onClick={handleLogOut}
                  className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800"
                  to="/"
                >
                  Sign-out
                </Link>
              )}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none    mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden pb-4  ">
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2  text-center rounded">
                  {!isLoggedIn ? (
                    <Link
                      className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800"
                      to="/sign-up"
                    >
                      Get started
                    </Link>
                  ) : (
                    <Link
                      onClick={handleLogOut}
                      className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800"
                      to="/"
                    >
                      Sign-out
                    </Link>
                  )}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
