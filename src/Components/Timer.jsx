import React from 'react';
import './Timer.css'; // Import your CSS file if needed
import { useState,useEffect } from 'react';


const Timer = ({ targetDate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to calculate remaining time
  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeRemaining = getTimeRemaining(targetDate);

  return (
    <div className="timer"> {/* Class name changed for clarity */}
      <div className="timer__content"> {/* Added a container for centering */}
        {timeRemaining.days > 0 && (
          <span className="header__timer-item">
            {timeRemaining.days}d
          </span>
        )}
        <span className="header__timer-item">
          {timeRemaining.hours.toString().padStart(2, '0')}:
        </span>
        <span className="header__timer-item">
          {timeRemaining.minutes.toString().padStart(2, '0')}:
        </span>
        <span className="header__timer-item">
          {timeRemaining.seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default Timer;
