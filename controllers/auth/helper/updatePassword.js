const updatePassword = (password = '', user = {}) => {
    return new Promise((resolve, reject) => {
        user.password = password
        user.save(async (err, item) => {
            try {
                if (err) {
                    return reject(buildErrObject(422, err.message))
                }
                if (!item) {
                    return reject(buildErrObject(404, message))
                }
                resolve(item)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { updatePassword }