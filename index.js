const express = require('express')
const app = express()
const logic = require('./service/logic')
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:4200' }))

app.use(express.json())

// register
app.post('/register', (req, res) => {
    // const { acno, uname, psw } = req.body
    logic.register(req.body.acno, req.body.uname, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)
    }).catch(err => {
        console.log("error", err);
    })
})

// login
app.post('/login', (req, res) => {
    const { acno, psw } = req.body
    logic.login(acno, psw).then(result => {
        res.status(result.statusCode).json(result)
    }).catch(err => {
        console.log("error", err);
    })
})

// app.get('/getData', (req, res) => {
//     console.log(req.body);
//     res.json(req.body)
// })

app.listen(3000, () => {
    console.log('Server started on port 3000');
})