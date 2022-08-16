const moment = require("moment")

const getCurrentTime = () => {
    return new Promise((resolve) => {
        const now = moment()
        const time = {
            date: now.format("MM-DD-YYYY"),
            time: now.format("hh:mm A")
        }
        resolve(time)
    })
}

module.exports = { getCurrentTime }