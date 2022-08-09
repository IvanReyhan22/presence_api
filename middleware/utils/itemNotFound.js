const { buildErrObject } = require('./buildErrObject')

const itemNotFound = (err = {}, item) => {
    return new Promise((resolve, reject) => {
        if (err) {
            return reject(buildErrObject(422, err.message))
        } else if (!item || item.length < 1) {
            return resolve(false)
        } else {
            return resolve(item)
        }
    })
}

module.exports = { itemNotFound }
