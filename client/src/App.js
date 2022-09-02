import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      {/* <Route path="/my-mocks" element /> */}
      <Route path="/home" element={<Header />} />
    </Routes>

  );
}

export default App;
