import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import Adminpage from "./components/Adminpage.js";
import Payment from "./components/Payment.js";
import "./index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchFrames } from "./api.js";

function App() {
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    const getFrames = async () => {
        try {
            const data = await fetchFrames();
            setFrames(data);
        } catch (error) {
            console.error("Failed to fetch frames", error);
        }
    };
    getFrames();
}, []); // Dependency array is fine

  return (
    <Router>
    <div className="App">
    <NavBar/>

    <Routes>
      <Route exact path = "/" element={<Login />}/>
      <Route exact path = "/home" element={<HomePage />}/>
      <Route exact path = "/admin" element={<Adminpage/>}/>
      <Route exact path = "/pay" element={<Payment/>}/>
    </Routes>

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
