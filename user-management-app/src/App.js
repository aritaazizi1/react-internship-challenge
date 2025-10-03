import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
