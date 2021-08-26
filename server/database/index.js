const Pool = require('pg').Pool;
const pool = new Pool({
  database: 's2roop',
  host: 'localhost',
  port: 5432,
  user: 'querybot',
  password: 'the_gathering'
});

const getHighScores = (request, response) => {
  pool.query(`
    SELECT * FROM scores
    WHERE VALID = true
    ORDER BY score DESC, username
    LIMIT 10;
  `, (err, results) => {
    if (err) {
      throw err;
    } else {
      response.send(results.rows);
    }
  });
};

const submitScore = (request, response) => {
  var {username, score, round, snags, valid} = request.body;
  var ip_address = request.headers.origin;
  pool.query(`
    INSERT INTO scores (username, ip_address, score, round, snags, valid)
    VALUES ('${username}', '${ip_address}', ${score}, ${round}, ${snags}, ${valid});
  `, (err, results) => {
    if (err) {
      throw err;
    }
    response.send(results.rows);
  });
};

module.exports = {
  getHighScores,
  submitScore
};