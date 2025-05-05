import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
