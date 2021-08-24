import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  return (
    <div className="App">
      <svg className="center-area" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>

        <polygon id="red-button" points={`
            ${width / 2} , ${height / 2}
            0 , ${height / 2}
            0 , 0
            ${width / 2} , 0
          `}
          fill="red"
          stroke="pink"
          strokeWidth="5"
        />

        <polygon id="blue-button" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , 0
            ${width} , 0
            ${width} , ${height / 2}
          `}
          fill="blue"
          stroke="lightblue"
          strokeWidth="5"
        />

        <polygon id="yellow-button" points={`
            ${width / 2} , ${height / 2}
            ${width / 2} , ${height}
            0 , ${height}
            0 , ${height / 2}
          `}
          fill="yellow"
          stroke="sunshine"
          strokeWidth="5"
        />

        <polygon id="green-button" points={`
            ${width / 2} , ${height / 2}
            ${width} , ${height / 2}
            ${width} , ${height}
            ${width / 2} , ${height}
          `}
          fill="green"
          stroke="lime"
          strokeWidth="5"
        />

      </svg>
    </div>
  )
}

export default App;