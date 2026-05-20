import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
