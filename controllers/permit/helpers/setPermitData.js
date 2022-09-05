const moment = require("moment")

const setPermitData = (subject = "", reason = "", filePath = "") => {
    return {
        subject: subject,
        reason: reason,
        document: filePath,
        date: moment().format("MM-DD-YYYY hh:mm A")
    }
}

module.exports = { setPermitData }