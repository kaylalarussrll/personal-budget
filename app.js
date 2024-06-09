const express = require('express');
const app = express();
//const { Client } = require('pg');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const envelopesRouter = require('./envelopes.js');
app.use('envelopes', envelopesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
