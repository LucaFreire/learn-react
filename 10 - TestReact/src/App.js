import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>);
}

export default App;