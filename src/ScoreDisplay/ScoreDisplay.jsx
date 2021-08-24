import React from 'react';
import './ScoreDisplay.css';

const ScoreDisplay = ({currentScore, highScore, round}) => {
  return (
    <div className="score-box">
      <div className="current-round">Round {round}</div>
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  )
}

export default ScoreDisplay;