import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeDisplay from './components/QRCodeDisplay';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeGenerator />} />
        <Route path="/qrcode" element={<QRCodeDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
