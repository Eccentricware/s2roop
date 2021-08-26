import React from 'react';

const Score = ({score, rank}) => {
  return (
    <tr>
      <td>{rank}</td>
      <td>{score.score}</td>
      <td>{score.username}</td>
      <td>{score.round}</td>
    </tr>
  )
};

export default Score;