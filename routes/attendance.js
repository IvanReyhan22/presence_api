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
    checkIn,
    checkOut,
    checkStatus,
    updateAttendance,
    deleteAttendance
} = require('../controllers/attendance')

const {
    validateCheckIn,
    validateCheckOut,
    validateCheckStatus,
    validateUpdateAttendance,
    validateDeleteAttendance
} = require('../controllers/attendance/validators')

/**
 * Get All Attendance
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllAttendance)

/**
 * Check Attendance status
 */
router.get('/status/:id', requireAuth, roleCheck(['user', 'supervisor', 'admin']), validateCheckStatus, checkStatus)

/**
 * Check In
 */
router.post('/', requireAuth, roleCheck(['user', 'supervisor', 'admin']), validateCheckIn, checkIn)

/**
 * Check out
 */
router.patch('/checkout', requireAuth, roleCheck(['user', 'supervisor', 'admin']), validateCheckOut, checkOut)

/**
 * Update Attendance
 */
router.patch('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateUpdateAttendance, updateAttendance)

/**
 * Delete Attendance
 */
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateDeleteAttendance, deleteAttendance)


module.exports = router