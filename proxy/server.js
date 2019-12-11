const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use('/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Serving up fresh reviews on port', port));