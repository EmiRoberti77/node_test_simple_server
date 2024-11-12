const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res) => {
  res.status(200).json({
    message: 'success',
    dateTime: new Date().toISOString(),
  });
});
app.listen(8000, () => {
  console.log('server started', new Date().toISOString());
});
