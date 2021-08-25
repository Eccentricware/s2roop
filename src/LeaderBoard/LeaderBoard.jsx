import React from 'react';
import Score from '../Score/Score.jsx';

const LeaderBoard = ({scores}) => {
  return (

    <div className="leaderboard">
      <div className="leaderboard-header">Top Scores:</div>
      <table>
        <thead>
          <td>Score</td>
          <td>Player</td>
          <td>Round</td>
        </thead>
        {
          scores.map(score => {
            return <Score key={score.score_id} score={score}/>
          })
        }
      </table>
    </div>
  )
}

export default LeaderBoard;