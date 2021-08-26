import React from 'react';
import './StartButton.css';

const StartButton = ({extendSequence, interactionMode}) => {
  return (
    <div className="start-btn"
      onClick={() => { extendSequence() }}
    >
      Start Game
    </div>
  )
}

export default StartButton;