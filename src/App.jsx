import React, { useState } from "react";
import "./App.css";

import CenterButtons from './CenterButtons/CenterButtons.jsx';

const App = (props) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [btnBorder, setBtnBorder] = useState(5);

  const [interactionMode, setInteractionMode] = useState('awaitStart')
  const [currentSequence, setCurrentSequence] = useState([]);

  var activeOptions = ['red', 'blue', 'yellow', 'green'];

  const extendSequence = () => {
    var nextColor = Math.floor(Math.random() * activeOptions.length);
    var extendedSequence = currentSequence.slice();
    extendedSequence.push(activeOptions[nextColor]);
    setCurrentSequence(extendedSequence);
    console.log(extendedSequence);
  }

  return (
    <div className="App">
      <CenterButtons width={width} height={height} />
      <svg className="start-btn" width="100" height="50"
        viewBox="0 0 100 50"
        border="solid white 2px"
        onClick={() => {extendSequence()}}
      >
        <text x="5" y="20">Start Game</text>
      </svg>
    </div>
  )
}

export default App;