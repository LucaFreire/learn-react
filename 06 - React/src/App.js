import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import TextOnChange from './components/TextOnChange';
import Click from './components/Click';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <>
        <Routes>
          <Route path='/TextOnChange' element={<TextOnChange />} />
          <Route path='/Click' element={<Click />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/ToDoList' element={<ToDoList />} />
          {/* <Route path='*' element={<ToDoList />} /> not found*/}
        </Routes>
    </>
  );
}

export default App;