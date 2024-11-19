import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 style={{ marginTop: "50px" }}>Welcome to My React Project Hub</h1>
      <Link to="/tabs">
        <button>React Custom Tabs</button>
      </Link>
    </div>
  );
};

export default Home;
