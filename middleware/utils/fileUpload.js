const multer = require("multer")
const { uploadStorage } = require("./uploadStorage")

const fileUpload = multer({
    storage: uploadStorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "application/pdf") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


module.exports = { fileUpload }