const { buildErrObject } = require('../../../middleware')
const { itemNotFound } = require('../../../middleware/utils')
const User = require('../../../models/user')

const findUser = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email,
            }, 'id name email personalId departmentId shiftId role profilePic password',
            async (err, item) => {
                try {
                    const check = await itemNotFound(err, item)
                    if (check) {
                        return resolve(item)
                    } else {
                        return reject(buildErrObject(422, "User with email not registered"))
                    }
                } catch (error) {
                    reject(buildErrObject(422, "User with email not registered"))
                }
            }
        )
    })
}

module.exports = { findUser }