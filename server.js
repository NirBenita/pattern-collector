var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

const app = express();

// app.use(cors())

app.options('*', cors()) // enable pre-flight request for DELETE request
app.delete('*', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.use('/', cors(), express.static('public'));

app.listen(3000, () => { console.log('CORS-enabled web server enabled') });

app.get('/get', bodyParser.json(), async (req, res) => {
  const key = 'keyAiGG9bz8R0pvHz';
  var resp = await fetch('https://api.airtable.com/appjLxW4tV6xza5Dd/main', {
    headers: {
      "Authorization": "Bearer: " + key
    }
  })

  const json = await resp.json()
  const { records } = resp;
  res.json({ records });
});