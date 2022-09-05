const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateCreatePermit = [
    check('subject'),
    check('reason'),
    check('document'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreatePermit }