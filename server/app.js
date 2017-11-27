const express = require('express');
var cors = require('cors');

const controllers = require('./controllers');
var Models = require('../database/db');

// Middleware
const morgan = require('morgan');
const parser = require('body-parser');

const app = express();

module.exports.app = app;

// Set what we are listening on.
const PORT = process.env.PORT || 3000;

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors())
app.disable('etag');

// Set up our routes
app.use('/v1/tweets/search', controllers.tweets.search);

// If we are being run directly, run the server.
if (!module.parent) {
    app.listen(PORT);
    console.log('Listening on', PORT);
}   