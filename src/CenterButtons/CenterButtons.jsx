import React from 'react';
import './CenterButtons.css';

const CenterButtons = ({width, height}) => {
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
        fill="red"
        onClick={() => { console.log('red') }}
        cursor="pointer"
      />

      <polygon id="blue-btn" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , 0
            ${width} , 0
            ${width} , ${height / 2}
          `}
        fill="blue"
        onClick={() => { console.log('blue') }}
        cursor="pointer"
      />

      <polygon id="yellow-btn" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , ${height}
            0 , ${height}
            0 , ${height / 2}
          `}
        fill="yellow"
        onClick={() => { console.log('yellow') }}
        cursor="pointer"
      />

      <polygon id="green-btn" points={`
            ${width / 2} , ${height / 2}
            ${width} , ${height / 2}
            ${width} , ${height}
            ${width / 2} , ${height}
          `}
        fill="green"
        cursor="pointer"
      />

    </svg>
  )
}

export default CenterButtons;