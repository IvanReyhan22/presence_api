const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})

const { roleCheck } = require('../middleware/auth')

const {
    getAllAttendance,
    createAttendance
} = require('../controllers/attendances')

const {
    validateCreateAttendance
} = require('../controllers/attendances/validators')

/**
 * Get All Attendance
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllAttendance)

/**
 * Create Attendance
 */
router.post('/', requireAuth, roleCheck(['user', 'supervisor', 'admin']), validateCreateAttendance, createAttendance)

module.exports = router