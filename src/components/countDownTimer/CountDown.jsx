import React, { useEffect, useState } from "react";
import "./countdown.css";

const CountDown = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timerId, setTimerId] = useState(0);

  //Reset function
  const handleReset = () => {
    setIsStart(false);
    // resetTimer();  
    setHours("");
    setMinutes("");
    setSeconds("");
    clearInterval(timerId);
  };

  //Pause Function
  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId); //stop toyr timer
  };
  //Resume function
  const handleResume = () => {
    setIsPaused(false);
    //Start again timer, where it has paused
    runTimer(seconds, minutes, hours);
  };

  //Input values for Timer
  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    const value = parseInt(e.target.value) || 0;

    const id = e.target.id;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };
  //console.log(hours, minutes, seconds);

  //Start timer function restricts the negative, empty or zero values
  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds < 0 || (hours === 0 && minutes === 0 && seconds === 0)
      || (hours === "" && minutes === "" && seconds === "")) {
      alert("Invalid input values");
      return;
    } else {
      setIsStart(true);
    }
  };
  //Run Timer logic for UseEffect
  const runTimer = () => {
    // Stop the timer if all values reach 0
    if (hours === 0 && minutes === 0 && seconds === 0) {
      handleReset();
      alert("Timer is finished");
    }
    // Decrement seconds, then adjust minutes and hours if needed
    if (seconds > 0) {
      setSeconds((s) => s - 1);
    } else if (seconds === 0 && minutes > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (minutes === 0 && hours > 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

  };
  //Use UseEffect to track hours, minutes or seconds
  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer();
      }, 1000);
      setTimerId(tid);
    }
    // Cleanup function to clear the interval
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <div className="timer-container">
      <h2>Countdown Timer</h2>
      <div className="input-box">
        <input id="hours" placeholder="HH" value={hours} onChange={handleInput} />
        <input id="minutes" placeholder="MM" value={minutes} onChange={handleInput} />
        <input id="seconds" placeholder="SS" value={seconds} onChange={handleInput} />
      </div>
      <button className="timer-button" onClick={handleStart}>Start</button>

      {isStart && (
        <div className="timer-display">
          <div className="timer-box">
            {/* When mins, secs, hrs becomes one digits 9, 8, 7.. , they will trail by 0 */}
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>

          <div className="action-box">
            {/* When timer starts, show pause button */}
            {!isPaused && (
              <button className="timer-button" onClick={handlePause}>
                Pause
              </button>
            )}
            {/* If its not paused, show resume button */}
            {isPaused && (
              <button className="timer-button" onClick={handleResume}>
                Resume
              </button>
            )}
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountDown;
