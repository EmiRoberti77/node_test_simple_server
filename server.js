const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const https = require('https');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'success',
    dateTime: new Date().toISOString(),
  });
});
const sslOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

https.createServer(sslOptions, app).listen(8000, () => {
  console.log('server started', new Date().toISOString());
});
