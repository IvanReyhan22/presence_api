const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const { roleCheck } = require('../middleware/auth')

const { validateCreatePermit, validateGetPermit, validateDeletePermit } = require('../controllers/permit/validators')

const { getAllPermit, createPermit, getPermit, deletePermit } = require('../controllers/permit')
const { fileUpload } = require('../middleware/utils')


/**
 * Get All Permit
 */
router.get('/', requireAuth, roleCheck(['supervisor', 'admin']), getAllPermit)

/**
 * Get  Permit
 */
router.get('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateGetPermit, getPermit)

/**
 * Create New Permit
 */
router.post('/', requireAuth, roleCheck(['user', 'supervisor', 'admin']), validateCreatePermit, fileUpload.single('document'), createPermit)


/**
 * Delete Permit
 */
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateDeletePermit, deletePermit)

module.exports = router