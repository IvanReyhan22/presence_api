const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const { roleCheck } = require('../middleware/auth')

const {
    getAllShift,
    createShift,
    updateShift,
    deleteShift
} = require('../controllers/shift')

const {
    validateCreateShift,
    validateUpdateShift,
    validateDeleteShift
} = require('../controllers/shift/validators')


/**
 * Get All Shift
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllShift)

/**
 * Create new shift
 */
router.post('/', requireAuth, roleCheck(['supervisor', 'admin']), validateCreateShift, createShift)

/**
 * Update Shift
 */
router.patch('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateUpdateShift, updateShift)

/**
 * Delete Shift
 */
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateDeleteShift, deleteShift)

module.exports = router