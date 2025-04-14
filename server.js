const express = require('express');
const path = require('path');
const cors = require('cors')
const enforce = require('express-sslify');

const stockData =require('./data/stockData.json')
const gdpData = require('./data/gdpData.json')
const gameData = require('./data/gamingData.json')

const port = process.env.PORT || 4040;
const app = express();

app.use(cors())

app.get('/api/data/chartData', (req, res) => {
  res.send({stockData, gdpData, gameData});
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}else{
  app.get('/', (req, res) => res.send('server'))
}

app.listen(port, () => console.log(`Listening on port ${port}`));
