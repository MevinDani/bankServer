const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bankDB', { useNewUrlParser: true })
    .then(() => { console.log("mongoose connected") })
    .catch(err => { console.log("error", err); })

const User = mongoose.model('User', {
    acno: Number,
    uname: String,
    psw: String,
    balance: Number,
    transactions: []
})

module.exports = {
    User
}