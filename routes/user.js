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
    deleteUser,
    updateProfilePicture,
    resetPassword,
    setShift
} = require('../controllers/users')

const {
    validateGetUser,
    validateUpdateUser,
    validateResetPassword,
    validateSetShift
} = require('../controllers/users/validators')
const { fileUpload } = require('../middleware/utils')

/**
 * Get All User
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllUser)

/**
 * Get Single User
 */
router.get('/:id', requireAuth, roleCheck(['supervisor', 'admin', 'user']), validateGetUser, getUser)

/**
 * Update profile Pic
 */
router.patch('/profile_pic/:id', requireAuth, roleCheck(['supervisor', 'admin', 'user']), validateGetUser, fileUpload.single('image'), updateProfilePicture)

/**
 * Set User Shift
 */
router.patch('/shift/:id', requireAuth, roleCheck(['admin', 'supervisor']), validateSetShift, setShift)

/**
 * Reset Password
 */
router.patch('/reset_password', requireAuth, roleCheck(['user']), validateResetPassword, resetPassword)

/**
 * Update User
 */
router.patch('/:id', requireAuth, roleCheck(['supervisor', 'admin', 'user']), validateUpdateUser, updateUser)

/**
 * Delete user
 */
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateGetUser, deleteUser)

module.exports = router