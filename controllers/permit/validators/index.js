const { validateCreatePermit } = require('./validateCreatePermit')
const { validateGetPermit } = require('./validateGetPermit')
const { validateDeletePermit } = require('./validateDeletePermit')
const { validateUpdatePermit } = require('./validateUpdatePermit')
const { validateUpdatePermitDocument } = require('./validateUpdatePermitDocument')

module.exports = {
    validateGetPermit,
    validateCreatePermit,
    validateDeletePermit,
    validateUpdatePermit,
    validateUpdatePermitDocument
}