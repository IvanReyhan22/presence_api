const moment = require('moment')
const multer = require("multer")
const path = require('path')

const uploadStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'storage/permits/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, moment() + ext)
    }
})

module.exports = { uploadStorage }