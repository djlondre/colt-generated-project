import React, { useContext } from 'react';
    import { Link } from 'react-router-dom';
    import { AuthContext } from '../contexts/AuthContext';

    function Navbar() {
      const { isAuthenticated, logout } = useContext(AuthContext);

      return (
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">HelpMePro</Link>
            <div className="flex space-x-4">
              <Link to="/services" className="hover:text-indigo-500">Services</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="hover:text-indigo-500">Profile</Link>
                  <button onClick={logout} className="hover:text-indigo-500">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hover:text-indigo-500">Login</Link>
                  <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</Link>
                </>
              )}
            </div>
          </div>
        </nav>
      );
    }

    export default Navbar;
