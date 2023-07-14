import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About';
import Gallery from './routes/Gallery';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}


//Testing GIT

export default App;
