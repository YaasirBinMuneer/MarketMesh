import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Inventory from "./pages/Inventory";
import Landing from "./pages/Landing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
