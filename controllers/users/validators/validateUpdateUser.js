const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateUpdateUser = [
    check('id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('name'),
    check('email'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateUser }