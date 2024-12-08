import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import './QRCodeDisplay.css'; // Import CSS file for styling

const QRCodeDisplay = () => {
  const qrRef = useRef(null); // Reference to the QR code element

  const handleDownload = () => {
    if (qrRef.current) {
      const svg = qrRef.current.querySelector('svg'); // Get the SVG element
      const xml = new XMLSerializer().serializeToString(svg); // Serialize the SVG to a string
      const svgBlob = new Blob([xml], { type: 'image/svg+xml' }); // Create a Blob object
      const url = URL.createObjectURL(svgBlob); // Create a URL for the Blob
      const link = document.createElement('a'); // Create a link element
      link.href = url; // Set the URL as the link's href
      link.download = 'qr-code.svg'; // Set the download filename
      link.click(); // Trigger the download
      URL.revokeObjectURL(url); // Clean up the object URL
    }
  };

  // Retrieve the QR data from localStorage
  const qrData = localStorage.getItem('qrData');

  return (
    <div className="qr-container">
      <h1 className="qr-title">Your QR Code</h1>
      {qrData ? (
        <div ref={qrRef}>
          <QRCode value={qrData} size={200} />
        </div>
      ) : (
        <p className="qr-error">Error: No QR data found. Please generate the QR code again.</p>
      )}
      {qrData && (
        <button className="download-btn" onClick={handleDownload}>Download QR Code</button>
      )}
    </div>
  );
};

export default QRCodeDisplay;
