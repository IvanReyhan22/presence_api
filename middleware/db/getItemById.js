const { itemNotFound } = require("../utils/itemNotFound")

const getItemById = (id = '', model = {}) => {
    return new Promise((resolve, reject) => {
        model.findById(id, async (err, item) => {
            try {
                const check = await itemNotFound(err, item)
                resolve(check)
            } catch (error) {
                reject(error)
            }
        })
    })
}

module.exports = { getItemById }
