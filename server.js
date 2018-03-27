var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

const app = express();

app.use(cors())

app.listen(process.env.port || 8080, function () {
  console.log('CORS-enabled web server enabled on :' + process.env.port || '8080')
});

app.options('*', cors()) // enable pre-flight request for DELETE request
app.delete('*', cors(), function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.use('/', express.static('public'));

app.get('/get', bodyParser.json(), async (req, res) => {
  const key = 'keyAiGG9bz8R0pvHz';
  var url = 'https://api.airtable.com/v0/appjLxW4tV6xza5Dd/main/';
  var resp = await fetch(url, {
    headers: {
      "Authorization": "Bearer: " + key
    }
  })

  const json = await resp.json()
  const { records } = resp;
  res.json({ records });
});