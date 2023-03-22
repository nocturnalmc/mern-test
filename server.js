require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('./22-3-2023/dist'));

app.get('/generate', (req, res) => {
  res.status(200).json({ generate: 'Successfull' });
});

app.get('/api/v1', (req, res) => {
  res.status(200).json({ msg: 'This is API v1' });
});

app.all('*', (req, res) => {
  res.status(404).send('Not found');
});

const port = process.env.PORT || 7500;

const start = () => {
  app.listen(port, console.log(`Server is listening at port: ${port}`));
};

start();
