const User = require('../../../models/user')
const { buildErrObject } = require('../../../middleware/')

const emailExists = (email = '') => {
    return new Promise((resolve, reject) => {
        User.findOne(
            {
                email
            }, (err, item) => {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }

                if (item) {
                    return reject(buildErrObject(422, 'Email already registered'))
                }

                resolve(false)
            })
    })
}

module.exports = { emailExists }