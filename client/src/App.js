import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Mocks from './components/Mocks/Mocks';
import NewMock from './components/NewMock/NewMock';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/my-mocks" element={<Mocks />} />
      <Route path="/home" element={<Home />} />
      <Route path='/mock/new' element={<NewMock />} />
    </Routes>

  );
}

export default App;
