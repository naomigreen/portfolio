const express = require('express');
const path = require('path');
const cors = require('cors')
const enforce = require('express-sslify');

const stockData =require('./data/stockData.json')
const gdpData = require('./data/gdpData.json')
const gameData = require('./data/gamingData.json')

const app = express();
app.use(cors())
app.get('/api/data/chartData', (req, res) => {
  res.send({stockData, gdpData, gameData});
});

const port = process.env.PORT || 4040;


if (process.env.NODE_ENV === 'production') {
  // app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
