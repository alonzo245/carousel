const auth = require('./auth');
const express = require('express');
const path = require('path');

const app = express();

app.use(auth);

app.get('/build', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/Sofas_n_Couches.html'));
});

app.use(express.static(path.join(__dirname, '/build')));

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);