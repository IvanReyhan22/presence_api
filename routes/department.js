const express = require('express')
const router = express.Router()
require('../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})

const {
    getAllDepartment,
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/departement')

const {
    validateGetDepartment,
    validateCreateDepartment,
    validateUpdateDepartment,
    validateDeleteDepartment
} = require('../controllers/departement/validators')
const { roleCheck } = require('../middleware/auth/roleCheck')

/**
 * Get All Department
 */
router.get('/', getAllDepartment)

/**
 * Get Single Department
 */
router.get('/:id', validateGetDepartment, getDepartment)

/**
 * Create new departement
 */
// router.post('/', validateCreateDepartment, createDepartment)
router.post('/', requireAuth, roleCheck(['supervisor', 'admin']), validateCreateDepartment, createDepartment)

/**
 * Update Department
 */
// router.patch('/:id', validateUpdateDepartment, updateDepartment)
router.patch('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateUpdateDepartment, updateDepartment)

/**
 * Delete Department
 */
// router.delete('/:id', validateDeleteDepartment, deleteDepartment)
router.delete('/:id', requireAuth, roleCheck(['supervisor', 'admin']), validateDeleteDepartment, deleteDepartment)

module.exports = router