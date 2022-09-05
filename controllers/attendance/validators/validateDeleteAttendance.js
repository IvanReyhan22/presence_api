const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateDeleteAttendance = [
    check('id')
        .exists()
        .withMessage('ID not exist')
        .not()
        .isEmpty()
        .withMessage('ID is empty'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateDeleteAttendance }