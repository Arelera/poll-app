const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const pollsRouter = require('./controllers/polls');

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static('build'));

app.use('/api/polls', pollsRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log('Server running.');
});
