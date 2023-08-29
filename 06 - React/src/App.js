import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import TextOnChange from './Pages/TextOnChange';
import Click from './Pages/Click';
import Calculator from './Pages/Calculator';
import Counter from './Pages/Counter';
import ToDoList from './Pages/ToDoList';
import NotFoundPage from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar';
import Coffe from './Pages/Coffee';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/TextOnChange' element={<TextOnChange />} />
        <Route path='/Click' element={<Click />} />
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/ToDoList' element={<ToDoList />} />
        <Route path='/Coffee' element={<Coffe />} />
      </Routes>
    </>
  );
}

export default App;