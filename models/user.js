const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    full_name: { type: String },
    phone_number: { type: String }
})

module.exports = mongoose.model('User', userSchema)