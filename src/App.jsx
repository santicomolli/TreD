import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import './App.css'

function App() {



  return (
      <BrowserRouter>    
          <Navbar/>
          {/* <Carousel/> */}
          <Footer/>
      </BrowserRouter>
    )
}

export default App
