import React, { useState } from 'react';

function PostcodeChecker() {
  const [pincode, setPincode] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);
  const [error, setError] = useState('');

  const handleCheckPincode = async () => {
    if (!pincode) {
      setError("Please enter a pincode.");
      setLocationInfo(null);
      return;
    }

    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();

      if (data[0].Status === "Success") {
        const postOffice = data[0].PostOffice[0];
        setLocationInfo({
          name: postOffice.Name,
          district: postOffice.District,
          state: postOffice.State,
          region: postOffice.Region,
          country: postOffice.Country,
        });
        setError('');
      } else {
        setError("❌ Invalid or unserviceable pincode.");
        setLocationInfo(null);
      }
    } catch (err) {
      console.error("Error fetching pincode data:", err);
      setError("Something went wrong. Try again later.");
      setLocationInfo(null);
    }
  };

  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="form-control form-control-dark me-2"
        placeholder="Enter Pincode"
        aria-label="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        style={{ width: '140px' }}
      />
      <button className="btn btn-outline-light me-3" onClick={handleCheckPincode}>
        Check
      </button>

      {/* Output below input (optional for navbar use) */}
      {(locationInfo || error) && (
        <div className="bg-light text-center p-1 rounded mt-2 w-100">
          {error && <span className="text-danger small">{error}</span>}
          {locationInfo && (
            <div className="text-dark small">
              <strong>{locationInfo.name}</strong>, {locationInfo.district}, {locationInfo.state}, {locationInfo.region}, {locationInfo.country}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PostcodeChecker;
