import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ParentTab from "./components/customTabs/ParentTab";
import Pagination from "./components/Paginations/Pagination";
import SimpleForm from "./components/form-validation/SimpleForm";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-tabs" element={<ParentTab />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/reactform" element={<SimpleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
