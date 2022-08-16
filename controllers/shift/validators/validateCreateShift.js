const { check } = require('express-validator')
const { validateResult } = require("../../../middleware")

const validateCreateShift = [
    check('name')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('departmentId'),
    check('checkIn')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('checkOut'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateShift }