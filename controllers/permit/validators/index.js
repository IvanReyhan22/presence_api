const { validateCreatePermit } = require('./validateCreatePermit')
const { validateGetPermit } = require('./validateGetPermit')
const { validateDeletePermit } = require('./validateDeletePermit')
const { validateUpdatePermit } = require('./validateUpdatePermit')

module.exports = {
    validateGetPermit,
    validateCreatePermit,
    validateDeletePermit,
    validateUpdatePermit
}