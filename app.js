const express = require('express');
const app = express();

const PORT = 3000;

//get to post Hello World when page opens


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});