import React from 'react';
import Score from '../Score/Scores.jsx';

const LeaderBoard = ({scores}) => {
  return (

    <div className="leaderboard">
      <div className="leaderboard-header">Top Scores:</div>
      {
        scores.map(score => {
          return <Score key={score.score_id} score={score}/>
        })
      }
    </div>
  )
}

export default LeaderBoard;