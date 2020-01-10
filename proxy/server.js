const express = require('express');
const path = require('path');
const http = require('http');
// const rp = require('request-promise');
// const proxy = require('http-proxy-middleware');
// const bodyParser = require('body-parser');   
const app = express();
const port = 3000;

app.use('/:id', express.static(path.join(__dirname, 'public')));
app.use(
    '/sdc',
    proxy({ target: 'http://ec2-54-183-172-215.us-west-1.compute.amazonaws.com:3001', changeOrigin: true })
);

app.listen(port, () => console.log('Serving up fresh reviews on port', port));
