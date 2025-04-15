const express = require('express');
const path = require('path');
const cors = require('cors')
const enforce = require('express-sslify');
const app = express();
const stockData =require('./data/stockData.json')
const gdpData = require('./data/gdpData.json')
const gameData = require('./data/gamingData.json')

const port = process.env.PORT || 4040;

app.use(cors())

app.get('/api/data/chartData', (req, res) => {
  res.send({stockData, gdpData, gameData});
});

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
