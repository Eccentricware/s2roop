--DROP DATABASE IF EXISTS s2roop;

CREATE DATABASE s2roop;

DROP TABLE IF EXISTS highscores;

CREATE TABLE scores(
  score_id SERIAL,
  username VARCHAR(50),
  ip_address VARCHAR(50),
  score INTEGER NOT NULL,
  round INTEGER NOT NULL,
  snags INTEGER,
  valid BOOLEAN,
  PRIMARY KEY (score_id)
);