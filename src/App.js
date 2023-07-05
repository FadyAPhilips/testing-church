import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import About from './routes/About';
import "./App.css"

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

//test

export default App;
