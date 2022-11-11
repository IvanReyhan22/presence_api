const { getUser } = require('./getUser')
const { getAllUser } = require('./getAllUser')
const { updateUser } = require('./updateUser')
const { deleteUser } = require('./deleteUser')
const { updateProfilePicture } = require('./updateProfilePicture')
const { resetPassword } = require('./resetPassword')
const { setShift } = require('./setShift')

module.exports = {
    getUser,
    getAllUser,
    updateUser,
    deleteUser,
    updateProfilePicture,
    resetPassword,
    setShift
}