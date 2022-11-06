import "./App.css";
import LiveSearch from "./components/LiveSearch/LiveSearch";
import ScrollLoad from "./components/ScrollLoad/ScrollLoad";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LiveSearch />} />
          <Route path="/scroll" element={<ScrollLoad />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
