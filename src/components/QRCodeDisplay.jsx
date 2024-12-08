import React from 'react';
import QRCode from 'react-qr-code';
import './QRCodeDisplay.css'; // Import CSS file for styling

const QRCodeDisplay = () => {
  // Retrieve the QR data from localStorage
  const qrData = localStorage.getItem('qrData');

  return (
    <div className="qr-container">
      <h1 className="qr-title">Your QR Code</h1>
      {qrData ? (
        <QRCode value={qrData} size={200} />
      ) : (
        <p className="qr-error">Error: No QR data found. Please generate the QR code again.</p>
      )}
    </div>
  );
};

export default QRCodeDisplay;
