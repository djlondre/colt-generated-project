import React, { useState, useContext } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { AuthContext } from '../contexts/AuthContext';

    function LoginPage() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { login } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(email, password);
          navigate('/profile');
        } catch (error) {
          console.error('Login failed', error);
          // Handle login error (e.g., display error message)
        }
      };

      return (
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Log In
              </button>
              <Link to="/register" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
                Register
              </Link>
            </div>
          </form>
        </div>
      );
    }

    export default LoginPage;
