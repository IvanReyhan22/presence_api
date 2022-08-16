const { check } = require('express-validator')
const { validateResult } = require('../../../middleware')

const validateCreateAttendance = [
    check('user_id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('department_id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('shift_id')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    // check('checkIn')
    //     .exists()
    //     .withMessage('MISSING')
    //     .not()
    //     .isEmpty()
    //     .withMessage('IS_EMPTY'),
    // check('checkOut'),
    check('address')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    check('loc')
        .exists()
        .withMessage('MISSING')
        .not()
        .isEmpty()
        .withMessage('IS_EMPTY'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateAttendance }