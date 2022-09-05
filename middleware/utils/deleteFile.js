const { unlink, fstat } = require('node:fs')

const deleteFile = (path = "") => {
    return new Promise((resolve, reject) => {
        unlink(path, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}

module.exports = { deleteFile }