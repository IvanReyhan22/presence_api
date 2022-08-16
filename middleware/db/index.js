const { getItemById } = require('./getItemById')
const { getItemsBy } = require('./getItemsBy')
const { createItem } = require('./createItem')
const { updateItem } = require('./updateItem')
const { deleteItem } = require('./deleteItem')
const { getPopulation } = require('./getPopulation')

module.exports = {
    createItem,
    getItemById,
    getItemsBy,
    updateItem,
    deleteItem,
    getPopulation
}