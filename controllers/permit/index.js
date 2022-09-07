const { getAllPermit } = require('./getAllPermit')
const { createPermit } = require('./createPermit')
const { getPermit } = require('./getPermit')
const { deletePermit } = require('./deletePermit')
const { updatePermitDocument } = require('./updatePermitDocument')

module.exports = {
    getAllPermit,
    getPermit,
    createPermit,
    deletePermit,
    updatePermitDocument
}