const router = require('express').Router();
const client = require('../client');

// getting all non private polls
router.get('/', async (req, res) => {
  try {
    const response = await client.query(
      `
      SELECT * FROM polls 
      WHERE private is false
      `
    );
    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

// getting a poll by id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await client.query(
      `
      SELECT * FROM polls 
      WHERE id = ${id}
      `
    );
    res.json(response.rows[0]);
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
      INSERT INTO polls (question, choices, private)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [body.question, body.choices, body.isPrivate]
    );
    res.send(response.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

// updating a poll, for voting
router.put('/', async (req, res) => {
  try {
    const body = req.body;

    const response = await client.query(
      `
      UPDATE polls
      SET choices = $1
      WHERE id = $2
      `,
      [body.choices, body.id]
    );
    res.send(response.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

module.exports = router;
