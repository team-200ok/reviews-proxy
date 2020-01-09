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
    proxy({ target: 'http://localhost:3001', changeOrigin: true })
);
// app.get('/business/:id', async function (req, res) {
//     const response = await rp(`http://localhost:3001/sdc/business/${req.params.id}`)
//         .catch((err) => {
//             console.error(err.stack);
//             res.status(500).end();
//         });
//     res.status(200).send(response).end();
// })

// app.get('/business/:id', function (req, res) {
//     http.get(`http://localhost:3001/sdc/business/${req.params.id}`, (response) => {
//         let data = '';

//         response.on('data', (chunk) => {
//             data += chunk;
//         });

//         response.on('end', () => {
//             res.status(200).send(data).end();
//         });
//     }).on('error', (err) => {
//         console.error(err.stack);
//     })
// })
app.listen(port, () => console.log('Serving up fresh reviews on port', port));
