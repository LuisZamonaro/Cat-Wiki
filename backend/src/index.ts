import express from 'express';
import catRouter from './catRouter';

const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/cats', catRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
