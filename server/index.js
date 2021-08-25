const express = require('express');
const pool = require('./database');
const app = express();
const cors = require('cors');
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
// app.use((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('you posted:\n');
//   res.end(JSON.stringify(req.body, null, 2));
// });

app.get('/api/scores', pool.getHighScores);

app.post('/api/scores', pool.submitScore);

app.listen(port, () => {
  console.log(`Listening is happening on port ${port}`);
});