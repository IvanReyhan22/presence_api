require('dotenv').config();
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    bodyParser = require('body-parser'),
    serveIndex = require('serve-index'),
    passport = require('passport');

require('./config/mongo')

app.use(cors())
app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/storage', express.static('storage'), serveIndex('storage'))
app.use('/', require('./routes'))

app.listen(port)
