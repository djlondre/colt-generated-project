import React, { useContext } from 'react';
    import { AuthContext } from '../contexts/AuthContext';

    function ProfilePage() {
      const { user } = useContext(AuthContext);

      if (!user) {
        return <div>Loading...</div>; // Or redirect to login
      }

      return (
        <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Profile</h1>
          <div>
            <p><strong className="font-semibold">First Name:</strong> {user.firstName}</p>
            <p><strong className="font-semibold">Last Name:</strong> {user.lastName}</p>
            <p><strong className="font-semibold">Email:</strong> {user.email}</p>
            <p><strong className="font-semibold">Account Type:</strong> {user.userType}</p>
            {user.userType === 'provider' && (
              <>
                <p><strong className="font-semibold">Skills:</strong> {user.skills}</p>
                <p><strong className="font-semibold">Hourly Rate:</strong> ${user.hourlyRate}</p>
              </>
            )}
          </div>
        </div>
      );
    }

    export default ProfilePage;
