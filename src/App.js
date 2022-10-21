import React, { useEffect, useState } from "react";
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ScaleLoader from "react-spinners/ScaleLoader";
import Cursor from './Cursor';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <BrowserRouter>
      <Cursor />
      {loading ?
        <div className="preloaderr">
          <ScaleLoader color={'#f87765'} loading={loading} height={100} margin={10} />
        </div> :
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
