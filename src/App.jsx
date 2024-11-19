import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ParentTab from "./components/custom-tabs/parentTab";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element= {<ParentTab />} />
      </Routes>
    </Router>
  );
}

export default App;
