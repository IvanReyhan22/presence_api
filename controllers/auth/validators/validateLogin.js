const { validateResult } = require('../../../middleware')

const { check } = require('express-validator')

const validateLogin = [
    check('email')
        .exists()
        .withMessage('Please enter your email')
        .not()
        .isEmpty()
        .withMessage('Email is empty')
        .isEmail()
        .withMessage('Email is not valid'),
    check('password')
        .exists()
        .withMessage('Please enter your password')
        .not()
        .isEmpty()
        .withMessage('Password is empty')
        .isLength({
            min: 5
        })
        .withMessage('Password is to short, minimum 5 character'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateLogin }