const { buildErrObject } = require('../../../middleware')
const User = require('../../../models/user')

const findUser = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email,
            }, 'id name email personalId departementId level profilePic password',
            async (err, item) => {
                try {
                    if (err) {
                        resolve(buildErrObject(422, err.message))
                    }
                    if (item) {
                        resolve(item)
                    }
                } catch (error) {
                    reject(err)
                }
            }
        )
    })
}

module.exports = { findUser }