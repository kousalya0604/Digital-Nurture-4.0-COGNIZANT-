import React from 'react';

function App() {
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    image: 'https://png.pngtree.com/background/20230527/original/pngtree-modern-office-with-black-walls-picture-image_2764214.jpg'
  };

  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#2c3e50'
  };

  const imageStyle = {
    width: '400px',
    height: '250px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    marginBottom: '25px'
  };

  const detailStyle = {
    fontSize: '20px',
    color: '#34495e',
    lineHeight: '1.6'
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <div style={headingStyle}>Office Space at Affordable Range</div>
      <img src={office.image} alt="Office Space" style={imageStyle} />
      <div style={detailStyle}>
        <p><strong>Name:</strong> {office.name}</p>
        <p><span style={rentStyle}>Rent: Rs. {office.rent}</span></p>
        <p><strong>Address:</strong> {office.address}</p>
      </div>
    </div>
  );
}

export default App;
