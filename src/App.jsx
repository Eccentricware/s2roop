import React, { useState } from "react";
import "./App.css";

import CenterButtons from './CenterButtons/CenterButtons.jsx';

const App = (props) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [btnBorder, setBtnBorder] = useState(5);

  const [interactionMode, setInteractionMode] = useState('awaitStart')
  const [currentSequence, setCurrentSequence] = useState([]);
  const [activeLight, setActiveLight] = useState('none');

  var activeOptions = ['red', 'blue', 'yellow', 'green'];

  const extendSequence = () => {
    var nextColor = Math.floor(Math.random() * activeOptions.length);
    var extendedSequence = currentSequence.slice();
    extendedSequence.push(activeOptions[nextColor]);
    setCurrentSequence(extendedSequence);
    console.log(extendedSequence);
    setTimeout(() => {
      displayExtendedSequence(extendedSequence);
    }, 1000);
  }

  const turnLightOn = (color) => {
    setActiveLight(color);
  }

  const turnOffLights = () => {
    setActiveLight('none');
  }

  const displayExtendedSequence = (sequence) => {
    var timer = 0;
    var timeOn = 1;
    var timeOff = 0.1;
    sequence.forEach((event, seqNumber) => {
      var onTime = timer;
      setTimeout(() => {
        console.log(`${seqNumber}: ${event} on at ${onTime}`);
        turnLightOn(event);
      }, onTime * 1000);
      timer += timeOn;
      var offTime = timer;
      setTimeout(() => {
        console.log(`${seqNumber}: ${event} off at ${offTime}`);
        turnOffLights();
      }, offTime * 1000);
      timer += timeOff;
    });
  }

  return (
    <div className="App">
      <CenterButtons width={width} height={height} activeLight={activeLight} />

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