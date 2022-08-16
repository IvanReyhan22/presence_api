const { check } = require("express-validator")
const { validateResult } = require("../../../middleware")

const validateUpdateShift = [
    check('id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('name'),
    check('departmentId'),
    check('checkIn'),
    check('checkOut'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateShift }