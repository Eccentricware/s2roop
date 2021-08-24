import React from 'react';
import './CenterButtons.css';

const CenterButtons = ({width, height, activeLight, guessColor}) => {
  const handleClick = (color) => {
    guessColor(color);
  }

  return (
    <svg className="center-area"
      width={width} height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <polygon id="red-btn" points={`
            ${width / 2} , ${height / 2}
            0 , ${height / 2}
            0 , 0
            ${width / 2} , 0
          `}
        fill={activeLight === 'red' ? 'rgb(255, 0, 0)' : 'rgb(175, 0, 0)'}
        onClick={() => { handleClick('red') }}
        cursor="pointer"
      />

      <polygon id="blue-btn" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , 0
            ${width} , 0
            ${width} , ${height / 2}
          `}
        fill={activeLight === 'blue' ? 'blue' : 'darkblue'}
        onClick={() => { handleClick('blue') }}
        cursor="pointer"
      />

      <polygon id="yellow-btn" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , ${height}
            0 , ${height}
            0 , ${height / 2}
          `}
        fill={activeLight === 'yellow' ? 'yellow' : 'rgb(200, 200, 0)'}
        onClick={() => { handleClick('yellow') }}
        cursor="pointer"
      />

      <polygon id="green-btn" points={`
            ${width / 2} , ${height / 2}
            ${width} , ${height / 2}
            ${width} , ${height}
            ${width / 2} , ${height}
          `}
        fill={activeLight === 'green' ? 'rgb(0, 255, 0)' : 'darkgreen'}
        onClick={() => { handleClick('green') }}
        cursor="pointer"
      />

    </svg>
  )
}

export default CenterButtons;