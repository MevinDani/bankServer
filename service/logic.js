// import user from db
const db = require('./db')

// create a function for register logic
register = (acno, uname, psw) => {
    // collection key:arg value
    return db.User.findOne({ acno }).then(user => {
        if (user) {
            return {
                message: "user already exist",
                status: false,
                statusCode: 404
            }
        } else {
            // creating an object for new user
            newuser = new db.User({
                acno: acno,
                uname: uname,
                psw: psw,
                balance: 0,
                transactions: []
            })
            // save new object ti reflect in db
            newuser.save()
            return {
                message: "user registered successfully",
                status: true,
                statusCode: 200
            }
        }
    }).catch(err => {
        console.log("error", err);
    })
}

// login
login = (acno, psw) => {
    return db.User.findOne({ acno, psw }).then(user => {
        if (user) {
            return {
                message: "login Success",
                status: true,
                statusCode: 200,
                currentUser: user.uname,
                currentAcno: user.acno
            }
        } else {
            return {
                message: "incorrect account number/password",
                status: false,
                statusCode: 401
            }
        }
    })
}

module.exports = {
    register, login
}