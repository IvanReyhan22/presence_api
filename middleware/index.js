const { removeExtensionFromFile } = require('./removeExtensionFromFile')
const { buildErrObject } = require('./buildErrObject')
const { handleError } = require('./handleError')
const { validateResult } = require('./validateResult')
const { handleResponse } = require('./handleResponse')
const { encrypt } = require('./encrypt')

module.exports = {
    removeExtensionFromFile,
    buildErrObject,
    handleError,
    validateResult,
    handleResponse,
    encrypt
}