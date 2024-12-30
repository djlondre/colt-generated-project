import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { registerUser } from '../lib/auth';

    function ClientRegisterPage() {
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await registerUser('client', firstName, lastName, email, password);
          navigate('/login'); // Redirect to login after successful registration
        } catch (error) {
          console.error('Registration failed', error);
          // Handle registration error (e.g., display error message)
        }
      };

      return (
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Register as Client</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      );
    }

    export default ClientRegisterPage;
