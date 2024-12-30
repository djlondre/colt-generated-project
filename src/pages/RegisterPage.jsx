import React from 'react';
    import { Link } from 'react-router-dom';

    function RegisterPage() {
      return (
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
          <p className="text-gray-700 mb-4">Choose your account type:</p>
          <div className="flex space-x-4">
            <Link to="/register/client" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register as Client
            </Link>
            <Link to="/register/provider" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register as Provider
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      );
    }

    export default RegisterPage;
