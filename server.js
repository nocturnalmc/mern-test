require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const root = path.join(__dirname, '30-9-2024', 'dist');
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(express.static(root));

app.get('/generate', (req, res) => {
  res.status(200).json({ generate: 'Successfull' });
});

app.get('/api/v1', (req, res) => {
  res.status(200).json({ msg: 'This is API v1' });
});

app.get('/api/v1/ip', async (req, res) => {
  return res.status(200).json({ yourIP: req.ip });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '30-9-2024', 'dist', 'index.html'));
});

// not found
app.use((req, res) => {
  res.status(404).json({ msg: 'Error: 404, route does not exist' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ msg: 'Nope' });
});

const port = process.env.PORT || 7500;

const start = () => {
  app.listen(port, console.log(`Server is listening at port: ${port}`));
};

start();
