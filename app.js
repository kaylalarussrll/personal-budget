const express = require('express');
const app = express();

const PORT = 3000;

//get to post Hello World when page opens
app.get('/', (req, res, next) => {
    console.log('Hello, world!');
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});