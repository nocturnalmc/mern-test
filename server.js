require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const root = path.join(__dirname, '22-3-2023', 'dist');
app.use(express.static(root));

app.get('/generate', (req, res) => {
  res.status(200).json({ generate: 'Successfull' });
});

app.get('/api/v1', (req, res) => {
  res.status(200).json({ msg: 'This is API v1' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '22-3-2023', 'dist', 'index.html'));
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
