
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Textform />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
