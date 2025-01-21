import React, { useState } from "react";
import "./progressbar.css";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  //Handle progressbar button
  const handleProgressClick = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };
  //Handle Reset Button
  const handleResetClick = () => {
    setProgress(0);
  };
  return (
    <div className="progressbar-container">
      <div className="progress-bar">
        <div
          className="progressbar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progressbar-lebel">{progress}%</div>
      <div className="progressbar-btn">
        <button onClick={handleProgressClick}>Progress</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default ProgressBar;
