const mongoose = require('mongoose')
const { Url_banco } = require('../config/config')


const connect = () => {
    try {
        mongoose.connect(Url_banco, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })        
    } catch (error) {
        console.log(error)
    }
}
module.exports = { connect, mongoose }