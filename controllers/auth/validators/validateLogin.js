const { validateResult } = require('../../../middleware')

const { check } = require('express-validator')

const validateLogin = [
    check('email')
        .exists()
        .withMessage('Please enter your email'),
    check('password')
        .exists()
        .withMessage('Please enter your password'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateLogin }