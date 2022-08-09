const { validateResult } = require('../../../middleware')
const { check } = require('express-validator')

const validateGetDepartment = [
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

module.exports = { validateGetDepartment }