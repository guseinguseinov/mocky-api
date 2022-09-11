import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import EditMock from './components/EditMock';
import Mocks from './components/Mocks/';
import NewMock from './components/NewMock/';
import DeleteMock from './components/DeleteMock';
import './styles.css';


function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/home" />} />
      <Route path="/my-mocks" element={<Mocks />} />
      <Route path="/mock/:id" element={<EditMock />} />
      <Route path="/home" element={<Home />} />
      <Route path='/mock/new' element={<NewMock />} />
      <Route path='/mock/delete/:id' element={<DeleteMock />} />
    </Routes>

  );
}

export default App;
