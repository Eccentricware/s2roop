import React from 'react';
import './Username.css';

const Username = ({username, setUsername}) => {
  var handleClick = () => {
    var newUserName = window.prompt('Set your username:');
    setUsername(newUserName);
  }

  return (
    <div className="username" onClick={() => {handleClick();}} >
      {username}
    </div>
  );
};

export default Username;