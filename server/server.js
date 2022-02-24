const express = require('express');
const path = require('path');

// include and initialize the rollbar library with your access token
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: 'c8d12bc0d72049cab9537e4726d1ba72',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express();
app.use(express.json());

const port = process.env.PORT || 4546;

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen(port, () => console.log(`Hephaestus override on Cauldron port ${port}`));
