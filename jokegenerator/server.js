
const express = require('express');
const serverless = require('aws-serverless-express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve React build
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = serverless.createServer(app);

exports.handler = (event, context) => {
    return server(event, context);
};
