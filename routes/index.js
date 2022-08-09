const express = require('express'),
    app = express(),
    router = express.Router(),
    fs = require('fs'),
    routesPath = `${__dirname}/`,
    { removeExtensionFromFile } = require('../middleware')

// Load Auth route
router.use('/', require('./auth'))

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

module.exports = router