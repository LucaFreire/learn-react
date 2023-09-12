import './App.css';
import { Route, Routes } from 'react-router-dom';

import Click from './Pages/Click';
import Calculator from './Pages/Calculator';
import Counter from './Pages/Counter';
import ToDoList from './Pages/ToDoList';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';
import Coffe from './Pages/Coffee';
import MusicAPI from './Pages/MusicAPI';
import Countries from './Pages/Countries';
import Register from './Pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './Pages/Login';
import Denied from './Pages/Denied';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='' element={
          <ProtectedRoute
            Denied={<Denied />}
            Target={<NavBar />} />
        }>
          <Route path='MusicAPI' element={<MusicAPI />} />
          <Route path='Click' element={<Click />} />
          <Route path='Calculator' element={<Calculator />} />
          <Route path='Counter' element={<Counter />} />
          <Route path='ToDoList' element={<ToDoList />} />
          <Route path='Coffee' element={<Coffe />} />
          <Route path='CountriesAPI' element={<Countries />} />
          <Route path='Register' element={<Register />} />
          <Route path='home' element={<HomePage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </>
  );
}

export default App;