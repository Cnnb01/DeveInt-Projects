import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login.js";
import Adminpage from "./components/Adminpage.js";
import Payment from "./components/Payment.js";
import "./index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {

  return (
    <Router>
    <div className="App">
    <NavBar/>

    <Routes>
      <Route exact path = "/" element={<Login />}/>
      <Route exact path = "/home" element={<HomePage />}/>
      <Route exact path = "/admin" element={<ProtectedRoute><Adminpage/><ProtectedRoute/></ProtectedRoute>}/>
      <Route exact path = "/pay" element={<Payment/>}/>
    </Routes>

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
