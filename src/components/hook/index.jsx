import React, { useState } from 'react';

export const Hook = () => {
  const [state, setState] = useState({ x: 0, y: 0});
  const [count, setCount] = useState({ count: 0 });

  const handelMouse = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const onClick = () => setCount(count + 1);

  return (
    <div
      onMouseMove={handelMouse}
      onClick={onClick}
      style={{
        height: '100vh',
        boxSizing: 'border-box',
        border: '1px solid black',
      }}
    >
      <h1>
        X : {state.x}
        <br />Y : {state.y}
      </h1>
      <h2>Clicked {count.count}</h2>
    </div>
  );
};
