import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ParentTab from "./components/customTabs/ParentTab";
import Pagination from "./components/Paginations/Pagination";
import SimpleForm from "./components/form-validation/SimpleForm";
import RegistrationForm from "./components/form-validation/RegistrationForm";
import LikeButton from "./components/likeButtons/LikeButton";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import CountDown from "./components/countDownTimer/CountDown";
import FAQComp from "./components/faq-component/FAQComp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom-tabs" element={<ParentTab />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/reactform" element={<SimpleForm />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/likebuttons"  element={<LikeButton />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/countdowntimer" element={<CountDown /> } />
        <Route path="/faqcomponent" element={<FAQComp /> } />
      </Routes>
    </Router>
  );
}

export default App;
