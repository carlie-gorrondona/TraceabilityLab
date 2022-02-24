const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4546;


app.listen(port, () => console.log(`Hephaestus override on Cauldron port ${port}`));
