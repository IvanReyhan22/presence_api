const { buildErrObject } = require('./buildErrObject')

const itemNotFound = (err, item) => {
    return new Promise((resolve, reject) => {
        if (err != null) {
            return reject(buildErrObject(422, err.message))
        } else if (!item) {
            if (item.length < 1) {
                return reject(buildErrObject(404, "item not found"))
            }
            return reject(buildErrObject(404, "item not found"))
        } else {
            return resolve(item)
        }
    })
}

module.exports = { itemNotFound }
