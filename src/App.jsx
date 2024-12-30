import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import ServicesPage from './pages/ServicesPage';
    import LoginPage from './pages/LoginPage';
    import RegisterPage from './pages/RegisterPage';
    import ClientRegisterPage from './pages/ClientRegisterPage';
    import ProviderRegisterPage from './pages/ProviderRegisterPage';
    import ProfilePage from './pages/ProfilePage';
    import Navbar from './components/Navbar';

    function App() {
      return (
        <Router>
          <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/register/client" element={<ClientRegisterPage />} />
                <Route path="/register/provider" element={<ProviderRegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </div>
          </div>
        </Router>
      );
    }

    export default App;
