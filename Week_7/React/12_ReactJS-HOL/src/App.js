import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Reusable component for flight data
  const FlightDetails = () => (
    <div style={{ marginTop: '20px' }}>
      <h3>Available Flights</h3>
      <ul>
        <li>✈ Chennai → Delhi | 10:00 AM | ₹4500</li>
        <li>✈ Mumbai → Bangalore | 2:00 PM | ₹4000</li>
        <li>✈ Hyderabad → Kolkata | 6:30 PM | ₹4800</li>
      </ul>
    </div>
  );

  // View for guest users
  const GuestPage = () => (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book your flight tickets.</p>
      <FlightDetails />
    </div>
  );

  // View for logged-in users
  const UserPage = () => (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flight tickets.</p>
      <FlightDetails />
      <button style={{ marginTop: '10px' }}>Book Now</button>
    </div>
  );

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>Ticket Booking App</h1>

      {/* Conditional rendering based on login state */}
      {isLoggedIn ? <UserPage /> : <GuestPage />}

      {/* Login/Logout buttons */}
      <div style={{ marginTop: '30px' }}>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
}

export default App;
