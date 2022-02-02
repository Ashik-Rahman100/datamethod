import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Login from "./components/login/Login/Login";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="about" element = { <About/> } />
             <Route path="pricing" element={<Pricing />} />
             <Route path="login" element={<Login />} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



