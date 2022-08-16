const express = require('express')
const router = express.Router()

const {
    login,
    register,
    resetPassword
} = require('../controllers/auth')

const {
    validateLogin,
    validateRegister,
    validateResetPassword
} = require('../controllers/auth/validators')
const { handleError, handleResponse } = require('../middleware')
const { getAllItem } = require('../middleware/db')
const user = require('../models/user')

/**
 * Login Route
 */
router.post('/login', validateLogin, login)

/**
 * Register Route
 */
router.post('/register', validateRegister, register)

/**
 * Reset password
 */
router.post('/reset-password', validateResetPassword, resetPassword)

module.exports = router