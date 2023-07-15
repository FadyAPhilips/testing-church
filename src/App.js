import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
