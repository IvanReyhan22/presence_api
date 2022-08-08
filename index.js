require('dotenv').config();
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    bodyParser = require('body-parser'),
    serveIndex = require('serve-index');

require('./config/mongo')

const router = express.Router()
const fs = require('fs')
const routesPath = `${__dirname}/routes`
const { removeExtensionFromFile } = require('./middleware')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/storage', express.static('storage'), serveIndex('storage'))

// Load Auth route
app.use('/', require('./routes/auth'))

// Loop routes path and loads every file as a route except this file and Auth route
fs.readdirSync(routesPath).filter((file) => {
    // Take filename and remove last part (extension)
    const routeFile = removeExtensionFromFile(file)
    // Prevents loading of this file and auth file
    return routeFile !== 'index' && routeFile !== 'auth'
        ? router.use(`/${routeFile}`, require(`./${routeFile}`))
        : ''
})

/*
 * Index Route
 */
app.get('/', (req, res) => {
    res.send('Presence Api Gateway')
})

app.listen(port)

module.exports = router