const express = require('express');
const path = require('path');
const port = 8080;

const app = express();

app.use(express.static(__dirname));

// Below is a dummy array of a json object that returns id: 1
// for api requests . Express starts with first route listed
// then continues down until it finds one that matches
// So.... will check '/api/posts' before '*' 

app.get('/api/posts', (req, res) => {
	res.send([{ id: 1 }]);
});

// **********************************************************
// Below will send refresh to index.html
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});
// **********************************************************


app.listen(process.env.PORT || port);
console.log('Server has Started!')