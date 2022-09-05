const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateUpdatePermit = [
    check('id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('subject'),
    check('reason'),
    check('document'),
    check('date'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdatePermit }