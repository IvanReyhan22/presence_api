const { itemNotFound } = require("../utils/itemNotFound")

const getItemBy = (by = {}, model = {}) => {
    return new Promise((resolve, reject) => {
        model.find(by, async (err, item) => {
            try {
                const check = await itemNotFound(err, item, 'NOT_FOUND')
                resolve(check)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { getItemBy }
