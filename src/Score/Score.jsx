import React from 'react';

const Score = ({score}) => {
  return (
    <tr>
      <td>{score.score}</td>
      <td>{score.username}</td>
      <td>{score.round}</td>
    </tr>
  )
};

export default Score;