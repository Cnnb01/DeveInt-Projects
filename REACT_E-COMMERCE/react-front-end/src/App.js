import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import Adminpage from "./components/Adminpage.js";
import Payment from "./components/Payment.js";
import "./index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";
import React, { useState} from "react";

function App() {
  const [frames, setFrames] = useState([]); //to help update frontend state after deleting
  return (
    <Router>
    <div className="App">

    <Routes>
      <Route exact path = "/" element={<Login />}/>
      <Route exact path="/home" element={<><NavBar />  <HomePage frames={frames} /> <Footer/></>} />
      <Route path="/admin" element={<ProtectedRoute> <Adminpage /></ProtectedRoute> }/>
      <Route path="/frames/:frame_id" element={ <Payment setFrames={setFrames}/>} />
    </Routes>

    </div>
    </Router>
  );
}

export default App;
