const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const { roleCheck } = require('../middleware/auth')

const {
    getUser,
    getAllUser,
    updateUser,
    deleteUser
} = require('../controllers/users')

const {
    validateGetUser,
    validateUpdateUser
} = require('../controllers/users/validators')

/**
 * Get All User
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllUser)

/**
 * Get Single User
 */
router.get('/:id', requireAuth, roleCheck(['supervisor', 'admin', 'user']), validateGetUser, getUser)

/**
 * Update User
 */
router.patch('/:id', requireAuth, roleCheck(['supervisor', 'admin', 'user']), validateUpdateUser, updateUser)

/**
 * Delete user
 */
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateGetUser, deleteUser)

module.exports = router