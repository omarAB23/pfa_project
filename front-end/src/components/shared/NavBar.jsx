import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

 

  

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
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">rechercher</a></li>
              <li><a href="#" className="text-white">ajouter un trajet</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              {!isLoggedIn ? (
                <Link className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800" to='/sign-in'>Get started</Link>
              ) : (
                <Link  className="text-white border-solid border border-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-gray-800" to='/sign-up'>Sign-out</Link>
              )}
            </ul>
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</a></li>
            <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">About</a></li>
            <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Services</a></li>
            <li><a href="#" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
