const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateUpdateAttendance = [
    check('id'),
    check('departmentId'),
    check('shiftId'),
    check('checkIn'),
    check('checkOut'),
    check('status'),
    check('address'),
    check('loc'),
    check('permit'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateUpdateAttendance }