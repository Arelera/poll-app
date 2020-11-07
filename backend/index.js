const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const pollsRouter = require('./controllers/polls');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static('build'));

app.use('/api/polls', pollsRouter);

// unknows endpoints
app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'), (err) => {
    if (err) {
      res.status(500).send();
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Running on PORT: ', PORT);
  console.log('Server running.');
});
