const mongoose = require('mongoose')
const DB_URL = process.env.MONGO_URI

const connect = () => {
    if (!DB_URL) {
        console.log("Database config is empty : ", process.env.MONGO_URI)
        return
    }
    mongoose.connect(
        DB_URL,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            let dbStatus
            if (err) {
                dbStatus = `*    Error connection to database ${err}\n`
            }

            dbStatus = `*    Database Status : Connected`

            if (process.env.NODE_ENV !== 'test') {
                // Prints initialization
                console.log('****************************')
                console.log('*    Starting Server')
                console.log(`*    Port: ${process.env.PORT || 3000}`)
                console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`)
                console.log(`*    Database: MongoDB`)
                console.log(dbStatus)
                console.log('****************************')
            }
        }
    )
}

connect()

mongoose.connection.on('error', console.log)
mongoose.connection.on('disconnected', connect)

module.exports = connect