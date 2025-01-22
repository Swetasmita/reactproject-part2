import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 style={{ marginTop: "50px" }}>Welcome to My React Project Hub- II</h1>
      <Link to="/custom-tabs">
        <button>React Custom Tabs</button>
      </Link>
      <Link to="/pagination">
        <button>Pagination in React JS</button>
      </Link>
      <Link to="/reactform">
        <button>React Form Validation with Yup</button>
      </Link>
      <Link to="/registrationform">
        <button>Registration Form</button>
      </Link>
      <Link to="/likebuttons">
      <button>Like Buttons</button>
      </Link>
      <Link to="/tictactoe">
      <button>Tic-Tac-Toe Game</button>
      </Link>
      <Link to="/countdowntimer">
      <button>Countdown Timer</button>
      </Link>
      <Link to="/faqcomponent">
      <button>React FAQ Component</button>
      </Link>
      <Link to="/progressbar">
      <button>Progress Bar</button>
      </Link>
      <Link to="/todolist">
      <button>React Todo List</button>
      </Link>
    </div>
  );
};

export default Home;
