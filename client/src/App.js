import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      {/* <Route path="/my-mocks" element /> */}
      <Route path="/home" element={<Home />} />
    </Routes>

  );
}

export default App;
