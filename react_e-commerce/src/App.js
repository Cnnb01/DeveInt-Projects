import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Adminpage from "./components/Adminpage";
import Payment from "./components/Payment";
import "./index.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>

    <Routes>
      <Route exact path = "/" element={<Login />}/>
    </Routes>
    <Routes>
      <Route exact path = "/home" element={<HomePage />}/>
    </Routes>
    <Routes>
      <Route exact path = "/admin" element={<Adminpage/>}/>
    </Routes>
    <Routes>
      <Route exact path = "/pay" element={<Payment/>}/>
    </Routes>

    <Footer/>
    </div>
    </Router>
  );
}

export default App;
