const { validateCreateDepartment } = require('./validateCreateDepartment')
const { validateGetDepartment } = require('./validateGetDepartment')
const { validateUpdateDepartment } = require('./validateUpdateDepartment')
const { validateDeleteDepartment } = require('./validateDeleteDepartment')

module.exports = {
    validateCreateDepartment,
    validateGetDepartment,
    validateUpdateDepartment,
    validateDeleteDepartment
}