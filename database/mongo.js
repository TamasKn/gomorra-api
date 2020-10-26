/** Cloud Mongo DB connection **/

const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.CLOUD_MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`Mongo DB connected: ${conn.connection.host}`)
}

module.exports = connectDB