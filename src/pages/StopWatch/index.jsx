import React, { useEffect, useState } from 'react';
import { addMilliseconds, format } from 'date-fns';

export const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0));
  const [isRunning, setRunning] = useState(false);

  const switchRunning = () => setRunning(!isRunning);

  const resetTimer = () => setTime(new Date(0, 0, 0, 0, 0));

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => addMilliseconds(prevTime, 1000));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning, time]);
  return (
    <div>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={switchRunning}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
