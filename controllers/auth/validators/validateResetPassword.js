const { validateResult } = require('../../../middleware')

const { check } = require('express-validator')

const validateResetPassword = [
    check('email')
        .exists()
        .withMessage('No user is selected')
        .not()
        .isEmpty()
        .withMessage('Id is required'),
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

module.exports = { validateResetPassword }