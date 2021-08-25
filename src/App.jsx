import React, { useState, useEffect } from "react";
import "./App.css";

import ScoreDisplay from './ScoreDisplay/ScoreDisplay.jsx';
import LeaderBoard from './LeaderBoard/LeaderBoard.jsx';
import CenterButtons from './CenterButtons/CenterButtons.jsx';
import StartButton from './StartButton/StartButton.jsx';

const App = (props) => {
  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);
  const [btnBorder, setBtnBorder] = useState(5);

  const [interactionMode, setInteractionMode] = useState('Start Game');
  const [activeOptions, setActiveOptions] = useState(['red', 'blue', 'yellow', 'green'])
  const [currentSequence, setCurrentSequence] = useState([]);
  const [nextAnswerIndex, setNextAnswerIndex] = useState(0);
  const [activeLight, setActiveLight] = useState('none');
  const [round, setRound] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/api/scores')
      .then(response => response.json())
      .then(data => console.log(data));
  });

  const extendSequence = () => {
    var nextColor = Math.floor(Math.random() * activeOptions.length);
    var extendedSequence = currentSequence.slice();
    extendedSequence.push(activeOptions[nextColor]);
    setCurrentSequence(extendedSequence);
    console.log(extendedSequence);
    setInteractionMode('Replaying Sequence');
    displayExtendedSequence(extendedSequence);
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
    setTimeout(() => {
      setInteractionMode('Respond');
    }, timer * 1000);
  }

  const turnLightOn = (color) => {
    setActiveLight(color);
  }

  const turnOffLights = () => {
    setActiveLight('none');
  }

  const guessColor = (color) => {
    if (color === currentSequence[nextAnswerIndex]) {
      console.log('Correct!');
      var newCurrentScore = currentScore + round;
      setCurrentScore(newCurrentScore);
      if (newCurrentScore > highScore) {
        setHighScore(newCurrentScore);
      }
      var index = nextAnswerIndex + 1;
      setNextAnswerIndex(index);
      if (index === currentSequence.length) {
        console.log('Round won!');
        setNextAnswerIndex(0);
        setInteractionMode('Replay');
        extendSequence();
        setRound(round + 1);
      }
    } else {
      console.log('Game over!');
      var score = {
        score: currentScore,
        round: round,
        snags: null,
        valid: true
      };
      setCurrentScore(0);
      setRound(1);
      setNextAnswerIndex(0);
      setCurrentSequence([]);
      setInteractionMode('Start Game');
      fetch('http://localhost:8000/api/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
      });
    }
  }

  return (
    <div className="App">
      <ScoreDisplay currentScore={currentScore} highScore={highScore} round={round} />
      <LeaderBoard />
      <CenterButtons width={width} height={height}
        activeLight={activeLight} guessColor={guessColor}
      />
      <StartButton extendSequence={extendSequence} interactionMode={interactionMode} />
    </div>
  )
}

export default App;