import React from 'react';
import './css/Last.css';
import Navbar from './Navbar';

const Last = () => {
  const lastRides = JSON.parse(localStorage.getItem('lastRides')) || [];

  if (lastRides.length === 0) {
    return <div>No ride details available.</div>;
  }

  return (
    <>
    <Navbar/>
    <div className="last-rides-container">
      <h1>Your Ride History</h1>
      <div className="ride-history">
        {lastRides.map((ride, index) => (
          <div key={index} className="ride-card">
            <h2>{ride.type}</h2>
            <img src={ride.image} alt={ride.type} />
            <p>From: {ride.from}</p>
            <p>To: {ride.to}</p>
            <p>Distance: {ride.distance} km</p>
            <p>Price: Rs. {ride.price}</p>
            <p>Seats: {ride.seats}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Last;
