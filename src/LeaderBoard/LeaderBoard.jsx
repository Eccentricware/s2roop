import React from 'react';
import './LeaderBoard.css';

import Score from '../Score/Score.jsx';

const LeaderBoard = ({scores}) => {
  return (

    <div className="leaderboard">
      <div className="leaderboard-header">Top Scores:</div>
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Score</td>
            <td>Player</td>
            <td>Round</td>
          </tr>
        </thead>
        <tbody>
          {
            scores.map((score, index) => {
              return <Score key={score.score_id} rank={index + 1} score={score}/>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard;