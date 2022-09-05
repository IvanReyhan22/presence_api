const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateDeletePermit = [
    check('id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateDeletePermit }