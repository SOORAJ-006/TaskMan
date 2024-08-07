const mongoose = require('mongoose')
const CONNECTION_STRING = 'mongodb+srv://Banana:bananaa@cluster0.qjrrfax.mongodb.net/task_management?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(CONNECTION_STRING)
        console.log('Database connected' , connect.connection.host , connect.connection.name);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB