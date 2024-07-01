import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Add from "./components/Add";
//import Read from "./components/Read";
//import Users from "./components/Users";
//import Update from "./components/Update";
 import Home from "./Home";
 import Loginregister from "./Loginregister";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginregister" element={<Loginregister />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;