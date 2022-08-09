const { validateResult } = require('../../../middleware')
const { check } = require('express-validator')

const validateUpdateDepartment = [
    check('id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('name'),
    check('departmentCode'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateDepartment }