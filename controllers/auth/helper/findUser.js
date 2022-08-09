const { buildErrObject } = require('../../../middleware')
const { itemNotFound } = require('../../../middleware/utils')
const User = require('../../../models/user')

const findUser = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email,
            }, 'id name email personalId departementId role profilePic password',
            async (err, item) => {
                try {
                    const check = await itemNotFound(err, item)
                    if (check) {
                        return resolve(item)
                    } else {
                        return reject(buildErrObject(422, "User not found"))
                    }
                } catch (error) {
                    reject(err)
                }
            }
        )
    })
}

module.exports = { findUser }