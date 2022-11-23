const { validationResult } = require('express-validator')
const { handleError } = require('./handleError')
const { buildErrObject } = require('./utils/buildErrObject')

const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        // if email convert to lowecase
        if (req.body.email) {
            req.body.email = req.body.email.toLowerCase()
        }
        return next()
    } catch (err) {
        return handleError(res, buildErrObject(422, err.errors[0].msg))
    }
}

module.exports = { validateResult }