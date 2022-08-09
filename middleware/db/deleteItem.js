const { itemNotFound } = require("../utils/itemNotFound")

const deleteItem = (id = '', model = {}) => {
    new Promise((resolve, reject) => {
        model.findByIdAndRemove(id, async (err, item) => {
            try {
                const check = await itemNotFound(err, item)
                resolve(check)
            } catch (error) {
                reject(err)
            }
        })
    })
}

module.exports = { deleteItem }