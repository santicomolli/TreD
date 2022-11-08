import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {



  return (
      <BrowserRouter>    
          <Navbar/>
          <Footer/>
      </BrowserRouter>
    )
}

export default App
