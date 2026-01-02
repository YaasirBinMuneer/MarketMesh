import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Trade from "./pages/Trade";
import Forecast from "./pages/Forecast";
import DeadStock from "./pages/DeadStock";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/dead-stock" element={<DeadStock />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
