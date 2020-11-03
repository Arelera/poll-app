const router = require('express').Router();
const client = require('../client');

// getting all non private polls
router.get('/', async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM polls');
    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

// create a poll
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const response = await client.query(
      `
      INSERT INTO polls (question, choices, is_public)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [body.question, body.choices, body.isPublic || false]
    );
    console.table(response.rows);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
